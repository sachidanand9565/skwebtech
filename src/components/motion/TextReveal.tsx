'use client';

/**
 * Split-text reveal — words rise out of a clipping mask one by one.
 * The full string stays in the DOM as real text, so SEO and copy/paste work.
 *
 * mode:
 *  - 'view'  (default) → animates when scrolled into view
 *  - 'mount' → animates immediately on mount; use for above-the-fold content
 *              (hero headlines) so it never waits on scroll detection
 */

import { motion, useReducedMotion } from 'framer-motion';
import { createElement } from 'react';

interface TextRevealProps {
  text: string;
  /** Wrapping element, e.g. 'h1', 'p', 'span' */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  /** Seconds between each word */
  stagger?: number;
  once?: boolean;
  mode?: 'view' | 'mount';
}

export default function TextReveal({
  text,
  as = 'span',
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
  mode = 'view',
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    return createElement(as, { className }, text);
  }

  const visible = { y: '0%', opacity: 1 };
  const animProps =
    mode === 'mount'
      ? { animate: visible }
      : { whileInView: visible, viewport: { once, margin: '-60px' } };

  // gradient-text (bg-clip) breaks inside transformed/overflow-hidden children,
  // so apply it per-word on the innermost span instead of the wrapper
  const hasGradient = className?.includes('gradient-text') ?? false;
  const wrapperClass = hasGradient ? className!.replace('gradient-text', '').trim() : className;

  return createElement(
    as,
    { className: wrapperClass },
    words.flatMap((word, i) => [
      <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-baseline">
        <motion.span
          className={hasGradient ? 'inline-block gradient-text' : 'inline-block'}
          initial={{ y: '112%', opacity: 0 }}
          {...animProps}
          transition={{
            duration: 0.75,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      </span>,
      // real space between the inline-blocks so words don't fuse together
      i < words.length - 1 ? ' ' : null,
    ])
  );
}
