# Security Guide

## 🚨 API Key Security

### Google Maps API Key Setup

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Navigate to**: APIs & Services > Credentials
3. **Find your API key** and click "Edit"
4. **Set Application Restrictions**:
   - Choose "HTTP referrers (web sites)"
   - Add your domains:
     - `your-vercel-domain.vercel.app/*`
     - `your-framer-site.com/*`
     - `localhost:*` (for development)

### Environment Variables

1. **For local development**:
   ```bash
   cp .env.example .env
   # Edit .env with your actual API keys
   ```

2. **For Vercel deployment**:
   - Go to your Vercel project settings
   - Add environment variables:
     - `GOOGLE_MAPS_API_KEY`: Your Google Maps API key
     - `FORMSPREE_ENDPOINT`: Your Formspree endpoint

### Before Going Live

1. **Restrict your Google Maps API key** to specific domains
2. **Remove any hardcoded API keys** from the codebase
3. **Use environment variables** for all sensitive data
4. **Enable billing alerts** in Google Cloud Console

### If Your Key Was Exposed

1. **Immediately disable** the exposed API key
2. **Generate a new API key** with proper restrictions
3. **Update** all deployment environments
4. **Monitor usage** for any unauthorized activity

## Best Practices

- Never commit API keys to version control
- Use domain restrictions on all API keys
- Monitor API usage regularly
- Rotate keys periodically
- Use separate keys for development and production