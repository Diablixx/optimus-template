-- Add keyword column to articles table
-- This column will store unique keywords that users enter for article generation
-- instead of full prompts, enabling a more streamlined workflow

ALTER TABLE public.articles
ADD COLUMN keyword TEXT UNIQUE;

-- Add comment for documentation
COMMENT ON COLUMN public.articles.keyword IS 'Unique keyword used to generate the article. Part of new keyword-based workflow.';

-- Create index for better performance on keyword searches
CREATE INDEX IF NOT EXISTS idx_articles_keyword ON public.articles(keyword);

-- Update RLS policies to include keyword column
-- (Current policies should already cover this as they use wildcards)

-- Optional: Add a check constraint to ensure keyword is not empty if provided
ALTER TABLE public.articles
ADD CONSTRAINT chk_keyword_not_empty
CHECK (keyword IS NULL OR length(trim(keyword)) > 0);