'use client';

/**
 * Floating particle canvas — a lightweight, dependency-free star field with
 * gentle drift, twinkle and (on larger screens) faint connecting lines.
 * Pauses when the tab is hidden; renders nothing for reduced motion.
 */

import { useEffect, useRef } from 'react';

interface ParticleFieldProps {
  className?: string;
  /** Particles per 100k px² — keep small for performance */
  density?: number;
  /** Draw connecting lines between close particles (desktop only) */
  lines?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number; // 0 = cyan, 1 = violet, 2 = white
  phase: number;
}

const COLORS = ['0, 229, 255', '123, 97, 255', '226, 232, 240'];

export default function ParticleField({ className, density = 0.9, lines = true }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let rafId = 0;
    let running = true;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.round(((width * height) / 100000) * density * 10));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.5,
        hue: Math.floor(Math.random() * COLORS.length),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const drawLines = width > 768 && lines;

    const tick = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -8) p.x = width + 8;
        if (p.x > width + 8) p.x = -8;
        if (p.y < -8) p.y = height + 8;
        if (p.y > height + 8) p.y = -8;

        const twinkle = 0.35 + 0.3 * Math.sin(t / 900 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLORS[p.hue]}, ${twinkle})`;
        ctx.fill();
      }

      if (drawLines) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist2 = dx * dx + dy * dy;
            if (dist2 < 110 * 110) {
              const alpha = 0.05 * (1 - dist2 / (110 * 110));
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) rafId = requestAnimationFrame(tick);
      else cancelAnimationFrame(rafId);
    };

    build();
    rafId = requestAnimationFrame(tick);

    const resizeObserver = new ResizeObserver(build);
    resizeObserver.observe(canvas);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density, lines]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ''}`}
    />
  );
}
