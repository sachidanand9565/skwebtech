/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
