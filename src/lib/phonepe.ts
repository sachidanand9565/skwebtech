/**
 * src/lib/phonepe.ts
 * PhonePe PG Checkout v2 (OAuth) — initiate-only. This app is the "approved
 * payment-receiving URL" for the SK WebTech PhonePe merchant account, so
 * wa.skwebtech.in hands checkout off here (see /api/gateway/pay) instead of
 * calling PhonePe directly, which PhonePe rejects at the final payment step.
 *
 * Only the initiate call lives here — status verification and crediting
 * stay on wa.skwebtech.in, which owns the actual plan/wallet data.
 */

const AUTH_BASE = {
  sandbox:    'https://api-preprod.phonepe.com/apis/pg-sandbox',
  production: 'https://api.phonepe.com/apis/identity-manager',
};
const PG_BASE = {
  sandbox:    'https://api-preprod.phonepe.com/apis/pg-sandbox',
  production: 'https://api.phonepe.com/apis/pg',
};

function env(): 'sandbox' | 'production' {
  return process.env.PHONEPE_ENV === 'production' ? 'production' : 'sandbox';
}

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt - 60 > Date.now() / 1000) {
    return cachedToken.token;
  }

  const clientId     = process.env.PHONEPE_CLIENT_ID;
  const clientSecret = process.env.PHONEPE_CLIENT_SECRET;
  const clientVersion = process.env.PHONEPE_CLIENT_VERSION || '1';
  if (!clientId || !clientSecret) throw new Error('PhonePe is not configured (PHONEPE_CLIENT_ID / PHONEPE_CLIENT_SECRET missing)');

  const body = new URLSearchParams({
    client_id:      clientId,
    client_version: clientVersion,
    client_secret:  clientSecret,
    grant_type:     'client_credentials',
  });

  const res = await fetch(`${AUTH_BASE[env()]}/v1/oauth/token`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    body.toString(),
  });
  const data = await res.json();
  if (!res.ok || !data?.access_token) {
    throw new Error(data?.message || 'Failed to obtain PhonePe access token');
  }

  cachedToken = { token: data.access_token, expiresAt: Number(data.expires_at) || (Date.now() / 1000 + 900) };
  return cachedToken.token;
}

export interface PhonePeInitiateOptions {
  amountRupees:    number;
  merchantOrderId: string;
  merchantUserId:  string;
  redirectUrl:     string;
}

export async function initiatePhonePePayment(opts: PhonePeInitiateOptions): Promise<{ redirectUrl: string }> {
  const token = await getAccessToken();

  const payload = {
    merchantOrderId: opts.merchantOrderId,
    amount:          Math.round(opts.amountRupees * 100), // paise
    expireAfter:     1200,
    metaInfo:        { udf1: opts.merchantUserId },
    paymentFlow: {
      type:    'PG_CHECKOUT',
      message: 'Payment for SK WEBTECH',
      merchantUrls: { redirectUrl: opts.redirectUrl },
    },
  };

  const res = await fetch(`${PG_BASE[env()]}/checkout/v2/pay`, {
    method:  'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:  `O-Bearer ${token}`,
      accept:         'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();

  if (!res.ok || !data?.redirectUrl) {
    throw new Error(data?.message || 'Failed to initiate PhonePe payment');
  }
  return { redirectUrl: data.redirectUrl };
}

export interface PhonePeStatusResult {
  state: string; // COMPLETED | PENDING | FAILED | ...
  amountRupees: number;
  transactionId: string | null;
  raw: unknown;
}

// Used only by the standalone /gateway-test harness on this app — the real
// wa.skwebtech.in integration verifies status itself (lib/phonepeConfirm.ts).
export async function checkPhonePeStatus(merchantOrderId: string): Promise<PhonePeStatusResult> {
  const token = await getAccessToken();
  const res = await fetch(`${PG_BASE[env()]}/checkout/v2/order/${merchantOrderId}/status`, {
    method:  'GET',
    headers: { Authorization: `O-Bearer ${token}`, accept: 'application/json' },
  });
  const data = await res.json();
  const payment = Array.isArray(data?.paymentDetails) ? data.paymentDetails[0] : null;
  return {
    state:         data?.state || 'UNKNOWN',
    amountRupees:  Number(data?.amount || 0) / 100,
    transactionId: payment?.transactionId || data?.orderId || null,
    raw:           data,
  };
}
