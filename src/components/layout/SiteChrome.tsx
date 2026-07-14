'use client';

/**
 * SiteChrome — renders public-site furniture (header, footer, floating
 * buttons, motion layer) everywhere EXCEPT the admin panel, which has its
 * own self-contained layout and must not be overlapped by the public header.
 */

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;
  return <>{children}</>;
}
