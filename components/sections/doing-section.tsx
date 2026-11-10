import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { doing, type Doing } from "@/data/doing";

/**
 * The frame at the head of a card: a photograph where one exists, and a short
 * mark in the display face where one does not. Both keep the same 4:3 box, so
 * the grid stays even either way.
 */
function Frame({ item }: { item: Doing }) {
  const image = item.thumb ?? item.photo;

  if (image) {
    return (
      <div className="relative aspect-4/3 w-full overflow-hidden border-b border-border bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ objectPosition: image.focus }}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex aspect-4/3 w-full items-center justify-center border-b border-border bg-muted transition-colors duration-500 group-hover:bg-accent/15"
    >
      <span className="display text-4xl text-ink/70 transition-transform duration-500 ease-out group-hover:scale-105">
        {item.mark}
      </span>
    </div>
  );
}

/** One thing done, with everything on the face of the card. */
function DoingCard({ item }: { item: Doing }) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-surface",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent",
        "hover:shadow-[0_22px_44px_-30px_rgb(17_17_17/0.45)]",
      )}
    >
      <Frame item={item} />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="display relative inline-block self-start text-lg leading-tight">
          {item.title}
          {/* Accent rule, drawn from the left when the card is hovered. */}
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
          />
        </h3>

        <p className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-muted-foreground">{item.context}</span>
          <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover:border-accent group-hover:text-ink">
            {item.category}
          </span>
        </p>

        <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-ink">
          {item.description}
        </p>

        {/* The rest of the day, kept on the card rather than behind a click. */}
        {item.gallery && item.gallery.length > 0 && (
          <ul className="mt-4 grid grid-cols-3 gap-2">
            {item.gallery.map((frame) => (
              <li
                key={frame.src}
                className="relative aspect-square overflow-hidden rounded-md border border-border bg-muted"
              >
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ objectPosition: frame.focus }}
                  sizes="7rem"
                />
              </li>
            ))}
          </ul>
        )}

        {item.link && (
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            {item.link.label}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </article>
  );
}

/** The second chapter of Cool stuff: things done rather than people met. */
export function DoingSection() {
  return (
    <Section
      id="doing"
      headingLevel="h1"
      eyebrow={`Cool stuff · ${doing.length} so far`}
      title="Doing cool stuff"
      description="Trips, factory floors and one very good paan advert. The things worth remembering that weren't a job or a project."
    >
      {/* CSS columns rather than a grid: an entry with a gallery stands much
          taller than one without, and a grid row equalises to the tallest,
          leaving the short cards padded with dead space. Here each card keeps
          its own height and the browser packs them. */}
      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {doing.map((item, i) => (
          <li key={item.id} className="mb-5 break-inside-avoid lg:mb-6">
            <Reveal delay={Math.min(i, 5) * 0.05}>
              <DoingCard item={item} />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <Link
          href="/cool-stuff"
          className="group mt-10 inline-flex items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ink focus-visible:text-ink"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          Back to cool stuff
        </Link>
      </Reveal>
    </Section>
  );
}
