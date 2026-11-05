import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

/** Closing block on the home page. */
export function CtaSection() {
  return (
    <Section id="cta" ruled>
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          04 / Contact
        </p>
        <h2 className="display display-lg mt-4 max-w-4xl">
          Seeking growth &amp; ops roles
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Open to anyone building something from zero. The fastest way to reach me is
          email.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${siteConfig.email}`} variant="accent" size="lg">
            {siteConfig.email}
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            All contact details
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
