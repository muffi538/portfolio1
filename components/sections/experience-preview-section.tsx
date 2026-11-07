import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ExperienceCard } from "@/components/sections/experience-card";
import { experience } from "@/data/experiences";

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
      description="Growth at Ultrahuman, supply chain at Frido, and two ventures of my own."
      ruled
    >
      <ul className="space-y-5 lg:space-y-6">
        {experience.map((item) => (
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
