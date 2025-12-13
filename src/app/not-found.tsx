/**
 * Not Found Page (404)
 * Custom 404 error page
 */

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <span className="text-9xl md:text-[200px] font-heading font-bold text-primary-100">
              404
            </span>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary w-full sm:w-auto">
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
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Or check out these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
