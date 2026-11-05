"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Track a CSS media query from React.
 *
 * Uses `useSyncExternalStore` so the subscription stays in sync with React's
 * rendering and the server snapshot is stable (`false`), avoiding hydration
 * mismatches. Prefer CSS breakpoints where possible; reach for this only when
 * behaviour, not styling, has to change.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", onStoreChange);
      return () => mediaQueryList.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
