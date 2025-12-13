/**
 * Home Page
 * Main landing page for SK WebTech
 */

import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import PortfolioPreviewSection from '@/components/sections/PortfolioPreviewSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/common/CTASection';

// Page-specific metadata
export const metadata: Metadata = {
  title: 'SK WebTech - Professional Web & IT Solutions',
  description:
    'SK WebTech delivers cutting-edge web development, e-commerce solutions, SEO optimization, and IT services. Transform your business with our expert team. Get a free consultation today!',
  keywords: [
    'web development company',
    'IT services',
    'e-commerce development',
    'SEO services',
    'mobile app development',
    'UI/UX design agency',
    'digital transformation',
    'custom software development',
  ],
  openGraph: {
    title: 'SK WebTech - Professional Web & IT Solutions',
    description:
      'Transform your business with professional web development, e-commerce, SEO, and IT solutions. Partner with SK WebTech for digital success.',
    type: 'website',
    url: 'https://skwebtech.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Main banner with CTA */}
      <HeroSection />

      {/* Services Section - Overview of all services */}
      <ServicesSection />

      {/* Why Choose Us - Key differentiators */}
      <WhyChooseUsSection />

      {/* Portfolio Preview - Featured projects */}
      <PortfolioPreviewSection limit={3} />

      {/* Testimonials - Client reviews */}
      <TestimonialsSection limit={3} />

      {/* CTA Section - Strong call to action */}
      <CTASection
        title="Ready to Transform Your Digital Presence?"
        subtitle="Let's discuss your project and see how we can help your business grow. 
                 Get a free consultation today!"
        primaryCTA={{ text: 'Get Free Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'Call Us Now', href: 'tel:+1234567890' }}
      />
    </>
  );
}
