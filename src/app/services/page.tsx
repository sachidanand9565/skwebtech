/**
 * Services Page
 * Comprehensive overview of all services offered by SK WebTech
 */

import { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Settings,
  Palette,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
} from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import CTASection from '@/components/common/CTASection';

// SEO Metadata for Services page
export const metadata: Metadata = {
  title: 'Our Services - Web Development, SEO, E-Commerce & More',
  description:
    'Explore SK WebTech\'s business-focused IT services led by Sachidanand Kushwaha. From websites and e-commerce stores to SEO, mobile apps, UI/UX design, and managed support — we deliver growth-driven digital solutions.',
  keywords: [
    'web development services',
    'e-commerce development',
    'SEO services',
    'mobile app development',
    'UI/UX design services',
    'website maintenance',
    'custom software development',
    'digital marketing services',
  ],
  openGraph: {
    title: 'Our Services | SK WebTech',
    description:
      'Growth-focused web development, e-commerce, SEO, app development, and managed IT services from SK WebTech.',
    type: 'website',
    url: 'https://skwebtech.in/services',
  },
};

// Detailed services data
const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'We create custom, responsive websites that are fast, secure, and optimized for conversions. From simple landing pages to complex web applications, our team delivers solutions that help your business grow.',
    icon: Globe,
    features: [
      'Custom website design and development',
      'Responsive mobile-first approach',
      'CMS integration (WordPress, Headless)',
      'Performance optimization',
      'Security implementation',
      'API integrations',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'Laravel'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description:
      'Launch your online store with our comprehensive e-commerce solutions. We build feature-rich platforms with secure payments, inventory management, and seamless user experiences that drive sales.',
    icon: ShoppingCart,
    features: [
      'Custom e-commerce development',
      'Shopping cart optimization',
      'Payment gateway integration',
      'Inventory management systems',
      'Order tracking and fulfillment',
      'Multi-vendor marketplace development',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description:
      'Boost your online visibility and drive organic traffic with our proven SEO strategies. We help you rank higher on search engines, attract qualified leads, and grow your business sustainably.',
    icon: Search,
    features: [
      'Comprehensive SEO audits',
      'Keyword research and strategy',
      'On-page optimization',
      'Technical SEO fixes',
      'Link building campaigns',
      'Monthly reporting and analytics',
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'app-development',
    title: 'App Development',
    description:
      'Transform your ideas into powerful mobile applications. We develop native and cross-platform apps for iOS and Android that provide exceptional user experiences and drive engagement.',
    icon: Smartphone,
    features: [
      'Native iOS & Android development',
      'Cross-platform solutions',
      'UI/UX design for mobile',
      'Backend API development',
      'App Store optimization',
      'Ongoing maintenance & updates',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description:
      'Create memorable digital experiences with our expert UI/UX design services. We craft beautiful, intuitive interfaces that engage users, improve satisfaction, and drive conversions.',
    icon: Palette,
    features: [
      'User research and personas',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing',
      'Design system creation',
      'Accessibility compliance',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch','InVision', 'Zeplin'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description:
      'Keep your digital assets running smoothly with our comprehensive maintenance and support services. We provide 24/7 monitoring, regular updates, and rapid issue resolution.',
    icon: Settings,
    features: [
      '24/7 monitoring and support',
      'Regular security updates',
      'Performance optimization',
      'Backup and disaster recovery',
      'Content updates and management',
      'Technical troubleshooting',
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CloudFlare'],
    color: 'from-gray-500 to-gray-600',
  },
];

// Process steps
const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, and challenges through detailed consultations.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'We create a comprehensive strategy and roadmap tailored to your specific requirements.',
    icon: Clock,
  },
  {
    step: '03',
    title: 'Development',
    description:
      'Our expert team brings your vision to life using the latest technologies and best practices.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'We ensure a smooth launch and provide ongoing support to keep your solution running perfectly.',
    icon: Shield,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20 bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 md:mb-6">
              Growth-Focused Web & IT Services for Modern Businesses
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mx-auto max-w-2xl">
              Led by Sachidanand Kushwaha, SK WebTech builds websites, e-commerce stores, SEO campaigns, mobile apps, and managed support solutions that help businesses grow faster and compete with confidence.
            </p>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-left">
              <div className="rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2 md:mb-3">Delivery</p>
                <p className="text-xl md:text-2xl font-heading font-bold text-gray-900">Fast & Reliable</p>
              </div>
              <div className="rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2 md:mb-3">Expertise</p>
                <p className="text-xl md:text-2xl font-heading font-bold text-gray-900">10+ Years</p>
              </div>
              <div className="rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2 md:mb-3">Support</p>
                <p className="text-xl md:text-2xl font-heading font-bold text-gray-900">24/7 Coverage</p>
              </div>
            </div>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Link href="/contact" className="btn-accent text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                Book a Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/portfolio" className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24 w-full">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full"
              >
                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div
                    className={`w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-gradient-to-r ${service.color} 
                              flex items-center justify-center mb-4 md:mb-6`}
                  >
                    <service.icon size={28} className="text-white md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle
                          size={18}
                          className="text-green-500 mr-2.5 md:mr-3 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 md:px-3 py-1 md:py-1.5 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-primary text-sm md:text-base">
                    Book a Free Consultation
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`hidden lg:block ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div
                    className={`aspect-square rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.color} 
                              p-6 md:p-8 flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-8 md:top-10 right-8 md:right-10 w-32 md:w-40 h-32 md:h-40 bg-white rounded-full" />
                      <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-white rounded-full" />
                    </div>

                    {/* Icon */}
                    <service.icon size={140} className="text-white/20 md:w-[200px] md:h-[200px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="Our streamlined process ensures efficient delivery and exceptional results for every project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                <div className="hidden lg:block absolute top-8 md:top-10 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2 z-0" />

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card relative z-10">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-primary-100">
                    {step.step}
                  </span>
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-100 rounded-lg md:rounded-xl flex items-center justify-center my-3 md:my-4">
                    <step.icon size={20} className="text-primary-600 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your requirements and create a solution that drives results for your business."
      />
    </>
  );
}