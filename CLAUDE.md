# OPTIMUS Project Documentation

## Project Overview

The OPTIMUS project is a comprehensive AI-powered content management system consisting of two main applications:

- **optimus-template** (localhost:3001) - Public-facing Next.js website with article display
- **optimus-saas** (localhost:3002) - Admin dashboard for AI article generation and management

### Core Architecture
- **Next.js 15** with App Router
- **Supabase** database for article storage and management
- **N8N Cloud** + **OpenAI GPT-4** for AI article generation
- **Tailwind CSS** for styling
- **French language** content focus

## Critical User Instructions (MUST RETAIN)

### Navigation Requirements
- ✅ **REMOVED**: "Blog Principal" button and page
- ✅ **REMOVED**: "Tous les Articles" button and page
- ✅ **KEEP**: Individual article access via megamenu
- ❌ **DO NOT** recreate blog/articles navigation pages

### User Communication Style
- User wants **"ultrathink"** approach - comprehensive problem-solving using all available resources
- Keep responses **concise (4 lines max)** unless detail explicitly requested
- **Direct answers** without unnecessary preamble or explanation
- Be **proactive** with appropriate tools (TodoWrite, Task agents, parallel operations)

### Text Encoding Standards
- **French apostrophes**: Use proper escaping (`l\'article` in JS strings, `l'article` in display)
- **NO HTML entities**: Convert `&apos;` to proper apostrophes
- **Example**: "Générer l'article" NOT "Générer l&apos;article"

## Technical Configuration

### Environment Variables (CRITICAL)
```bash
# Required for both projects
NEXT_PUBLIC_SUPABASE_URL="https://ucvxfjoongglzikjlxde.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjdnhmam9vbmdnbHppa2pseGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDY4OTksImV4cCI6MjA2NTcyMjg5OX0.q_xtNL2LIvOXbMH8atFM5bdez4GpwvYcsI-zjRF71OY"

# For optimus-saas only - NEW KEYWORD-BASED WORKFLOW
NEXT_PUBLIC_N8N_WEBHOOK_URL="[N8N Generation webhook URL]"
NEXT_PUBLIC_N8N_PUBLISH_WEBHOOK_URL="[N8N Publication webhook URL]"
```

### Port Assignments
- **optimus-template**: localhost:3001
- **optimus-saas**: localhost:3002

### Development Commands
```bash
# Start with proper environment variables
cd /Users/yakeen/Desktop/OPTIMUS/optimus-template
export NEXT_PUBLIC_SUPABASE_URL="https://ucvxfjoongglzikjlxde.supabase.co"
export NEXT_PUBLIC_SUPABASE_ANON_KEY="[key]"
npm run dev -- -p 3001

cd /Users/yakeen/Desktop/OPTIMUS/optimus-saas
export NEXT_PUBLIC_SUPABASE_URL="https://ucvxfjoongglzikjlxde.supabase.co"
export NEXT_PUBLIC_SUPABASE_ANON_KEY="[key]"
npm run dev -- -p 3002
```

## Common Issues & Solutions

### 1. "Erreur inattendue" in Blog Megamenu
**Cause**: Missing or incorrect Supabase environment variables
**Solution**:
- Kill conflicting dev servers: `lsof -ti:3001 | xargs kill -9`
- Clear build cache: `rm -rf .next`
- Restart with proper environment variables

### 2. Build Errors with Article Pages
**Causes & Solutions**:
- **"Unterminated string constant"**: Multi-line metadata descriptions
  - Fix: Convert to single-line strings
- **"Identifier cannot follow number"**: Function names starting with numbers
  - Fix: Use valid JavaScript identifiers (`5ConseilsPage` → `CinqConseilsPage`)
- **Unescaped quotes**: Single quotes in single-quoted JS strings
  - Fix: Use proper escaping (`l\'article`)

### 3. Conflicting Dev Servers
**Symptoms**: Multiple servers running on same port, environment variable conflicts
**Solution**:
```bash
# Kill all Node processes
pkill -f "node.*next"
# Or specific ports
lsof -ti:3001 | xargs kill -9
lsof -ti:3002 | xargs kill -9
```

### 4. Build Cache Issues
**When to clear**: After environment variable changes, syntax fixes, major updates
```bash
rm -rf .next
npm run dev
```

## File Structure & Code Patterns

### Article Page Structure
```typescript
// src/app/articles/[slug]/page.tsx
export const metadata = {
  title: 'Article Title | Optimus',
  description: 'Single line description without newlines...',
};

export default function ValidJavaScriptFunctionName() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Semantic HTML structure */}
        <h1>Title</h1>
        <h2>Section Headers</h2>
        <p>Paragraphs</p>
        <ul><li>Lists</li></ul>
      </div>
    </Layout>
  );
}
```

### French Text Handling
```typescript
// ✅ Correct: Escaped apostrophes in JS strings
message: 'Veuillez saisir un prompt pour générer l\'article.'

// ✅ Correct: Proper display text
'✨ Générer l\'article'

// ❌ Wrong: HTML entities
message: 'Veuillez saisir un prompt pour générer l&apos;article.'
```

