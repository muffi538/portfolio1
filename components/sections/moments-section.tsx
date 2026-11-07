import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { moments } from "@/data/moments";
import type { Moment } from "@/data/moments";

/**
 * A different tilt per print, cycled down the strip, so no two sit square to
 * each other. Hovering one straightens and lifts it.
 */
const tilts = [
  "rotate-[-2deg]",
  "rotate-[1.5deg]",
  "rotate-[-1deg]",
  "rotate-[2.5deg]",
  "rotate-[-2.5deg]",
  "rotate-[1deg]",
];

/**
 * One print: a square frame with the caption on the mount below it, the
 * proportions of a photograph pulled out of a camera.
 */
function Polaroid({
  moment,
  index,
  priority,
  cloned = false,
}: {
  moment: Moment;
  index: number;
  priority: boolean;
  /** The second copy of the strip, which exists only to close the loop. */
  cloned?: boolean;
}) {
  return (
    <li className="shrink-0">
      <Link
        href={moment.href}
        /* The clone is hidden from assistive tech and taken out of the tab
           order, so the strip is announced and tabbed through exactly once. */
        tabIndex={cloned ? -1 : undefined}
        aria-hidden={cloned || undefined}
        className={cn(
          "group/print block w-56 rounded-lg border border-ink/10 bg-surface p-3 sm:w-64",
          "shadow-[0_8px_22px_-14px_rgb(17_17_17/0.45)]",
          "transition-all duration-500 ease-out",
          "hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_-18px_rgb(17_17_17/0.5)]",
          "focus-visible:rotate-0 focus-visible:-translate-y-1.5",
          tilts[index % tilts.length],
        )}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-muted">
          <Image
            src={moment.image.src}
            alt={cloned ? "" : moment.image.alt}
            fill
            priority={priority}
            className="object-cover"
            style={{ objectPosition: moment.image.focus }}
            sizes="16rem"
          />
        </div>

        {/* The deep bottom margin of a print is where the caption goes. A
            fixed height keeps every print the same size whether its caption
            runs to one line or two. */}
        <p className="mb-1.5 mt-3.5 flex min-h-11 items-center justify-center gap-1.5 px-1 text-center text-sm font-medium leading-snug">
          {moment.caption}
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover/print:translate-x-0.5 group-hover/print:-translate-y-0.5 group-hover/print:text-ink"
          />
        </p>
      </Link>
    </li>
  );
}

/**
 * A strip of prints that slides itself.
 *
 * The track holds two identical copies of the set and travels exactly half
 * its own width, so the loop closes without a seam and nothing has to be
 * measured or repositioned in JavaScript — the whole thing is CSS, and it
 * runs before any script does.
 *
 * Hovering or tabbing into the strip pauses it. Under reduced motion the
 * animation is off entirely and the track scrolls by hand instead.
 *
 * Every frame reuses an image already on the site and links to the page that
 * tells its story; nothing here is the only place something is said.
 */
export function MomentsSection() {
  return (
    <Section
      id="lately"
      eyebrow="04 / Lately"
      title="Lately"
      description="Some of the work, as it actually looked."
      ruled
    >
      <Reveal>
        <div
          role="region"
          aria-label="Recent work"
          /* The negative gutter lets the prints run off both page edges,
             which is what makes the strip read as continuous. */
          className="group no-scrollbar -mx-(--layout-gutter) overflow-x-auto px-(--layout-gutter) py-4"
        >
          <div
            className={cn(
              "marquee-track flex w-max",
              "group-hover:[animation-play-state:paused]",
              "group-focus-within:[animation-play-state:paused]",
            )}
            /* Paced off the content: eight prints at roughly 280px apiece,
               travelling at a readable ~40px a second. */
            style={{ "--marquee-duration": "56s" } as React.CSSProperties}
          >
            {[false, true].map((cloned) => (
              <ul
                key={String(cloned)}
                className="flex gap-6 pr-6"
                aria-hidden={cloned || undefined}
              >
                {moments.map((moment, i) => (
                  <Polaroid
                    key={`${moment.image.src}-${String(cloned)}`}
                    moment={moment}
                    index={i}
                    priority={!cloned && i < 2}
                    cloned={cloned}
                  />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
