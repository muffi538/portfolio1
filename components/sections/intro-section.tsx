import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { ButtonLink } from "@/components/ui/button";
import {
  aboutImage,
  background,
  currentlyBuilding,
  intro,
  siteConfig,
} from "@/data/site";

/**
 * Home page "About me".
 *
 * Two columns from `md` up, roughly 55/45, sharing one row height: the photo
 * panel stretches to the copy beside it rather than running at its own
 * height. Previously the image ran at its natural 1:2.4 ratio and forced the
 * row 315px taller than the text, which is where the empty band came from.
 */
export function IntroSection() {
  return (
    <Section id="about-me" contained>
      <div className="grid items-stretch gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            01 / About
          </p>

          <h2 id="about-me-heading" className="display display-lg mt-3">
            About me
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>{intro[0]}</p>
            <p className="text-muted-foreground">{background}</p>
          </div>

          <div className="mt-7 border-l-2 border-accent pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {currentlyBuilding.label}
            </p>
            <p className="mt-1.5 text-base leading-relaxed">{currentlyBuilding.text}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/about" variant="primary">
              More about me
            </ButtonLink>
            <ButtonLink href={siteConfig.resume} variant="outline" external>
              Download résumé
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:h-full">
          <Parallax distance={16} className="md:h-full">
            {/* Stacked, the panel keeps a 4:5 portrait ratio. Side by side it
                matches the copy's height instead, so neither column leaves a
                band of empty paper beside the other. */}
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-muted md:aspect-auto md:h-full md:min-h-[26rem]">
              <Image
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                className={
                  aboutImage.fit === "cover" ? "object-cover" : "object-contain"
                }
                style={{ objectPosition: aboutImage.focus }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </Section>
  );
}
