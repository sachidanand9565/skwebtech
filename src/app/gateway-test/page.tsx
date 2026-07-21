'use client';
import { useState } from 'react';

export default function GatewayTestPage() {
  const [amount, setAmount] = useState('10');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function startTest() {
    const amt = Number(amount);
    if (!amt || amt <= 0) { setError('Enter a valid amount'); return; }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/gateway/test-initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amt }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Failed to start test payment'); return; }
      window.location.href = data.redirectUrl;
    } catch {
      setError('Failed to start test payment');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-32 min-h-screen">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-xl font-bold text-slate-900 mb-1">PhonePe Gateway Test</h1>
        <p className="text-sm text-slate-500 mb-6">
          Internal tool — verifies checkout completes when initiated from this domain.
          Not connected to any real plan/wallet data.
        </p>

        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Amount (₹)</label>
        <input
          type="number"
          min={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

        <button
          onClick={startTest}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Starting…' : 'Start Test Payment'}
        </button>
      </div>
    </div>
  );
}
