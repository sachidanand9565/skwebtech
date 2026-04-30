import Link from 'next/link';
import Image from 'next/image';
import {
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, MessageSquare, ExternalLink, Globe, ShoppingCart,
  Search, Smartphone, Palette, Settings,
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
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
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/sachidanandkushwaha.sachidanandkushwaha' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/Sachida38689078' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/sachidanand-kushwaha' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/sachidanand.kushwaha/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400" role="contentinfo">
      {/* WhatsApp Platform Banner */}
      <div className="border-b border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <MessageSquare size={22} className="text-white" />
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
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
            >
              Launch Platform <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900 border border-white/10">
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
                  SK<span className="text-indigo-400">WebTech</span>
                </span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium mt-0.5">IT Solutions</span>
              </div>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed text-sm max-w-xs">
              Your trusted digital partner for professional web development, e-commerce, SEO, and IT solutions. We help businesses grow online with cutting-edge technology.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-indigo-600 text-gray-400 hover:text-white transition-all"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-gray-500 hover:text-indigo-400 transition-colors text-sm group"
                  >
                    <ArrowRight size={13} className="mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-gray-500 hover:text-indigo-400 transition-colors text-sm group"
                  >
                    <ArrowRight size={13} className="mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
                  <MessageSquare size={13} />
                  WhatsApp Platform
                  <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[9px] font-bold rounded uppercase tracking-wide">New</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Remote services available worldwide<br />
                  Based in India
                </span>
              </li>
              <li>
                <a href="tel:6386103750" className="flex items-center gap-3 text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                  <Phone size={16} className="text-indigo-400 flex-shrink-0" />
                  +91 6386103750
                </a>
              </li>
              <li>
                <a href="mailto:sachi274406@gmail.com" className="flex items-center gap-3 text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                  <Mail size={16} className="text-indigo-400 flex-shrink-0" />
                  sachi274406@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className="text-gray-400 font-medium block mb-1">Business Hours</span>
                Mon – Fri: 9:00 AM – 6:00 PM<br />
                Sat: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-600 text-xs">
              © {currentYear} SK WebTech. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/services" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Services</Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
