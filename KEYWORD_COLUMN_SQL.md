# SQL to Add Keyword Column to Articles Table

## Instructions
Copy and paste the following SQL into your Supabase SQL Editor:

```sql
-- Add keyword column to articles table
-- This column will store unique keywords that users enter for article generation
-- instead of full prompts, enabling a more streamlined workflow

ALTER TABLE public.articles
ADD COLUMN IF NOT EXISTS keyword TEXT UNIQUE;

-- Add comment for documentation
COMMENT ON COLUMN public.articles.keyword IS 'Unique keyword used to generate the article. Part of new keyword-based workflow.';

-- Create index for better performance on keyword searches
CREATE INDEX IF NOT EXISTS idx_articles_keyword ON public.articles(keyword);

-- Add a check constraint to ensure keyword is not empty if provided
ALTER TABLE public.articles
ADD CONSTRAINT IF NOT EXISTS chk_keyword_not_empty
CHECK (keyword IS NULL OR length(trim(keyword)) > 0);
```

## Access Supabase SQL Editor
1. Go to https://supabase.com/dashboard/project/ucvxfjoongglzikjlxde/sql
2. Paste the SQL above
3. Click "Run" to execute

## Verification
After running the SQL, you can verify the column was added by running:

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'articles' AND table_schema = 'public'
ORDER BY ordinal_position;
```

## Impact Assessment
- **Non-breaking change**: The column is nullable, so existing records are unaffected
- **TypeScript types**: Already updated in both projects
- **Dashboard UI**: Updated to include keyword input field
- **Database operations**: Updated to include keyword in inserts
- **Unique constraint**: Prevents duplicate keywords (as intended for the workflow)