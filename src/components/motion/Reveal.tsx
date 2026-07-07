'use client';

/**
 * Scroll-reveal wrapper — fades/slides content in when it enters the viewport.
 * Children stay server-rendered (SEO-safe); only the wrapper is a client component.
 *
 * mode:
 *  - 'view'  (default) → animates when scrolled into view
 *  - 'mount' → animates immediately on mount; use for above-the-fold content
 */

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before animating */
  delay?: number;
  duration?: number;
  /** Initial vertical offset in px */
  y?: number;
  /** Initial horizontal offset in px */
  x?: number;
  /** Animate only the first time it enters the viewport */
  once?: boolean;
  /** Start slightly scaled down for a soft pop */
  scale?: number;
  mode?: 'view' | 'mount';
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  x = 0,
  once = true,
  scale = 1,
  mode = 'view',
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  const visible = { opacity: 1, y: 0, x: 0, scale: 1 };
  const animProps =
    mode === 'mount'
      ? { animate: visible }
      : { whileInView: visible, viewport: { once, margin: '-72px' } };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y, x, scale }}
      {...animProps}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
