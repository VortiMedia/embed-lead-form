// Configuration file for API keys
// This file should be updated with your actual API keys before deployment

window.CONFIG = {
  GOOGLE_MAPS_API_KEY: 'AIzaSyChsAghoLBZ_2uOwtOil9qhDG_tQdsDuTM', // Replace with your restricted key
  FORMSPREE_ENDPOINT: 'https://formspree.io/f/xblyrjpg'
};

// Auto-load Google Maps API
if (window.CONFIG.GOOGLE_MAPS_API_KEY && window.CONFIG.GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY') {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${window.CONFIG.GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}