import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

/** Home page teaser — the first three projects, linking through to /projects. */
export function SelectedWorkSection() {
  return (
    <Section
      id="selected-work"
      eyebrow="02 / Selected work"
      title="Selected work"
      description="A website shipped to production, an AI procurement platform, and consumer research presented to a brand team."
      ruled
    >
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={i * 0.08} className="h-full">
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <ButtonLink href="/projects" variant="primary">
          All projects
        </ButtonLink>
      </div>
    </Section>
  );
}
