'use client';

/**
 * One-time page loader — a brief branded curtain shown on the first visit
 * of a session, exiting with a smooth upward wipe. Repeat visits skip it
 * almost instantly, keeping Core Web Vitals healthy.
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SESSION_KEY = 'skw-visited';

export default function PageLoader() {
  const [show, setShow] = useState(true);
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    try {
      const visited = sessionStorage.getItem(SESSION_KEY);
      if (visited) {
        setFirstVisit(false);
        setShow(false);
        return;
      }
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // Storage unavailable — still play the intro once
    }
    timeout = setTimeout(() => setShow(false), 1350);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          exit={{ y: '-100%' }}
          transition={{ duration: firstVisit ? 0.7 : 0.15, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          aria-hidden="true"
        >
          <div className="relative flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl font-bold tracking-tight text-white"
            >
              SK<span className="gradient-text">WebTech</span>
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="mt-5 h-[2px] w-44 origin-left rounded-full bg-brand-gradient"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500"
            >
              Web · Apps · Growth
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
