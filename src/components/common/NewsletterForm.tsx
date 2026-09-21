'use client';

import { useState, useRef, FormEvent } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const renderedAt = useRef(Date.now());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: honeypot, renderedAt: renderedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setMessage(data.error || 'Could not subscribe right now. Please try again.');
        return;
      }
      setStatus('done');
      setMessage(data.alreadySubscribed ? "You're already subscribed — thanks!" : "You're subscribed. Thanks for joining!");
    } catch {
      setStatus('error');
      setMessage('Could not reach the server. Please check your connection and try again.');
    }
  };

  if (status === 'done') {
    return (
      <p className="flex items-center justify-center gap-2 text-sm font-medium text-green-700" role="status">
        <CheckCircle size={16} /> {message}
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-3 max-w-sm mx-auto text-left">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded-full bg-white border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 text-sm transition-all"
        />
        {/* Honeypot — hidden from people, auto-filled by bots */}
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="newsletter-website">Website</label>
          <input
            id="newsletter-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-accent whitespace-nowrap flex items-center gap-2 text-sm disabled:opacity-60"
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={15} className="animate-spin" /> Subscribing
            </>
          ) : (
            <>
              Subscribe <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {message}
        </p>
      )}
    </>
  );
}
