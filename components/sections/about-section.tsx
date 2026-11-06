import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { intro, siteConfig } from "@/data/site";

/**
 * About page opener.
 *
 * The portrait is a 1:2.8 cut-out. Left to run at its own height it set the
 * row and left a band of empty paper beside the copy, so the panel matches the
 * copy's height from `md` up and takes a 4:5 ratio only when stacked.
 */
export function AboutSection() {
  return (
    <Section
      id="about"
      headingLevel="h1"
      eyebrow="About"
      title="Mufaddal Yousuf"
      description={`${siteConfig.role} · ${siteConfig.location}`}
    >
      <div className="grid items-stretch gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-12 lg:gap-16">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Across everything so far — a growth internship, a supply-chain role, a
              D2C brand and an AI product — the common thread is taking something
              from nothing to shipped.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:h-full">
          <Parallax distance={14} className="md:h-full">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-muted md:aspect-auto md:h-full md:min-h-[22rem]">
              <Image
                src="/images/portrait.png"
                alt="Portrait of Mufaddal Yousuf, arms folded"
                fill
                priority
                className="object-contain"
                style={{ objectPosition: "center bottom" }}
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </Section>
  );
}
