const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "images.pexels.com",
      "links.papareact.com",
      "avatars.githubusercontent.com",
      "firebasestorage.googleapis.com"
    ],
    disableStaticImages: true,
    // loader: 'imgix'
  }
  // your config for other plugins or the general next.js here...
});

