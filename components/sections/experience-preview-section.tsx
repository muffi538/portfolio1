import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ExperienceUniverse } from "@/components/sections/experience-universe";

/**
 * Home page experience section: the portrait at the centre with every role and
 * venture floating around it, each card opening its own page.
 *
 * /experience keeps the long-form card listing — this is the way in.
 */
export function ExperiencePreviewSection() {
  return (
    <Section
      id="experience-preview"
      eyebrow="04 / Experience"
      title="Experience"
      description="Growth at Ultrahuman, supply chain at Frido, and the brands I run myself. Open any one for the full picture."
      ruled
    >
      <ExperienceUniverse />

      <div className="mt-10">
        <ButtonLink href="/experience" variant="primary">
          Full experience
        </ButtonLink>
      </div>
    </Section>
  );
}
