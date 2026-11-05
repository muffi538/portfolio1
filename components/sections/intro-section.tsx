import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { intro, siteConfig } from "@/data/site";

/** Home page introduction, lifted from the deck's opening slide. */
export function IntroSection() {
  return (
    <Section id="intro" eyebrow="01 / Introduction" title="Introduction">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_auto]">
        <Reveal className="max-w-2xl">
          <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/about" variant="primary">
              More about me
            </ButtonLink>
            <ButtonLink href={siteConfig.resume} variant="outline" external>
              Download résumé
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="justify-self-center md:justify-self-end">
          <Image
            src="/images/football-muffi-66.png"
            alt="Mufaddal on the pitch in a shirt reading MUFFI 66"
            width={464}
            height={1120}
            className="h-auto w-44 object-contain sm:w-56 md:w-64"
            sizes="(max-width: 768px) 14rem, 16rem"
          />
        </Reveal>
      </div>
    </Section>
  );
}
