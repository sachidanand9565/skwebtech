import crypto from 'crypto';

/**
 * Stateless math-captcha for the public contact form.
 *
 * Server ek challenge deta hai (a + b) aur ek HMAC-signed token jisme answer
 * embedded nahi hota — sirf issue-time hota hai. Submit par server user ke
 * answer se HMAC dobara compute karke token se match karta hai. Koi external
 * service ya API key nahi chahiye, aur serverless instances ke beech bhi kaam
 * karta hai kyunki secret env se aata hai.
 */

const SECRET =
  process.env.CAPTCHA_SECRET ||
  process.env.GATEWAY_RELAY_SECRET ||
  'skwebtech-captcha-fallback-secret';

// Long enough for someone to write a real message; the form also refreshes a
// stale challenge when its tab regains focus
const TTL_MS = 30 * 60 * 1000;
const MIN_AGE_MS = 1500; // isse tez submit = bot (form bharne me insaan ko waqt lagta hai)

function sign(answer: number, issuedAt: number): string {
  return crypto.createHmac('sha256', SECRET).update(`${answer}:${issuedAt}`).digest('hex');
}

export interface CaptchaChallenge {
  a: number;
  b: number;
  token: string;
}

export function createChallenge(): CaptchaChallenge {
  const a = crypto.randomInt(1, 10);
  const b = crypto.randomInt(1, 10);
  const issuedAt = Date.now();
  return { a, b, token: `${issuedAt}.${sign(a + b, issuedAt)}` };
}

export type CaptchaResult = { ok: true } | { ok: false; reason: 'missing' | 'invalid' | 'expired' | 'too-fast' | 'wrong' };

export function verifyCaptcha(token: unknown, answer: unknown): CaptchaResult {
  if (typeof token !== 'string' || answer === undefined || answer === null || `${answer}`.trim() === '') {
    return { ok: false, reason: 'missing' };
  }
  const [issuedAtStr, sig] = token.split('.');
  const issuedAt = Number(issuedAtStr);
  const num = Number(`${answer}`.trim());
  if (!issuedAtStr || !sig || !Number.isFinite(issuedAt) || !Number.isFinite(num)) {
    return { ok: false, reason: 'invalid' };
  }
  const age = Date.now() - issuedAt;
  if (age > TTL_MS) return { ok: false, reason: 'expired' };
  if (age < MIN_AGE_MS) return { ok: false, reason: 'too-fast' };

  const expected = Buffer.from(sign(num, issuedAt));
  const provided = Buffer.from(sig);
  if (expected.length !== provided.length || !crypto.timingSafeEqual(expected, provided)) {
    return { ok: false, reason: 'wrong' };
  }
  return { ok: true };
}
