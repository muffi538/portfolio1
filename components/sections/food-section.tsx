import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experience";

const entry = experience.find((item) => item.slug === "mufmuf-eats");

/** The food-content side of things — deck slide 10. */
export function FoodSection() {
  if (!entry) return null;

  return (
    <Section id="food" eyebrow="Extracurricular" title="Food reviewer" ruled>
      <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed sm:text-xl">{entry.summary}</p>

          <ul className="mt-8 space-y-2.5">
            {entry.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                />
                {highlight}
              </li>
            ))}
          </ul>

          {entry.metric && (
            <div className="mt-8 inline-block rounded-lg border border-ink bg-accent p-6 text-accent-ink">
              <p className="display display-md">{entry.metric.value}</p>
              <p className="mt-2 text-sm font-medium">{entry.metric.label}</p>
            </div>
          )}

          {entry.links?.map((link) => (
            <p key={link.href} className="mt-8">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-sm text-sm font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                @mufmuf_eats on {link.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-5">
            {entry.images?.map((image) => (
              <li
                key={image.src}
                className="relative aspect-[3/4] overflow-hidden rounded-lg border border-ink bg-surface"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 45vw, 20vw"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
