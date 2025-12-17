/**
 * Footer Component
 * Professional footer with contact info, quick links, and social media
 */

import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react';

// Quick links configuration
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Services links
const serviceLinks = [
  { name: 'Web Development', href: '/services#web-development' },
  { name: 'E-Commerce Solutions', href: '/services#ecommerce' },
  { name: 'SEO Optimization', href: '/services#seo' },
  { name: 'App Development', href: '/services#app-development' },
  { name: 'UI/UX Design', href: '/services#uiux' },
  { name: 'Maintenance & Support', href: '/services#maintenance' },
];

// Social media links
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/skwebtech' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/skwebtech' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/skwebtech' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/skwebtech' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                WebTech
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for professional web development, IT solutions, 
              and digital transformation. We help businesses grow online with 
              cutting-edge technology.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center
                           hover:bg-primary-600 transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-gray-400 hover:text-primary-400 
                             transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 
                               group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-gray-400 hover:text-primary-400 
                             transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 
                               group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Tech Street, Suite 456<br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-gray-400 
                           hover:text-primary-400 transition-colors duration-200"
                >
                  <Phone size={20} className="text-primary-400 flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@skwebtech.in"
                  className="flex items-center space-x-3 text-gray-400 
                           hover:text-primary-400 transition-colors duration-200"
                >
                  <Mail size={20} className="text-primary-400 flex-shrink-0" />
                  <span>hello@skwebtech.in</span>
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                <span className="text-gray-400 font-medium">Business Hours:</span><br />
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} SK WebTech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
