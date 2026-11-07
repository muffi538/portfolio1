"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { moments } from "@/data/moments";

/**
 * A sliding strip of the work, in photographs.
 *
 * The track is a native scroll container with snap points, so it already
 * works with a touch swipe, a trackpad, a mouse wheel and the keyboard before
 * any JavaScript runs — the arrows only nudge that same scroll position, and
 * the strip is fully usable if they never mount.
 *
 * Every frame links to the page that tells the story; nothing here is the
 * only place something is said.
 */
export function MomentsSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /** Moves by one card plus its gap, so a snap point always lands flush. */
  function nudge(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  /** Disables an arrow once the track has nothing left to give that way. */
  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= max - 1);
  }

  return (
    <Section
      id="lately"
      eyebrow="04 / Lately"
      title="Lately"
      description="Some of the work, as it actually looked. Swipe or use the arrows."
      ruled
    >
      <Reveal>
        <ul
          ref={trackRef}
          onScroll={handleScroll}
          tabIndex={0}
          role="region"
          aria-label="Recent work, scrollable"
          /* The negative gutter lets a card slide past the page edge rather
             than stopping short of it, which is what reads as a strip. */
          className="no-scrollbar -mx-(--layout-gutter) flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-(--layout-gutter) px-(--layout-gutter) pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          {moments.map((moment, i) => (
            <li key={moment.image.src} className="w-64 shrink-0 snap-start sm:w-72 lg:w-80">
              <Link href={moment.href} className="group block">
                <figure>
                  <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-ink bg-muted">
                    <Image
                      src={moment.image.src}
                      alt={moment.image.alt}
                      fill
                      priority={i < 2}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{ objectPosition: moment.image.focus }}
                      sizes="(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 20rem"
                    />
                  </div>

                  <figcaption className="mt-4 flex items-start gap-2 text-sm font-medium leading-relaxed sm:text-base">
                    <span className="relative">
                      {moment.caption}
                      {/* Animated underline, drawn from the left on hover. */}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                    />
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>

        {/* Secondary to the swipe, so they sit under the track rather than
            over the photographs. */}
        <div className="mt-7 flex gap-3">
          {(
            [
              ["Previous", ArrowLeft, -1 as const, atStart],
              ["Next", ArrowRight, 1 as const, atEnd],
            ] as const
          ).map(([label, Icon, direction, disabled]) => (
            <button
              key={label}
              type="button"
              onClick={() => nudge(direction)}
              disabled={disabled}
              aria-label={`${label} photographs`}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full border border-ink text-ink transition-colors duration-300",
                "hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper",
                "disabled:pointer-events-none disabled:border-border disabled:text-muted-foreground",
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
            </button>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
