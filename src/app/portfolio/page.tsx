/**
 * Portfolio Page
 * Showcases all projects completed by SK WebTech
 */

import { Metadata } from 'next';
import PortfolioPreviewSection from '@/components/sections/PortfolioPreviewSection';
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

// Project categories for filtering
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'ecommerce', name: 'E-Commerce' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'dashboard', name: 'Dashboards' },
  { id: 'edtech', name: 'EdTech' },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Projects That Speak for Themselves
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our diverse portfolio of successful projects across various 
              industries. Each project represents our commitment to quality and innovation.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                  category.id === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Show all projects */}
      <PortfolioPreviewSection showAll={true} />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">
                15+
              </div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">
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
