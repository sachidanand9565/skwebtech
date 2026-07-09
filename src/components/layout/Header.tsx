'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ExternalLink, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        isScrolled
          ? 'bg-void/75 backdrop-blur-safari border-b border-white/[0.06] shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-50 flex-shrink-0 group" aria-label="SK WebTech - Home">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-void-50 border border-white/10 transition-all duration-300 group-hover:border-primary-500/40 group-hover:shadow-glow-sm">
              <Image
                src="/images/logo.png"
                alt="SK WebTech logo"
                width={40}
                height={40}
                className="object-cover w-full h-full scale-[1.15]"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                SK<span className="gradient-text">WebTech</span>
              </span>
              <span className="text-[10px] -mt-0.5 hidden sm:block font-medium tracking-[0.25em] uppercase text-slate-500">
                IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] px-1.5 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    active ? 'text-void' : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-primary-500"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* TEMP-WA-DISABLED: WhatsApp Platform button — uncomment to bring back
            <a
              href="https://wa.skwebtech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold rounded-full hover:bg-green-500/20 hover:border-green-400/50 transition-all hover:-translate-y-0.5 group"
            >
              <WhatsAppIcon size={14} className="animate-pulse-slow" />
              WA Platform
              <ExternalLink size={11} className="opacity-70 group-hover:opacity-100" />
            </a>
            */}

            {/* CTA */}
            <Link href="/contact" className="btn-accent text-sm px-5 py-2.5 group">
              Free Quote
              <ArrowUpRight size={15} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl z-50 text-white bg-white/[0.04] border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-void z-40 lg:hidden"
            >
              {/* Ambient orbs */}
              <div className="glow-orb top-1/4 right-1/4 w-64 h-64 bg-primary-500/10" />
              <div className="glow-orb bottom-1/3 left-1/4 w-48 h-48 bg-secondary-500/10" />
              <div className="absolute inset-0 bg-dots opacity-30 mask-radial-fade" />

              <div className="relative z-10 flex flex-col pt-24 px-6 pb-8 h-full overflow-y-auto">
                <nav className="flex flex-col gap-1 mb-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 text-lg font-heading font-medium rounded-xl transition-all ${
                          isActive(link.href)
                            ? 'text-primary-400 bg-primary-500/[0.06] border border-primary-500/20'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                        <ArrowUpRight size={18} className="opacity-40" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* TEMP-WA-DISABLED: WhatsApp Platform mobile card — uncomment to bring back
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.45 }}
                  className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">WhatsApp Platform</p>
                      <p className="text-green-400 text-xs">Manage campaigns & automation</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.skwebtech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-all"
                  >
                    Open Platform <ExternalLink size={14} />
                  </a>
                </motion.div>
                */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.45 }}
                  className="mt-auto pt-6 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-accent w-full justify-center text-base mb-3"
                  >
                    Get Free Quote
                  </Link>
                  <p className="text-center text-white/40 text-sm">
                    Call: <a href="tel:9654603750" className="text-primary-400 hover:text-primary-300">+91 9654603750</a>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
