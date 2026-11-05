import { Section } from "@/components/ui/section";
import { Placeholder } from "@/components/sections/placeholder";
import { projects } from "@/data/projects";

/** Projects listing. Reads from data/projects.ts, which is empty until real entries are added. */
export function ProjectsSection() {
  return (
    <Section id="projects" headingLevel="h1" title="Projects" description="Placeholder section.">
      {projects.length === 0 ? (
        <Placeholder>
          Project cards go here. Add entries to data/projects.ts and project images to
          /public/images/projects.
        </Placeholder>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="rounded-lg border border-border p-5"
            >
              <h3 className="font-medium">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
