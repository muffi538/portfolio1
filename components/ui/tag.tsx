import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
  /** Fills the pill with the accent green. */
  accent?: boolean;
};

/** Outlined pill, as used for the deck's skill and index labels. */
export function Tag({ children, className, accent = false }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink px-3 py-1 text-xs font-bold uppercase tracking-wide leading-none",
        accent ? "bg-accent text-accent-ink" : "bg-transparent text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
