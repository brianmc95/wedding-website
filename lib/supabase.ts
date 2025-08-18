import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Guest {
  id: string
  first_name: string
  last_name: string
  email?: string
  allows_plus_one: boolean
  has_responded: boolean
  is_attending?: boolean
  plus_one_name?: string
  dietary_restrictions?: string
  special_message?: string
  response_date?: string
  created_at: string
  updated_at: string
}
