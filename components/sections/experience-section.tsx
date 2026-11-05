import { Section } from "@/components/ui/section";
import { Placeholder } from "@/components/sections/placeholder";
import { experience } from "@/data/experience";

/** Experience timeline. Reads from data/experience.ts. */
export function ExperienceSection() {
  return (
    <Section id="experience" headingLevel="h1" title="Experience" description="Placeholder section.">
      {experience.length === 0 ? (
        <Placeholder>
          Roles, education and timeline entries go here. Add entries to data/experience.ts.
        </Placeholder>
      ) : (
        <ol className="space-y-6">
          {experience.map((item) => (
            <li key={`${item.organisation}-${item.period}`} className="border-l border-border pl-5">
              <h3 className="font-medium">{item.role}</h3>
              <p className="text-sm text-muted-foreground">
                {item.organisation} · {item.period}
              </p>
              <p className="mt-2 text-sm">{item.description}</p>
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}
