import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target, Eye, Heart, Users, Award, Zap, Shield, ArrowRight,
  CheckCircle, Linkedin, Mail, TrendingUp, Clock,
} from 'lucide-react';
import CTASection from '@/components/common/CTASection';

export const metadata: Metadata = {
  title: 'About Us - SK WebTech | Our Story, Mission & Vision',
  description:
    "Learn about SK WebTech's journey, our mission to empower businesses through technology, and our vision for the future of digital transformation. Founded by Sachidanand Kushwaha.",
  keywords: ['about SK WebTech', 'web development agency India', 'Sachidanand Kushwaha', 'IT company', 'digital transformation partner'],
  alternates: { canonical: 'https://skwebtech.in/about' },
  openGraph: {
    title: 'About Us | SK WebTech',
    description: 'Learn about our journey, mission, and vision for empowering businesses through technology.',
    type: 'website',
    url: 'https://skwebtech.in/about',
  },
};

const stats = [
  { value: '10+', label: 'Years Experience', icon: Clock },
  { value: '80+', label: 'Projects Delivered', icon: TrendingUp },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '15+', label: 'Countries Served', icon: Award },
];

const coreValues = [
  { icon: Heart, title: 'Client-First', description: 'Your success is our success. We prioritize your needs and deliver solutions that exceed expectations.', color: 'from-rose-500 to-pink-600' },
  { icon: Zap, title: 'Innovation', description: 'We stay at the forefront of technology, constantly implementing the latest tools and best practices.', color: 'from-amber-500 to-orange-600' },
  { icon: Shield, title: 'Integrity', description: 'Transparent communication, honest pricing, and long-term relationships built on trust.', color: 'from-blue-500 to-indigo-600' },
  { icon: Award, title: 'Excellence', description: 'Quality is non-negotiable. Every project receives our full attention and commitment to excellence.', color: 'from-purple-500 to-violet-600' },
];

const whyUs = [
  'Over 10 years of industry experience',
  'Team of skilled professionals',
  '80+ successful projects delivered',
  '24/7 dedicated customer support',
  'Competitive and transparent pricing',
  'Proven track record of success',
  'Cutting-edge technology expertise',
  'Tailored solutions for your business',
];

const milestones = [
  { year: '2022', title: 'SK WebTech Founded', description: 'Launched with a clear vision: to help businesses succeed online through high-quality technology solutions.' },
  { year: '2023', title: 'First 100 Clients', description: 'Reached the milestone of 100 satisfied clients across e-commerce, SaaS, and service industries.' },
  { year: '2024', title: 'Global Expansion', description: 'Expanded services internationally, serving clients across 15+ countries.' },
  { year: '2025', title: 'WhatsApp Platform Launch', description: 'Launched our own WhatsApp Business Platform at wa.skwebtech.in for campaign management.' },
  { year: '2026', title: 'AI & Automation Focus', description: 'Expanded into AI-powered web solutions, automation, and WhatsApp Business integration.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-medium rounded-full mb-6 backdrop-blur-sm">
                About SK WebTech
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
                Empowering Businesses Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Technology
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Since 2022, SK WebTech has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals. Our passion for innovation drives everything we do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-accent">
                  Get in Touch <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-white/8 border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 transition-all">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={20} className="text-indigo-400" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">{value}</div>
                  <div className="text-slate-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-10 text-white">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Mission</h2>
                <p className="text-indigo-100 leading-relaxed text-lg">
                  To empower businesses of all sizes with innovative, reliable, and affordable technology solutions that drive growth, improve efficiency, and create lasting competitive advantages in the digital marketplace.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-white">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Vision</h2>
                <p className="text-orange-100 leading-relaxed text-lg">
                  To be the most trusted technology partner for businesses worldwide, recognized for our innovation, expertise, and unwavering commitment to client success in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-100 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-orange-100 rounded-3xl" />
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-soft-lg">
                <Image src="/images/sk.png" alt="Sachidanand Kushwaha - Founder SK WebTech" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full mb-4">
                Meet the Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
                Sachidanand Kushwaha
              </h2>
              <p className="text-indigo-600 font-semibold text-lg mb-6">Founder & CEO, SK WebTech</p>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>With over 4 years of dedicated innovation in the IT industry, Sachidanand founded SK WebTech with a clear mission: to help businesses succeed online through practical, high-quality technology solutions.</p>
                <p>His journey began as a passionate developer and digital strategist. Today he leads a skilled team of professionals who share the vision of empowering businesses through results-driven digital products.</p>
                <p>Sachidanand believes in building lasting partnerships, understanding each client&apos;s unique challenges, and delivering solutions that contribute measurable growth.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ v: '4+', l: 'Years Experience' }, { v: '80+', l: 'Projects Led' }].map(({ v, l }) => (
                  <div key={l} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
                    <div className="text-2xl font-heading font-bold text-indigo-600">{v}</div>
                    <div className="text-sm text-gray-500 mt-1">{l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/sachidanand-kushwaha" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-all">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="mailto:sachi274406@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-all">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">What Drives Us</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Our core values guide every decision we make and every project we undertake.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-50">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 shadow-sm`}>
                  <value.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">Why SK WebTech</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
              <p className="text-gray-500 leading-relaxed mb-8">We combine technical excellence with a client-first approach to deliver solutions that truly make a difference.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((reason) => (
                  <div key={reason} className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-card">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-3">Global Reach, Personal Touch</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  We serve clients across 15+ countries while maintaining the personalized service that makes us feel like an extension of your team.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[{ v: '80+', l: 'Projects' }, { v: '100+', l: 'Clients' }, { v: '15+', l: 'Countries' }, { v: '24/7', l: 'Support' }].map(({ v, l }) => (
                    <div key={l} className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-white">{v}</div>
                      <div className="text-slate-400 text-xs mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Growing Year by Year</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md ring-1 ring-indigo-200 mt-1" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-indigo-600 font-heading font-bold text-xl">{m.year}</span>
                      <span className="h-px flex-1 bg-gray-100" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Partner with Us?"
        subtitle="Join hundreds of businesses that trust SK WebTech for their digital transformation journey."
        primaryCTA={{ text: 'Start a Conversation', href: '/contact' }}
      />
    </>
  );
}
