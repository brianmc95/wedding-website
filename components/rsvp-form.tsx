"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { checkGuest, submitRSVP } from "@/app/actions/rsvp"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface GuestInfo {
  id: string
  firstName: string
  lastName: string
  allowsPlusOne: boolean
}

export function RSVPForm() {
  const [step, setStep] = useState<"initial" | "form" | "success">("initial")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [guest, setGuest] = useState<GuestInfo | null>(null)

  // Form data
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [isAttending, setIsAttending] = useState<boolean | null>(null)
  const [hasPlusOne, setHasPlusOne] = useState(false)
  const [plusOneName, setPlusOneName] = useState("")
  const [dietaryRestrictions, setDietaryRestrictions] = useState("")
  const [specialMessage, setSpecialMessage] = useState("")

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !lastName.trim()) return

    setLoading(true)
    setError(null)

    try {
      const result = await checkGuest(firstName.trim(), lastName.trim())

      if (result.success && result.guest) {
        setGuest(result.guest)
        setStep("form")
      } else {
        setError(result.error || "Guest not found")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!guest || !email.trim() || isAttending === null) return

    setLoading(true)
    setError(null)

    try {
      const result = await submitRSVP({
        guestId: guest.id,
        firstName: guest.firstName,
        lastName: guest.lastName,
        email: email.trim(),
        isAttending,
        hasPlusOne: hasPlusOne && guest.allowsPlusOne,
        plusOneName: hasPlusOne && guest.allowsPlusOne ? plusOneName.trim() : undefined,
        dietaryRestrictions: dietaryRestrictions.trim() || undefined,
        specialMessage: specialMessage.trim() || undefined,
      })

      if (result.success) {
        setStep("success")
      } else {
        setError(result.error || "Failed to submit RSVP")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setStep("initial")
    setGuest(null)
    setError(null)
    setFirstName("")
    setLastName("")
    setEmail("")
    setIsAttending(null)
    setHasPlusOne(false)
    setPlusOneName("")
    setDietaryRestrictions("")
    setSpecialMessage("")
  }

  if (step === "success") {
    return (
      <Card className="border-orange-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-amber-900 mb-4">Thank You!</h3>
          <p className="text-gray-700 mb-6">
            Your RSVP has been submitted successfully. A confirmation email has been sent to {email}.
          </p>
          <Button
            onClick={resetForm}
            variant="outline"
            className="border-orange-300 text-amber-700 hover:bg-orange-100 bg-transparent"
          >
            Submit Another RSVP
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (step === "form" && guest) {
    return (
      <Card className="border-orange-200">
        <CardContent className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-serif text-amber-900 mb-2">
              Welcome, {guest.firstName} {guest.lastName}!
            </h3>
            <p className="text-gray-600">Please complete your RSVP below.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          <form onSubmit={handleRSVPSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <Label>Will you be attending? *</Label>
              <Select value={isAttending?.toString() || ""} onValueChange={(value) => setIsAttending(value === "true")}>
                <SelectTrigger>
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes, I'll be there!</SelectItem>
                  <SelectItem value="false">Sorry, can't make it</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {guest.allowsPlusOne && isAttending && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="plusOne"
                    checked={hasPlusOne}
                    onCheckedChange={(checked) => {
                      setHasPlusOne(checked as boolean)
                      if (!checked) setPlusOneName("")
                    }}
                  />
                  <Label htmlFor="plusOne">I will be bringing a plus one</Label>
                </div>

                {hasPlusOne && (
                  <div>
                    <Label htmlFor="plusOneName">Plus One Name</Label>
                    <Input
                      id="plusOneName"
                      value={plusOneName}
                      onChange={(e) => setPlusOneName(e.target.value)}
                      placeholder="Full name of your guest"
                    />
                  </div>
                )}
              </div>
            )}

            {isAttending && (
              <>
                <div>
                  <Label htmlFor="dietary">Dietary Restrictions</Label>
                  <Textarea
                    id="dietary"
                    value={dietaryRestrictions}
                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                    placeholder="Please let us know about any dietary restrictions or allergies"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Special Message</Label>
                  <Textarea
                    id="message"
                    value={specialMessage}
                    onChange={(e) => setSpecialMessage(e.target.value)}
                    placeholder="Share your excitement or any special message for the couple!"
                    rows={3}
                  />
                </div>
              </>
            )}

            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep("initial")}
                className="border-orange-300 text-amber-700 hover:bg-orange-100"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={loading || !email.trim() || isAttending === null}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit RSVP"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-orange-200">
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-serif text-amber-900 mb-2">Find Your Invitation</h3>
          <p className="text-gray-600">Please enter your name exactly as it appears on your invitation.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        <form onSubmit={handleInitialSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your last name"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading || !firstName.trim() || !lastName.trim()}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Checking...
              </>
            ) : (
              "Find My Invitation"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
