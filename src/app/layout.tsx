/**
 * SK WebTech - Root Layout
 * This is the root layout that wraps all pages with common elements
 */

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallButton from '@/components/common/CallButton';

// Load Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Load Poppins font for headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Default SEO metadata for the website
export const metadata: Metadata = {
  metadataBase: new URL('https://skwebtech.com'),
  title: {
    default: 'SK WebTech - Professional Web & IT Solutions',
    template: '%s | SK WebTech',
  },
  description:
    'SK WebTech delivers cutting-edge web development, e-commerce solutions, SEO optimization, and IT services to help your business grow online. Get a free consultation today!',
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skwebtech.com',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className="font-sans">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Sticky Header */}
        <Header />

        {/* Main content area */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating buttons */}
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}
