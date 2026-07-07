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
    <section className="relative min-h-screen flex items-center justify-center bg-void overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 mask-radial-fade pointer-events-none" />
      <div className="glow-orb top-1/4 left-1/3 w-96 h-96 bg-rose-500/[0.07]" />
      <div className="glow-orb bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/[0.08]" />

      <div className="container-custom py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-rose-500/10 border border-rose-500/25 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle size={40} className="text-rose-400" />
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error has occurred.
            Please try again or contact support if the problem persists.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={reset} className="btn-accent w-full sm:w-auto">
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
            <div className="mt-8 p-4 bg-white/[0.04] border border-white/10 rounded-xl text-left">
              <p className="text-sm font-mono text-slate-300 break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
