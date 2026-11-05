import type { ReactNode } from "react";

type PlaceholderProps = {
  /** What will eventually live here. */
  children: ReactNode;
};

/**
 * Temporary marker for content that has not been provided yet.
 * Delete this component once every section holds real content.
 */
export function Placeholder({ children }: PlaceholderProps) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/50 p-6">
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
