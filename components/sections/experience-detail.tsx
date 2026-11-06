import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { Placeholder } from "@/components/ui/placeholder";
import type { DetailBlock, ExperienceItem } from "@/lib/types";

/** One titled block: paragraphs, bullets, and a placeholder for what is missing. */
function Block({
  title,
  block,
  index,
}: {
  title: string;
  block: DetailBlock;
  index: string;
}) {
  const empty = !block.body?.length && !block.points?.length && !block.todo;
  if (empty) return null;

  return (
    <section className="rule-ink pt-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {index}
        </p>
        <h2 className="display display-md mt-2">{title}</h2>

        {block.body && block.body.length > 0 && (
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed">
            {block.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        {block.points && block.points.length > 0 && (
          <ul className="mt-6 max-w-3xl space-y-2.5">
            {block.points.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                />
                {point}
              </li>
            ))}
          </ul>
        )}

        {block.todo && (
          <Placeholder className="mt-6 max-w-3xl">{block.todo}</Placeholder>
        )}
      </Reveal>
    </section>
  );
}

/**
 * The detail page template, shared by every /experience/<slug> route.
 * Content comes from `data/experiences.ts`; nothing is written here.
 */
export function ExperienceDetail({ item }: { item: ExperienceItem }) {
  const { detail } = item;

  return (
    <>
      {/* Header */}
      <Section id="experience-detail" headingLevel="h1" contained>
        <Reveal>
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

          {item.focus && (
            <p className="mt-2 text-muted-foreground">{item.focus}</p>
          )}

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
        <div className="space-y-14 pb-6">
          <Block title="Overview" block={detail.overview} index="01 / Overview" />
          <Block
            title="Responsibilities"
            block={detail.responsibilities}
            index="02 / Responsibilities"
          />
          <Block
            title="Work & contributions"
            block={detail.work}
            index="03 / Work"
          />
          <Block title="Outcomes" block={detail.outcomes} index="04 / Outcomes" />

          {/* Visuals */}
          <section className="rule-ink pt-8">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                05 / Visuals
              </p>
              <h2 className="display display-md mt-2">Visuals</h2>

              {item.images && item.images.length > 0 && (
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {item.images.map((image) => (
                    <li
                      key={image.src}
                      className="relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-surface"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </li>
                  ))}
                </ul>
              )}

              {detail.visualsTodo && (
                <Placeholder className="mt-6 max-w-3xl">
                  {detail.visualsTodo}
                </Placeholder>
              )}
            </Reveal>
          </section>

          <Reveal>
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
          </Reveal>
        </div>
      </Container>
    </>
  );
}
