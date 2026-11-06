import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  /** Full entry with highlights, or the compact card used on the home page. */
  detailed?: boolean;
  /** Set on the first card in a grid — its image is the likely LCP element. */
  priority?: boolean;
  /**
   * How wide the card renders, for the image srcset. It differs per grid —
   * the projects page runs two columns, the home teaser three — and guessing
   * low makes next/image serve a file smaller than the slot it fills.
   */
  sizes?: string;
};

export function ProjectCard({
  project,
  detailed = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ProjectCardProps) {
  const cover = project.images?.[0];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-ink bg-surface">
      {cover && (
        <div className="relative aspect-[16/9] w-full border-b border-ink bg-muted">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={priority}
            className="object-cover"
            style={{ objectPosition: cover.focus }}
            sizes={sizes}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {project.kind} · {project.year}
        </p>

        <h3 className="display display-md mt-3">{project.title}</h3>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.summary}
        </p>

        {detailed && project.highlights.length > 0 && (
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-8">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm text-sm font-bold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
