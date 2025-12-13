/**
 * Why Choose Us Section Component
 * Highlights the key benefits of working with SK WebTech
 */

import SectionHeader from '@/components/common/SectionHeader';
import FeatureCard from '@/components/common/FeatureCard';
import { Award, Clock, DollarSign, Headphones, Users, Zap } from 'lucide-react';

// Features data
const features = [
  {
    title: 'Expert Team',
    description:
      'Our team of seasoned developers and designers brings years of industry experience to every project.',
    icon: Users,
    stat: '50+',
    statLabel: 'experts',
  },
  {
    title: 'On-Time Delivery',
    description:
      'We pride ourselves on meeting deadlines without compromising on quality. Your time matters to us.',
    icon: Clock,
    stat: '98%',
    statLabel: 'on-time',
  },
  {
    title: 'Affordable Pricing',
    description:
      'Quality solutions at competitive prices. We offer transparent pricing with no hidden costs.',
    icon: DollarSign,
    stat: '40%',
    statLabel: 'savings',
  },
  {
    title: '24/7 Support',
    description:
      'Round-the-clock support to ensure your business never faces downtime. We\'re always here for you.',
    icon: Headphones,
    stat: '24/7',
    statLabel: 'available',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <SectionHeader
          badge="Why Choose Us"
          title="The SK WebTech Advantage"
          subtitle="We combine technical excellence with a client-first approach to deliver 
                   solutions that exceed expectations."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              stat={feature.stat}
              statLabel={feature.statLabel}
            />
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                Trusted by 100+ Businesses Worldwide
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                From startups to established enterprises, businesses trust SK WebTech 
                to deliver innovative digital solutions. Our commitment to quality and 
                customer satisfaction has made us a preferred partner for companies 
                across various industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-primary-600">
                  <Award size={24} />
                  <span className="font-medium">Award Winning Agency</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-600">
                  <Zap size={24} />
                  <span className="font-medium">Fast & Reliable</span>
                </div>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
