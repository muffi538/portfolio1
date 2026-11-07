import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/data/projects";

/**
 * Home page teaser — the gist of each project in a single line, not the full
 * write-up. One row per project: a small logo tile, the name, and what it was.
 * The complete entries, with images, highlights and links, live on /projects.
 */
export function SelectedWorkSection() {
  return (
    <Section
      id="selected-work"
      eyebrow="02 / Selected work"
      title="Selected work"
      description="A few things I've built, researched and shipped."
      ruled
    >
      <ul className="rule-ink">
        {projects.map((project, i) => (
          <li key={project.slug} className="border-b border-border">
            <Reveal delay={Math.min(i, 5) * 0.04}>
              <Link
                href={`/projects#${project.slug}`}
                className="group -mx-4 grid items-center gap-x-5 gap-y-2 rounded-lg px-4 py-5 transition-colors duration-300 hover:bg-muted/60 focus-visible:bg-muted/60 sm:grid-cols-[3.25rem_1fr_auto]"
              >
                {/* The mark only — the sentence beside it already names the
                    project, so the image carries no alt text of its own. */}
                {project.logo ? (
                  <span className="relative hidden size-13 shrink-0 overflow-hidden rounded-md border border-border bg-surface sm:block">
                    <Image
                      src={project.logo.src}
                      alt=""
                      fill
                      className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="3.25rem"
                    />
                  </span>
                ) : (
                  <span className="hidden sm:block" />
                )}

                <span className="min-w-0 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <span className="relative font-bold text-ink">
                    {project.shortName}
                    {/* Animated underline, drawn from the left on hover. */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    />
                  </span>{" "}
                  — {project.gist}
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="hidden size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:text-ink sm:block"
                />
              </Link>
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
