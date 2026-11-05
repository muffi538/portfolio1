import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      headingLevel="h1"
      eyebrow="Experience"
      title="Where I've worked"
      description="Growth, supply chain and operations roles, alongside the brands and products I've built myself."
    >
      <ol className="space-y-px overflow-hidden rounded-lg border border-ink bg-ink">
        {experience.map((item, i) => (
          <li key={item.slug} className="bg-paper">
            <Reveal delay={Math.min(i, 3) * 0.05}>
              <article className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_20rem]">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="display display-md">{item.organisation}</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.period}
                      {item.location && ` · ${item.location}`}
                    </p>
                  </div>

                  <p className="mt-2 text-base font-bold">{item.role}</p>
                  {item.focus && (
                    <p className="text-sm text-muted-foreground">{item.focus}</p>
                  )}

                  <p className="mt-5 max-w-2xl text-base leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex max-w-2xl gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </ul>

                  {item.links && item.links.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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
                </div>

                <div className="space-y-5">
                  {item.metric && (
                    <div className="rounded-lg border border-ink bg-accent p-5 text-accent-ink">
                      <p className="display display-md">{item.metric.value}</p>
                      <p className="mt-2 text-sm font-medium">{item.metric.label}</p>
                    </div>
                  )}

                  {item.logo && (
                    <div className="flex items-center justify-center rounded-lg border border-border bg-surface p-5">
                      <Image
                        src={item.logo.src}
                        alt={item.logo.alt}
                        width={item.logo.width}
                        height={item.logo.height}
                        className="h-12 w-auto object-contain"
                        sizes="12rem"
                      />
                    </div>
                  )}

                  {item.images && item.images.length > 0 && (
                    <ul className="grid grid-cols-2 gap-5">
                      {item.images.map((image) => (
                        <li
                          key={image.src}
                          className="relative aspect-square overflow-hidden rounded-lg border border-border bg-surface"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 1024px) 45vw, 10rem"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
