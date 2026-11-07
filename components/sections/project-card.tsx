import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

/**
 * Fixed slots for the cover, so every card's plate sits in the same box
 * whether the project has one frame or two.
 *
 * `rest` is where a frame sits; `hover` is where the card's hover state takes
 * it. The front plate lifts and straightens while the one behind pushes the
 * other way, which is what gives the pair depth.
 *
 * Tailwind compiles `rotate-*` and `translate-*` to the CSS `rotate` and
 * `translate` properties rather than `transform`, so the two compose without
 * one overwriting the other.
 */
const slots = [
  {
    box: "bottom-0 left-0 w-[82%]",
    rest: "rotate-[-3deg] z-20",
    hover: "group-hover:-translate-y-2 group-hover:rotate-[-1deg] group-hover:scale-[1.03]",
  },
  {
    box: "right-0 top-0 w-[66%]",
    rest: "rotate-[4deg] z-10",
    hover: "group-hover:translate-x-1.5 group-hover:translate-y-1 group-hover:rotate-[7deg]",
  },
];

/**
 * One frame on its own has nothing to sit against, so it takes the whole
 * stage rather than a corner of it.
 */
const soloSlot = [
  {
    box: "left-[4%] top-[14%] w-[92%]",
    rest: "rotate-[-3deg] z-20",
    hover: "group-hover:-translate-y-2 group-hover:rotate-[-1deg] group-hover:scale-[1.03]",
  },
];

/** The tilted plate — or pair of plates — on the left of a card. */
function Cover({ project, priority }: { project: Project; priority: boolean }) {
  const frames = (project.images ?? []).slice(0, slots.length);
  if (frames.length === 0) return null;
  const layout = frames.length === 1 ? soloSlot : slots;

  return (
    /* A square stage, so the two plates have room to separate; each plate
       keeps its own 4:3 inside it. Capped below lg, where the card stacks and
       a full-width plate would stand taller than everything it illustrates. */
    <div className="relative aspect-square w-full max-w-[23rem] lg:max-w-none">
      {frames.map((frame, i) => {
        const slot = layout[i];
        return (
          <div
            key={frame.src}
            className={cn(
              "absolute overflow-hidden rounded-lg border border-ink/10 bg-muted",
              "shadow-[0_6px_18px_-12px_rgb(17_17_17/0.5)]",
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
                className={frame.fit === "contain" ? "object-contain" : "object-cover"}
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
 * One project as a wide card: the cover plates on the left, the name, its
 * figures and what it was on the right.
 *
 * The card is not itself a link — it holds several — so hover is driven from
 * `group` on the article, which lets the plates, the heading rule and the
 * buttons all answer to the same gesture. The first link is the primary
 * action; the rest sit beside it as outlines. Nothing is shown that does not
 * actually go anywhere.
 */
export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  /** Set on the first card: its cover is the likely LCP element. */
  priority?: boolean;
}) {
  const [lead, ...rest] = project.links ?? [];

  return (
    <article
      /* Anchor target for the home gist list and the In action strip, offset
         clear of the fixed header. */
      id={project.slug}
      className={cn(
        "group scroll-mt-28 rounded-xl border border-border bg-surface p-6 sm:p-8 lg:p-10",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-ink",
        "hover:shadow-[0_24px_48px_-32px_rgb(17_17_17/0.45)]",
      )}
    >
      <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-12">
        {/* Pinned: the write-up runs much longer than the plates, so they
            travel with the reader rather than leaving a dead band beside
            them. Sticky needs `items-start` for the row to leave it room. */}
        <div className="lg:sticky lg:top-28">
          <Cover project={project} priority={priority} />
        </div>

        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className="display relative text-2xl sm:text-3xl">
              {project.title}
              {/* Accent rule, drawn from the left when the card is hovered. */}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {project.kind} · {project.year}
            </p>
          </div>

          {project.stats && project.stats.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {project.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="inline-flex items-baseline gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 transition-colors duration-500 group-hover:border-ink/25"
                >
                  <span className="display text-base leading-none">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
            {project.summary}
          </p>

          {project.highlights.length > 0 && (
            <ul className="mt-5 space-y-2 border-t border-border pt-5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>

          {lead && (
            <div className="mt-7 flex flex-wrap gap-3">
              <Cta link={lead} variant="primary" />
              {rest.map((link) => (
                <Cta key={link.href} link={link} variant="outline" />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * One call to action. A path stays on the site and routes client-side;
 * anything else is somewhere else and opens in its own tab.
 */
function Cta({
  link,
  variant,
}: {
  link: { label: string; href: string };
  variant: "primary" | "outline";
}) {
  const classes = buttonClasses({ variant, className: "group/cta" });
  const arrow = (
    <ArrowUpRight
      aria-hidden="true"
      className="size-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
    />
  );

  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={classes}>
        {link.label}
        {arrow}
      </Link>
    );
  }

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={classes}>
      {link.label}
      {arrow}
    </a>
  );
}
