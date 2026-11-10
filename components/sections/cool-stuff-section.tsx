"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { founders, monogram, type Founder } from "@/data/cool-stuff";

/**
 * The mark on a card: a photograph once one exists, and until then the
 * company's initials set in the display face. A monogram is an honest stand-in
 * — it claims nothing the way a borrowed logo or a stock portrait would.
 */
function Mark({ founder, large = false }: { founder: Founder; large?: boolean }) {
  const size = large ? "size-20 text-2xl" : "size-16 text-xl";

  /* The square crop where there is one: a square box of a landscape frame
     takes its whole height, so a face cannot be reached with
     `object-position` alone. */
  const frame = founder.thumb ?? founder.photo;

  if (frame) {
    return (
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-lg border border-border bg-muted",
          size,
        )}
      >
        <Image
          src={frame.src}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-110"
          style={{ objectPosition: frame.focus }}
          sizes={large ? "5rem" : "4rem"}
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        "display inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-ink",
        "transition-[transform,background-color,border-color] duration-500 ease-out",
        "group-hover/card:scale-105 group-hover/card:border-accent group-hover/card:bg-accent/15",
        size,
      )}
    >
      {monogram(founder.company)}
    </span>
  );
}

/** The small industry label, where naming one is not a guess. */
function Category({ founder }: { founder: Founder }) {
  if (!founder.category) return null;

  return (
    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover/card:border-accent group-hover/card:text-ink">
      {founder.category}
    </span>
  );
}

/**
 * Over the past year I've met some incredible founders. This is what I took
 * from those conversations — a journal, not a wall of logos.
 *
 * Every card opens the same native `<dialog>`, which brings focus trapping,
 * page inertness and Escape-to-close from the browser rather than from code
 * here. Cards are buttons, not links, so a tap works exactly as a click does.
 */
export function CoolStuffSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);
  const founder = founders[current];

  function open(index: number) {
    setCurrent(index);
    dialogRef.current?.showModal();
  }

  return (
    <Section
      id="cool-stuff"
      headingLevel="h1"
      eyebrow="Cool stuff"
      title="Cool stuff."
      description="People I've met. Ideas I've stolen. Lessons I won't forget."
    >
      <Reveal>
        <p className="-mt-2 mb-9 max-w-2xl text-lg leading-relaxed">
          Over the past year, I&apos;ve had the opportunity to meet some incredible
          founders. Here&apos;s a little of what I took away from those conversations.
        </p>
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
        {founders.map((item, i) => (
          <li key={item.id}>
            <Reveal delay={Math.min(i, 6) * 0.05} className="h-full">
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`Read what I took from meeting ${item.name} of ${item.company}`}
                className={cn(
                  "group/card flex h-full w-full flex-col rounded-xl border border-border bg-surface p-5 text-left",
                  "transition-all duration-500 ease-out",
                  "hover:-translate-y-1 hover:scale-[1.015] hover:border-accent",
                  "hover:shadow-[0_22px_44px_-30px_rgb(17_17_17/0.45)]",
                  "focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                )}
              >
                <div className="flex items-start gap-4">
                  <Mark founder={item} />

                  <span className="min-w-0 flex-1">
                    <span className="display relative inline-block text-base leading-tight sm:text-lg">
                      {item.name}
                      {/* Accent rule, drawn from the left on hover. */}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover/card:scale-x-100 group-focus-visible/card:scale-x-100"
                      />
                    </span>
                    <span className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-muted-foreground">
                        {item.company}
                      </span>
                      <Category founder={item} />
                    </span>
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-accent"
                  />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover/card:text-ink">
                  {item.takeaway}
                </p>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="What I took from the conversation"
        /* A click that lands on the dialog itself is a click on the backdrop:
           everything else is inside the figure. `bg-black/80` rather than the
           ink token because `::backdrop` does not reliably inherit custom
           properties across browsers. */
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="dialog-pop max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/80 open:fixed open:inset-0 open:flex open:h-full open:w-full open:items-center open:justify-center"
      >
        <div className="relative max-h-[90vh] w-[92vw] max-w-lg overflow-y-auto rounded-xl border border-ink bg-surface p-6 sm:p-8">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            /* Carries its own background: with a photograph behind it, a bare
               outline would disappear into the picture. */
            className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface/90 text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:border-ink hover:text-ink focus-visible:border-ink focus-visible:text-ink"
          >
            <X aria-hidden="true" className="size-4" />
          </button>

          {/* The photograph is the reward for the click: on the card it is a
              thumbnail, here it runs the width of the panel. Every one of
              these frames holds two or three people, so the focus point aims
              the crop at the founder rather than the middle. */}
          {founder.photo && (
            <div className="relative mb-6 aspect-3/2 w-full overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src={founder.photo.src}
                alt={founder.photo.alt}
                fill
                className="object-cover"
                style={{ objectPosition: founder.photo.focus }}
                sizes="(max-width: 640px) 92vw, 32rem"
              />
            </div>
          )}

          <div className="flex items-start gap-5 pr-12">
            {!founder.photo && <Mark founder={founder} large />}

            <div className="min-w-0">
              <h3 className="display text-xl leading-tight sm:text-2xl">
                {founder.name}
              </h3>
              <p className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-muted-foreground">
                  {founder.company}
                </span>
                {founder.category && (
                  <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {founder.category}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 border-t border-border pt-6 text-base leading-relaxed">
            <p>{founder.takeaway}</p>
            {/* Only where one conversation left more than a single line. */}
            {founder.more && <p className="text-muted-foreground">{founder.more}</p>}
          </div>

          {founder.linkedin && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-6 inline-flex items-center gap-1.5 rounded-sm text-sm font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              {founder.name} on LinkedIn
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </dialog>
    </Section>
  );
}
