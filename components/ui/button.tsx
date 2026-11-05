import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink font-bold " +
  "transition-colors disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-accent hover:text-accent-ink",
  accent: "bg-accent text-accent-ink hover:bg-ink hover:text-paper",
  outline: "bg-transparent text-ink hover:bg-ink hover:text-paper",
  ghost: "border-transparent bg-transparent text-ink hover:bg-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
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
  /** Internal path ("/about") or absolute URL / mailto / tel link. */
  href: string;
  children: ReactNode;
  /** Forces a plain anchor — needed for same-origin files like the résumé PDF. */
  external?: boolean;
  download?: boolean;
};

/**
 * Button-styled link. Internal paths use `next/link`;
 * external URLs, mailto/tel links and static files fall back to a plain anchor.
 */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  external,
  download,
}: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  const isExternal = external ?? /^[a-z]+:/i.test(href);

  if (isExternal) {
    const opensNewTab = !download;
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
      >
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
