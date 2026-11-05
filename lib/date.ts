import { cacheLife } from "next/cache";

/**
 * Current year for the footer copyright line.
 *
 * Cache Components (`cacheComponents` in next.config.ts) treats `new Date()` as an
 * unstable value during prerendering, so the read is wrapped in a cached scope and
 * refreshed daily.
 */
export async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}
