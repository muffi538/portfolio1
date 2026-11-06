import { ArrowUpRight, Mail, Phone, MapPin, FileText } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/site";

export function ContactSection() {
  return (
    <Section
      id="contact"
      headingLevel="h1"
      eyebrow="Contact"
      title="Let's connect."
      description="Interested in collaborating, building something together, or discussing an opportunity? I'd love to hear from you."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <dl className="rule-ink">
            <div className="flex items-center gap-4 border-b border-border py-5">
              <dt className="sr-only">Email</dt>
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              <dd>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all rounded-sm text-base font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent sm:text-lg"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>

            <div className="flex items-center gap-4 border-b border-border py-5">
              <dt className="sr-only">Phone</dt>
              <Phone className="size-5 shrink-0" aria-hidden="true" />
              <dd>
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="rounded-sm text-base font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent sm:text-lg"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>

            <div className="flex items-center gap-4 border-b border-border py-5">
              <dt className="sr-only">Location</dt>
              <MapPin className="size-5 shrink-0" aria-hidden="true" />
              <dd className="text-base font-medium sm:text-lg">{siteConfig.location}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="accent" size="lg">
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </ButtonLink>
            <ButtonLink href={siteConfig.resume} variant="outline" size="lg" external>
              <FileText className="size-4" aria-hidden="true" />
              Résumé (PDF)
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Elsewhere
          </h2>
          <ul className="mt-4 rule-ink">
            {socialLinks.map((link) => (
              <li key={link.href} className="border-b border-border">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-sm py-5 transition-colors hover:text-accent"
                >
                  <span className="display text-xl sm:text-2xl">{link.label}</span>
                  <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    {link.handle}
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
