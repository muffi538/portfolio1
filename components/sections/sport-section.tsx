import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { sport } from "@/data/sport";

export function SportSection() {
  return (
    <Section id="sport" eyebrow="Extracurricular" title="Sportsman" ruled>
      <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-12">
        <Reveal>
          <p className="text-lg leading-relaxed sm:text-xl">{sport.summary}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{sport.club}</p>

          <ul className="mt-6 space-y-2">
            {sport.wins.map((win) => (
              <li key={win} className="flex gap-3 text-sm font-medium leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                />
                {win}
              </li>
            ))}
          </ul>

          <div className="mt-6 inline-flex items-center gap-4 rounded-lg border border-border bg-surface p-4">
            <Image
              src={sport.logo.src}
              alt={sport.logo.alt}
              width={sport.logo.width}
              height={sport.logo.height}
              className="h-12 w-auto object-contain"
              sizes="6rem"
            />
            <p className="text-sm font-medium text-muted-foreground">
              AS Roma youth setup, Dubai
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-5">
            {sport.images.map((image) => (
              <li
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink bg-surface"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
