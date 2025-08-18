import { supabase, type Guest } from "./supabase"

export async function findGuest(firstName: string, lastName: string): Promise<Guest | null> {
  try {
    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .ilike("first_name", firstName.trim())
      .ilike("last_name", lastName.trim())
      .single()

    if (error) {
      console.error("Error finding guest:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Database error:", error)
    return null
  }
}

export async function updateGuest(guestId: string, updates: Partial<Guest>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("guests")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", guestId)

    if (error) {
      console.error("Error updating guest:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Database error:", error)
    return false
  }
}

export async function getAllGuests(): Promise<Guest[]> {
  try {
    const { data, error } = await supabase.from("guests").select("*").order("first_name", { ascending: true })

    if (error) {
      console.error("Error fetching guests:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Database error:", error)
    return []
  }
}

export async function addGuest(guest: Omit<Guest, "id" | "created_at" | "updated_at">): Promise<Guest | null> {
  try {
    const { data, error } = await supabase.from("guests").insert([guest]).select().single()

    if (error) {
      console.error("Error adding guest:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Database error:", error)
    return null
  }
}

export async function deleteGuest(guestId: string): Promise<boolean> {
  try {
    const { error } = await supabase.from("guests").delete().eq("id", guestId)

    if (error) {
      console.error("Error deleting guest:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Database error:", error)
    return false
  }
}
