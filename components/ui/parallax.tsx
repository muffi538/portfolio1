"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

type ParallaxProps = {
  children: ReactNode;
  /** Peak offset in pixels. Keep it small — this should be felt, not seen. */
  distance?: number;
  className?: string;
};

/**
 * Scroll-linked drift. The element travels `distance` px down to `distance` px
 * up across the time it is on screen, which lets an image settle against
 * static text instead of moving in lockstep with it.
 *
 * Under reduced motion the offset is pinned to 0 rather than the style being
 * dropped: the preference only reports true after hydration, and by then the
 * motion value is already bound to the element, so removing it from `style`
 * would leave the last offset frozen in place instead of clearing it.
 */
export function Parallax({ children, distance = 20, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useMediaQuery("(prefers-reduced-motion: reduce)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} className={className} style={{ y: still ? 0 : y }}>
      {children}
    </motion.div>
  );
}
