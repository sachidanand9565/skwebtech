/**
 * CTA Section Component
 * Strong call-to-action section for conversions
 */

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'gradient';
}

export default function CTASection({
  title = "Ready to Transform Your Digital Presence?",
  subtitle = "Let's discuss your project and see how we can help your business grow. Get a free consultation today!",
  primaryCTA = { text: "Get Free Consultation", href: "/contact" },
  secondaryCTA = { text: "Call Us Now", href: "tel:+1234567890" },
  variant = 'gradient',
}: CTASectionProps) {
  const bgClasses =
    variant === 'gradient'
      ? 'bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800'
      : 'bg-primary-600';

  return (
    <section className={`${bgClasses} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-20 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 text-balance">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-100 mb-10 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              className="btn-accent text-lg px-8 py-4 w-full sm:w-auto"
            >
              {primaryCTA.text}
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 
                       bg-white/10 text-white font-medium rounded-lg
                       border border-white/20 backdrop-blur-sm
                       hover:bg-white/20 transition-all duration-200
                       w-full sm:w-auto"
            >
              <Phone size={20} className="mr-2" />
              {secondaryCTA.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
