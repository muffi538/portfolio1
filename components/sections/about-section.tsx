import { Section } from "@/components/ui/section";
import { Placeholder } from "@/components/sections/placeholder";

/** About page content. TODO: replace with the real biography. */
export function AboutSection() {
  return (
    <Section id="about" headingLevel="h1" title="About" description="Placeholder section.">
      <Placeholder>
        Biography, background, skills and a profile image go here. Images belong in
        /public/images.
      </Placeholder>
    </Section>
  );
}