### Navigation Components
- **BlogMegaMenu**: Shows individual articles only, NO "Voir tous" links
- **Header**: NO /blog or /articles links in mobile nav
- **Footer**: NO "Blog" or "Articles" links in Ressources section

## AI Article Generation Workflow - KEYWORD-BASED (NEW)

### optimus-saas Dashboard Flow (Updated September 2024)
**GENERATION WORKFLOW:**
1. **User Input**: Unique keyword (no longer full prompts)
2. **Keyword Validation**: Check uniqueness in Supabase before proceeding
3. **N8N Generation**: Keyword → N8N Generation webhook → OpenAI GPT-4 → Save to Supabase
4. **15-Second Wait**: Frontend waits for N8N to complete generation and save
5. **Auto-Retrieval**: Search Supabase by keyword and auto-populate title/content
6. **Content Editor**: User can edit title/content before publishing

**PUBLICATION WORKFLOW:**
1. **User Edits**: Modify retrieved article as needed
2. **N8N Publication**: Article data → N8N Publication webhook → Supabase + optimus-template page creation
3. **Dual Save**: Both Supabase database update AND Next.js page generation

### Supabase Article Schema (UPDATED)
```sql
articles {
  id: uuid (primary key)
  title: text
  content: text
  slug: text (unique)
  excerpt: text
  read_time: text
  published: boolean
  created_at: timestamp
  meta_description: text
  author: text
  category: text
  keyword: text (UNIQUE) -- NEW: For keyword-based workflow
}
```

### Key Changes from Old Workflow
- **INPUT**: Keyword instead of full prompt description
- **GENERATION**: N8N saves directly to Supabase (not just returns data)
- **RETRIEVAL**: 15-second delay + automatic search by keyword
- **PUBLICATION**: Separate N8N webhook for publishing workflow
- **UNIQUENESS**: Keywords must be unique to prevent duplicates

### Required SQL for New Workflow
**IMPORTANT**: Must be run in Supabase SQL Editor before using new workflow
```sql
-- Add keyword column to articles table
ALTER TABLE public.articles
ADD COLUMN IF NOT EXISTS keyword TEXT UNIQUE;

-- Add comment for documentation
COMMENT ON COLUMN public.articles.keyword IS 'Unique keyword used to generate the article. Part of new keyword-based workflow.';

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_articles_keyword ON public.articles(keyword);

-- Add constraint to ensure keyword is not empty if provided
ALTER TABLE public.articles
ADD CONSTRAINT IF NOT EXISTS chk_keyword_not_empty
CHECK (keyword IS NULL OR length(trim(keyword)) > 0);
```

## Development Workflow Best Practices

### 1. Task Management
- **ALWAYS** use TodoWrite for multi-step tasks
- Mark tasks completed immediately after finishing
- Keep only one task "in_progress" at a time

### 2. Debugging Approach
- Run bash commands in parallel when possible
- Check server outputs with BashOutput tool
- Use curl for testing API endpoints
- Verify environment variables are loaded correctly

### 3. Content Management
- Use Task agent for complex content restructuring
- Maintain semantic HTML structure in articles
- Ensure proper French character encoding
- Test article display in both projects

### 4. Code Quality
- Follow existing code patterns and conventions
- Use proper TypeScript/JavaScript syntax
- Maintain Tailwind CSS styling consistency
- Escape special characters appropriately

## Deployment Considerations

### Environment Setup
- Ensure `.env.local` files contain correct Supabase credentials
- Verify N8N webhook URL is accessible and active
- Test article generation workflow end-to-end
- Confirm both servers start without conflicts

### Monitoring
- Watch for console errors in browser dev tools
- Monitor Supabase database connection status
- Verify article creation and publishing workflow
- Test megamenu article loading

## Key File Locations

### Configuration
- `/Users/yakeen/Desktop/OPTIMUS/optimus-template/.env.local`
- `/Users/yakeen/Desktop/OPTIMUS/optimus-saas/.env.local`

### Core Components
- `optimus-template/src/components/layout/BlogMegaMenu.tsx`
- `optimus-template/src/components/layout/Header.tsx`
- `optimus-template/src/components/layout/Footer.tsx`
- `optimus-template/src/hooks/useArticles.ts`

### Article Pages
- `optimus-template/src/app/articles/[slug]/page.tsx` (pattern)
- Individual article directories under `/articles/`

### SaaS Dashboard
- `optimus-saas/src/app/page.tsx` (main dashboard)
- `optimus-saas/src/lib/supabase.ts` (database client)

## Troubleshooting Checklist

1. **Environment Variables**: Are they loaded correctly?
2. **Dev Servers**: Any port conflicts or multiple instances?
3. **Build Cache**: Clear `.next` if needed
4. **Database Connection**: Can Supabase be reached?
5. **Article Syntax**: Valid JavaScript function names and metadata?
6. **French Text**: Properly escaped apostrophes?
7. **Navigation**: Removed unwanted blog links?

---

**Last Updated**: December 2024
**Project Status**: Active Development
**Main Developer**: yakeen