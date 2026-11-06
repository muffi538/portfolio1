import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { coreSkills, skillGroups, technicalTools } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I'm good at" ruled>
      <dl className="rule-ink">
        {skillGroups.map((group, i) => (
          <div key={group.label} className="border-b border-border">
            <Reveal delay={i * 0.05}>
              <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-10">
                <dt className="sm:w-64 sm:shrink-0">
                  <Tag>{group.label}</Tag>
                </dt>
                <dd className="text-lg sm:text-xl">{group.detail}</dd>
              </div>
            </Reveal>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <Reveal>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Tools
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {technicalTools.map((tool) => (
              <li key={tool}>
                <Tag>{tool}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Core
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <li key={skill}>
                <Tag accent>{skill}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
