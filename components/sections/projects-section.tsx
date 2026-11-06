import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      headingLevel="h1"
      eyebrow="Projects"
      title="What I've built"
      description="Products shipped, brands launched and research run — end to end."
    >
      <ul className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard
                project={project}
                detailed
                priority={i === 0}
                /* one column, then two from lg */
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
