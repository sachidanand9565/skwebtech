/**
 * src/lib/gatewayRelay.ts
 * Verifies the signed handoff wa.skwebtech.in sends when it wants this
 * (PhonePe-approved) domain to actually initiate the checkout. Mirror of
 * lib/gatewayRelay.ts on the wa.skwebtech.in project — same shared secret.
 */
import { createHmac, timingSafeEqual } from 'crypto';

export interface RelayHandoff {
  txn: string;
  amountRupees: number;
  returnUrl: string;
}

export function verifyRelaySignature(handoff: RelayHandoff, sig: string): boolean {
  const secret = process.env.GATEWAY_RELAY_SECRET;
  if (!secret || !sig) return false;

  const payload = `${handoff.txn}:${handoff.amountRupees}:${handoff.returnUrl}`;
  const expected = createHmac('sha256', secret).update(payload).digest('hex');

  const a = Buffer.from(expected, 'hex');
  const b = Buffer.from(sig, 'hex');
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
