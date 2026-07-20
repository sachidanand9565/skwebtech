/**
 * SK WebTech - Root Layout
 * This is the root layout that wraps all pages with common elements
 */

import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallButton from '@/components/common/CallButton';
import ChatBot from '@/components/common/ChatBot';
import SiteChrome from '@/components/layout/SiteChrome';
import SmoothScroll from '@/components/motion/SmoothScroll';
import CursorGlow from '@/components/motion/CursorGlow';
import PageLoader from '@/components/motion/PageLoader';
import ScrollProgress from '@/components/motion/ScrollProgress';

// Load Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Load Space Grotesk font for display headings
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// Default SEO metadata for the website
export const metadata: Metadata = {
  metadataBase: new URL('https://www.skwebtech.in'),
  title: {
    default: 'SK WebTech - Professional Web & IT Solutions',
    template: '%s | SK WebTech',
  },
  description:
    'SK WebTech, led by Sachidanand Kushwaha, delivers cutting-edge web development, e-commerce solutions, SEO optimization, and IT services to help your business grow online. Get a free consultation today!',
  keywords: [
    'web development',
    'IT services',
    'e-commerce solutions',
    'SEO optimization',
    'app development',
    'UI/UX design',
    'digital marketing',
    'website maintenance',
  ],
  authors: [{ name: 'SK WebTech' }],
  creator: 'SK WebTech',
  publisher: 'SK WebTech',
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/images/logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.skwebtech.in',
    siteName: 'SK WebTech',
    title: 'SK WebTech - Professional Web & IT Solutions',
    description:
      'Transform your business with professional web development, e-commerce, SEO, and IT solutions. Partner with SK WebTech for digital success.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SK WebTech - Web & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SK WebTech - Professional Web & IT Solutions',
    description:
      'Transform your business with professional web development, e-commerce, SEO, and IT solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Sitewide Organization + WebSite schema — brand identity for Google,
// knowledge panel support, and consistent NAP for citations
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.skwebtech.in/#organization',
      name: 'SK WebTech',
      url: 'https://www.skwebtech.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.skwebtech.in/images/logo.png',
      },
      email: 'info@skwebtech.in',
      telephone: '+91-9654603750',
      founder: { '@type': 'Person', name: 'Sachidanand Kushwaha' },
      address: { '@type': 'PostalAddress', addressCountry: 'IN' },
      sameAs: [
        'https://www.facebook.com/profile.php?id=61591755982616',
        'https://www.linkedin.com/in/sk-webtech-40a86441b',
        'https://www.instagram.com/skwebtech',
        'https://x.com/Sachida38689078',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.skwebtech.in/#website',
      url: 'https://www.skwebtech.in',
      name: 'SK WebTech',
      publisher: { '@id': 'https://www.skwebtech.in/#organization' },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#050816" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                     bg-primary-500 text-void px-4 py-2 rounded-lg z-[80] font-semibold"
        >
          Skip to main content
        </a>

        {/* Public-site chrome — hidden on /admin (admin has its own layout) */}
        <SiteChrome>
          {/* Global motion layer */}
          <PageLoader />
          <SmoothScroll />
          <ScrollProgress />
          <CursorGlow />

          {/* Sticky Header */}
          <Header />
        </SiteChrome>

        {/* Main content area */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <SiteChrome>
          {/* Footer */}
          <Footer />

          {/* Floating buttons */}
          <WhatsAppButton />
          <CallButton />
          <ChatBot />
        </SiteChrome>
      </body>
    </html>
  );
}
