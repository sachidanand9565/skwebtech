import type { Metadata } from 'next';

export const SITE_URL = 'https://www.skwebtech.in';
export const BRAND = 'SK WebTech';

/**
 * Share-card image for Open Graph / Twitter.
 *
 * Every page that sets its own `openGraph` must include this: Next.js replaces
 * the parent's openGraph object wholesale, so a page-level openGraph without
 * `images` silently drops the layout's image. That is why most pages were
 * shipping with no og:image at all.
 */
export function ogImage(title?: string, subtitle?: string) {
  const params = new URLSearchParams();
  if (title) params.set('title', title);
  if (subtitle) params.set('subtitle', subtitle);
  const qs = params.toString();
  return {
    url: `${SITE_URL}/og${qs ? `?${qs}` : ''}`,
    width: 1200,
    height: 630,
    alt: title ? `${title} | ${BRAND}` : `${BRAND} - Professional Web & IT Solutions`,
  };
}

/**
 * Page title that never duplicates the brand.
 *
 * The root layout appends " | SK WebTech" via its title template. Titles that
 * already carry the brand (e.g. DB-driven service templates an admin can edit)
 * are returned as absolute so the template is skipped.
 */
export function pageTitle(title: string): Metadata['title'] {
  return title.includes(BRAND) ? { absolute: title } : title;
}
