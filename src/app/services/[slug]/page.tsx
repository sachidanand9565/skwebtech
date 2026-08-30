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
import {
  getServiceTemplate, getLocationBySlug, getServicePageTemplates,
  getLocations, getLocationContent,
} from '@/lib/db';
import { parseServiceLocationSlug } from '@/data/servicePages';
import { interpolate, interpolateCity, formatList, CityContext } from '@/data/locations';

// ISR: DB-driven content (admin panel edits) refreshes within 5 minutes
export const revalidate = 300;

// Markdown (##, ###, **bold**, links, - lists) → HTML for the long-form content section
function renderMarkdown(md: string): string {
  const inline = (s: string) =>
    s
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  const html: string[] = [];
  let para: string[] = [];
  let inList = false;

  const flushPara = () => {
    if (para.length) {
      html.push(`<p>${para.join(' ')}</p>`);
      para = [];
    }
  };
  const closeList = () => {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  };

  for (const raw of md.split('\n')) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      closeList();
    } else if (line.startsWith('### ')) {
      flushPara();
      closeList();
      html.push(`<h3>${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith('## ')) {
      flushPara();
      closeList();
      html.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith('- ')) {
      flushPara();
      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      html.push(`<li>${inline(line.slice(2))}</li>`);
    } else {
      closeList();
      para.push(inline(line));
    }
  }
  flushPara();
  closeList();
  return html.join('\n');
}


interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const templates = await getServicePageTemplates();
  const locs = await getLocations();
  const params: { slug: string }[] = [];
  for (const service of templates) {
    // Pillar page: /services/web-development (no city)
    params.push({ slug: service.slug });
    for (const location of locs) {
      params.push({ slug: `${service.slug}-in-${location.slug}` });
    }
  }
  return params;
}

/**
 * Resolves a slug to either a city page ({service, location}) or a
 * pillar page ({service, location: null}) — pillar pages target
 * country-level keywords and act as the internal-linking hub for city pages.
 */
async function resolveSlug(slug: string) {
  const parsed = parseServiceLocationSlug(slug);
  if (parsed) {
    const service = await getServiceTemplate(parsed.serviceSlug);
    const location = await getLocationBySlug(parsed.locationSlug);
    if (service && location) return { service, location };
  }
  const pillarService = await getServiceTemplate(slug);
  if (pillarService) return { service: pillarService, location: null };
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await resolveSlug(params.slug);
  if (!resolved) return { title: 'Not Found' };

  const { service, location } = resolved;
  const city = location ? location.name : 'India';
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
  const resolved = await resolveSlug(params.slug);
  if (!resolved) notFound();

  const { service, location } = resolved;
  const isPillar = !location;
  const city = location ? location.name : 'India';

  const h1 = interpolate(service.h1Template, city);
  const intro = interpolate(service.introTemplate, city);
  const subIntro = interpolate(service.subIntroTemplate, city);
  const faqs = service.faqsTemplate.map((f) => ({
    q: interpolate(f.q, city),
    a: interpolate(f.a, city),
  }));

  const locs = await getLocations();
  // Interlinking: same city ke doosre services (cross-link lattice)
  const allTemplates = await getServicePageTemplates();
  const otherServices = allTemplates.filter((t) => t.slug !== service.slug);

  // Unique per-city layer: intro, industries, areas from location_content
  const cityData = location ? await getLocationContent(location.slug) : undefined;

  // Long-form article: base service article + unique city-specific section
  let articleMd = service.contentTemplate ? interpolate(service.contentTemplate, city) : '';
  if (location && cityData && service.cityContentTemplate) {
    const ctx: CityContext = {
      city,
      state: location.state,
      citySlug: location.slug,
      cityIntro: cityData.intro,
      industries: formatList(cityData.industries),
      areas: formatList(cityData.areas.slice(0, 6)),
    };
    articleMd += '\n\n' + interpolateCity(service.cityContentTemplate, ctx);
  }

  // City-unique FAQs composed from location data (also emitted as FAQ schema)
  if (location && cityData) {
    faqs.push(
      {
        q: `Do you provide ${service.title} across all areas of ${city}?`,
        a: `Yes. We work with clients across ${city} — including ${formatList(cityData.areas.slice(0, 5))} — and our process is fully remote-friendly. Calls, WhatsApp updates and screen-shares keep you involved at every step, so your location in ${location.state} never slows a project down.`,
      },
      {
        q: `Which industries in ${city} do you work with?`,
        a: `We build for businesses across ${city}'s key sectors, including ${formatList(cityData.industries)}. Every engagement is adapted to your industry and your customers rather than a one-size-fits-all package.`,
      }
    );
  }

  // Other-cities links: same-state cities first (geo-relevant interlinking)
  const otherCities = location
    ? [
        ...locs.filter((l) => l.state === location.state && l.slug !== location.slug),
        ...locs.filter((l) => l.state !== location.state),
      ].slice(0, 16)
    : [];

  const pageUrl = `https://www.skwebtech.in/services/${params.slug}`;
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.skwebtech.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.skwebtech.in/services' },
    ...(isPillar
      ? [{ '@type': 'ListItem', position: 3, name: service.title, item: pageUrl }]
      : [
          { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.skwebtech.in/services/${service.slug}` },
          { '@type': 'ListItem', position: 4, name: h1, item: pageUrl },
        ]),
  ];

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
          email: 'info@skwebtech.in',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
            ...(location ? { addressLocality: city } : {}),
          },
        },
        areaServed: location
          ? { '@type': 'City', name: city }
          : { '@type': 'Country', name: 'India' },
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
        itemListElement: breadcrumbItems,
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
      <section className="relative pt-24 md:pt-28 pb-10 bg-void overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-[20%] right-1/4 w-96 h-96 bg-primary-500/[0.08]" />
        <div className="glow-orb bottom-0 left-1/4 w-72 h-72 bg-secondary-500/[0.09]" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
            <span>/</span>
            {isPillar ? (
              <span className="text-slate-700">{service.title}</span>
            ) : (
              <>
                <Link href={`/services/${service.slug}`} className="hover:text-slate-900 transition-colors">
                  {service.title}
                </Link>
                <span>/</span>
                <span className="text-slate-700">{city}</span>
              </>
            )}
          </nav>

          <div className="max-w-3xl">
            <Reveal y={16}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white backdrop-blur-sm border border-slate-200 rounded-full mb-6">
                <MapPin size={14} className="text-primary-400" />
                <span className="text-slate-700 text-xs font-medium">
                  {service.title} · {location ? `${location.name}, ${location.state}` : 'All Over India'}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight mb-5">
                {h1}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">{intro}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-accent group">
                  Get Free Consultation
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:6386103750"
                  className="btn-secondary gap-2"
                >
                  <Phone size={18} /> Call Now: +91 6386103750
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-5 mt-8">
                {['80+ Projects', '10+ Years Experience', 'Trusted by 100+ Clients'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-slate-700 text-sm">
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
      <section className="relative py-10 md:py-10 bg-void">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-3xl border-l-2 border-primary-500/40 pl-6">
              <p className="text-lg text-slate-600 leading-relaxed">{subIntro}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-10 md:py-10 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="glow-orb top-[20%] right-[8%] w-80 h-80 bg-primary-500/[0.05]" />

        <div className="container-custom relative z-10">
          <div className="mb-8 text-center">
            <Reveal y={14}>
              <span className="badge-chip mb-4">What We Offer</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-900">
                {service.title} Services in {city}
              </h2>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <StaggerItem key={feature.title} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-10 md:py-10 bg-void">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <Reveal y={14}>
              <span className="badge-chip mb-4">Why Choose Us</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                Why SK WebTech for {service.title} in {city}?
              </h2>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="text-center rounded-2xl border border-slate-200/70 bg-white p-6 h-full transition-colors duration-300 hover:border-primary-500/25">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{interpolate(benefit.desc, city)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-10 md:py-10 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-custom text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">
              Technologies We Use
            </h2>
            <p className="text-slate-600 mb-10">Industry-leading tools for best-in-class results</p>
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

      {/* Long-form SEO content — unique per service, plus a unique city-specific
          section composed from location_content (industries, areas, city intro) */}
      {articleMd && (
        <section className="relative py-10 md:py-10 bg-void">
          <div className="container-custom">
            <div
              className="max-w-3xl mx-auto prose prose-lg
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-700 prose-p:leading-relaxed
                prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900
                prose-ul:text-slate-700 prose-li:marker:text-primary-400"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(articleMd) }}
            />
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="relative py-10 md:py-10 bg-void">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Reveal y={14}>
                <span className="badge-chip mb-4">FAQs</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </Reveal>
            </div>

            <StaggerContainer className="space-y-5">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/25">
                    <h3 className="font-heading font-semibold text-slate-900 mb-3 flex items-start gap-3">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.color} text-white text-xs flex items-center justify-center font-bold mt-0.5`}>
                        Q
                      </span>
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-9">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-10 md:py-10 bg-void overflow-hidden">
        <div className="glow-orb top-0 left-1/4 w-96 h-96 bg-primary-500/[0.1]" />
        <div className="glow-orb bottom-0 right-1/4 w-72 h-72 bg-secondary-500/[0.1]" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-grid opacity-40 mask-radial-fade pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

        <div className="container-custom relative z-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Ready to Get Started with {service.title} in {city}?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
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

      {/* Other services — internal linking across the service lattice */}
      {otherServices.length > 0 && (
        <section className="relative py-10 bg-void">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container-custom">
            <h2 className="text-xl font-heading font-semibold text-slate-900 mb-6 text-center">
              {location ? `Other Services We Offer in ${city}` : 'Explore Our Other Services'}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherServices.map((t) => (
                <Link
                  key={t.slug}
                  href={location ? `/services/${t.slug}-in-${location.slug}` : `/services/${t.slug}`}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm rounded-full hover:border-primary-500/40 hover:text-primary-600 transition-all"
                >
                  {location ? `${t.title} in ${city}` : t.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pillar page: hub linking to every city page (hub-and-spoke SEO architecture).
          City page: same-state cities first, then metros — plus a link back to the hub. */}
      {isPillar ? (
        <section className="relative py-10 bg-void-50">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container-custom">
            <h2 className="text-xl font-heading font-semibold text-slate-900 mb-2 text-center">
              {service.title} Across India — Cities We Serve
            </h2>
            <p className="text-sm text-slate-500 text-center mb-6">
              Local expertise, delivered remotely — pick your city for pricing and details
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {locs.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${service.slug}-in-${loc.slug}`}
                  className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-full hover:border-primary-500/40 hover:text-primary-600 transition-all"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="relative py-10 bg-void-50">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container-custom">
            <h2 className="text-xl font-heading font-semibold text-slate-900 mb-6 text-center">
              {service.title} in Other Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${service.slug}-in-${loc.slug}`}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm rounded-full hover:border-primary-500/40 hover:text-primary-600 transition-all"
                >
                  {service.title} in {loc.name}
                </Link>
              ))}
              <Link
                href={`/services/${service.slug}`}
                className="px-4 py-2 bg-primary-500/[0.06] border border-primary-500/25 text-primary-600 text-sm font-medium rounded-full hover:border-primary-500/50 transition-all"
              >
                View All Cities →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
