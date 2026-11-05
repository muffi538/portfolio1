import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section
      id="not-found"
      headingLevel="h1"
      eyebrow="404"
      title="Page not found"
      description="That page doesn't exist. Try one of these instead."
    >
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/" variant="primary">
          Home
        </ButtonLink>
        <ButtonLink href="/projects" variant="outline">
          Projects
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact
        </ButtonLink>
      </div>
    </Section>
  );
}
