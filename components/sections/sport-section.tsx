import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { sport } from "@/data/sport";

export function SportSection() {
  return (
    <Section id="sport" eyebrow="Extracurricular" title="Sportsman" ruled>
      {/* Centred against each other: the photograph is a 1.9:1 landscape and
          the copy runs taller, so any slack is split rather than pooling
          under one column. */}
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
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

        </Reveal>

        <Reveal delay={0.1}>
          {/* Natural ratio, so none of the trophies are cropped off the edges. */}
          <Image
            src={sport.image.src}
            alt={sport.image.alt}
            width={sport.image.width}
            height={sport.image.height}
            className="h-auto w-full rounded-lg border border-ink"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          {/* The club badge sits with the photograph rather than the copy: it
              is the same subject, and it evens the two columns out. */}
          <div className="mt-4 inline-flex items-center gap-4 rounded-lg border border-border bg-surface p-4">
            <Image
              src={sport.logo.src}
              alt={sport.logo.alt}
              width={sport.logo.width}
              height={sport.logo.height}
              className="h-10 w-auto object-contain"
              sizes="6rem"
            />
            <p className="text-sm font-medium text-muted-foreground">
              AS Roma youth setup, Dubai
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
