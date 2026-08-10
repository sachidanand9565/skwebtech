/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow an isolated build dir (local verification builds can run alongside `next dev`)
  distDir: process.env.BUILD_DIR || '.next',
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
  experimental: {
    // Inline critical CSS at build time (critters) — removes render-blocking
    // stylesheet requests flagged by PageSpeed Insights
    optimizeCss: true,
  },
};

module.exports = nextConfig;
