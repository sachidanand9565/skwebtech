import Link from 'next/link';
import Image from 'next/image';
import {
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, ExternalLink, Globe, ShoppingCart,
  Search, Smartphone, Palette, Settings,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  { name: 'Refund Policy', href: '/refund-policy' },
];

const serviceLinks = [
  { name: 'Web Development', href: '/services#web-development', icon: Globe },
  { name: 'E-Commerce Solutions', href: '/services#ecommerce', icon: ShoppingCart },
  { name: 'SEO Optimization', href: '/services#seo', icon: Search },
  { name: 'App Development', href: '/services#app-development', icon: Smartphone },
  { name: 'UI/UX Design', href: '/services#uiux', icon: Palette },
  { name: 'Maintenance & Support', href: '/services#maintenance', icon: Settings },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61591755982616' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/Sachida38689078' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sk-webtech-40a86441b' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/skwebtech' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-void text-slate-400 overflow-hidden" role="contentinfo">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-dots opacity-25 mask-fade-bottom pointer-events-none" />
      <div className="glow-orb -top-32 left-1/4 w-[480px] h-[280px] bg-primary-500/[0.07]" />
      <div className="glow-orb -bottom-24 right-1/5 w-[420px] h-[260px] bg-secondary-500/[0.07]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      {/* WhatsApp Platform Banner */}
      <div className="relative border-b border-white/5">
        <div className="container-custom py-6">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl px-6 py-5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
                  <WhatsAppIcon size={24} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-white font-heading font-bold text-base">WhatsApp Business Platform</p>
                    <span className="px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wide">New</span>
                  </div>
                  <p className="text-green-400/80 text-sm">Connect your WhatsApp Business, run campaigns & automate customer communication</p>
                </div>
              </div>
              <a
                href="https://wa.skwebtech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Launch Platform <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-void-50 border border-white/10 transition-all duration-300 group-hover:border-primary-500/40 group-hover:shadow-glow-sm">
                <Image
                  src="/images/logo.png"
                  alt="SK WebTech logo"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full scale-[1.15]"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg text-white tracking-tight">
                  SK<span className="gradient-text">WebTech</span>
                </span>
                <span className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-medium mt-0.5">IT Solutions</span>
              </div>
            </Link>
            <p className="text-slate-500 mb-6 leading-relaxed text-sm max-w-xs">
              Your trusted digital partner for professional web development, e-commerce, SEO, and IT solutions. We help businesses grow online with cutting-edge technology.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-center text-slate-400
                             hover:text-void hover:bg-primary-500 hover:border-primary-500 hover:shadow-glow-sm hover:-translate-y-0.5
                             transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/[0.06] border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-green-400 text-xs font-medium">Available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-[0.18em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-slate-500 hover:text-primary-400 transition-colors text-sm group"
                  >
                    <ArrowRight size={13} className="mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-[0.18em] mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-slate-500 hover:text-primary-400 transition-colors text-sm group"
                  >
                    <ArrowRight size={13} className="mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.skwebtech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                >
                  <WhatsAppIcon size={13} />
                  WhatsApp Platform
                  <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[9px] font-bold rounded uppercase tracking-wide">New</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-[0.18em] mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500 text-sm leading-relaxed">
                  Remote services available worldwide<br />
                  Based in India
                </span>
              </li>
              <li>
                <a href="tel:9654603750" className="flex items-center gap-3 text-slate-500 hover:text-primary-400 transition-colors text-sm">
                  <Phone size={16} className="text-primary-400 flex-shrink-0" />
                  +91 9654603750
                </a>
              </li>
              <li>
                <a href="mailto:info@skwebtech.in" className="flex items-center gap-3 text-slate-500 hover:text-primary-400 transition-colors text-sm">
                  <Mail size={16} className="text-primary-400 flex-shrink-0" />
                  info@skwebtech.in
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="text-slate-400 font-medium block mb-1">Business Hours</span>
                Mon – Fri: 9:00 AM – 6:00 PM<br />
                Sat: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-slate-600 text-xs">
              © {currentYear} SK WebTech. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/terms-and-conditions" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms & Conditions</Link>
              <Link href="/refund-policy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Refund Policy</Link>
              <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
