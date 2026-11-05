"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

type NavLinkProps = {
  item: NavItem;
  className?: string;
  onNavigate?: () => void;
};

/** A single navigation link that marks itself as current. */
export function NavLink({ item, className, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative rounded-sm text-sm font-bold uppercase tracking-wide transition-colors hover:text-ink",
        "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent after:transition-all",
        isActive ? "text-ink after:w-full" : "text-muted-foreground after:w-0 hover:after:w-full",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}
