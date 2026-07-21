'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface StatusResult {
  state: string;
  amountRupees: number;
  transactionId: string | null;
}

const STATE_COLORS: Record<string, string> = {
  COMPLETED: 'text-green-600 bg-green-50 border-green-200',
  PENDING:   'text-amber-600 bg-amber-50 border-amber-200',
  FAILED:    'text-red-600 bg-red-50 border-red-200',
};

export default function GatewayTestResultPage() {
  const [txn, setTxn] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusResult | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get('txn');
    setTxn(t);
    if (!t) { setError('No transaction reference in URL'); setLoading(false); return; }
    fetch(`/api/gateway/test-status?txn=${encodeURIComponent(t)}`)
      .then((r) => r.json())
      .then((d) => { if (d.error) setError(d.error); else setStatus(d); })
      .catch(() => setError('Failed to check payment status'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-md mx-auto px-4 py-32 min-h-screen">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center">
        <h1 className="text-xl font-bold text-slate-900 mb-1">Test Payment Result</h1>
        <p className="text-xs text-slate-400 font-mono mb-6">{txn}</p>

        {loading ? (
          <p className="text-sm text-slate-500">Checking status with PhonePe…</p>
        ) : error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : status ? (
          <div className="space-y-3">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border ${STATE_COLORS[status.state] || 'text-slate-600 bg-slate-50 border-slate-200'}`}>
              {status.state}
            </span>
            <p className="text-sm text-slate-600">Amount: ₹{status.amountRupees.toLocaleString()}</p>
            {status.transactionId && (
              <p className="text-xs text-slate-400 font-mono break-all">PhonePe txn: {status.transactionId}</p>
            )}
            {status.state === 'COMPLETED' && (
              <p className="text-sm text-green-700 font-medium pt-2">
                ✅ Domain fix works — checkout completed successfully from this site.
              </p>
            )}
          </div>
        ) : null}

        <Link href="/gateway-test" className="inline-block mt-8 text-sm text-indigo-600 hover:underline">
          ← Run another test
        </Link>
      </div>
    </div>
  );
}
