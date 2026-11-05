import { Section } from "@/components/ui/section";
import { Placeholder } from "@/components/sections/placeholder";

/** Home page intro. TODO: replace with the real headline, tagline and call to action. */
export function HeroSection() {
  return (
    <Section
      id="hero"
      headingLevel="h1"
      title="Portfolio"
      description="Placeholder home page. Content and visual direction to be added."
    >
      <Placeholder>
        Headline, short introduction, and primary call-to-action buttons go here.
      </Placeholder>
    </Section>
  );
}
