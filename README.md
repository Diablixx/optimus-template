# OPTIMUS - AI-Powered Content Management System

OPTIMUS is a comprehensive AI-powered content management system consisting of two main applications for automated article generation and publishing.

## 🚀 Project Structure

- **`optimus-template/`** - Public-facing Next.js website (Port 3001)
- **`optimus-saas/`** - Admin dashboard for AI article generation (Port 3002)

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: N8N Cloud + OpenAI GPT-4
- **Styling**: Tailwind CSS
- **Language**: TypeScript/JavaScript
- **Content Language**: French

## 📋 Features

### optimus-template (Public Website)
- 🌐 Public article display
- 📱 Responsive design
- 🔍 SEO optimized
- 📝 Dynamic article pages
- 🎛️ Blog megamenu navigation

### optimus-saas (Admin Dashboard)
- ⚡ Keyword-based AI article generation
- ✏️ Content editor and preview
- 📊 Article management
- 🔄 Publishing workflow
- 🛡️ Unique keyword validation

## 🔧 Installation & Development

### Prerequisites
- Node.js 18+
- Supabase account
- N8N Cloud account
- OpenAI API key

### Environment Variables
Create `.env.local` files in both `optimus-template` and `optimus-saas`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_N8N_WEBHOOK_URL=your_n8n_webhook_url
```

### Development Setup

**Terminal 1 - Public Website:**
```bash
cd optimus-template
npm install
export NEXT_PUBLIC_SUPABASE_URL="your_url"
export NEXT_PUBLIC_SUPABASE_ANON_KEY="your_key"
npm run dev -- -p 3001
```

**Terminal 2 - Admin Dashboard:**
```bash
cd optimus-saas
npm install
export NEXT_PUBLIC_SUPABASE_URL="your_url"
export NEXT_PUBLIC_SUPABASE_ANON_KEY="your_key"
export NEXT_PUBLIC_N8N_WEBHOOK_URL="your_webhook"
npm run dev -- -p 3002
```

## 🗄️ Database Schema

The project uses Supabase with the following main table:

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
  keyword: text (unique) -- For keyword-based workflow
}
```

## 🔄 AI Article Generation Workflow

1. **Keyword Input**: User enters unique keyword
2. **Validation**: Check keyword uniqueness in database
3. **N8N Processing**: Keyword sent to N8N Cloud workflow
4. **OpenAI Generation**: N8N calls OpenAI GPT-4 for content
5. **Database Save**: Generated article saved to Supabase
6. **Auto-Retrieval**: 15-second wait, then auto-populate UI
7. **Publishing**: User can edit and publish article

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Create two projects:
   - `optimus-template` (Root: `optimus-template/`)
   - `optimus-saas` (Root: `optimus-saas/`)
3. Configure environment variables in Vercel dashboard
4. Deploy and get public URLs

### Environment Configuration
- Set all environment variables in Vercel dashboard
- Configure N8N webhooks for production URLs
- Update Supabase CORS settings for new domains

## 📄 Documentation

- **`CLAUDE.md`** - Detailed project documentation and instructions
- **`KEYWORD_COLUMN_SQL.md`** - Database migration instructions
- **N8N Workflows** - JSON files for importing into N8N Cloud

## 🔧 N8N Integration

The project includes pre-configured N8N workflows:
- **Generation Workflow**: `n8n-keyword-workflow-FINAL-FIXED.json`
- **Debug Workflow**: `debug-n8n-webhook-test.json`

Import these into your N8N Cloud instance and configure with your OpenAI API key.

## 🌐 Live URLs (After Deployment)

- **Public Website**: `https://optimus-template-[hash].vercel.app`
- **Admin Dashboard**: `https://optimus-saas-[hash].vercel.app`

## 📝 License

Private project - All rights reserved

## 🤝 Contributing

This is a private repository. For issues or questions, contact the project maintainer.

---

**Last Updated**: December 2024
**Status**: Active Development
**Maintainer**: yakeen