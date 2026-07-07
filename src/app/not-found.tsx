/**
 * Not Found Page (404)
 * Custom 404 error page
 */

'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-void overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
      <div className="glow-orb top-1/4 left-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
      <div className="glow-orb bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/[0.09] animate-aurora" style={{ animationDelay: '4s' }} />

      <div className="container-custom py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-6 relative">
            <span className="text-9xl md:text-[200px] font-heading font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary-500/30 via-secondary-500/20 to-transparent select-none">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-9xl md:text-[200px] font-heading font-bold leading-none gradient-text opacity-20 blur-2xl select-none" aria-hidden>
              404
            </span>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-accent w-full sm:w-auto">
              <Home size={18} className="mr-2" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary w-full sm:w-auto"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <p className="text-slate-500 mb-4">Or check out these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Our Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:border-primary-500/40 hover:text-primary-300 transition-all"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
