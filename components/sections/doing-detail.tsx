import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import type { Doing } from "@/data/doing";

/**
 * One entry of Doing cool stuff, in full: the account, the clip where there is
 * one, and every photograph at a size worth looking at.
 *
 * The clip is a plain `<video>` with `preload="none"` and its own poster, so
 * five megabytes only move once someone presses play.
 */
export function DoingDetail({ item }: { item: Doing }) {
  const frames = [item.photo, ...(item.gallery ?? [])].filter(
    (frame): frame is NonNullable<typeof frame> => Boolean(frame),
  );

  return (
    <>
      <Section
        id="doing-detail"
        headingLevel="h1"
        eyebrow={`Cool stuff · ${item.category}`}
        title={item.title}
        description={item.context}
      >
        <Reveal>
          <Link
            href="/cool-stuff/doing"
            className="group inline-flex items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ink focus-visible:text-ink"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to doing cool stuff
          </Link>

          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed">
            {(item.body ?? [item.description]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {item.facts && item.facts.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {item.facts.map((fact) => (
                <li
                  key={fact}
                  className="inline-flex items-center rounded-full border border-ink px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
                >
                  {fact}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Section>

      <Container>
        <div className="space-y-12 pb-6">
          {item.video && (
            <section className="rule-ink pt-7">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  The film
                </p>
                <figure className="mt-5">
                  {/* `preload="none"`: the file is five megabytes, and nothing
                      of it should move until someone presses play. */}
                  <video
                    controls
                    preload="none"
                    playsInline
                    poster={item.video.poster.src}
                    width={item.video.poster.width}
                    height={item.video.poster.height}
                    className="mx-auto w-full max-w-sm rounded-lg border border-ink bg-ink"
                  >
                    <source src={item.video.src} type="video/mp4" />
                    Your browser cannot play this video.
                  </video>
                  <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                    {item.video.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </section>
          )}

          {frames.length > 0 && (
            <section className="rule-ink pt-7">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Photographs
                </p>
              </Reveal>

              {/* CSS columns, so each frame keeps its own shape rather than
                  being cropped to a common one. */}
              <ul className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
                {frames.map((frame, i) => (
                  <li key={frame.src} className="mb-5 break-inside-avoid lg:mb-6">
                    <Reveal delay={Math.min(i, 5) * 0.05}>
                      <Image
                        src={frame.src}
                        alt={frame.alt}
                        width={frame.width}
                        height={frame.height}
                        priority={i === 0}
                        className="h-auto w-full rounded-lg border border-border bg-muted"
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                      />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Reveal>
            <Link
              href="/cool-stuff/doing"
              className="group inline-flex items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ink focus-visible:text-ink"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              Back to doing cool stuff
            </Link>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
