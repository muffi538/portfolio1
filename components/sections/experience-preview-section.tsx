import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ExperienceCard } from "@/components/sections/experience-card";
import { experience } from "@/data/experiences";

/* Procur.AI is a product rather than a role, so it is listed under Projects.
   Its case study still lives at /experience/procur-ai, linked from there. */
const roles = experience.filter((item) => item.slug !== "procur-ai");

/**
 * Home page teaser — the same cards as /experience, at the compact size so
 * six of them read as a preview rather than taking over the page.
 */
export function ExperiencePreviewSection() {
  return (
    <Section
      id="experience-preview"
      eyebrow="03 / Experience"
      title="Experience"
      description="Growth at Ultrahuman, supply chain at Frido, and the brands I run myself."
      ruled
    >
      <ul className="space-y-5 lg:space-y-6">
        {roles.map((item) => (
          <li key={item.slug}>
            <ExperienceCard item={item} compact />
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ButtonLink href="/experience" variant="primary">
          Full experience
        </ButtonLink>
      </div>
    </Section>
  );
}
