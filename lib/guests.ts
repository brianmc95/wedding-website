export interface Guest {
  id: string
  firstName: string
  lastName: string
  email?: string
  allowsPlusOne: boolean
  hasResponded: boolean
  isAttending?: boolean
  plusOneName?: string
  dietaryRestrictions?: string
  specialMessage?: string
  responseDate?: Date
}

// Mock guest database - in production this would be a real database
export const guestDatabase: Guest[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Smith",
    allowsPlusOne: true,
    hasResponded: false,
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Johnson",
    allowsPlusOne: false,
    hasResponded: false,
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Brown",
    allowsPlusOne: true,
    hasResponded: false,
  },
  {
    id: "4",
    firstName: "Emma",
    lastName: "Davis",
    allowsPlusOne: false,
    hasResponded: false,
  },
  // Add more guests as needed
]

export function findGuest(firstName: string, lastName: string): Guest | null {
  return (
    guestDatabase.find(
      (guest) =>
        guest.firstName.toLowerCase() === firstName.toLowerCase() &&
        guest.lastName.toLowerCase() === lastName.toLowerCase(),
    ) || null
  )
}

export function updateGuest(guestId: string, updates: Partial<Guest>): boolean {
  const guestIndex = guestDatabase.findIndex((guest) => guest.id === guestId)
  if (guestIndex === -1) return false

  guestDatabase[guestIndex] = { ...guestDatabase[guestIndex], ...updates }
  return true
}
