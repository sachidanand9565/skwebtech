'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HandoffParams {
  txn: string;
  amount: string;
  return: string;
  sig: string;
}

export default function GatewayCheckoutPage() {
  const [params, setParams] = useState<HandoffParams | null>(null);
  const [error, setError] = useState('');
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const txn = sp.get('txn');
    const amount = sp.get('amount');
    const ret = sp.get('return');
    const sig = sp.get('sig');
    if (!txn || !amount || !ret || !sig) {
      setError('Invalid or incomplete payment request');
      return;
    }
    setParams({ txn, amount, return: ret, sig });
  }, []);

  async function payNow() {
    if (!params) return;
    setError('');
    setPaying(true);
    try {
      const res = await fetch('/api/gateway/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      const data = await res.json();
      if (!res.ok || !data?.redirectUrl) {
        setError(data?.error || 'Failed to start payment');
        setPaying(false);
        return;
      }
      window.location.href = data.redirectUrl;
    } catch {
      setError('Failed to start payment');
      setPaying(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[#050816] relative overflow-hidden">
      {/* Ambient glow — echoes the main site's dark hero background */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src="/images/logo.png" alt="SK WebTech" width={28} height={28} className="rounded" />
          <span className="text-white font-semibold tracking-tight">
            SK<span className="text-cyan-400">WebTech</span>
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
          <div className="px-7 pt-7 pb-6 text-center border-b border-slate-100">
            <p className="text-[11px] font-semibold tracking-widest text-indigo-500 uppercase mb-1">
              Secure Checkout
            </p>
            <h1 className="text-lg font-bold text-slate-900">Complete Your Payment</h1>
          </div>

          <div className="px-7 py-6">
            {error ? (
              <div className="text-center py-6">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            ) : !params ? (
              <div className="text-center py-6">
                <p className="text-sm text-slate-400">Loading payment details…</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="text-center py-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Amount to pay</p>
                  <p className="text-4xl font-bold text-slate-900 tracking-tight">
                    ₹{Number(params.amount).toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-dashed border-slate-200 pt-3">
                  <span>Order ID</span>
                  <span className="font-mono text-slate-500">{params.txn}</span>
                </div>

                <button
                  onClick={payNow}
                  disabled={paying}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-50 shadow-lg shadow-indigo-600/25"
                >
                  {paying ? 'Redirecting…' : 'Pay Now'}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  256-bit encrypted &middot; Powered by PhonePe
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-5">
          SK WebTech Enterprise
        </p>
      </div>
    </div>
  );
}
