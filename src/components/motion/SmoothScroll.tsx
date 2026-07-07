'use client';

/**
 * Lenis smooth scrolling — buttery inertial scroll across the whole site.
 * Skips itself for users who prefer reduced motion and intercepts
 * same-page anchor links so they glide instead of jumping.
 *
 * Lenis is ESM-only and loaded via dynamic import so it stays out of the
 * server bundle (avoids Next 14 vendor-chunk emission issues) and off the
 * critical client path.
 */

import { useEffect } from 'react';
import type Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lenis: Lenis | undefined;
    let rafId = 0;
    let cancelled = false;
    let onClick: ((e: MouseEvent) => void) | undefined;

    (async () => {
      const { default: LenisImpl } = await import('lenis');
      if (cancelled) return;

      lenis = new LenisImpl({
        lerp: 0.1,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Glide to same-page anchors (fixed-header offset)
      onClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest('a[href*="#"]') as HTMLAnchorElement | null;
        if (!target) return;
        const url = new URL(target.href, window.location.href);
        if (url.pathname !== window.location.pathname || !url.hash) return;
        const el = document.querySelector(url.hash);
        if (!el) return;
        e.preventDefault();
        lenis?.scrollTo(el as HTMLElement, { offset: -96 });
        history.pushState(null, '', url.hash);
      };
      document.addEventListener('click', onClick);
    })();

    return () => {
      cancelled = true;
      if (onClick) document.removeEventListener('click', onClick);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
