import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type SpinnerProps = {
  className?: string;
  /** Announced to screen readers. */
  label?: string;
};

/** Small inline spinner. */
export function Spinner({ className, label = "Loading" }: SpinnerProps) {
  return (
    <>
      <Loader2 className={cn("size-5 animate-spin", className)} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </>
  );
}

type LoadingProps = {
  /** Message shown next to the spinner. */
  message?: string;
  className?: string;
};

/** Full-area loading state, used by route-level `loading.tsx` files. */
export function Loading({ message = "Loading…", className }: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex min-h-[60vh] flex-col items-center justify-center gap-3 text-muted-foreground",
        className,
      )}
    >
      <Spinner label={message} />
      <p className="text-sm font-medium uppercase tracking-widest">{message}</p>
    </div>
  );
}
