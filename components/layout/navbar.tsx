"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

/**
 * Responsive site navigation.
 * Desktop: inline links plus the résumé button. Mobile: a toggle that reveals
 * a stacked menu.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useScrollLock(isOpen);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra render pass.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setIsOpen(false);
  }

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/90 backdrop-blur-sm">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-6"
          style={{ height: "var(--layout-header-height)" }}
        >
          <Link
            href="/"
            className="display text-xl leading-none tracking-tight sm:text-2xl"
          >
            {siteConfig.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ButtonLink
              href={siteConfig.resume}
              variant="accent"
              size="sm"
              external
              className="hidden sm:inline-flex"
            >
              <FileText className="size-3.5" aria-hidden="true" />
              Résumé
            </ButtonLink>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-full border border-ink md:hidden"
            >
              {isOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          hidden={!isOpen}
          className="border-t border-border py-5 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  className="block text-lg"
                  onNavigate={() => setIsOpen(false)}
                />
              </li>
            ))}
          </ul>
          <ButtonLink
            href={siteConfig.resume}
            variant="accent"
            size="sm"
            external
            className="mt-6 w-full sm:hidden"
          >
            <FileText className="size-3.5" aria-hidden="true" />
            Résumé
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
