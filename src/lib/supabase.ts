import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  read_time: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  meta_description: string;
  author: string;
  category: string;
  keyword?: string;
}