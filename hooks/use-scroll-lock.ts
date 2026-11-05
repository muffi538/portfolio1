"use client";

import { useEffect } from "react";

/** Prevent background scrolling while `locked` is true (e.g. an open mobile menu). */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
