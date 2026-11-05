import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

/**
 * Main layout — skip link, navbar, page content, footer.
 * Rendered once from the root layout so every route shares the same chrome.
 */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:border focus:border-ink focus:bg-paper focus:px-5 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </>
  );
}
