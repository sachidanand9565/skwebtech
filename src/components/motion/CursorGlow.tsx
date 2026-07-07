'use client';

/**
 * Mouse-follow ambient glow — a soft cyan/violet halo that trails the cursor.
 * Pointer-events: none, desktop-mouse only, hidden for reduced motion.
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export default function CursorGlow() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 120, damping: 28, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 120, damping: 28, mass: 0.8 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[600px] w-[600px] rounded-full opacity-[0.14] mix-blend-screen will-change-transform"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,229,255,0.5) 0%, rgba(123,97,255,0.28) 38%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
