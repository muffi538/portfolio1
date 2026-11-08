import { Section } from "@/components/ui/section";
import { ExperienceCard } from "@/components/sections/experience-card";
import { experience } from "@/data/experiences";

/* Procur.AI is a product rather than a role, so it is listed under Projects.
   Its case study still lives at /experience/procur-ai, linked from there. */
const roles = experience.filter((item) => item.slug !== "procur-ai");

/**
 * The /experience directory: one wide card per role, photographs stacked on
 * the left, the role and its numbers on the right. "Know more" opens that
 * role's own detail page.
 *
 * The home page keeps the compact row list — this is the long form.
 */
export function ExperienceSection() {
  return (
    <Section
      id="experience"
      headingLevel="h1"
      eyebrow="Experience"
      title="Where I've worked"
      description="Growth, supply chain and operations roles, alongside the brands I've built myself. Open any one for the full picture."
    >
      <ul className="space-y-5 lg:space-y-6">
        {roles.map((item, i) => (
          <li key={item.slug}>
            <ExperienceCard item={item} priority={i === 0} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
