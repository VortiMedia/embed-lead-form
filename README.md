# Embed Lead Form

High-converting multi-phase lead form and savings calculator for real estate cash offers, optimized for embedding in Framer sites.

## 🚀 Live Demo

**Lead Form v2**: [https://your-vercel-domain.vercel.app/leadform-v2.html](leadform-v2.html)

**Savings Calculator**: [https://your-vercel-domain.vercel.app/savings-calculator.html](savings-calculator.html)

## 📋 Features

### Lead Form v2 (Multi-Phase)
- **Phase 1**: Single address input with Google Places autocomplete
- **Phase 2**: Contact details with offer preview
- **Phase 3**: Success confirmation with next steps
- Real-time validation and smooth animations
- Mobile-optimized with responsive design
- GTM event tracking and form submission to Formspree

### Savings Calculator
- Interactive home value input with slider
- Real-time cost breakdown calculations
- Visual comparison: Traditional selling vs. Cash offer
- Lead capture integration

## 🔧 Embedding in Framer

### Option 1: HTML Embed (Recommended)
```html
<iframe 
  id="leadform" 
  src="https://your-vercel-domain.vercel.app/leadform-v2.html" 
  width="100%" 
  height="600"
  style="border: none; min-height: 600px;"
  scrolling="no">
</iframe>

<script>
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'resize-frame') {
    document.getElementById('leadform').style.height = e.data.height + 'px';
  }
});
</script>
```

### Option 2: Fixed Heights
- Phase 1: 400px
- Phase 2: 800px  
- Phase 3: 600px

## 📁 Files

- `leadform-v2.html` - Multi-phase lead form
- `savings-calculator.html` - Interactive savings calculator  
- `leadform.html` - Original single-page form
- `framer-embed-handler.js` - Helper script for Framer
- `FRAMER-EMBED-GUIDE.md` - Detailed embedding instructions
- `CLAUDE.md` - Development context and architecture

## 🛠️ Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/embed-leadform.git
cd embed-leadform

# Start local server
npm run dev
# Visit http://localhost:3000
```

### Deployment
This project is configured for automatic deployment to Vercel.

## 🎯 Conversion Features

- Social proof tickers with rotating messages
- Trust indicators and security badges
- Scarcity elements and urgency
- Progress indicators
- Smooth phase transitions
- Mobile-first responsive design
- Real-time validation with visual feedback

## 🔑 Configuration

### Google Maps API
⚠️ **SECURITY**: Never commit API keys to version control!

1. **Get API Key**: https://console.cloud.google.com/google/maps-apis
2. **Restrict the key** to your domains only
3. **Replace placeholder** in HTML files:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places&callback=initMap">
   ```
4. **For Vercel**: Add `GOOGLE_MAPS_API_KEY` as environment variable

### Form Submission
Forms submit to Formspree endpoint: `https://formspree.io/f/xblyrjpg`

### GTM Tracking
Events are pushed to `window.dataLayer` for Google Tag Manager integration.

## 📱 Mobile Optimization

- Responsive text sizing with CSS `clamp()`
- Touch-friendly form elements
- Optimized validation timing
- Email field hidden on mobile (Phase 2)
- Click-to-call functionality

## 🚢 Deployment

This project is deployed on Vercel with automatic deployments from the main branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/embed-leadform)

## 📄 License

MIT License - see LICENSE file for details.