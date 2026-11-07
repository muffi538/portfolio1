import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experiences";

/**
 * The experience directory: one clickable row per role, each opening its own
 * detail page. The whole row is the link, so the hit area runs the full width.
 *
 * Each row previews the role rather than only naming it — a frame, the
 * organisation, the role, a line on what it was, and the date — and stops
 * there. The full story stays on /experience/<slug>.
 *
 * Hover and focus are driven from the row via `group`, so the underline, the
 * colour shift, the row tint, the arrow and the "explore" label move together.
 */
export function ExperienceList() {
  return (
    <ol className="rule-ink">
      {experience.map((item, i) => (
        <li key={item.slug} className="border-b border-border">
          <Reveal delay={Math.min(i, 5) * 0.04}>
            <Link
              href={`/experience/${item.slug}`}
              className="group -mx-4 grid items-start gap-x-7 gap-y-3 rounded-lg px-4 py-6 transition-colors duration-300 hover:bg-muted/60 focus-visible:bg-muted/60 sm:grid-cols-[6rem_1fr_auto]"
            >
              {/* Secondary to the name: small, quiet, and only where a real
                  photograph exists. The alt is empty because the link already
                  names the organisation. */}
              {item.thumb ? (
                <span className="relative hidden aspect-3/2 w-24 overflow-hidden rounded-md border border-border bg-muted sm:block">
                  <Image
                    src={item.thumb.src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectPosition: item.thumb.focus }}
                    sizes="6rem"
                  />
                </span>
              ) : (
                <span className="hidden sm:block" />
              )}

              <span className="min-w-0">
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

                <span className="mt-2.5 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </span>
              </span>

              <span className="flex flex-col gap-1.5 sm:items-end">
                <span className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-ink group-focus-visible:text-ink">
                    {item.period}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:text-ink"
                  />
                </span>
                {/* Reserved space either way, so the row does not jump on hover.
                    Hidden from screen readers: the link already says where it goes. */}
                <span
                  aria-hidden="true"
                  className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  Explore experience
                </span>
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
