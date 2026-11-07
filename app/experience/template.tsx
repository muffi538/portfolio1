"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Page transition, scoped to the experience routes.
 *
 * A template remounts on every navigation within this segment, so moving from
 * the directory into a role — or back — fades the new page in rather than
 * swapping it. Nothing outside /experience is affected.
 */
export default function ExperienceTemplate({ children }: { children: ReactNode }) {
  const still = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (still) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
