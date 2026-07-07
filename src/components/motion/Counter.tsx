'use client';

/**
 * Animated statistic — counts up from 0 when scrolled into view.
 * Accepts values like "80+", "98%", "5.0", "24/7"; anything that doesn't
 * start with a number simply renders as-is.
 */

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function Counter({ value, className, duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

  const [display, setDisplay] = useState(reduce || !match ? value : `0${suffix}`);

  useEffect(() => {
    if (!match || reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
