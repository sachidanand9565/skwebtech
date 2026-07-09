import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/common/ContactForm';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { getServices } from '@/lib/db';
import Reveal from '@/components/motion/Reveal';
import TextReveal from '@/components/motion/TextReveal';
import ParticleField from '@/components/motion/ParticleField';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Consultation | SK WebTech',
  description:
    'Get in touch with SK WebTech for a free consultation. Contact us for web development, e-commerce, SEO, and IT services. We respond within 24 hours.',
  keywords: ['contact SK WebTech', 'web development quote', 'IT services consultation', 'hire developers', 'free consultation'],
  alternates: { canonical: 'https://www.skwebtech.in/contact' },
  openGraph: {
    title: 'Contact Us | SK WebTech',
    description: 'Get in touch with us for a free consultation on your next digital project.',
    type: 'website',
    url: 'https://www.skwebtech.in/contact',
  },
};

const contactInfo = [
  { icon: Phone, title: 'Call Us', content: '+91 9654603750', subtext: 'Mon–Fri, 9am–6pm IST', href: 'tel:9654603750', color: 'from-cyan-500 to-blue-600' },
  { icon: Mail, title: 'Email Us', content: 'info@skwebtech.in', subtext: 'Reply within 24 hours', href: 'mailto:info@skwebtech.in', color: 'from-violet-500 to-purple-600' },
  { icon: MapPin, title: 'Location', content: 'Remote - India', subtext: 'Serving clients worldwide', href: undefined, color: 'from-emerald-500 to-green-600' },
  { icon: Clock, title: 'Business Hours', content: 'Mon–Fri: 9am–6pm', subtext: 'Sat: 10am–4pm', href: undefined, color: 'from-amber-500 to-orange-500' },
];

const faqs = [
  { q: 'How long does a typical web project take?', a: 'A simple website takes 2–4 weeks. Complex web applications may take 2–4 months. We provide a clear timeline during the initial consultation.' },
  { q: 'What is your pricing structure?', a: 'We offer fixed-price and hourly models. After understanding your requirements, we provide a detailed quote with no hidden costs.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes! We offer maintenance plans including updates, security patches, performance monitoring, and technical assistance.' },
  { q: 'Can you work with international clients?', a: 'Absolutely! We serve clients across 15+ countries. Our team is flexible with time zones to ensure smooth collaboration.' },
];

const promises = ['Free consultation, no obligation', 'Response within 24 hours', 'Transparent pricing', 'Dedicated project manager'];

export default async function ContactPage() {
  // Service dropdown options come from the database, so services added in the
  // admin panel show up in the form automatically
  // TEMP-WA-DISABLED: WhatsApp Business filter laga hai — hatane ke liye .filter() remove karo
  const dbServices = await getServices();
  const serviceOptions = dbServices
    .filter(({ id }) => id !== 'whatsapp-business')
    .map(({ id, title }) => ({ id, title }));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 bg-void overflow-hidden">
        <ParticleField density={0.7} />
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-[20%] right-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
        <div className="glow-orb bottom-0 left-1/4 w-72 h-72 bg-secondary-500/[0.09] animate-aurora" style={{ animationDelay: '4s' }} />

        <div className="container-custom relative z-10 text-center">
          <Reveal y={16}>
            <span className="badge-chip mb-6">Get in Touch</span>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            <TextReveal text="Let's Build Something" delay={0.1} as="span" />{' '}
            <TextReveal text="Amazing Together" delay={0.35} as="span" className="gradient-text" />
          </h1>
          <Reveal delay={0.5}>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
              Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s discuss how we can transform your digital presence.
            </p>
          </Reveal>

          {/* Promise badges */}
          <Reveal delay={0.6}>
            <div className="flex flex-wrap justify-center gap-3">
              {promises.map((p) => (
                <div key={p} className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full backdrop-blur-sm">
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-12 bg-void-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info) => (
              <StaggerItem key={info.title} className="h-full">
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-card-hover">
                  <div className="relative mb-4 w-11 h-11">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${info.color} opacity-40 blur-lg transition-opacity duration-300 group-hover:opacity-70`} />
                    <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-sm`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-1 text-sm uppercase tracking-wide">{info.title}</h3>
                  {info.href ? (
                    <a href={info.href} className="text-slate-200 font-medium hover:text-primary-300 transition-colors text-sm block mb-1">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-slate-200 font-medium text-sm mb-1">{info.content}</p>
                  )}
                  <p className="text-xs text-slate-500">{info.subtext}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="relative py-16 md:py-24 bg-void overflow-hidden">
        <div className="glow-orb top-[30%] left-[5%] w-80 h-80 bg-primary-500/[0.05]" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <Reveal x={-24} y={0} className="lg:col-span-3">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9 backdrop-blur-sm border-glow">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-slate-400 mb-8 text-sm">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
                <ContactForm services={serviceOptions} />
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp */}
              <Reveal x={24} y={0} delay={0.1}>
                <div className="rounded-2xl border border-green-500/25 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25">
                      <WhatsAppIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white">Prefer WhatsApp?</h3>
                      <p className="text-green-400 text-xs font-medium">Typically reply in minutes</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    Chat with us directly on WhatsApp for quick queries, project discussions, or a fast quote.
                  </p>
                  <a
                    href="https://wa.me/919654603750?text=Hi%20SK%20WebTech!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center py-3 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all"
                  >
                    <WhatsAppIcon size={16} /> Chat on WhatsApp <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>

              {/* What happens next */}
              <Reveal x={24} y={0} delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-void-100/80 p-6 border-glow">
                  <div className="glow-orb -top-10 -right-10 w-32 h-32 bg-secondary-500/[0.16]" />
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold mb-4 text-white">What Happens Next?</h3>
                    <div className="space-y-4">
                      {[
                        { step: '01', text: 'We review your message within 2 hours' },
                        { step: '02', text: 'Schedule a free 30-min discovery call' },
                        { step: '03', text: 'Receive a detailed proposal & quote' },
                        { step: '04', text: 'Project kickoff within days' },
                      ].map(({ step, text }) => (
                        <div key={step} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary-500/15 border border-primary-500/25 text-primary-400 text-xs font-bold flex items-center justify-center">{step}</span>
                          <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-24 bg-void-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Reveal y={14}>
                <span className="badge-chip mb-4">FAQ</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Frequently Asked Questions</h2>
              </Reveal>
            </div>
            <StaggerContainer className="space-y-4">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/25">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary-500/15 border border-primary-500/25 text-primary-400 text-sm font-bold flex items-center justify-center mt-0.5">Q</span>
                      <div>
                        <h3 className="font-heading font-semibold text-white mb-2">{faq.q}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 bg-void overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-0 left-1/3 w-96 h-96 bg-primary-500/[0.08] -translate-y-1/2" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Ready to Start Your Project?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Get a free consultation and detailed quote. Our team is ready to help you achieve your digital goals.</p>
            <a href="tel:9654603750" className="btn-accent inline-flex text-lg gap-2 px-8 py-4">
              <Phone size={20} /> Call: +91 9654603750
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
