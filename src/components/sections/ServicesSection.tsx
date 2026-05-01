import Link from 'next/link';
import { Globe, ShoppingCart, Search, Smartphone, Palette, MessageSquare, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites with Next.js, React & Node.js. Fast, SEO-ready, and built to convert visitors into customers.',
    icon: Globe,
    href: '/services#web-development',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with secure payments, inventory management, and optimized shopping experiences that drive sales.',
    icon: ShoppingCart,
    href: '/services#ecommerce',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
  {
    title: 'WhatsApp Business Platform',
    description: 'Automate customer communication, run campaigns, and connect your WhatsApp Business API - all from one powerful dashboard.',
    icon: MessageSquare,
    href: 'https://wa.skwebtech.in',
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    text: 'text-green-600',
    featured: true,
    external: true,
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher on Google and drive organic traffic with proven SEO strategies, technical audits, and content optimization.',
    icon: Search,
    href: '/services#seo',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform iOS & Android apps built with React Native & Flutter. From concept to App Store launch.',
    icon: Smartphone,
    href: '/services#app-development',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    text: 'text-orange-600',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered designs that engage, delight, and convert. Wireframes, prototypes, and pixel-perfect interfaces.',
    icon: Palette,
    href: '/services#uiux',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    text: 'text-pink-600',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Digital Solutions for Your Business"
          subtitle="From websites and e-commerce stores to WhatsApp automation and mobile apps - we cover every aspect of your digital growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => {
            const content = (
              <div
                className={`relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group ${
                  service.featured ? 'ring-2 ring-green-400/40' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-sm">
                      ✦ New Platform
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <service.icon size={22} className="text-white" />
                </div>

                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>

                <div className={`inline-flex items-center gap-1.5 mt-5 text-sm font-semibold ${service.text} group-hover:gap-2.5 transition-all`}>
                  {service.external ? 'Launch Platform' : 'Learn More'}
                  <ArrowRight size={15} />
                </div>
              </div>
            );

            return service.external ? (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={service.title} href={service.href} className="block">
                {content}
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
