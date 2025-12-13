/**
 * Error Component
 * Displays when an error occurs
 */

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container-custom py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle size={40} className="text-red-600" />
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error has occurred.
            Please try again or contact support if the problem persists.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={reset} className="btn-primary w-full sm:w-auto">
              <RefreshCw size={18} className="mr-2" />
              Try Again
            </button>
            <Link href="/" className="btn-secondary w-full sm:w-auto">
              <Home size={18} className="mr-2" />
              Go to Homepage
            </Link>
          </div>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
              <p className="text-sm font-mono text-gray-700 break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
