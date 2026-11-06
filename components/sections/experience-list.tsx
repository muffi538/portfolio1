import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experiences";

/**
 * The experience directory: one clickable row per role, each opening its own
 * detail page. The whole row is the link, so the hit area runs the full width.
 *
 * Hover and focus are driven from the row via `group`, which keeps the name
 * underline, the colour shift, the row tint and the arrow in step.
 */
export function ExperienceList() {
  return (
    <ol className="rule-ink">
      {experience.map((item, i) => (
        <li key={item.slug} className="border-b border-border">
          <Reveal delay={Math.min(i, 5) * 0.04}>
            <Link
              href={`/experience/${item.slug}`}
              className="group -mx-4 flex flex-col gap-2 rounded-lg px-4 py-6 transition-colors duration-300 hover:bg-muted/60 focus-visible:bg-muted/60 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="display relative text-xl sm:text-2xl">
                  {item.organisation}
                  {/* Animated underline, drawn from the left on hover. */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </span>
                <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-ink group-focus-visible:text-ink">
                  {item.role}
                </span>
              </span>

              <span className="flex items-center gap-3 sm:gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-ink group-focus-visible:text-ink">
                  {item.period}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:text-ink"
                />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
