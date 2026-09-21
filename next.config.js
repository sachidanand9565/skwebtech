const path = require('path');

// Enforced now: framing, plugin and <base> restrictions. None of these touch
// how scripts, styles or images load, so they can't break the site.
const ENFORCED_CSP = [
  "frame-ancestors 'self' https://*.skwebtech.in",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ');

// Full policy in report-only mode: violations show in the browser console but
// nothing is blocked. Once a few weeks pass with no legitimate violations,
// move it to the enforced header. Payment redirects use top-level navigation,
// which CSP does not restrict.
const REPORT_ONLY_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://*.public.blob.vercel-storage.com https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "frame-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'self' https://*.skwebtech.in",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ENFORCED_CSP },
  { key: 'Content-Security-Policy-Report-Only', value: REPORT_ONLY_CSP },
  // Older browsers ignore frame-ancestors; modern ones prefer it over this
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
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
