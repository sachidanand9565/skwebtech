import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Phone, Star, MapPin,
  Monitor, Shield, Zap, BarChart2, Settings, Lock, Globe, Smartphone,
  Code, Database, Search, TrendingUp, Layout, Cloud, Package, Headphones,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';

const FEATURE_ICONS = [
  Monitor, Shield, Zap, BarChart2, Settings, Lock,
  Globe, Smartphone, Code, Database, Search, TrendingUp,
  Layout, Cloud, Package, Headphones,
];
import { getServiceTemplate, getLocationBySlug, getServicePageTemplates, getLocations } from '@/lib/db';
import { parseServiceLocationSlug } from '@/data/servicePages';
import { interpolate } from '@/data/locations';

// ISR: DB-driven content (admin panel edits) refreshes within 5 minutes
export const revalidate = 300;


interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const templates = await getServicePageTemplates();
  const locs = await getLocations();
  const params: { slug: string }[] = [];
  for (const service of templates) {
    for (const location of locs) {
      params.push({ slug: `${service.slug}-in-${location.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseServiceLocationSlug(params.slug);
  if (!parsed) return { title: 'Not Found' };

  const service = await getServiceTemplate(parsed.serviceSlug);
  const location = await getLocationBySlug(parsed.locationSlug);
  if (!service || !location) return { title: 'Not Found' };

  const city = location.name;
  const title = interpolate(service.metaTitleTemplate, city);
  const description = interpolate(service.metaDescriptionTemplate, city);
  const keywords = service.keywordsTemplate.map((k) => interpolate(k, city));
  const canonicalUrl = `https://www.skwebtech.in/services/${params.slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'SK WebTech',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const parsed = parseServiceLocationSlug(params.slug);
  if (!parsed) notFound();

  const service = await getServiceTemplate(parsed.serviceSlug);
  const location = await getLocationBySlug(parsed.locationSlug);
  if (!service || !location) notFound();

  const city = location.name;
  const h1 = interpolate(service.h1Template, city);
  const intro = interpolate(service.introTemplate, city);
  const subIntro = interpolate(service.subIntroTemplate, city);
  const faqs = service.faqsTemplate.map((f) => ({
    q: interpolate(f.q, city),
    a: interpolate(f.a, city),
  }));

  const locs = await getLocations();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: interpolate(service.metaTitleTemplate, city),
        description: interpolate(service.metaDescriptionTemplate, city),
        provider: {
          '@type': 'Organization',
          name: 'SK WebTech',
          url: 'https://www.skwebtech.in',
          telephone: '+919654603750',
          email: 'info@skwebtech.in',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
            addressLocality: city,
          },
        },
        areaServed: { '@type': 'City', name: city },
        serviceType: service.title,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.skwebtech.in' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.skwebtech.in/services' },
          { '@type': 'ListItem', position: 3, name: h1, item: `https://www.skwebtech.in/services/${params.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 bg-void overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-[20%] right-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
        <div className="glow-orb bottom-0 left-1/4 w-72 h-72 bg-secondary-500/[0.09]" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-300">{h1}</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal y={16}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-full mb-6">
                <MapPin size={14} className="text-primary-400" />
                <span className="text-white/80 text-xs font-medium">{service.title} · {location.name}, {location.state}</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-5">
                {h1}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">{intro}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-accent group">
                  Get Free Consultation
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:9654603750"
                  className="btn-secondary gap-2"
                >
                  <Phone size={18} /> Call Now: +91 9654603750
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-5 mt-8">
                {['80+ Projects', '10+ Years Experience', 'Trusted by 100+ Clients'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle size={16} className="text-primary-400 flex-shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-14 md:py-20 bg-void">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-3xl border-l-2 border-primary-500/40 pl-6">
              <p className="text-lg text-slate-400 leading-relaxed">{subIntro}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-14 md:py-20 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="glow-orb top-[20%] right-[8%] w-80 h-80 bg-primary-500/[0.05]" />

        <div className="container-custom relative z-10">
          <div className="mb-12 text-center">
            <Reveal y={14}>
              <span className="badge-chip mb-4">What We Offer</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white">
                {service.title} Services in {city}
              </h2>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <StaggerItem key={feature.title} className="h-full">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-14 md:py-20 bg-void">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <Reveal y={14}>
              <span className="badge-chip mb-4">Why Choose Us</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Why SK WebTech for {service.title} in {city}?
              </h2>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full transition-colors duration-300 hover:border-primary-500/25">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-heading font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{interpolate(benefit.desc, city)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-14 md:py-20 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-custom text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              Technologies We Use
            </h2>
            <p className="text-slate-400 mb-10">Industry-leading tools for best-in-class results</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white text-sm font-medium rounded-full shadow-sm transition-transform duration-300 hover:scale-105`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-14 md:py-20 bg-void">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Reveal y={14}>
                <span className="badge-chip mb-4">FAQs</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  Frequently Asked Questions
                </h2>
              </Reveal>
            </div>

            <StaggerContainer className="space-y-5">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/25">
                    <h3 className="font-heading font-semibold text-white mb-3 flex items-start gap-3">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.color} text-white text-xs flex items-center justify-center font-bold mt-0.5`}>
                        Q
                      </span>
                      {faq.q}
                    </h3>
                    <p className="text-slate-400 leading-relaxed pl-9">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-void overflow-hidden">
        <div className="glow-orb top-0 left-1/4 w-96 h-96 bg-primary-500/[0.1] animate-aurora" />
        <div className="glow-orb bottom-0 right-1/4 w-72 h-72 bg-secondary-500/[0.1] animate-aurora" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-grid opacity-40 mask-radial-fade pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

        <div className="container-custom relative z-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Get Started with {service.title} in {city}?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Talk to our experts today. Free consultation, no obligation. We&apos;ll show you exactly how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-accent group">
                Get Free Consultation
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/919654603750"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all shadow-soft hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={18} /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other cities */}
      <section className="relative py-14 bg-void-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-custom">
          <h2 className="text-xl font-heading font-semibold text-white mb-6 text-center">
            {service.title} in Other Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {locs
              .filter((l) => l.slug !== location.slug)
              .slice(0, 16)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${service.slug}-in-${loc.slug}`}
                  className="px-4 py-2 bg-white/[0.03] border border-white/10 text-slate-400 text-sm rounded-full hover:border-primary-500/40 hover:text-primary-300 transition-all"
                >
                  {service.title} in {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
