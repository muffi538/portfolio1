import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /** What still needs to be supplied. */
  children: string;
  className?: string;
};

/**
 * Marks a section that has no material yet, and says what belongs there.
 * Used instead of writing filler, so a gap is obvious rather than disguised.
 */
export function Placeholder({ children, className }: PlaceholderProps) {
  return (
    <p
      className={cn(
        "rounded-lg border border-dashed border-border bg-muted/50 px-5 py-4 text-sm text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
