const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow an isolated build dir (local verification builds can run alongside `next dev`)
  distDir: process.env.BUILD_DIR || '.next',
  // Strip Next's bundled legacy polyfills (~12KB) — browserslist targets modern browsers
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      const noop = path.resolve(__dirname, 'polyfill-noop.js');
      // Alias both the bare specifier and the resolved file (Next imports it relatively)
      config.resolve.alias['next/dist/build/polyfills/polyfill-module'] = noop;
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/polyfills[\\/]polyfill-module/, noop)
      );
    }
    return config;
  },
  // Enable image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        // Vercel Blob storage (admin panel image uploads)
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
    ],
  },
  // SEO-friendly trailing slashes
  trailingSlash: false,
  // NOTE: experimental.optimizeCss (critters) only works with the Pages Router,
  // not the App Router — removed since it had no effect here. Full critical-CSS
  // inlining lands with Next 15's experimental.inlineCss.
};

module.exports = nextConfig;
