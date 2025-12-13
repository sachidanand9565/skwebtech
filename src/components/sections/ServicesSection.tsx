/**
 * Services Section Component
 * Displays all services offered by SK WebTech
 */

import SectionHeader from '@/components/common/SectionHeader';
import ServiceCard from '@/components/common/ServiceCard';
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Settings,
  Palette,
} from 'lucide-react';

// Services data
const services = [
  {
    title: 'Web Development',
    description:
      'Custom, responsive websites built with modern technologies. From landing pages to complex web applications, we deliver solutions that drive results.',
    icon: Globe,
    href: '/services#web-development',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'Full-featured online stores with secure payments, inventory management, and seamless user experience to maximize your online sales.',
    icon: ShoppingCart,
    href: '/services#ecommerce',
    featured: true,
  },
  {
    title: 'SEO Optimization',
    description:
      'Boost your online visibility with our proven SEO strategies. We help you rank higher, drive organic traffic, and grow your business.',
    icon: Search,
    href: '/services#seo',
  },
  {
    title: 'App Development',
    description:
      'Native and cross-platform mobile applications that provide exceptional user experiences on iOS and Android devices.',
    icon: Smartphone,
    href: '/services#app-development',
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive designs that engage users and drive conversions. We create interfaces that users love to interact with.',
    icon: Palette,
    href: '/services#uiux',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Keep your digital assets running smoothly with our 24/7 support, regular updates, security patches, and performance optimization.',
    icon: Settings,
    href: '/services#maintenance',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <SectionHeader
          badge="Our Services"
          title="Comprehensive IT Solutions for Your Business"
          subtitle="From web development to digital marketing, we offer end-to-end solutions 
                   to help your business thrive in the digital landscape."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              featured={service.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
