"use server"

import { findGuest, updateGuest } from "@/lib/guests"
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
  const guest = findGuest(firstName, lastName)

  if (!guest) {
    return {
      success: false,
      error: "Guest not found. Please check the spelling of your name or contact the couple.",
    }
  }

  if (guest.hasResponded) {
    return {
      success: false,
      error: "You have already submitted your RSVP. If you need to make changes, please contact the couple directly.",
    }
  }

  return {
    success: true,
    guest: {
      id: guest.id,
      firstName: guest.firstName,
      lastName: guest.lastName,
      allowsPlusOne: guest.allowsPlusOne,
    },
  }
}

export async function submitRSVP(data: RSVPFormData & { guestId: string }) {
  try {
    // Update guest in database
    const updateSuccess = updateGuest(data.guestId, {
      email: data.email,
      isAttending: data.isAttending,
      plusOneName: data.hasPlusOne ? data.plusOneName : undefined,
      dietaryRestrictions: data.dietaryRestrictions,
      specialMessage: data.specialMessage,
      hasResponded: true,
      responseDate: new Date(),
    })

    if (!updateSuccess) {
      return {
        success: false,
        error: "Failed to save your RSVP. Please try again.",
      }
    }

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
    }

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
