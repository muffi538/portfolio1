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
        "rounded-sm text-sm transition-colors hover:text-foreground",
        isActive ? "text-foreground font-medium" : "text-muted-foreground",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}
