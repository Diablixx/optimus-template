import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Article = {
  id: number
  title: string
  content: string
  slug: string
  author: string
  category: string
  excerpt: string
  meta_description?: string
  read_time: string
  published: boolean
  created_at: string
  updated_at: string
}