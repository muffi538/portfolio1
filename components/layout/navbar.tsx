"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/layout/nav-link";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

/**
 * Responsive site navigation.
 * Desktop: inline links. Mobile: a toggle that reveals a stacked menu.
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
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between"
          style={{ height: "var(--layout-header-height)" }}
        >
          <Link href="/" className="rounded-sm text-base font-semibold tracking-tight">
            {siteConfig.name}
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border md:hidden"
          >
            {isOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-navigation"
          hidden={!isOpen}
          className="border-t border-border py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  className="block py-2 text-base"
                  onNavigate={() => setIsOpen(false)}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}
