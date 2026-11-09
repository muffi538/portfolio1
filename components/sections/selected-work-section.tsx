import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ProjectTeaser } from "@/components/sections/project-teaser";
import { projects } from "@/data/projects";

/**
 * Home page teaser — one card per project, each opening its full entry on
 * /projects, where the figures, the highlights and every link live.
 */
export function SelectedWorkSection() {
  return (
    <Section
      id="selected-work"
      eyebrow="03 / Selected work"
      title="Selected work"
      description="A few things I've built, researched and shipped."
      ruled
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={i * 0.08} className="h-full">
              <ProjectTeaser project={project} priority={i === 0} />
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ButtonLink href="/projects" variant="primary">
          All projects
        </ButtonLink>
      </div>
    </Section>
  );
}
