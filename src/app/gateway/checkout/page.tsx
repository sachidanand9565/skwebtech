'use client';
import { useEffect, useState } from 'react';

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
    <div className="max-w-md mx-auto px-4 py-32 min-h-screen">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center">
        <h1 className="text-xl font-bold text-slate-900 mb-1">SK WebTech Payment Gateway</h1>
        <p className="text-sm text-slate-500 mb-6">Secure checkout for SK WebTech Enterprise</p>

        {error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : !params ? (
          <p className="text-sm text-slate-500">Loading payment details…</p>
        ) : (
          <div className="space-y-5">
            <div className="bg-slate-50 rounded-xl border border-slate-200 py-5">
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Amount to pay</p>
              <p className="text-3xl font-bold text-slate-900">₹{Number(params.amount).toLocaleString()}</p>
              <p className="text-xs text-slate-400 font-mono mt-2">{params.txn}</p>
            </div>

            <button
              onClick={payNow}
              disabled={paying}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {paying ? 'Starting…' : 'Pay Now'}
            </button>
            <p className="text-xs text-slate-400">You will be redirected to PhonePe to complete your payment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
