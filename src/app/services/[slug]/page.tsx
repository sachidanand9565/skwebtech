import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Phone, MessageCircle, Star, MapPin,
  Monitor, Shield, Zap, BarChart2, Settings, Lock, Globe, Smartphone,
  Code, Database, Search, TrendingUp, Layout, Cloud, Package, Headphones,
} from 'lucide-react';

const FEATURE_ICONS = [
  Monitor, Shield, Zap, BarChart2, Settings, Lock,
  Globe, Smartphone, Code, Database, Search, TrendingUp,
  Layout, Cloud, Package, Headphones,
];
import { getServiceTemplate, parseServiceLocationSlug, servicePageTemplates } from '@/data/servicePages';
import { getLocationBySlug, locations, interpolate } from '@/data/locations';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const service of servicePageTemplates) {
    for (const location of locations) {
      params.push({ slug: `${service.slug}-in-${location.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseServiceLocationSlug(params.slug);
  if (!parsed) return { title: 'Not Found' };

  const service = getServiceTemplate(parsed.serviceSlug);
  const location = getLocationBySlug(parsed.locationSlug);
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

export default function ServiceLocationPage({ params }: Props) {
  const parsed = parseServiceLocationSlug(params.slug);
  if (!parsed) notFound();

  const service = getServiceTemplate(parsed.serviceSlug);
  const location = getLocationBySlug(parsed.locationSlug);
  if (!service || !location) notFound();

  const city = location.name;
  const h1 = interpolate(service.h1Template, city);
  const intro = interpolate(service.introTemplate, city);
  const subIntro = interpolate(service.subIntroTemplate, city);
  const faqs = service.faqsTemplate.map((f) => ({
    q: interpolate(f.q, city),
    a: interpolate(f.a, city),
  }));

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
          telephone: '+916386103750',
          email: 'sachi274406@gmail.com',
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
      <section className={`pt-24 md:pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-300">{h1}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5">
              <MapPin size={14} className="text-indigo-400" />
              <span className="text-white/80 text-xs font-medium">{service.title} · {location.name}, {location.state}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-5">
              {h1}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">{intro}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-accent">
                Get Free Consultation <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="tel:6386103750"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone size={18} /> Call Now: +91 6386103750
              </a>
            </div>

            <div className="flex flex-wrap gap-5 mt-8">
              {['80+ Projects', '10+ Years Experience', 'Trusted by 100+ Clients'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed">{subIntro}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
              What We Offer
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900">
              {service.title} Services in {city}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Why SK WebTech for {service.title} in {city}?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{interpolate(benefit.desc, city)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3">
            Technologies We Use
          </h2>
          <p className="text-gray-500 mb-10">Industry-leading tools for best-in-class results</p>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white text-sm font-medium rounded-full shadow-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                FAQs
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-heading font-semibold text-gray-900 mb-3 flex items-start gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.color} text-white text-xs flex items-center justify-center font-bold mt-0.5`}>
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Get Started with {service.title} in {city}?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Talk to our experts today. Free consultation, no obligation. We&apos;ll show you exactly how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              Get Free Consultation <ArrowRight size={18} className="ml-2" />
            </Link>
            <a
              href="https://wa.me/916386103750"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-6 text-center">
            {service.title} in Other Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {locations
              .filter((l) => l.slug !== location.slug)
              .slice(0, 16)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${service.slug}-in-${loc.slug}`}
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm rounded-full hover:border-indigo-400 hover:text-indigo-600 transition-all"
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
