// Prefer a dedicated SESSION_SECRET; fall back to ADMIN_PASSWORD for
// backward compatibility with existing deployments.
const SESSION_SECRET = process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || 'admin123';

// Simple Edge-compatible SHA256 helper
async function sha256(message: string): Promise<string> {
  if (typeof window !== 'undefined') return '';
  const msgBuffer = new TextEncoder().encode(message);
  
  // Use standard Web Crypto API (supported by Node, Browsers, and Edge Runtime)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function createSessionToken(): Promise<string> {
  const exp = Date.now() + 1000 * 60 * 60 * 24; // 24 hours
  const rawSignature = `${SESSION_SECRET}.${exp}`;
  const hash = await sha256(rawSignature);
  return `${exp}.${hash}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [expStr, hashValue] = parts;
  const exp = parseInt(expStr);

  if (isNaN(exp) || Date.now() > exp) {
    return false; // Expired or invalid format
  }

  // Re-verify hash
  const rawSignature = `${SESSION_SECRET}.${exp}`;
  const expectedHash = await sha256(rawSignature);

  return hashValue === expectedHash;
}
