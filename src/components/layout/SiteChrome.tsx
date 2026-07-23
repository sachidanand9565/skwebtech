'use client';

/**
 * SiteChrome — renders public-site furniture (header, footer, floating
 * buttons, motion layer) everywhere EXCEPT the admin panel and the payment
 * gateway pages, which are self-contained and must not be overlapped by the
 * public header/footer.
 */

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;
  if (pathname === '/gateway' || pathname.startsWith('/gateway/')) return null;
  return <>{children}</>;
}
