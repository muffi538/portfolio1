import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type HeadingLevel = "h1" | "h2" | "h3";

type SectionProps = {
  children: ReactNode;
  /** Optional heading rendered above the content. */
  title?: string;
  /**
   * Heading element to use. Each page needs exactly one `h1`, so the first
   * section on a page should pass `headingLevel="h1"`.
   */
  headingLevel?: HeadingLevel;
  /** Optional short line under the heading. */
  description?: string;
  /** Required when the section needs a stable anchor / aria-labelledby target. */
  id?: string;
  className?: string;
  /** Set false to lay the content out yourself without the page container. */
  contained?: boolean;
};

const headingClasses: Record<HeadingLevel, string> = {
  h1: "text-3xl font-semibold tracking-tight sm:text-4xl",
  h2: "text-2xl font-semibold tracking-tight sm:text-3xl",
  h3: "text-xl font-semibold tracking-tight",
};

/**
 * Section wrapper — consistent vertical rhythm plus an optional titled header.
 * Use this for every block on a page so spacing stays driven by tokens.
 */
export function Section({
  children,
  title,
  headingLevel = "h2",
  description,
  id,
  className,
  contained = true,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const Heading = headingLevel;

  const content = (
    <>
      {(title || description) && (
        <header className="mb-6">
          {title && (
            <Heading id={headingId} className={headingClasses[headingLevel]}>
              {title}
            </Heading>
          )}
          {description && (
            <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
          )}
        </header>
      )}
      {children}
    </>
  );

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(className)}
      style={{ paddingBlock: "var(--layout-section-gap)" }}
    >
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}
