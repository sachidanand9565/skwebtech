import { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe, ShoppingCart, Search, Smartphone, Settings, Palette,
  ArrowRight, CheckCircle, Zap, Shield, Clock, ExternalLink,
} from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import CTASection from '@/components/common/CTASection';
import Reveal from '@/components/motion/Reveal';
import TextReveal from '@/components/motion/TextReveal';
import TiltCard from '@/components/motion/TiltCard';
import ParticleField from '@/components/motion/ParticleField';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  // TEMP-WA-DISABLED original title: 'Our Services - Web Development, SEO, WhatsApp Business & More | SK WebTech'
  // (layout template khud '| SK WebTech' laga deta hai, isliye yahan nahi likha)
  title: 'Our Services - Web Development, SEO, Apps & More',
  // TEMP-WA-DISABLED original description: '...UI/UX design, WhatsApp Business automation, and website maintenance...'
  description:
    'Explore SK WebTech\'s full range of digital services: web development, e-commerce, SEO, mobile apps, UI/UX design, and website maintenance. Get a free consultation!',
  keywords: [
    'web development services',
    'e-commerce development',
    'SEO services India',
    'mobile app development',
    'UI/UX design services',
    /* TEMP-WA-DISABLED: 'WhatsApp Business API', */
    'website maintenance',
    'digital marketing services',
    'custom software development',
  ],
  alternates: { canonical: 'https://www.skwebtech.in/services' },
  openGraph: {
    title: 'Our Services | SK WebTech',
    // TEMP-WA-DISABLED original: 'Web development, e-commerce, SEO, mobile apps, WhatsApp Business automation, and IT support from SK WebTech.'
    description:
      'Web development, e-commerce, SEO, mobile apps, and IT support from SK WebTech.',
    type: 'website',
    url: 'https://www.skwebtech.in/services',
  },
};

interface ServiceEntry {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  technologies: string[];
  color: string;
  /** Starting price shown on the page, e.g. '₹9,999' or '₹7,999/month' */
  price: string;
  featured?: boolean;
  platformLink?: string;
  dynamicSlug: string;
}

