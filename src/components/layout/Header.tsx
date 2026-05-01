'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageSquare, ExternalLink } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-safari shadow-soft border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-50 flex-shrink-0" aria-label="SK WebTech - Home">
            {/* Icon - always dark bg so it looks branded on both light & dark headers */}
            <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-slate-950 shadow-soft">
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
              <span className={`font-heading font-bold text-lg tracking-tight ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`}>
                SK<span className={isScrolled || isMenuOpen ? 'text-indigo-600' : 'text-indigo-400'}>WebTech</span>
              </span>
              <span className={`text-[10px] -mt-0.5 hidden sm:block font-medium tracking-widest uppercase ${isScrolled || isMenuOpen ? 'text-gray-400' : 'text-white/50'}`}>
                IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Platform - Highlighted */}
            <a
              href="https://wa.skwebtech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
            >
              <MessageSquare size={14} className="animate-pulse-slow" />
              WA Platform
              <ExternalLink size={11} className="opacity-70 group-hover:opacity-100" />
            </a>

            {/* CTA */}
            <Link href="/contact" className="btn-accent text-sm px-5 py-2.5">
              Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-xl z-50 transition-colors ${
              isScrolled || isMenuOpen ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-slate-950 z-40 lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          {/* Gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col pt-24 px-6 pb-8 h-full overflow-y-auto">
            <nav className="flex flex-col gap-1 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3.5 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* WhatsApp Platform - Mobile highlight */}
            <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} className="text-white" />
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
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-accent w-full justify-center text-base mb-3"
              >
                Get Free Quote
              </Link>
              <p className="text-center text-white/40 text-sm">
                Call: <a href="tel:6386103750" className="text-indigo-400 hover:text-indigo-300">+91 6386103750</a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
