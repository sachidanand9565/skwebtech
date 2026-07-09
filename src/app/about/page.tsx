import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target, Eye, Heart, Users, Award, Zap, Shield, ArrowRight,
  CheckCircle, Linkedin, Mail, TrendingUp, Clock,
} from 'lucide-react';
import CTASection from '@/components/common/CTASection';
import Counter from '@/components/motion/Counter';
import Reveal from '@/components/motion/Reveal';
import TextReveal from '@/components/motion/TextReveal';
import ParticleField from '@/components/motion/ParticleField';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'About Us - SK WebTech | Our Story, Mission & Vision',
  description:
    "Learn about SK WebTech's journey, our mission to empower businesses through technology, and our vision for the future of digital transformation. Founded by Sachidanand Kushwaha.",
  keywords: ['about SK WebTech', 'web development agency India', 'Sachidanand Kushwaha', 'IT company', 'digital transformation partner'],
  alternates: { canonical: 'https://www.skwebtech.in/about' },
  openGraph: {
    title: 'About Us | SK WebTech',
    description: 'Learn about our journey, mission, and vision for empowering businesses through technology.',
    type: 'website',
    url: 'https://www.skwebtech.in/about',
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
  { icon: Shield, title: 'Integrity', description: 'Transparent communication, honest pricing, and long-term relationships built on trust.', color: 'from-cyan-500 to-blue-600' },
  { icon: Award, title: 'Excellence', description: 'Quality is non-negotiable. Every project receives our full attention and commitment to excellence.', color: 'from-violet-500 to-purple-600' },
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
  // TEMP-WA-DISABLED: { year: '2025', title: 'WhatsApp Platform Launch', description: 'Launched our own WhatsApp Business Platform at wa.skwebtech.in for campaign management.' },
  // TEMP-WA-DISABLED original: 'Expanded into AI-powered web solutions, automation, and WhatsApp Business integration.'
  { year: '2026', title: 'AI & Automation Focus', description: 'Expanded into AI-powered web solutions and business automation.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-20 bg-void overflow-hidden">
        <ParticleField density={0.7} />
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-1/3 left-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
        <div className="glow-orb bottom-0 right-1/4 w-72 h-72 bg-secondary-500/[0.09] animate-aurora" style={{ animationDelay: '4s' }} />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <Reveal y={16}>
                <span className="badge-chip mb-7">About SK WebTech</span>
              </Reveal>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
                <TextReveal text="Empowering Businesses Through" delay={0.1} as="span" />{' '}
                <TextReveal text="Technology" delay={0.42} as="span" className="gradient-text" />
              </h1>
              <Reveal delay={0.5}>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                  Since 2022, SK WebTech has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals. Our passion for innovation drives everything we do.
                </p>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-accent group">
                    Get in Touch
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link href="/portfolio" className="btn-secondary">
                    View Our Work
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <StaggerItem key={label}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/30">
                    <div className="w-10 h-10 bg-primary-500/15 border border-primary-500/20 rounded-xl flex items-center justify-center mb-3">
                      <Icon size={20} className="text-primary-400" />
                    </div>
                    <div className="text-3xl font-heading font-bold text-white mb-1">
                      <Counter value={value} />
                    </div>
                    <div className="text-slate-400 text-sm">{label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 md:py-24 bg-void">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal x={-24} y={0}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-950/80 to-void-100 p-10 border-glow">
                <div className="glow-orb top-0 right-0 w-48 h-48 bg-primary-500/[0.14] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-500/15 border border-primary-500/25 rounded-2xl flex items-center justify-center mb-6">
                    <Target size={28} className="text-primary-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">Our Mission</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    To empower businesses of all sizes with innovative, reliable, and affordable technology solutions that drive growth, improve efficiency, and create lasting competitive advantages in the digital marketplace.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal x={24} y={0} delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-secondary-500/20 bg-gradient-to-br from-secondary-950/80 to-void-100 p-10 border-glow">
                <div className="glow-orb top-0 right-0 w-48 h-48 bg-secondary-500/[0.14] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-secondary-500/15 border border-secondary-500/25 rounded-2xl flex items-center justify-center mb-6">
                    <Eye size={28} className="text-secondary-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">Our Vision</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    To be the most trusted technology partner for businesses worldwide, recognized for our innovation, expertise, and unwavering commitment to client success in an ever-evolving digital landscape.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-16 md:py-24 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="glow-orb top-[20%] left-[5%] w-80 h-80 bg-primary-500/[0.05]" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal x={-24} y={0}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-primary-500/20 bg-primary-500/[0.04]" />
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-secondary-500/20 bg-secondary-500/[0.04]" />
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-white/10 shadow-soft-lg">
                  <Image src="/images/sk.png" alt="Sachidanand Kushwaha - Founder SK WebTech" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>

            <Reveal x={24} y={0} delay={0.1}>
              <div>
                <span className="badge-chip mb-5">Meet the Founder</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                  Sachidanand Kushwaha
                </h2>
                <p className="gradient-text font-heading font-semibold text-lg mb-6">Founder & CEO, SK WebTech</p>

                <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
                  <p>With over 4 years of dedicated innovation in the IT industry, Sachidanand founded SK WebTech with a clear mission: to help businesses succeed online through practical, high-quality technology solutions.</p>
                  <p>His journey began as a passionate developer and digital strategist. Today he leads a skilled team of professionals who share the vision of empowering businesses through results-driven digital products.</p>
                  <p>Sachidanand believes in building lasting partnerships, understanding each client&apos;s unique challenges, and delivering solutions that contribute measurable growth.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[{ v: '4+', l: 'Years Experience' }, { v: '80+', l: 'Projects Led' }].map(({ v, l }) => (
                    <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                      <div className="text-2xl font-heading font-bold text-primary-400">
                        <Counter value={v} />
                      </div>
                      <div className="text-sm text-slate-500 mt-1">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://www.linkedin.com/in/sachidanand-kushwaha" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 transition-all">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href="mailto:info@skwebtech.in"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] border border-white/15 text-white text-sm font-medium rounded-xl hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all">
                    <Mail size={16} /> Email
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-16 md:py-24 bg-void">
        <div className="container-custom">
          <div className="text-center mb-14">
            <Reveal y={14}>
              <span className="badge-chip mb-4">Our Values</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">What Drives Us</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">Our core values guide every decision we make and every project we undertake.</p>
            </Reveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <StaggerItem key={value.title} className="h-full">
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-card-hover">
                  <div className="relative mb-5 w-12 h-12">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-40 blur-lg transition-opacity duration-300 group-hover:opacity-70`} />
                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-sm`}>
                      <value.icon size={22} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-24 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal x={-24} y={0}>
              <div>
                <span className="badge-chip mb-5">Why SK WebTech</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Why Businesses Choose Us</h2>
                <p className="text-slate-400 leading-relaxed mb-8">We combine technical excellence with a client-first approach to deliver solutions that truly make a difference.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyUs.map((reason) => (
                    <div key={reason} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/25">
                      <CheckCircle size={16} className="text-primary-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal x={24} y={0} delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-void-100/80 p-8 border-glow">
                <div className="glow-orb top-0 right-0 w-40 h-40 bg-primary-500/[0.14]" />
                <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-white">Global Reach, Personal Touch</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    We serve clients across 15+ countries while maintaining the personalized service that makes us feel like an extension of your team.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[{ v: '80+', l: 'Projects' }, { v: '100+', l: 'Clients' }, { v: '15+', l: 'Countries' }, { v: '24/7', l: 'Support' }].map(({ v, l }) => (
                      <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center">
                        <div className="text-2xl font-bold text-white font-heading">
                          <Counter value={v} />
                        </div>
                        <div className="text-slate-500 text-xs mt-1">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 md:py-24 bg-void">
        <div className="container-custom">
          <div className="text-center mb-14">
            <Reveal y={14}>
              <span className="badge-chip mb-4">Our Journey</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Growing Year by Year</h2>
            </Reveal>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500/60 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06} x={20} y={0}>
                  <div className="relative flex gap-8">
                    <div className="flex-shrink-0 w-16 flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary-500 shadow-glow-sm ring-4 ring-void mt-1" />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="gradient-text font-heading font-bold text-xl">{m.year}</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg mb-1">{m.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </Reveal>
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
