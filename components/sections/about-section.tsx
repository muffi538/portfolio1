import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { intro, siteConfig } from "@/data/site";

/**
 * About page opener.
 *
 * The portrait is a 1:2.8 cut-out, so it is sized by height and left to take
 * its own width. A panel wide enough for the column put ~145px of empty grey
 * down either side of him, which read as a gap between the copy and the
 * picture rather than as a photograph.
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
      {/* Flex, not a grid: a `1fr` copy column stretched to the container and
          pushed the portrait to the far edge, which left the gap between the
          two that the panel used to. They sit as one block instead, with the
          open paper falling to the right of the pair. */}
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
        <Reveal>
          <div className="max-w-[34rem] space-y-4 text-lg leading-relaxed">
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

        <Reveal delay={0.08}>
          <Parallax distance={14}>
            <Image
              src="/images/portrait.png"
              alt="Portrait of Mufaddal Yousuf, arms folded"
              width={424}
              height={1199}
              priority
              className="mx-auto h-64 w-auto sm:h-72 md:mx-0 md:h-80"
              sizes="12rem"
            />
          </Parallax>
        </Reveal>
      </div>
    </Section>
  );
}