const services: ServiceEntry[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'We build custom, responsive websites that are fast, SEO-ready, and optimized for conversions. From simple landing pages to complex web applications using Next.js, React, and Node.js.',
    icon: Globe,
    features: [
      'Custom website design and development',
      'Responsive mobile-first approach',
      'CMS integration (WordPress, Headless)',
      'Performance & Core Web Vitals optimization',
      'Security implementation & SSL',
      'API integrations',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'TypeScript'],
    color: 'from-cyan-500 to-blue-600',
    price: '₹9,999',
    dynamicSlug: 'web-development',
  },
  /* TEMP-WA-DISABLED: WhatsApp Business service — uncomment to bring back
  {
    id: 'whatsapp-business',
    title: 'WhatsApp Business Solutions',
    description:
      'Scale customer communication with official WhatsApp Business API integration, AI-powered chatbots, broadcast campaigns, and our dedicated WhatsApp Business Platform at wa.skwebtech.in.',
    icon: WhatsAppIcon,
    features: [
      'Official WhatsApp Business API setup',
      'AI-powered chatbot development',
      'Bulk broadcast messaging & campaigns',
      'Customer support automation',
      'CRM & third-party integrations',
      'Analytics & delivery reporting',
    ],
    technologies: ['WhatsApp API', 'Meta Cloud API', 'Node.js', 'OpenAI', 'Firebase'],
    color: 'from-green-500 to-emerald-600',
    featured: true,
    platformLink: 'https://wa.skwebtech.in',
    price: '₹4,999',
    dynamicSlug: 'whatsapp-business',
  },
  */
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description:
      'Launch your online store with complete e-commerce solutions. Secure payments, smart inventory management, and conversion-optimized experiences that drive real sales.',
    icon: ShoppingCart,
    features: [
      'Custom e-commerce development',
      'Razorpay, Stripe & UPI payment integration',
      'Inventory & order management',
      'Multi-vendor marketplace development',
      'Abandoned cart recovery',
      'SEO-optimized product pages',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'Razorpay'],
    color: 'from-emerald-500 to-green-600',
    price: '₹24,999',
    dynamicSlug: 'ecommerce-development',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description:
      'Rank higher on Google and drive qualified organic traffic. We use proven white-hat strategies including technical SEO, content optimization, link building, and local SEO.',
    icon: Search,
    features: [
      'Comprehensive technical SEO audits',
      'Keyword research & strategy',
      'On-page & off-page optimization',
      'Local SEO & Google My Business',
      'Link building campaigns',
      'Monthly ranking reports',
    ],
    technologies: ['Google Analytics 4', 'Search Console', 'SEMrush', 'Ahrefs', 'SurferSEO'],
    color: 'from-violet-500 to-purple-600',
    price: '₹7,999/month',
    dynamicSlug: 'seo-services',
  },
  {
    id: 'app-development',
    title: 'App Development',
    description:
      'Transform your idea into a powerful mobile application. Native iOS & Android and cross-platform apps (React Native, Flutter) built for exceptional performance and user experience.',
    icon: Smartphone,
    features: [
      'Native iOS & Android development',
      'Cross-platform (React Native / Flutter)',
      'UI/UX design for mobile',
      'Backend API development',
      'App Store & Google Play submission',
      'Ongoing maintenance & updates',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    color: 'from-orange-500 to-red-500',
    price: '₹49,999',
    dynamicSlug: 'mobile-app-development',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description:
      'User-centered designs that engage users and drive conversions. From research and wireframes to pixel-perfect visuals and interactive Figma prototypes - we craft interfaces users love.',
    icon: Palette,
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design & branding',
      'Usability testing',
      'Design system creation',
      'Accessibility compliance (WCAG)',
    ],
    technologies: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Maze'],
    color: 'from-pink-500 to-rose-500',
    price: '₹14,999',
    dynamicSlug: 'ui-ux-design',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description:
      'Keep your digital assets secure, fast, and always online with our comprehensive maintenance plans. 24/7 monitoring, security patches, daily backups, and priority issue resolution.',
    icon: Settings,
    features: [
      '24/7 uptime monitoring & alerts',
      'Regular security updates & patches',
      'Automated daily backups',
      'Performance optimization',
      'Content updates & management',
      'Priority bug fixes & troubleshooting',
    ],
    technologies: ['AWS', 'Cloudflare', 'Docker', 'Pingdom', 'Sucuri'],
    color: 'from-slate-500 to-gray-700',
    price: '₹2,999/month',
    dynamicSlug: 'website-maintenance',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We understand your business goals and challenges through detailed consultations.', icon: Search },
  { step: '02', title: 'Planning', description: 'We create a comprehensive strategy and roadmap tailored to your specific requirements.', icon: Clock },
  { step: '03', title: 'Development', description: 'Our expert team brings your vision to life using the latest technologies and best practices.', icon: Zap },
  { step: '04', title: 'Launch & Support', description: 'We ensure a smooth launch and provide ongoing support to keep everything running perfectly.', icon: Shield },
];

