import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import type { DetailSection, ExperienceItem, Metric } from "@/lib/types";

/**
 * The figures of a section, set to be scanned rather than read.
 *
 * Typography and a hairline carry these — no cards, no panels — so a run of
 * four numbers reads as a line of the page rather than a dashboard dropped
 * into it.
 */
function Metrics({ metrics, columns }: { metrics: Metric[]; columns: 2 | 4 }) {
  return (
    <dl
      className={cn(
        "mt-7 grid grid-cols-2 gap-x-8 gap-y-7",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {metrics.map((metric) => (
        <div key={metric.label} className="border-t border-ink pt-4">
          <dt className="sr-only">{metric.label}</dt>
          <dd>
            <span className="display block text-3xl sm:text-4xl">{metric.value}</span>
            <span
              aria-hidden="true"
              className="mt-2 block text-sm leading-snug text-muted-foreground"
            >
              {metric.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** The accent-dotted bullet list used throughout the site. */
function Points({ points, className }: { points: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {points.map((point) => (
        <li key={point} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
          />
          {point}
        </li>
      ))}
    </ul>
  );
}

/**
 * One numbered section.
 *
 * Give the section an `image` in `data/experiences.ts` and it lays out as two
 * columns — roughly 55/45, centred against each other — with the photograph on
 * whichever side `imageSide` names. Without one the copy runs full width.
 *
 * Metrics always run full width, under both columns: four figures squeezed
 * into half a row stop being scannable, which is the only reason they exist.
 */
function SectionBlock({
  section,
  index,
  priority = false,
}: {
  section: DetailSection;
  /** Position in the page, already padded — "01", "02" … */
  index: string;
  /** Set on the first section: its photograph is the likely LCP element. */
  priority?: boolean;
}) {
  const { image, metrics } = section;
  const imageLeft = section.imageSide === "left";
  /* Beside a photograph the figures sit in the copy column, two across, so
     the two columns stay level; on their own they run the full width, four
     across, which is how they are quickest to scan. */
  const metricsInColumn = !!image && !!metrics?.length;
  /* A section built from several workstreams runs much taller than its
     photograph; one built from a paragraph does not. The two want opposite
     alignments, so the content decides rather than a single rule. */
  const tall = (section.groups?.length ?? 0) > 0;
  /* A paragraph or two beside a tall portrait leaves a column of white, so a
     short section gets a shorter frame. */
  const short =
    !tall &&
    !metricsInColumn &&
    (section.body?.length ?? 0) + (section.points?.length ?? 0) <= 3;

  const copy = (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {index} / {section.title}
      </p>
      <h2 className="display display-md mt-2">{section.title}</h2>

      {section.body && section.body.length > 0 && (
        <div className="mt-5 space-y-4 text-lg leading-relaxed">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {section.points && section.points.length > 0 && (
        <Points points={section.points} className="mt-5" />
      )}

      {section.groups && section.groups.length > 0 && (
        <div className="mt-7 space-y-7">
          {section.groups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-base font-bold">{group.heading}</h3>
              <Points points={group.points} className="mt-3" />
            </div>
          ))}
        </div>
      )}

      {metricsInColumn && metrics && <Metrics metrics={metrics} columns={2} />}
    </div>
  );

  const figure = image ? (
    /* Capped on wide screens: a 1:1 portrait in a 45% column would otherwise
       stand 500px tall beside three lines of copy. */
    <div
      className={cn(
        "relative mx-auto w-full overflow-hidden rounded-lg border border-border bg-muted",
        short ? "lg:max-h-[22rem]" : "lg:max-h-[30rem]",
      )}
      style={{ aspectRatio: image.ratio ?? "4 / 3" }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className={image.fit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition: image.focus }}
        sizes="(max-width: 1024px) 100vw, 45vw"
      />
    </div>
  ) : null;

  return (
    <section className="rule-ink pt-7">
      {figure ? (
        /* `order` moves the elements, not the tracks, so the column widths are
           mirrored too — otherwise a left-hand photograph would take the wider
           column and leave the copy in the narrow one. */
        <div
          className={cn(
            "grid gap-8 lg:gap-14",
            tall ? "lg:items-start" : "lg:items-center",
            imageLeft ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]",
          )}
        >
          <Reveal className={imageLeft ? "lg:order-2" : undefined}>{copy}</Reveal>
          {/* Where the copy runs long the photograph is pinned, so it travels
              with the reader instead of leaving a dead band beside it. Sticky
              needs `items-start` for the row to leave it room to move. */}
          <Reveal
            delay={0.08}
            className={cn(tall && "lg:sticky lg:top-28", imageLeft && "lg:order-1")}
          >
            {figure}
          </Reveal>
        </div>
      ) : (
        <Reveal>
          <div className="max-w-3xl">{copy}</div>
        </Reveal>
      )}

      {metrics && metrics.length > 0 && !metricsInColumn && (
        <Reveal delay={0.12}>
          <Metrics metrics={metrics} columns={4} />
        </Reveal>
      )}
    </section>
  );
}

/** Repeated at the top and bottom of every detail page. */
function BackLink() {
  return (
    <Link
      href="/experience"
      className="group inline-flex items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ink focus-visible:text-ink"
    >
      <ArrowLeft
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5"
      />
      Back to experience
    </Link>
  );
}

/**
 * The detail page template, shared by every /experience/<slug> route.
 *
 * Content comes from `data/experiences.ts`; nothing is written here. Sections
 * are numbered by position, so a role that carries four of them reads 01–04
 * rather than skipping a number it has nothing to put under.
 */
export function ExperienceDetail({ item }: { item: ExperienceItem }) {
  const { sections } = item.detail;

  return (
    <>
      {/* Header */}
      <Section id="experience-detail" headingLevel="h1" contained>
        <Reveal>
          <BackLink />

          <h1 id="experience-detail-heading" className="display display-lg mt-6">
            {item.organisation}
          </h1>

          <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <p className="text-lg font-bold">{item.role}</p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {item.period}
              {item.location && ` · ${item.location}`}
            </p>
          </div>

          {item.focus && <p className="mt-2 text-muted-foreground">{item.focus}</p>}

          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{item.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {item.logo && (
              <Image
                src={item.logo.src}
                alt={item.logo.alt}
                width={item.logo.width}
                height={item.logo.height}
                className="h-10 w-auto rounded-sm object-contain"
                sizes="12rem"
                priority
              />
            )}
            {item.metric && (
              <p className="flex items-baseline gap-3">
                <span className="display display-md">{item.metric.value}</span>
                <span className="text-sm text-muted-foreground">
                  {item.metric.label}
                </span>
              </p>
            )}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>

          {item.links && item.links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {item.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-sm text-sm font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Section>

      {/* Body */}
      <Container>
        <div className="space-y-12 pb-6">
          {sections.map((section, i) => (
            <SectionBlock
              key={section.title}
              section={section}
              index={String(i + 1).padStart(2, "0")}
              priority={i === 0}
            />
          ))}

          <Reveal>
            <BackLink />
          </Reveal>
        </div>
      </Container>
    </>
  );
}
