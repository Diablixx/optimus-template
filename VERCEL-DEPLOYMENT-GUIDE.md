# OPTIMUS Vercel Deployment Guide

## 🚀 Complete Step-by-Step Deployment

### Prerequisites
- GitHub repository: `https://github.com/Diablixx/OPTIMUS-V1-testprivate-.git`
- Vercel account (free tier is sufficient)
- Supabase project configured
- N8N Cloud workflows set up

## 📋 Phase 1: Vercel Account Setup

1. **Sign up for Vercel**: Go to [vercel.com](https://vercel.com)
2. **Connect GitHub**: Authorize Vercel to access your GitHub repositories
3. **Import Repository**: Click "New Project" → Import `OPTIMUS-V1-testprivate-`

## 🌐 Phase 2: Deploy optimus-template (Public Website)

### Project Configuration
```
Project Name: optimus-template
Framework Preset: Next.js
Root Directory: optimus-template
Install Command: npm install
Build Command: npm run build
Output Directory: .next (default)
```

### Environment Variables
Add in Vercel dashboard → Settings → Environment Variables:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ucvxfjoongglzikjlxde.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjdnhmam9vbmdnbHppa2pseGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDY4OTksImV4cCI6MjA2NTcyMjg5OX0.q_xtNL2LIvOXbMH8atFM5bdez4GpwvYcsI-zjRF71OY
```

### Deploy Steps
1. Click "Deploy" - Vercel will build and deploy
2. Wait for deployment to complete (~2-3 minutes)
3. Get public URL: `https://optimus-template-[hash].vercel.app`

## 🔧 Phase 3: Deploy optimus-saas (Admin Dashboard)

### Project Configuration
```
Project Name: optimus-saas
Framework Preset: Next.js
Root Directory: optimus-saas
Install Command: npm install
Build Command: npm run build
Output Directory: .next (default)
```

### Environment Variables
Add in Vercel dashboard → Settings → Environment Variables:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ucvxfjoongglzikjlxde.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjdnhmam9vbmdnbHppa2pseGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDY4OTksImV4cCI6MjA2NTcyMjg5OX0.q_xtNL2LIvOXbMH8atFM5bdez4GpwvYcsI-zjRF71OY
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://n8niacloud.khapeo.com/webhook-test/ai-article-generation
```

### Deploy Steps
1. Click "Deploy" - Vercel will build and deploy
2. Wait for deployment to complete (~2-3 minutes)
3. Get private URL: `https://optimus-saas-[hash].vercel.app`

## 🔗 Phase 4: Update N8N Webhooks for Production

### Update N8N Cloud Workflows
1. Open your N8N Cloud dashboard
2. Edit the article generation workflow
3. Update webhook URLs to production:
   - **Generation Webhook**: Keep existing test URL for development
   - **Publishing Webhook**: Update to production domain (when implemented)

### CORS Configuration
Update Supabase project settings:
1. Go to Supabase Dashboard → Settings → API
2. Add production domains to CORS origins:
   ```
   https://optimus-template-[hash].vercel.app
   https://optimus-saas-[hash].vercel.app
   ```

## 🧪 Phase 5: Testing Production Deployment

### Test Public Website (optimus-template)
```
✅ Visit: https://optimus-template-[hash].vercel.app
✅ Check: Articles load in megamenu
✅ Verify: Individual article pages work
✅ Confirm: No console errors
```

### Test Admin Dashboard (optimus-saas)
```
✅ Visit: https://optimus-saas-[hash].vercel.app
✅ Test: Keyword generation workflow
✅ Verify: 15-second retrieval mechanism
✅ Check: Supabase connection
✅ Confirm: N8N webhook communication
```

## 🔄 Phase 6: Automatic Deployments

### Git Integration (Already Configured)
- **Automatic**: Push to `master` branch triggers deployment
- **Preview**: Pull requests create preview deployments
- **Rollback**: Previous deployments available in dashboard

### Deployment Commands
```bash
# Deploy new changes
git add .
git commit -m "Update features"
git push origin master
# Vercel automatically deploys both projects
```

## 📊 Monitoring & Analytics

### Available Metrics
- **Performance**: Page load times, Core Web Vitals
- **Usage**: Visitor analytics, page views
- **Errors**: Runtime errors, build failures
- **Functions**: Edge function performance

### Access Logs
- Vercel Dashboard → Functions → View logs
- Real-time monitoring of API routes
- Error tracking and debugging

## 🛠️ Production Configuration

### Domain Setup (Optional)
1. Purchase custom domain
2. Vercel → Settings → Domains → Add domain
3. Configure DNS records
4. Update N8N and Supabase settings

### Performance Optimization
```javascript
// next.config.ts - Already configured
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  }
}
```

## 🔒 Security Considerations

### Environment Variables
- ✅ All secrets stored in Vercel environment variables
- ✅ No sensitive data in repository
- ✅ Separate staging/production environments possible

### Access Control
- **optimus-template**: Public access (intended)
- **optimus-saas**: Add authentication for production use
- **Database**: Supabase RLS policies protect data

## 📈 Expected Results

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### Scalability
- **Traffic**: Handles thousands of concurrent users
- **Geographic**: Global CDN distribution
- **Reliability**: 99.9% uptime SLA

## 🆘 Troubleshooting Common Issues

### Build Failures
```bash
# Clear Vercel build cache
# Vercel Dashboard → Settings → General → Clear Build Cache
```

### Environment Variable Issues
```bash
# Verify in Vercel Dashboard → Settings → Environment Variables
# Ensure all variables are set for Production environment
```

### CORS Errors
```bash
# Update Supabase CORS settings
# Add Vercel domains to allowed origins
```

### 404 Errors on Article Pages
```bash
# Check if article pages exist in src/app/articles/
# Verify Next.js dynamic routing is working
# Check browser console for client-side errors
```

## ✅ Success Checklist

- [ ] Repository pushed to GitHub successfully
- [ ] optimus-template deployed to Vercel
- [ ] optimus-saas deployed to Vercel
- [ ] Environment variables configured
- [ ] Public website loads correctly
- [ ] Admin dashboard functions properly
- [ ] Article generation workflow works
- [ ] Supabase connectivity verified
- [ ] N8N webhooks responding
- [ ] No console errors in production

## 🎯 Final URLs

After successful deployment:
```
🌐 Public Website: https://optimus-template-[hash].vercel.app
🔧 Admin Dashboard: https://optimus-saas-[hash].vercel.app
📚 GitHub Repository: https://github.com/Diablixx/OPTIMUS-V1-testprivate-.git
```

---

**Next Steps**: Once deployed, test the complete workflow from keyword input to article publication, and consider implementing the N8N publishing workflow for full automation.

**Generated with Claude Code**
**Last Updated**: December 2024