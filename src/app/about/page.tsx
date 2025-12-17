/**
 * About Page
 * Company information, mission, vision, and team
 */

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import CTASection from '@/components/common/CTASection';

// SEO Metadata for About page
export const metadata: Metadata = {
  title: 'About Us - Our Story, Mission & Vision',
  description:
    'Learn about SK WebTech\'s journey, our mission to empower businesses through technology, and our vision for the future of digital transformation.',
  keywords: [
    'about SK WebTech',
    'IT company',
    'web development agency',
    'tech company mission',
    'digital transformation partner',
    'software development team',
  ],
  openGraph: {
    title: 'About Us | SK WebTech',
    description:
      'Learn about our journey, mission, and vision for empowering businesses through technology.',
    type: 'website',
    url: 'https://skwebtech.com/about',
  },
};

// Core values
const coreValues = [
  {
    icon: Heart,
    title: 'Client-First Approach',
    description:
      'Your success is our success. We prioritize understanding your needs and delivering solutions that exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'We stay at the forefront of technology, constantly learning and implementing the latest tools and practices.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We believe in transparent communication, honest pricing, and building long-term relationships based on trust.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Quality is non-negotiable. Every project receives our full attention to detail and commitment to excellence.',
  },
];

// Why choose us reasons
const whyChooseUs = [
  'Over 10 years of industry experience',
  'Team of 50+ skilled professionals',
  '500+ successful projects delivered',
  '24/7 dedicated customer support',
  'Competitive and transparent pricing',
  'Proven track record of success',
  'Cutting-edge technology expertise',
  'Tailored solutions for your business',
];

// Timeline milestones
const milestones = [
  {
    year: '2014',
    title: 'Founded',
    description: 'SK WebTech was founded with a vision to empower businesses through technology.',
  },
  {
    year: '2016',
    title: 'First 100 Clients',
    description: 'Reached our first milestone of 100 satisfied clients across various industries.',
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description: 'Expanded our services internationally, serving clients in 10+ countries.',
  },
  {
    year: '2020',
    title: 'Team Growth',
    description: 'Grew our team to 50+ professionals, strengthening our capabilities.',
  },
  {
    year: '2022',
    title: '500+ Projects',
    description: 'Celebrated the completion of our 500th successful project.',
  },
  {
    year: '2024',
    title: 'Innovation Focus',
    description: 'Launched new AI-powered solutions and expanded into emerging technologies.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                About SK WebTech
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Empowering Businesses Through Technology
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Since 2014, SK WebTech has been at the forefront of digital transformation, 
                helping businesses of all sizes leverage technology to achieve their goals. 
                Our passion for innovation and commitment to excellence drives everything we do.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-10">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower businesses of all sizes with innovative, reliable, and 
                affordable technology solutions that drive growth, improve efficiency, 
                and create lasting competitive advantages in the digital marketplace.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-10">
              <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the most trusted technology partner for businesses worldwide, 
                recognized for our innovation, expertise, and unwavering commitment 
                to client success in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                {/* Background decoration */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-primary-100 rounded-3xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent-100 rounded-3xl" />
                
                {/* Photo container */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Replace with actual image */}
                  <Image
                    src="/images/founder.jpg"
                    alt="SK - Founder of SK WebTech"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Fallback if image not available */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700">
                    <span className="text-8xl font-heading font-bold text-white/30">SK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-medium rounded-full mb-4">
                Meet the Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Saurabh Kumar
              </h2>
              <p className="text-xl text-primary-600 font-medium mb-6">
                Founder &amp; CEO, SK WebTech
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 10 years of experience in the IT industry, I founded SK WebTech 
                  with a simple mission: to help businesses succeed in the digital world by 
                  providing top-quality, affordable technology solutions.
                </p>
                <p>
                  My journey started as a passionate developer, and today I lead a team of 
                  50+ talented professionals who share my vision of empowering businesses 
                  through innovative technology.
                </p>
                <p>
                  I believe in building lasting relationships with our clients, understanding 
                  their unique challenges, and delivering solutions that drive real results. 
                  Every project we undertake is a reflection of our commitment to excellence.
                </p>
              </div>

              {/* Quick Info */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-heading font-bold text-primary-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-heading font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Led</div>
                </div>
              </div>

              {/* Social/Contact */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/skwebtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:saurabh@skwebtech.com"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            subtitle="Our core values guide every decision we make and every project we undertake."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                Why SK WebTech
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We combine technical excellence with a client-first approach to deliver 
                solutions that truly make a difference. Here&apos;s what sets us apart from the rest.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((reason) => (
                  <div key={reason} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-10 text-white">
                <Globe size={64} className="mb-6 opacity-80" />
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Global Reach, Local Touch
                </h3>
                <p className="text-primary-100 leading-relaxed mb-6">
                  We serve clients across 15+ countries while maintaining the personalized 
                  service and attention to detail that makes us feel like an extension of 
                  your team.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary-500 border-2 border-white flex items-center justify-center text-xs font-medium"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-primary-100">100+ team members worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title="A Decade of Excellence"
            subtitle="From a small startup to a trusted technology partner for businesses worldwide."
          />

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full -translate-x-1/2 border-4 border-white shadow-md" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 shadow-card inline-block">
                      <span className="text-primary-600 font-heading font-bold text-2xl">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Partner with Us?"
        subtitle="Join hundreds of businesses that trust SK WebTech for their digital transformation journey."
        primaryCTA={{ text: 'Start a Conversation', href: '/contact' }}
      />
    </>
  );
}
