/**
 * Infinite marquee — CSS-driven, GPU-friendly endless scroll strip.
 * Content is duplicated once (aria-hidden) to create the seamless loop.
 * Server-safe: no client JS needed.
 */

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** Seconds per loop */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  duration = 36,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div className={`group relative flex overflow-hidden ${className ?? ''}`}>
      <div
        className={`flex w-max shrink-0 items-center will-change-transform ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
