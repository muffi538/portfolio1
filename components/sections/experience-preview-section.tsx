import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { experience } from "@/data/experience";

/** Home page teaser — a compact index of every role. */
export function ExperiencePreviewSection() {
  return (
    <Section
      id="experience-preview"
      eyebrow="03 / Experience"
      title="Experience"
      description="Growth at Ultrahuman, supply chain at Frido, and two ventures of my own."
      ruled
    >
      <ol className="rule-ink">
        {experience.map((item, i) => (
          <li key={item.slug} className="border-b border-border">
            <Reveal delay={Math.min(i, 4) * 0.04}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-6">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="display text-xl sm:text-2xl">{item.organisation}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{item.role}</p>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.period}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <ButtonLink href="/experience" variant="primary">
          Full experience
        </ButtonLink>
      </div>
    </Section>
  );
}
