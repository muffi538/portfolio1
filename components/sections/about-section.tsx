import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { intro, siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <Section
      id="about"
      headingLevel="h1"
      eyebrow="About"
      title="Mufaddal Yousuf"
      description={`${siteConfig.role} · ${siteConfig.location}`}
    >
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
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

        <Reveal delay={0.1} className="justify-self-center md:justify-self-end">
          <Image
            src="/images/portrait.png"
            alt="Portrait of Mufaddal Yousuf, arms folded"
            width={424}
            height={1199}
            priority
            className="h-auto w-52 object-contain sm:w-64"
            sizes="(max-width: 768px) 13rem, 16rem"
          />
        </Reveal>
      </div>
    </Section>
  );
}
