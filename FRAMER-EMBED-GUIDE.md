# Framer Embed Guide for Lead Form

## The Problem
When embedding multi-phase forms in Framer, the iframe doesn't automatically resize when content changes, causing overlapping issues.

## Solution 1: Using HTML Embed (Recommended)

1. In Framer, add an **Embed** component (not Code component)
2. Set the embed HTML to:

```html
<iframe 
  id="leadform" 
  src="YOUR_FORM_URL/leadform-v2.html" 
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

Replace `YOUR_FORM_URL` with your actual hosted form URL.

## Solution 2: Using Code Override

1. In Framer, create a new Code file
2. Add this code:

```javascript
import type { ComponentType } from "react"

export function withDynamicHeight(Component): ComponentType {
  return (props) => {
    React.useEffect(() => {
      const handleMessage = (event) => {
        if (event.data && event.data.type === 'resize-frame') {
          const iframe = document.querySelector('iframe')
          if (iframe && iframe.contentWindow === event.source) {
            iframe.style.height = event.data.height + 'px'
          }
        }
      }
      
      window.addEventListener('message', handleMessage)
      return () => window.removeEventListener('message', handleMessage)
    }, [])
    
    return <Component {...props} />
  }
}
```

3. Apply this override to your Embed component

## Solution 3: Fixed Height Sections

If dynamic resizing doesn't work, set fixed heights for each phase:

- Phase 1 (Address only): 400px
- Phase 2 (Contact form): 800px  
- Phase 3 (Success): 600px

Then use:

```html
<iframe 
  src="YOUR_FORM_URL/leadform-v2.html" 
  width="100%" 
  height="800"
  style="border: none;">
</iframe>
```

## Testing

1. Host your form on a web server (GitHub Pages, Netlify, etc.)
2. Use the full URL in Framer (not local file paths)
3. Test all three phases to ensure proper resizing

## Troubleshooting

- **Form cuts off**: Increase the initial height value
- **Scrollbars appear**: Add `scrolling="no"` to iframe
- **Not resizing**: Check browser console for errors
- **Security errors**: Ensure form is hosted on HTTPS

## Alternative: Direct HTML

Instead of iframe, you can paste the entire form HTML directly into a Framer Embed component, but you'll need to:
1. Include all CSS inline
2. Include all JavaScript inline
3. Update the Google Maps API script tag