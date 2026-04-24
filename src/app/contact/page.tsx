import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Consultation | SK WebTech',
  description:
    'Get in touch with SK WebTech for a free consultation. Contact us for web development, e-commerce, SEO, and IT services. We respond within 24 hours.',
  keywords: ['contact SK WebTech', 'web development quote', 'IT services consultation', 'hire developers', 'free consultation'],
  alternates: { canonical: 'https://skwebtech.in/contact' },
  openGraph: {
    title: 'Contact Us | SK WebTech',
    description: 'Get in touch with us for a free consultation on your next digital project.',
    type: 'website',
    url: 'https://skwebtech.in/contact',
  },
};

const contactInfo = [
  { icon: Phone, title: 'Call Us', content: '+91 6386103750', subtext: 'Mon–Fri, 9am–6pm IST', href: 'tel:6386103750', color: 'from-blue-500 to-indigo-600' },
  { icon: Mail, title: 'Email Us', content: 'sachi274406@gmail.com', subtext: 'Reply within 24 hours', href: 'mailto:sachi274406@gmail.com', color: 'from-purple-500 to-violet-600' },
  { icon: MapPin, title: 'Location', content: 'Remote — India', subtext: 'Serving clients worldwide', href: undefined, color: 'from-emerald-500 to-green-600' },
  { icon: Clock, title: 'Business Hours', content: 'Mon–Fri: 9am–6pm', subtext: 'Sat: 10am–4pm', href: undefined, color: 'from-orange-500 to-amber-500' },
];

const faqs = [
  { q: 'How long does a typical web project take?', a: 'A simple website takes 2–4 weeks. Complex web applications may take 2–4 months. We provide a clear timeline during the initial consultation.' },
  { q: 'What is your pricing structure?', a: 'We offer fixed-price and hourly models. After understanding your requirements, we provide a detailed quote with no hidden costs.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes! We offer maintenance plans including updates, security patches, performance monitoring, and technical assistance.' },
  { q: 'Can you work with international clients?', a: 'Absolutely! We serve clients across 15+ countries. Our team is flexible with time zones to ensure smooth collaboration.' },
];

const promises = ['Free consultation, no obligation', 'Response within 24 hours', 'Transparent pricing', 'Dedicated project manager'];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-medium rounded-full mb-5 backdrop-blur-sm">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Amazing Together
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s discuss how we can transform your digital presence.
          </p>

          {/* Promise badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {promises.map((p) => (
              <div key={p} className="flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 rounded-full backdrop-blur-sm">
                <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <info.icon size={20} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1 text-sm uppercase tracking-wide">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className="text-gray-900 font-medium hover:text-indigo-600 transition-colors text-sm block mb-1">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium text-sm mb-1">{info.content}</p>
                )}
                <p className="text-xs text-gray-400">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8 text-sm">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900">Prefer WhatsApp?</h3>
                    <p className="text-green-600 text-xs font-medium">Typically reply in minutes</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Chat with us directly on WhatsApp for quick queries, project discussions, or a fast quote.
                </p>
                <a
                  href="https://wa.me/916386103750?text=Hi%20SK%20WebTech!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center py-3 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp <ArrowRight size={14} />
                </a>
              </div>

              {/* Office hours card */}
              <div className="bg-slate-950 rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', text: 'We review your message within 2 hours' },
                    { step: '02', text: 'Schedule a free 30-min discovery call' },
                    { step: '03', text: 'Receive a detailed proposal & quote' },
                    { step: '04', text: 'Project kickoff within days' },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">{step}</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">FAQ</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-card border border-gray-50">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 text-sm font-bold flex items-center justify-center mt-0.5">Q</span>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Ready to Start Your Project?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Get a free consultation and detailed quote. Our team is ready to help you achieve your digital goals.</p>
          <a href="tel:6386103750" className="btn-accent inline-flex text-lg gap-2">
            <Phone size={20} /> Call: +91 6386103750
          </a>
        </div>
      </section>
    </>
  );
}
