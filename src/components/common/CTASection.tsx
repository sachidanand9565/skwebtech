import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, Star } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: 'primary' | 'gradient';
}

export default function CTASection({
  title = 'Ready to Transform Your Digital Presence?',
  subtitle = "Let's discuss your project and see how we can help your business grow. Get a free consultation today!",
  primaryCTA = { text: 'Get Free Consultation', href: '/contact' },
  secondaryCTA = { text: 'Call Us Now', href: 'tel:6386103750' },
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-950">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Star rating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 rounded-full mb-7 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/70 text-sm">Trusted by 100+ businesses across India</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            {title.includes('?') ? (
              <>
                {title.split('?')[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">?</span>
              </>
            ) : (
              <span>{title}</span>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href={primaryCTA.href}
              className="btn-accent text-base px-8 py-4 w-full sm:w-auto text-lg"
            >
              {primaryCTA.text}
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 text-white font-medium rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all w-full sm:w-auto text-base"
            >
              <Phone size={18} />
              {secondaryCTA.text}
            </a>
          </div>

          {/* WhatsApp quick link */}
          <a
            href="https://wa.me/916386103750?text=Hi%20SK%20WebTech!%20I%20would%20like%20to%20get%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
          >
            <MessageCircle size={16} />
            Or chat directly on WhatsApp - we reply in minutes
          </a>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/8">
            {[
              '🚀 Fast Delivery',
              '💰 Transparent Pricing',
              '🛡️ 24/7 Support',
              '✅ Free Consultation',
            ].map((item) => (
              <span key={item} className="text-slate-500 text-sm">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
