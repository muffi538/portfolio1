import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section
      id="not-found"
      headingLevel="h1"
      title="Page not found"
      description="The page you are looking for does not exist."
    >
      <ButtonLink href="/">Back to home</ButtonLink>
    </Section>
  );
}
