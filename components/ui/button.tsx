import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-colors " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border-border bg-background text-foreground hover:bg-muted",
  ghost: "border-transparent bg-transparent text-foreground hover:bg-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

/** Compose the button class string. Exported so other elements can match the styling. */
export function buttonClasses({ variant = "primary", size = "md", className }: StyleProps = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

export type ButtonProps = StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    children: ReactNode;
  };

/** Button — a plain `<button>`. Use `ButtonLink` for navigation. */
export function Button({ variant, size, className, children, type, ...rest }: ButtonProps) {
  return (
    <button type={type ?? "button"} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

export type ButtonLinkProps = StyleProps & {
  /** Internal path ("/about") or absolute URL / mailto link. */
  href: string;
  children: ReactNode;
};

/**
 * Button-styled link. Internal paths use `next/link`;
 * external URLs and mailto links fall back to a plain anchor.
 */
export function ButtonLink({ href, variant, size, className, children }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  const isExternal = /^[a-z]+:/i.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
