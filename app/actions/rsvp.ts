"use server"

import { findGuest, updateGuest } from "@/lib/database"
import { sendRSVPConfirmation } from "@/lib/email"

export interface RSVPFormData {
  firstName: string
  lastName: string
  email: string
  isAttending: boolean
  hasPlusOne: boolean
  plusOneName?: string
  dietaryRestrictions?: string
  specialMessage?: string
}

export async function checkGuest(firstName: string, lastName: string) {
  try {
    console.log(`Checking guest: ${firstName} ${lastName}`)
    const guest = await findGuest(firstName, lastName)

    if (!guest) {
      console.log("Guest not found")
      return {
        success: false,
        error: "Guest not found. Please check the spelling of your name or contact the couple.",
      }
    }

    if (guest.has_responded) {
      console.log("Guest has already responded")
      return {
        success: false,
        error: "You have already submitted your RSVP. If you need to make changes, please contact the couple directly.",
      }
    }

    console.log("Guest found and can respond")
    return {
      success: true,
      guest: {
        id: guest.id,
        firstName: guest.first_name,
        lastName: guest.last_name,
        allowsPlusOne: guest.allows_plus_one,
      },
    }
  } catch (error) {
    console.error("Error checking guest:", error)
    return {
      success: false,
      error: "An error occurred while checking your invitation. Please try again.",
    }
  }
}

export async function submitRSVP(data: RSVPFormData & { guestId: string }) {
  try {
    console.log(`Submitting RSVP for guest ID: ${data.guestId}`)

    // Update guest in database
    const updateSuccess = await updateGuest(data.guestId, {
      email: data.email,
      is_attending: data.isAttending,
      plus_one_name: data.hasPlusOne ? data.plusOneName : null,
      dietary_restrictions: data.dietaryRestrictions || null,
      special_message: data.specialMessage || null,
      has_responded: true,
      response_date: new Date().toISOString(),
    })

    if (!updateSuccess) {
      console.error("Failed to update guest in database")
      return {
        success: false,
        error: "Failed to save your RSVP. Please try again.",
      }
    }

    console.log("Guest updated successfully, sending email...")

    // Send confirmation email
    const emailSuccess = await sendRSVPConfirmation({
      guestName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      isAttending: data.isAttending,
      plusOneName: data.hasPlusOne ? data.plusOneName : undefined,
      dietaryRestrictions: data.dietaryRestrictions,
      specialMessage: data.specialMessage,
    })

    if (!emailSuccess) {
      console.warn("Failed to send confirmation email, but RSVP was saved")
      // Still return success since the RSVP was saved
      return {
        success: true,
        message: "Thank you for your RSVP! Your response has been saved (email confirmation may be delayed).",
      }
    }

    console.log("RSVP completed successfully")
    return {
      success: true,
      message: "Thank you for your RSVP! A confirmation email has been sent.",
    }
  } catch (error) {
    console.error("RSVP submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
