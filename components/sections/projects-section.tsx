import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

/** The /projects page: one wide card per project, each opening what it links to. */
export function ProjectsSection() {
  return (
    <Section
      id="projects"
      headingLevel="h1"
      eyebrow="Projects"
      title="What I've built"
      description="Products shipped, brands launched and research run — end to end."
    >
      <ul className="space-y-8 lg:space-y-10">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal>
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
