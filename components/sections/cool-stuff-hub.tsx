import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { founders } from "@/data/cool-stuff";

type Chapter = {
  title: string;
  description: string;
  /** What is in it, e.g. "12 people". Omitted while a chapter is empty. */
  count?: string;
  /** Where it opens. A chapter with nothing in it yet has nowhere to go. */
  href?: string;
};

/**
 * The chapters of Cool stuff.
 *
 * The second is listed but not linked: it is named and planned, and nothing
 * has been written for it yet. Showing it inert is honest — inventing
 * contents to fill it would not be.
 */
const chapters: Chapter[] = [
  {
    title: "Meeting cool people",
    description: "Founders I've met, and what I took from each conversation.",
    count: `${founders.length} people`,
    href: "/cool-stuff/people",
  },
  {
    title: "Doing cool stuff",
    description: "Coming soon.",
  },
];

/** One chapter, as a row. Linked where there is something behind it. */
function ChapterRow({ chapter, index }: { chapter: Chapter; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  const body = (
    <>
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {number}
        </span>
        <h2 className="display relative text-2xl sm:text-3xl">
          {chapter.title}
          {chapter.href && (
            /* Accent rule, drawn from the left on hover. */
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          )}
        </h2>
        {chapter.count && (
          <span className="inline-flex items-center rounded-full border border-border px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover:border-accent group-hover:text-ink">
            {chapter.count}
          </span>
        )}
      </div>

      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        {chapter.description}
      </p>
    </>
  );

  if (!chapter.href) {
    return (
      <div className="rounded-xl border border-dashed border-border px-5 py-7 sm:px-7">
        {body}
      </div>
    );
  }

  return (
    <Link
      href={chapter.href}
      className={cn(
        "group flex items-center justify-between gap-6 rounded-xl border border-border bg-surface px-5 py-7 sm:px-7",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent",
        "hover:shadow-[0_22px_44px_-30px_rgb(17_17_17/0.45)] focus-visible:border-accent",
      )}
    >
      <span className="min-w-0">{body}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-5 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
      />
    </Link>
  );
}

/** The way in to Cool stuff: its chapters, one row each. */
export function CoolStuffHub() {
  return (
    <Section
      id="cool-stuff"
      headingLevel="h1"
      eyebrow="Cool stuff"
      title="Cool stuff."
      description="People I've met. Ideas I've stolen. Lessons I won't forget."
    >
      <ul className="space-y-4">
        {chapters.map((chapter, i) => (
          <li key={chapter.title}>
            <Reveal delay={i * 0.08}>
              <ChapterRow chapter={chapter} index={i} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
