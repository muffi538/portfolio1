import { Section } from "@/components/ui/section";
import { ExperienceList } from "@/components/sections/experience-list";

/** The /experience directory. Every row opens its own detail page. */
export function ExperienceSection() {
  return (
    <Section
      id="experience"
      headingLevel="h1"
      eyebrow="Experience"
      title="Where I've worked"
      description="Growth, supply chain and operations roles, alongside the brands and products I've built myself. Open any one for the full picture."
    >
      <ExperienceList />
    </Section>
  );
}
