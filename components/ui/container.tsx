import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Rendered element. Defaults to a plain `div`. */
  as?: ElementType;
};

/**
 * Page container — centres content and applies the horizontal gutter.
 * Max width and gutter come from the `--layout-*` tokens in styles/globals.css.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full", className)}
      style={{
        maxWidth: "var(--layout-max-width)",
        paddingInline: "var(--layout-gutter)",
      }}
    >
      {children}
    </Tag>
  );
}
