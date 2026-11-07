"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

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
 *
 * The preference is read through `useMediaQuery`, not Framer's
 * `useReducedMotion`. That hook seeds `useState` from the live media query on
 * the very first client render, so it disagrees with the server markup during
 * hydration — and React keeps the server's `data-reveal` and `opacity: 0`
 * attributes on the reused node, leaving every block permanently invisible.
 * `useSyncExternalStore` returns the server value while hydrating and flips
 * afterwards, so the swap happens as an ordinary update that clears them.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const still = useMediaQuery("(prefers-reduced-motion: reduce)");

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
