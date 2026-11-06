import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type HeadingLevel = "h1" | "h2" | "h3";

type SectionProps = {
  children: ReactNode;
  /** Oversized display heading, set in the deck's condensed black. */
  title?: string;
  /**
   * Heading element to use. Each page needs exactly one `h1`, so the first
   * section on a page should pass `headingLevel="h1"`.
   */
  headingLevel?: HeadingLevel;
  /** Small uppercase label above the heading, e.g. "02 / Experience". */
  eyebrow?: string;
  /** Short line under the heading. */
  description?: string;
  /** Required when the section needs a stable anchor / aria-labelledby target. */
  id?: string;
  className?: string;
  /** Set false to lay the content out yourself without the page container. */
  contained?: boolean;
  /** Draws a hairline rule above the section. */
  ruled?: boolean;
};

const headingClasses: Record<HeadingLevel, string> = {
  h1: "display display-lg",
  h2: "display display-lg",
  h3: "display display-md",
};

/**
 * Section wrapper — consistent vertical rhythm plus an optional display header.
 * Use this for every block on a page so spacing stays driven by tokens.
 */
export function Section({
  children,
  title,
  headingLevel = "h2",
  eyebrow,
  description,
  id,
  className,
  contained = true,
  ruled = false,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const Heading = headingLevel;

  const content = (
    <>
      {(title || description || eyebrow) && (
        <header className={cn("mb-8", ruled && "rule-ink pt-5")}>
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          {title && (
            <Heading id={headingId} className={headingClasses[headingLevel]}>
              {title}
            </Heading>
          )}
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
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
