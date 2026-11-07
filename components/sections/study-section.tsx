import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { study } from "@/data/study";

/**
 * The two courses currently running, each with a bar showing how far through
 * it is. Unnumbered: it is a band of context above the experience, not a
 * chapter of the page.
 */
export function StudySection() {
  return (
    <Section id="study" eyebrow="Currently studying" ruled>
      <ul className="grid gap-5 md:grid-cols-2 md:gap-6">
        {study.map((item, i) => {
          const progress = Math.round((item.year / item.years) * 100);

          return (
            <li key={item.institution}>
              <Reveal delay={i * 0.08}>
                <article className="group h-full rounded-xl border border-border bg-muted/50 p-5 transition-colors duration-500 hover:border-ink sm:p-6">
                  <h3 className="display text-lg sm:text-xl">{item.institution}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.programme}
                  </p>

                  {/* The bar is decoration over the figures below it, which
                      already say the same thing in words. */}
                  <div
                    aria-hidden="true"
                    className="mt-6 h-1 w-full overflow-hidden rounded-full bg-border"
                  >
                    <span
                      className="block h-full rounded-full bg-ink transition-colors duration-500 group-hover:bg-accent"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <p className="mt-3 flex items-baseline justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{item.startYear}</span>
                    <span className="text-ink">
                      Year {item.year} of {item.years}
                    </span>
                    <span>{item.endYear}</span>
                  </p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
