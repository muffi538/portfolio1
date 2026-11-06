import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ExperienceList } from "@/components/sections/experience-list";

/** Home page teaser — the same clickable directory as /experience. */
export function ExperiencePreviewSection() {
  return (
    <Section
      id="experience-preview"
      eyebrow="03 / Experience"
      title="Experience"
      description="Growth at Ultrahuman, supply chain at Frido, and two ventures of my own."
      ruled
    >
      <ExperienceList />

      <div className="mt-10">
        <ButtonLink href="/experience" variant="primary">
          Full experience
        </ButtonLink>
      </div>
    </Section>
  );
}
