/**
 * Header Component
 * Sticky navigation header with logo, navigation links, and CTA button
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

// Navigation links configuration
const navigationLinks = [
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

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-safari shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 z-50"
            aria-label="SK WebTech - Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-gray-900">
                WebTech
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">
                IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 
                         font-medium rounded-lg hover:bg-primary-50 
                         transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="btn-accent text-sm">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-24 px-6 pb-6 h-full">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-gray-700 
                           hover:text-primary-600 hover:bg-primary-50 
                           rounded-lg transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-accent w-full justify-center text-lg"
              >
                Get Free Quote
              </Link>
              <p className="text-center text-gray-500 text-sm mt-4">
                Call us: <a href="tel:+1234567890" className="text-primary-600">+1 234 567 890</a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
