import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface RSVPEmailData {
  guestName: string
  email: string
  isAttending: boolean
  plusOneName?: string
  dietaryRestrictions?: string
  specialMessage?: string
}

export async function sendRSVPConfirmation(data: RSVPEmailData): Promise<boolean> {
  try {
    // Use Resend's test domain for now - you can change this later when you have your own domain
    const fromEmail =
      process.env.NODE_ENV === "production"
        ? "Megan & Brian <noreply@resend.dev>" // Resend's test domain
        : "Megan & Brian <onboarding@resend.dev>" // Development

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [data.email],
      subject: "RSVP Confirmation - Megan & Brian's Wedding",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #92400e; margin: 0;">Thank You for Your RSVP!</h1>
            <div style="width: 60px; height: 3px; background-color: #fbbf24; margin: 10px auto;"></div>
          </div>
          
          <p style="font-size: 16px; color: #374151;">Dear ${data.guestName},</p>
          
          <p style="font-size: 16px; color: #374151; line-height: 1.6;">
            Thank you for your RSVP to Megan & Brian's wedding!
          </p>
          
          <div style="background-color: #fef3c7; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #f59e0b;">
            <h3 style="color: #92400e; margin-top: 0; margin-bottom: 15px;">Your Response:</h3>
            <p style="margin: 8px 0; color: #374151;"><strong>Attending:</strong> ${data.isAttending ? "✅ Yes, I'll be there!" : "❌ Sorry, can't make it"}</p>
            ${data.plusOneName ? `<p style="margin: 8px 0; color: #374151;"><strong>Plus One:</strong> ${data.plusOneName}</p>` : ""}
            ${data.dietaryRestrictions ? `<p style="margin: 8px 0; color: #374151;"><strong>Dietary Restrictions:</strong> ${data.dietaryRestrictions}</p>` : ""}
            ${data.specialMessage ? `<p style="margin: 8px 0; color: #374151;"><strong>Your Message:</strong> <em>"${data.specialMessage}"</em></p>` : ""}
          </div>
          
          ${
            data.isAttending
              ? `
            <div style="background-color: #ecfdf5; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #10b981;">
              <h3 style="color: #065f46; margin-top: 0; margin-bottom: 15px;">Wedding Details:</h3>
              <p style="margin: 8px 0; color: #374151;"><strong>📅 Date:</strong> Saturday, October 3rd, 2026</p>
              <p style="margin: 8px 0; color: #374151;"><strong>⛪ Ceremony:</strong> 1:00 PM at Aula Maxima, UCC</p>
              <p style="margin: 8px 0; color: #374151;"><strong>🎉 Reception:</strong> Following ceremony at Fernhill House Hotel & Garden</p>
              <p style="margin: 15px 0 8px 0; color: #065f46; font-size: 14px;"><strong>What to expect:</strong></p>
              <ul style="color: #374151; font-size: 14px; margin: 0; padding-left: 20px;">
                <li>Ceremony starts promptly at 1:00 PM</li>
                <li>Photos and cocktail hour following ceremony</li>
                <li>Dinner and dancing at Fernhill House</li>
                <li>Transportation will be provided between venues</li>
              </ul>
            </div>
          `
              : `
            <div style="background-color: #fef2f2; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #ef4444;">
              <p style="color: #991b1b; margin: 0;">We're sorry you can't make it, but we understand! We'll miss you on our special day. ❤️</p>
            </div>
          `
          }
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              <strong>Need to make changes?</strong> Please contact us directly at brianmccarthy95@email.com or 087 962 4138
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0;">With love,</p>
            <p style="color: #92400e; font-size: 18px; font-weight: bold; margin: 5px 0;">Megan & Brian</p>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">💕 October 3rd, 2026 💕</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Email service error:", error)
    return false
  }
}
