/**
 * Portfolio Page
 * Showcases all projects completed by SK WebTech
 */

import { Metadata } from 'next';
import PortfolioContent from '@/components/sections/PortfolioContent';
import CTASection from '@/components/common/CTASection';

// SEO Metadata for Portfolio page
export const metadata: Metadata = {
  title: 'Our Portfolio - Web Development & IT Projects',
  description:
    'Explore SK WebTech\'s portfolio of successful web development, e-commerce, mobile app, and IT projects. See how we\'ve helped businesses transform their digital presence.',
  keywords: [
    'web development portfolio',
    'IT project showcase',
    'e-commerce projects',
    'mobile app portfolio',
    'software development case studies',
    'web design examples',
  ],
  openGraph: {
    title: 'Our Portfolio | SK WebTech',
    description:
      'Explore our portfolio of successful web development, e-commerce, and IT projects.',
    type: 'website',
    url: 'https://skwebtech.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-primary-50/50 to-accent-50/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Latest Projects and<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Creative Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Explore our diverse portfolio of successful projects across various 
              industries. Each project represents our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid with Filters */}
      <PortfolioContent />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a Project in Mind?"
        subtitle="Let's discuss how we can bring your vision to life with our expertise and innovative solutions."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
      />
    </>
  );
}
