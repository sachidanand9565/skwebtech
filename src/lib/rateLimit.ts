import type { NextRequest } from 'next/server';

/**
 * In-memory sliding-window limiter, one bucket per key (usually client IP).
 *
 * Per serverless instance only — a bot spread across instances can exceed it,
 * so treat it as a speed bump alongside the captcha/honeypot, not a guarantee.
 */
export function createRateLimiter(limit: number, windowMs: number) {
  const hits = new Map<string, number[]>();

  return function isLimited(key: string): boolean {
    const now = Date.now();
    const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
    if (recent.length >= limit) {
      hits.set(key, recent);
      return true;
    }
    recent.push(now);
    hits.set(key, recent);
    if (hits.size > 5000) {
      hits.forEach((times, k) => {
        if (times.every((t: number) => now - t >= windowMs)) hits.delete(k);
      });
    }
    return false;
  };
}

export function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}
