import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education" title="Education" ruled>
      <ol className="space-y-12">
        {education.map((item, i) => (
          <li key={item.institution}>
            <Reveal delay={Math.min(i, 2) * 0.06}>
              <article className="grid gap-8 md:grid-cols-[1fr_18rem]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.period} · {item.location}
                  </p>
                  <h3 className="display display-md mt-3">{item.institution}</h3>
                  <p className="mt-2 text-base font-bold">{item.qualification}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {(item.image || item.logo) && (
                  // Self-start and natural aspect ratio: these assets range from
                  // a 2:1 photo to a wide logo, so stretching would crop them.
                  <div className="self-start overflow-hidden rounded-lg border border-ink bg-surface">
                    {item.image ? (
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        className="h-auto w-full"
                        sizes="(max-width: 768px) 100vw, 18rem"
                      />
                    ) : item.logo ? (
                      <Image
                        src={item.logo.src}
                        alt={item.logo.alt}
                        width={item.logo.width}
                        height={item.logo.height}
                        className="h-auto w-full p-6"
                        sizes="(max-width: 768px) 100vw, 18rem"
                      />
                    ) : null}
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