const topCities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Jaipur'];
const citySlugMap: Record<string, string> = {
  Delhi: 'delhi', Mumbai: 'mumbai', Bangalore: 'bangalore', Hyderabad: 'hyderabad',
  Chennai: 'chennai', Pune: 'pune', Ahmedabad: 'ahmedabad', Jaipur: 'jaipur',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 bg-void overflow-hidden">
        <ParticleField density={0.7} />
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-[20%] right-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
        <div className="glow-orb bottom-0 left-1/4 w-72 h-72 bg-secondary-500/[0.09] animate-aurora" style={{ animationDelay: '4s' }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Reveal y={16}>
              <span className="badge-chip mb-6">Our Services</span>
            </Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
              <TextReveal text="Growth-Focused Digital Services for" delay={0.1} as="span" />{' '}
              <TextReveal text="Modern Businesses" delay={0.4} as="span" className="gradient-text" />
            </h1>
            <Reveal delay={0.5}>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
                {/* TEMP-WA-DISABLED original: "From websites and e-commerce to WhatsApp automation and mobile apps - ..." */}
                From websites and e-commerce to mobile apps and SEO - SK WebTech delivers end-to-end digital solutions that drive real business growth.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="grid grid-cols-3 gap-3 max-w-lg mb-8">
                {[
                  { label: 'Delivery', value: 'Fast & Reliable' },
                  { label: 'Expertise', value: '10+ Years' },
                  { label: 'Support', value: '24/7 Coverage' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/30">
                    <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-white font-heading font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-accent group">
                  Book Free Consultation
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative py-16 md:py-24 bg-void overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-[0.15] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-28"
              >
                {/* Content */}
                <Reveal x={index % 2 !== 0 ? 28 : -28} y={0} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div>
                    {service.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold rounded-full mb-4">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        New Platform Available
                      </div>
                    )}
                    <div className="relative mb-6 w-14 h-14">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-40 blur-lg`} />
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-soft`}>
                        <service.icon size={26} className="text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-7">{service.description}</p>

                    <ul className="space-y-2.5 mb-7">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle size={17} className="text-primary-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/[0.05] border border-white/10 text-slate-300 text-xs rounded-lg font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Starting price */}
                    <div className="inline-flex items-baseline gap-2.5 mb-7 rounded-2xl border border-primary-500/25 bg-primary-500/[0.06] px-5 py-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Starting at</span>
                      <span className="font-heading text-2xl font-bold gradient-text">{service.price}</span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {service.platformLink ? (
                        <a
                          href={service.platformLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all shadow-sm hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
                        >
                          <WhatsAppIcon size={16} /> Launch WA Platform <ExternalLink size={13} />
                        </a>
                      ) : null}
                      <Link href="/contact" className="btn-primary text-sm group">
                        Get Free Consultation
                        <ArrowRight size={15} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* City quick links */}
                    {service.dynamicSlug && (
                      <div className="mt-6 pt-5 border-t border-white/[0.08]">
                        <p className="text-xs text-slate-500 uppercase tracking-[0.2em] mb-2.5">Also available in:</p>
                        <div className="flex flex-wrap gap-2">
                          {topCities.map((city) => (
                            <Link
                              key={city}
                              href={`/services/${service.dynamicSlug}-in-${citySlugMap[city]}`}
                              className="px-3 py-1 bg-white/[0.03] border border-white/10 text-slate-400 text-xs rounded-full hover:border-primary-500/40 hover:text-primary-300 transition-all"
                            >
                              {city}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>

                {/* Visual - Service Showcase Card */}
                <Reveal x={index % 2 !== 0 ? -28 : 28} y={0} delay={0.15} className={`hidden lg:block ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <TiltCard max={6} className="group">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30`} />

                      <div className="relative rounded-3xl border border-white/10 bg-void-100/80 shadow-2xl backdrop-blur-xl overflow-hidden">
                        {/* Top gradient bar */}
                        <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />

                        <div className="p-7">
                          {/* Header */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-soft flex-shrink-0`}>
                              <service.icon size={22} className="text-white" />
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-white text-base leading-tight">{service.title}</h3>
                              <p className="text-xs text-slate-500 mt-0.5">by SK WebTech</p>
                            </div>
                            {service.featured && (
                              <span className="ml-auto px-2.5 py-1 bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-bold rounded-full uppercase tracking-wide">
                                New
                              </span>
                            )}
                          </div>

                          {/* Feature grid - top 4 features */}
                          <div className="grid grid-cols-2 gap-3 mb-5">
                            {service.features.slice(0, 4).map((feature) => (
                              <div key={feature} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                                <CheckCircle size={14} className="text-primary-400 mb-1.5" />
                                <p className="text-slate-300 text-xs font-medium leading-tight">{feature}</p>
                              </div>
                            ))}
                          </div>

                          {/* Remaining features */}
                          <div className="space-y-2 mb-5">
                            {service.features.slice(4).map((feature) => (
                              <div key={feature} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                                <span className="text-slate-400 text-xs">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Price strip */}
                          <div className="mb-5 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Starting Price</span>
                            <span className="font-heading text-lg font-bold text-white">{service.price}</span>
                          </div>

                          {/* Divider */}
                          <div className="border-t border-white/[0.08] pt-4">
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-2.5">Technologies</p>
                            <div className="flex flex-wrap gap-1.5">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-2.5 py-1 text-[11px] font-medium rounded-lg bg-gradient-to-r ${service.color} text-white`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 md:py-24 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="glow-orb top-[30%] left-[10%] w-80 h-80 bg-primary-500/[0.05]" />

        <div className="container-custom relative z-10">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined process that ensures efficient delivery and exceptional results for every project."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.step} className="h-full">
                <div className="relative h-full">
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary-500/40 to-transparent -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10 h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-1">
                    <span className="font-heading text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-500/40 to-primary-500/5">{step.step}</span>
                    <div className="my-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10">
                      <step.icon size={20} className="text-primary-400" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your requirements and create a solution that drives real results for your business."
      />
    </>
  );
}
