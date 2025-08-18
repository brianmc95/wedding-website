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
    const { error } = await resend.emails.send({
      from: "Megan & Brian <noreply@yourdomain.com>", // Replace with your domain
      to: [data.email],
      subject: "RSVP Confirmation - Megan & Brian's Wedding",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #92400e; text-align: center;">Thank You for Your RSVP!</h1>
          
          <p>Dear ${data.guestName},</p>
          
          <p>Thank you for your RSVP to Megan & Brian's wedding!</p>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Your Response:</h3>
            <p><strong>Attending:</strong> ${data.isAttending ? "Yes" : "No"}</p>
            ${data.plusOneName ? `<p><strong>Plus One:</strong> ${data.plusOneName}</p>` : ""}
            ${data.dietaryRestrictions ? `<p><strong>Dietary Restrictions:</strong> ${data.dietaryRestrictions}</p>` : ""}
            ${data.specialMessage ? `<p><strong>Your Message:</strong> ${data.specialMessage}</p>` : ""}
          </div>
          
          ${
            data.isAttending
              ? `
            <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #065f46; margin-top: 0;">Wedding Details:</h3>
              <p><strong>Date:</strong> Saturday, October 3rd, 2026</p>
              <p><strong>Ceremony:</strong> 1:00 PM at Aula Maxima, UCC</p>
              <p><strong>Reception:</strong> Following ceremony at Fernhill House Hotel & Garden</p>
            </div>
          `
              : ""
          }
          
          <p>We look forward to celebrating with you on October 3rd, 2026!</p>
          
          <p>If you need to make any changes to your RSVP, please contact us directly.</p>
          
          <p style="text-align: center; margin-top: 40px;">
            With love,<br>
            <strong>Megan & Brian</strong>
          </p>
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
