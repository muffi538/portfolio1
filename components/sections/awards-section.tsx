import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { awardGroups, awardImages } from "@/data/skills";

/**
 * The awards collection: the list first, grouped by kind, then the
 * photographs on a single aligned grid.
 *
 * Every frame is cropped to the same 4:3 and set on the same spacing, so the
 * section reads as a collection rather than a folder; clicking one opens the
 * whole photograph in a lightbox, which is what makes the crop safe.
 */
export function AwardsSection() {
  return (
    <Section id="awards" eyebrow="Recognition" title="Awards" className="scroll-mt-24" ruled>
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 lg:gap-x-20">
        {awardGroups.map((group, i) => (
          <Reveal key={group.heading} delay={i * 0.06}>
            <h3 className="rule-ink pt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {group.heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3.5 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14">
          <ImageLightbox images={awardImages} />
        </div>
      </Reveal>
    </Section>
  );
}
