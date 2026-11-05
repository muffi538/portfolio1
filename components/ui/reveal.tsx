"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger successive blocks by passing an increasing index. */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts a block into view once, the first time it is scrolled to.
 *
 * Renders a plain div when the viewer prefers reduced motion. The server
 * renders the motion variant with `opacity: 0` inline, so the `data-reveal`
 * hook exists for the `<noscript>` rule in app/layout.tsx that forces these
 * blocks visible when JavaScript never runs.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const still = useReducedMotion();

  if (still) return <div className={className}>{children}</div>;

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
