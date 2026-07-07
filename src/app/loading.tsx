/**
 * Loading Component
 * Displays while page content is loading
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-void">
      <div className="text-center">
        {/* Orbital spinner */}
        <div className="relative mx-auto h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/[0.08]" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary-500" />
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-secondary-500" style={{ animationDirection: 'reverse', animationDuration: '1.4s' }} />
          <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-primary-400 shadow-glow-sm" />
        </div>

        {/* Loading text */}
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-slate-500">Loading</p>
      </div>
    </div>
  );
}
