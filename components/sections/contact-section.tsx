import { Section } from "@/components/ui/section";
import { Placeholder } from "@/components/sections/placeholder";

/** Contact page content. TODO: replace with real contact details or a form. */
export function ContactSection() {
  return (
    <Section id="contact" headingLevel="h1" title="Contact" description="Placeholder section.">
      <Placeholder>
        Contact details, social links or a contact form go here. Social links are read from
        data/site.ts.
      </Placeholder>
    </Section>
  );
}
