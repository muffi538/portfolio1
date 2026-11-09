import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

/**
 * The compact form of a project, for the home page: the cover, the name, and
 * the one line that says what it was.
 *
 * The whole card is the link, and hover is driven from `group` so the cover,
 * the rule under the name and the arrow all answer to the same gesture. The
 * full entry — figures, highlights, every link — is on /projects.
 */
export function ProjectTeaser({
  project,
  priority = false,
}: {
  project: Project;
  /** Set on the first card: its cover is the likely LCP element. */
  priority?: boolean;
}) {
  const cover = project.images?.[0];

  return (
    <Link
      href={`/projects#${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-ink",
        "hover:shadow-[0_24px_48px_-32px_rgb(17_17_17/0.45)]",
      )}
    >
      {cover && (
        <div className="relative aspect-16/9 w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ objectPosition: cover.focus }}
            sizes="(max-width: 768px) 100vw, 32vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3">
          {project.logo && (
            <span className="relative size-9 shrink-0 overflow-hidden rounded-md border border-border bg-surface">
              <Image
                src={project.logo.src}
                alt=""
                fill
                className="object-contain p-1"
                sizes="2.25rem"
              />
            </span>
          )}

          <span className="display relative inline-block flex-1 text-lg leading-tight">
            {project.shortName}
            {/* Accent rule, drawn from the left when the card is hovered. */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </span>

          <ArrowUpRight
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
          />
        </div>

        {/* Below the header row rather than beside the logo: the tracking on
            this line is wide, and in a column it wrapped to three. */}
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {project.kind} · {project.year}
        </p>

        {/* Reads on from the name, which is how the line is written. */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.gist}
        </p>
      </div>
    </Link>
  );
}
