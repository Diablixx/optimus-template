import { supabase } from '../lib/supabase'

export async function setupDatabase() {
  try {
    console.log('Setting up articles table...')
    
    // Create the articles table
    const { error } = await supabase.rpc('create_articles_table')
    
    if (error) {
      console.error('Error creating table:', error.message)
      // Try using raw SQL if RPC doesn't work
      console.log('Trying direct SQL approach...')
      
      const sqlQuery = `
        CREATE TABLE IF NOT EXISTS articles (
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
        
        -- Create RLS policies
        ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
        
        -- Allow read access for published articles
        CREATE POLICY "Articles are viewable by everyone" ON articles
          FOR SELECT USING (published = true);
          
        -- Allow all operations for authenticated users (for now)
        CREATE POLICY "Enable all operations for authenticated users" ON articles
          FOR ALL USING (true);
      `
      
      console.log('Please run this SQL in your Supabase SQL editor:')
      console.log(sqlQuery)
      return false
    }
    
    console.log('Database setup completed successfully!')
    return true
    
  } catch (error) {
    console.error('Database setup failed:', error)
    return false
  }
}

// Run the setup if this file is executed directly
if (require.main === module) {
  setupDatabase()
}