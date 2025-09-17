# N8N Cloud AI Article Generation - Setup Guide

This guide will help you set up the complete cloud N8N integration for AI article generation in your Optimus SaaS application.

## 📋 Prerequisites

- N8N Cloud account (accessible at https://n8niacloud.khapeo.com/)
- OpenAI API key
- Optimus SaaS application running

## 🚀 Step-by-Step Setup

### Step 1: Import the N8N Workflow

1. **Access N8N Cloud Dashboard**
   - Navigate to https://n8niacloud.khapeo.com/
   - Log in to your account

2. **Import the Workflow**
   - Click on **"Workflows"** in the sidebar
   - Click **"+ Add Workflow"**
   - Select **"Import from file"**
   - Upload the file: `n8n-workflow-cloud-ai-article-generation.json`
   - Click **"Import"**

3. **Verify Import**
   - You should see a workflow named **"Cloud AI Article Generation"**
   - The workflow contains 7 nodes: Webhook, Validate Input, OpenAI Chat, Process AI Response, Error handlers, and Response

### Step 2: Configure OpenAI API Credentials

1. **Add OpenAI Credentials**
   - In the workflow editor, click on the **"OpenAI Chat"** node
   - Click on **"Credentials"** dropdown
   - Select **"+ Create New"**
   - Choose **"OpenAI API"**

2. **Enter API Details**
   ```
   Credential Name: OpenAI API
   API Key: [Your OpenAI API key]
   ```
   - Click **"Save"**

3. **Test Connection**
   - Click **"Test"** to verify the API key works
   - You should see a green checkmark

### Step 3: Activate the Workflow

1. **Enable the Workflow**
   - In the workflow editor, toggle the **"Active"** switch in the top right
   - The workflow status should change to **"Active"**

2. **Get the Webhook URL**
   - Click on the **"Webhook"** node
   - Copy the **"Production URL"** (should look like):
   ```
   https://n8niacloud.khapeo.com/webhook/ai-article-generation
   ```

### Step 4: Update SaaS Configuration

1. **Update Environment Variables**
   - Open `/Users/yakeen/Desktop/OPTIMUS/optimus-saas/.env.local`
   - Replace the N8N webhook URL:
   ```env
   NEXT_PUBLIC_N8N_WEBHOOK_URL=https://n8niacloud.khapeo.com/webhook/ai-article-generation
   ```
   - **Important**: Use the exact URL from Step 3

2. **Restart Development Server**
   ```bash
   cd /Users/yakeen/Desktop/OPTIMUS/optimus-saas
   npm run dev
   ```

### Step 5: Test the Integration

1. **Test Article Generation**
   - Open your SaaS application (http://localhost:3000)
   - Go to the "Générer l'article" section
   - Enter a test prompt in French:
   ```
   Rédigez un article sur les meilleures pratiques de marketing digital pour les petites entreprises en 2024
   ```
   - Click **"✨ Générer l'article"**

2. **Expected Behavior**
   - Status message: "Génération de l'article en cours via N8N Cloud..."
   - After 10-30 seconds: Success message with word count
   - Article title and content should be populated
   - Content should be in French, 500-1000 words

## 🔧 Workflow Details

### Input Format
```json
{
  "prompt": "Your article prompt in French"
}
```

### Output Format (Success)
```json
{
  "success": true,
  "title": "Article Title (max 60 chars)",
  "content": "Full article content in markdown",
  "error": null,
  "timestamp": "2024-09-15T12:00:00.000Z",
  "wordCount": 750,
  "characterCount": 4500
}
```

### Output Format (Error)
```json
{
  "success": false,
  "title": "",
  "content": "",
  "error": "Error description",
  "timestamp": "2024-09-15T12:00:00.000Z"
}
```

## 🛠️ Troubleshooting

### Common Issues and Solutions

#### 1. "N8N_WEBHOOK_URL not configured"
**Problem**: Environment variable not set correctly
**Solution**:
- Check `.env.local` file has the correct webhook URL
- Restart the Next.js development server
- Ensure the URL starts with `https://`

#### 2. "Webhook N8N introuvable (404)"
**Problem**: Workflow not activated or wrong URL
**Solution**:
- Verify the workflow is **Active** in N8N Cloud
- Check the webhook URL is copied correctly
- Ensure the webhook path is `/ai-article-generation`

#### 3. "Erreur serveur N8N (500)"
**Problem**: OpenAI API configuration issue
**Solution**:
- Verify OpenAI API key is valid and has credits
- Check the credentials are properly saved in N8N
- Test the OpenAI node directly in N8N

#### 4. "Impossible de contacter N8N Cloud"
**Problem**: Network connectivity issue
**Solution**:
- Check internet connection
- Verify N8N Cloud URL is accessible
- Try the webhook URL directly in browser (should return method not allowed)

### Testing the Webhook Directly

You can test the webhook independently using curl:

```bash
curl -X POST https://n8niacloud.khapeo.com/webhook/ai-article-generation \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Rédigez un article court sur l'\''intelligence artificielle"}'
```

Expected response:
```json
{
  "success": true,
  "title": "L'Intelligence Artificielle : Révolution du 21e Siècle",
  "content": "# L'Intelligence Artificielle : Révolution du 21e Siècle\n\n...",
  "error": null,
  "wordCount": 650
}
```

## 📊 Monitoring and Maintenance

### N8N Cloud Monitoring
1. **Execution History**
   - Go to "Executions" in N8N Cloud
   - Monitor successful/failed runs
   - Check execution times

2. **Error Logs**
   - Failed executions show detailed error messages
   - Check OpenAI API usage and quotas
   - Monitor webhook call frequency

### SaaS Application Monitoring
1. **Browser Console**
   - Check for JavaScript errors
   - Monitor network requests to N8N
   - Verify proper error handling

2. **Performance**
   - Article generation typically takes 10-30 seconds
   - Large prompts may take longer
   - Monitor API response times

## 🔐 Security Best Practices

1. **API Key Security**
   - Keep OpenAI API key secure in N8N credentials
   - Never expose API keys in frontend code
   - Regularly rotate API keys

2. **Webhook Security**
   - Webhook URL should not be publicly discoverable
   - Consider adding authentication headers if needed
   - Monitor for unusual usage patterns

3. **Rate Limiting**
   - OpenAI has rate limits per API key
   - Monitor usage to avoid hitting limits
   - Consider implementing client-side rate limiting

## 📈 Scaling and Optimization

### Performance Optimization
1. **Caching**: Consider caching common article types
2. **Parallel Processing**: N8N can handle multiple concurrent requests
3. **Content Optimization**: Fine-tune prompts for better outputs

### Cost Management
1. **Monitor OpenAI Usage**: Track API costs in OpenAI dashboard
2. **Optimize Prompts**: Shorter, more specific prompts reduce costs
3. **Model Selection**: Use appropriate GPT model for your needs

## 🆘 Support

If you encounter issues:

1. **Check N8N Cloud Status**: Verify service is operational
2. **Review Logs**: Check both N8N and browser console logs
3. **Test Components**: Test webhook, OpenAI API, and SaaS separately
4. **Documentation**: Refer to N8N and OpenAI documentation

---

## ✅ Checklist

- [ ] N8N workflow imported successfully
- [ ] OpenAI API credentials configured and tested
- [ ] Workflow activated in N8N Cloud
- [ ] Webhook URL copied and configured in `.env.local`
- [ ] SaaS application restarted
- [ ] End-to-end test completed successfully
- [ ] Error handling verified
- [ ] Monitoring set up

**Setup Complete!** Your Optimus SaaS now has cloud-based AI article generation powered by N8N and OpenAI.