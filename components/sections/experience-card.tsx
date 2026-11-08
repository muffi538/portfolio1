import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/lib/types";

/**
 * Fixed slots for the collage, so every card carries the same frames in the
 * same places however many photographs a role has.
 *
 * `rest` is where a frame sits; `hover` is where the card's hover state takes
 * it. The front frame lifts and straightens while the ones behind it push the
 * other way, which is what gives the stack its depth.
 *
 * Tailwind compiles `rotate-*` and `translate-*` to the CSS `rotate` and
 * `translate` properties rather than `transform`, so the two compose without
 * one overwriting the other.
 */
const slots = [
  {
    // Front: largest, lowest, and the one that lifts.
    box: "bottom-0 left-0 w-[76%]",
    rest: "rotate-[-3deg] z-30",
    hover: "group-hover:-translate-y-2 group-hover:rotate-[-1deg] group-hover:scale-[1.03]",
  },
  {
    // Behind and above, pushed the opposite way.
    box: "right-0 top-0 w-[64%]",
    rest: "rotate-[4deg] z-20",
    hover: "group-hover:translate-x-1.5 group-hover:translate-y-1 group-hover:rotate-[7deg]",
  },
  {
    // Deepest in the stack: pushed into the corner the other two leave open,
    // so a band of it actually shows rather than hiding behind them.
    box: "left-0 top-0 w-[50%]",
    rest: "rotate-[-9deg] z-10",
    hover: "group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:rotate-[-12deg]",
  },
];

/** The overlapping stack of photographs on the left of a card. */
function Collage({
  item,
  priority,
  compact,
}: {
  item: ExperienceItem;
  priority: boolean;
  compact: boolean;
}) {
  const frames = (item.collage ?? []).slice(0, slots.length);
  if (frames.length === 0) return null;

  return (
    /* A fixed stage, so the stack occupies the same box on every card
       regardless of how many frames the role has. Capped below lg, where the
       card stacks and a full-width stage would otherwise stand taller than
       everything it illustrates. */
    <div
      className={cn(
        "relative aspect-4/3 w-full lg:max-w-none",
        compact ? "max-w-[16rem]" : "max-w-[17rem]",
      )}
    >
      {frames.map((frame, i) => {
        const slot = slots[i];
        return (
          <div
            key={frame.src}
            className={cn(
              "absolute overflow-hidden rounded-lg border border-ink/10 bg-muted shadow-[0_6px_18px_-12px_rgb(17_17_17/0.5)]",
              "transition-all duration-500 ease-out",
              "group-hover:shadow-[0_18px_40px_-18px_rgb(17_17_17/0.55)]",
              slot.box,
              slot.rest,
              slot.hover,
            )}
          >
            <div className="relative aspect-4/3 w-full">
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                priority={priority && i === 0}
                className="object-cover"
                style={{ objectPosition: frame.focus }}
                sizes="(max-width: 1024px) 60vw, 28vw"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * One experience as a wide card: the photographs stacked on the left, the
 * role and what came of it on the right.
 *
 * The card is not itself a link — it holds two of them — so hover is driven
 * from `group` on the article, which lets the frames, the heading rule and
 * the buttons all answer to the same gesture.
 *
 * `compact` is the home page's size: the same card, scaled down in padding,
 * column split, type and controls, so six of them read as a preview rather
 * than taking the page. Nothing is removed at that size.
 */
export function ExperienceCard({
  item,
  priority = false,
  compact = false,
}: {
  item: ExperienceItem;
  /** Set on the first card: its photographs are the likely LCP element. */
  priority?: boolean;
  /** The smaller home page size. */
  compact?: boolean;
}) {
  const deck = item.links?.[0];

  return (
    <article
      className={cn(
        "group rounded-xl border border-border bg-surface",
        compact ? "p-4 sm:p-5" : "p-4 sm:p-5 lg:p-6",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-ink",
        "hover:shadow-[0_24px_48px_-32px_rgb(17_17_17/0.45)]",
      )}
    >
      <div
        className={cn(
          "grid lg:items-center",
          compact
            ? "gap-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-8"
            : "gap-6 lg:grid-cols-[0.58fr_1.42fr] lg:gap-8",
        )}
      >
        <Reveal>
          <Collage item={item} priority={priority} compact={compact} />
        </Reveal>

        {/* Staggered behind the photographs, as the brief asks. */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3
              className={cn(
                "display relative",
                compact ? "text-base sm:text-lg" : "text-lg sm:text-xl",
              )}
            >
              {item.organisation}
              {/* Accent rule, drawn from the left when the card is hovered. */}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {item.period} · {item.role}
            </p>
          </div>

          {item.stats && item.stats.length > 0 && (
            <ul className={cn("flex flex-wrap gap-1.5", compact ? "mt-3" : "mt-3.5")}>
              {item.stats.map((stat) => (
                <li
                  key={stat.label}
                  className={cn(
                    "inline-flex items-baseline gap-2 rounded-full border border-border bg-muted/60 transition-colors duration-500 group-hover:border-ink/25",
                    compact ? "px-2.5 py-1" : "px-3 py-1",
                  )}
                >
                  <span
                    className={cn("display text-xs leading-none")}
                  >
                    {stat.value}
                  </span>
                  <span
                    className={cn(
                      "text-muted-foreground",
                      compact ? "text-[0.7rem]" : "text-xs",
                    )}
                  >
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <p
            className={cn(
              "max-w-2xl leading-relaxed text-muted-foreground",
              compact ? "mt-3 text-sm" : "mt-3.5 text-sm",
            )}
          >
            {item.summary}
          </p>

          <div className={cn("flex flex-wrap gap-2.5", compact ? "mt-4" : "mt-5")}>
            <Link
              href={`/experience/${item.slug}`}
              className={buttonClasses({
                variant: "primary",
                size: "sm",
                className: "group/cta",
              })}
            >
              Know more
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
            </Link>

            {/* Only where a real link exists — four of the six roles. */}
            {deck && (
              <a
                href={deck.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({
                  variant: "outline",
                  size: "sm",
                  className: "group/cta",
                })}
              >
                {deck.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </article>
  );
}
