import { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe, ShoppingCart, Search, Smartphone, Settings, Palette,
  MessageSquare, ArrowRight, CheckCircle, Zap, Shield, Clock, ExternalLink,
} from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import CTASection from '@/components/common/CTASection';

export const metadata: Metadata = {
  title: 'Our Services - Web Development, SEO, WhatsApp Business & More | SK WebTech',
  description:
    'Explore SK WebTech\'s full range of digital services: web development, e-commerce, SEO, mobile apps, UI/UX design, WhatsApp Business automation, and website maintenance. Get a free consultation!',
  keywords: [
    'web development services',
    'e-commerce development',
    'SEO services India',
    'mobile app development',
    'UI/UX design services',
    'WhatsApp Business API',
    'website maintenance',
    'digital marketing services',
    'custom software development',
  ],
  alternates: { canonical: 'https://skwebtech.in/services' },
  openGraph: {
    title: 'Our Services | SK WebTech',
    description:
      'Web development, e-commerce, SEO, mobile apps, WhatsApp Business automation, and IT support from SK WebTech.',
    type: 'website',
    url: 'https://skwebtech.in/services',
  },
};

const services = [
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
    color: 'from-blue-500 to-indigo-600',
    dynamicSlug: 'web-development',
  },
  {
    id: 'whatsapp-business',
    title: 'WhatsApp Business Solutions',
    description:
      'Scale customer communication with official WhatsApp Business API integration, AI-powered chatbots, broadcast campaigns, and our dedicated WhatsApp Business Platform at wa.skwebtech.in.',
    icon: MessageSquare,
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
    dynamicSlug: 'whatsapp-business',
  },
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
    color: 'from-purple-500 to-violet-600',
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
    dynamicSlug: 'mobile-app-development',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description:
      'User-centered designs that engage users and drive conversions. From research and wireframes to pixel-perfect visuals and interactive Figma prototypes — we craft interfaces users love.',
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
      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-medium rounded-full mb-5 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
              Growth-Focused Digital Services for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Modern Businesses
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              From websites and e-commerce to WhatsApp automation and mobile apps — SK WebTech delivers end-to-end digital solutions that drive real business growth.
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-lg mb-8">
              {[
                { label: 'Delivery', value: 'Fast & Reliable' },
                { label: 'Expertise', value: '10+ Years' },
                { label: 'Support', value: '24/7 Coverage' },
              ].map((item) => (
                <div key={item.label} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-4">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-heading font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-accent">
                Book Free Consultation <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-white/8 border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 transition-all">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  {service.featured && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-4">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      New Platform Available
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-5 shadow-soft`}>
                    <service.icon size={26} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-7">{service.description}</p>

                  <ul className="space-y-2.5 mb-7">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle size={17} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {service.platformLink ? (
                      <a
                        href={service.platformLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        <MessageSquare size={16} /> Launch WA Platform <ExternalLink size={13} />
                      </a>
                    ) : null}
                    <Link href="/contact" className="btn-primary text-sm">
                      Get Free Consultation <ArrowRight size={15} className="ml-1.5" />
                    </Link>
                  </div>

                  {/* City quick links */}
                  {service.dynamicSlug && (
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-2.5">Also available in:</p>
                      <div className="flex flex-wrap gap-2">
                        {topCities.map((city) => (
                          <Link
                            key={city}
                            href={`/services/${service.dynamicSlug}-in-${citySlugMap[city]}`}
                            className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-500 text-xs rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-all"
                          >
                            {city}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual — Service Showcase Card */}
                <div className={`hidden lg:block ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl opacity-20 blur-xl`} />

                    <div className="relative bg-white rounded-3xl shadow-card-hover overflow-hidden">
                      {/* Top gradient bar */}
                      <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />

                      <div className="p-7">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-soft flex-shrink-0`}>
                            <service.icon size={22} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-gray-900 text-base leading-tight">{service.title}</h3>
                            <p className="text-xs text-gray-400 mt-0.5">by SK WebTech</p>
                          </div>
                          {service.featured && (
                            <span className="ml-auto px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wide">
                              New
                            </span>
                          )}
                        </div>

                        {/* Feature grid — top 4 features */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                          {service.features.slice(0, 4).map((feature) => (
                            <div key={feature} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                              <CheckCircle size={14} className="text-green-500 mb-1.5" />
                              <p className="text-gray-700 text-xs font-medium leading-tight">{feature}</p>
                            </div>
                          ))}
                        </div>

                        {/* Remaining features */}
                        <div className="space-y-2 mb-5">
                          {service.features.slice(4).map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                              <span className="text-gray-500 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2.5">Technologies</p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined process that ensures efficient delivery and exceptional results for every project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-indigo-200 to-transparent -translate-x-1/2 z-0" />
                )}
                <div className="bg-white rounded-2xl p-7 shadow-card relative z-10">
                  <span className="text-5xl font-heading font-bold text-indigo-100">{step.step}</span>
                  <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center my-4">
                    <step.icon size={20} className="text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
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
