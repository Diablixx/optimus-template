import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    console.log('Setting up articles table in Supabase...')
    
    // Test connection first
    const { data: connectionTest, error: connectionError } = await supabase
      .from('articles')
      .select('count', { count: 'exact', head: true })
    
    if (connectionError && connectionError.code === '42P01') {
      // Table doesn't exist, we need to create it
      console.log('Table does not exist. Please create it manually in Supabase SQL Editor.')
      
      const sqlQuery = `
-- Create articles table
CREATE TABLE IF NOT EXISTS public.articles (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    author TEXT DEFAULT 'Optimus SaaS',
    category TEXT DEFAULT 'Marketing',
    excerpt TEXT,
    meta_description TEXT,
    read_time TEXT,
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Articles are viewable by everyone" ON public.articles
    FOR SELECT USING (published = true);

CREATE POLICY "Enable all operations for service role" ON public.articles
    FOR ALL USING (true);

-- Grant permissions
GRANT ALL ON public.articles TO anon;
GRANT ALL ON public.articles TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.articles_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE public.articles_id_seq TO authenticated;
      `
      
      return NextResponse.json({ 
        success: false,
        message: 'Table does not exist. Please run the following SQL in your Supabase SQL Editor:',
        sql: sqlQuery
      })
    }
    
    if (connectionError) {
      throw connectionError
    }
    
    console.log('Connection successful! Table exists.')
    return NextResponse.json({ 
      success: true,
      message: 'Database connection successful! Articles table is ready.',
      count: connectionTest
    })
    
  } catch (error: any) {
    console.error('Database setup error:', error)
    return NextResponse.json({ 
      success: false,
      error: error.message,
      details: error
    }, { status: 500 })
  }
}