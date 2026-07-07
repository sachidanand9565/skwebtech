'use client';

/**
 * 3D tilt card — subtle perspective rotation following the cursor,
 * with an optional moving glare highlight. Mouse-only; springs back on leave.
 */

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees */
  max?: number;
  glare?: boolean;
}

export default function TiltCard({ children, className, max = 8, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 220, damping: 22 });
  const sy = useSpring(py, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareBackground = useTransform(
    [sx, sy] as [MotionValue<number>, MotionValue<number>],
    ([gx, gy]: number[]) =>
      `radial-gradient(420px circle at ${20 + gx * 60}% ${15 + gy * 70}%, rgba(255,255,255,0.09), transparent 55%)`
  );

  const handleMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      {glare && !reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
}
