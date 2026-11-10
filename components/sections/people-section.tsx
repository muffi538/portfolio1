import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { founders, monogram, type Founder } from "@/data/cool-stuff";

/**
 * The frame at the head of a card.
 *
 * A photograph where one exists, and until then the company's initials set
 * large in the display face. A monogram is an honest stand-in — it claims
 * nothing the way a borrowed logo or a stock portrait would — and it keeps
 * the same 4:3 box, so the grid stays even either way.
 */
function Frame({ founder }: { founder: Founder }) {
  if (founder.photo) {
    return (
      <div className="relative aspect-4/3 w-full overflow-hidden border-b border-border bg-muted">
        <Image
          src={founder.photo.src}
          alt={founder.photo.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ objectPosition: founder.photo.focus }}
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
        {monogram(founder.company)}
      </span>
    </div>
  );
}

/**
 * One person: the photograph, who they are, and what Mufaddal took from the
 * conversation — all of it on the face of the card.
 *
 * Nothing is hidden behind a click. The card is not a link either, because it
 * has nowhere of its own to go; where a verified LinkedIn exists it sits in
 * the footer as its own link, and where it does not the card simply ends.
 */
function PersonCard({ founder }: { founder: Founder }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent",
        "hover:shadow-[0_22px_44px_-30px_rgb(17_17_17/0.45)]",
      )}
    >
      <Frame founder={founder} />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="display relative inline-block self-start text-lg leading-tight">
          {founder.name}
          {/* Accent rule, drawn from the left when the card is hovered. */}
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
          />
        </h3>

        <p className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-muted-foreground">
            {founder.company}
          </span>
          {founder.category && (
            <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover:border-accent group-hover:text-ink">
              {founder.category}
            </span>
          )}
        </p>

        <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-ink">
          {founder.takeaway}
        </p>

        {founder.more && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {founder.more}
          </p>
        )}

        {/* Mufaddal's own write-up of the meeting, not the founder's profile,
            so the link says so rather than just "LinkedIn". */}
        {founder.post && (
          <a
            href={founder.post}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Read the post
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

/** Everyone Mufaddal has met, on one wall. */
export function PeopleSection() {
  return (
    <Section
      id="people"
      headingLevel="h1"
      eyebrow={`Cool stuff · ${founders.length} so far`}
      title="Meeting cool people"
      description="Over the past year, I've had the opportunity to meet some incredible founders. Here's a little of what I took away from those conversations."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {founders.map((founder, i) => (
          <li key={founder.id}>
            <Reveal delay={Math.min(i, 5) * 0.05} className="h-full">
              <PersonCard founder={founder} />
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
