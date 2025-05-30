// Framer Embed Handler Script
// Add this script to your Framer page to handle iframe resizing

// Listen for messages from the iframe
window.addEventListener('message', function(event) {
  // Check if the message is a resize request
  if (event.data && event.data.type === 'resize-frame') {
    // Find all iframes on the page
    const iframes = document.querySelectorAll('iframe');
    
    // Update the height of the iframe that sent the message
    iframes.forEach(iframe => {
      if (iframe.contentWindow === event.source) {
        iframe.style.height = event.data.height + 'px';
        iframe.style.minHeight = event.data.height + 'px';
        
        // Also update the container if it exists
        const container = iframe.closest('[data-framer-component-type="CodeEmbed"]');
        if (container) {
          container.style.height = event.data.height + 'px';
          container.style.minHeight = event.data.height + 'px';
        }
      }
    });
  }
});

// Alternative: If you're using a specific iframe ID
function resizeIframe(iframeId) {
  const iframe = document.getElementById(iframeId);
  if (iframe) {
    // Listen for the iframe to load
    iframe.addEventListener('load', function() {
      // Send initial resize request
      iframe.contentWindow.postMessage({ type: 'request-height' }, '*');
    });
  }
}

// For manual implementation in Framer's code override
export function iframeResizeOverride() {
  return {
    onMount() {
      // Add the message listener when component mounts
      window.addEventListener('message', handleIframeResize);
    },
    onUnmount() {
      // Clean up when component unmounts
      window.removeEventListener('message', handleIframeResize);
    }
  };
}

function handleIframeResize(event) {
  if (event.data && event.data.type === 'resize-frame') {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      if (iframe.contentWindow === event.source) {
        iframe.style.height = event.data.height + 'px';
      }
    });
  }
}