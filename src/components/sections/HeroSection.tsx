/**
 * Hero Section Component
 * Main hero section with headline, subtext, and CTA buttons
 */

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

// Trust badges / features
const trustBadges = [
  '500+ Projects Delivered',
  '100+ Happy Clients',
  '10+ Years Experience',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-primary-700 text-sm font-medium">
                Trusted IT Partner Since 2014
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Grow Your Business With{' '}
              <span className="gradient-text">Professional Web & IT Solutions</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We help businesses transform their digital presence with cutting-edge 
              web development, e-commerce solutions, and comprehensive IT services 
              tailored to your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link href="/contact" className="btn-accent text-lg px-8 py-4 w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center text-gray-600">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:pl-8">
            {/* Main image container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-10 blur-2xl" />
              
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 shadow-soft-lg">
                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-primary-100 text-sm">Projects Completed</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-primary-100 text-sm">Happy Clients</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-primary-100 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-primary-100 text-sm">Support Available</div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-lg px-6 py-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Rated 5.0</div>
                    <div className="text-sm text-gray-500">Based on 200+ reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
