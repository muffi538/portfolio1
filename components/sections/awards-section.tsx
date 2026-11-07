import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { awards, awardImages } from "@/data/skills";

/**
 * A different tilt and lift per photograph, so the four read as a pile of
 * prints rather than a grid. Hover straightens the one under the cursor.
 */
const tilts = [
  "rotate-[-3deg]",
  "rotate-[2.5deg] translate-y-1",
  "rotate-[2deg]",
  "rotate-[-2.5deg] -translate-y-1",
];

export function AwardsSection() {
  return (
    <Section id="awards" eyebrow="Recognition" title="Awards" ruled>
      {/* The list runs long and the photographs stack tall, so the two columns
          are evened out rather than left to pool slack under one of them. */}
      <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-14">
        <Reveal>
          <ul className="space-y-3.5">
            {awards.map((award) => (
              <li key={award} className="flex gap-3.5 text-base leading-relaxed sm:text-lg">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                />
                <span className="font-medium">{award}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Two uneven columns of prints, the right one dropped, so nothing
            lines up across the pile. */}
        <Reveal delay={0.1}>
          {/* Capped below lg so the pile stays a detail beside the list
              rather than taking over the page on a tablet. */}
          <div className="mx-auto flex w-full max-w-sm gap-3 px-1 sm:gap-4 lg:max-w-none">
            {[0, 1].map((col) => (
              <div
                key={col}
                className={cn("flex w-1/2 flex-col gap-4 sm:gap-5", col === 1 && "pt-7 sm:pt-10")}
              >
                {awardImages
                  .filter((_, i) => i % 2 === col)
                  .map((image) => {
                    const i = awardImages.indexOf(image);
                    return (
                      <figure
                        key={image.src}
                        className={cn(
                          "relative rounded-lg border border-ink bg-surface p-1.5 transition-transform duration-500 ease-out hover:z-10 hover:rotate-0 hover:scale-[1.04]",
                          tilts[i % tilts.length],
                        )}
                      >
                        {/* Each print is cropped to its own ratio, so no two
                            sit at the same height down the pile. */}
                        <div
                          className="relative w-full overflow-hidden rounded-sm bg-muted"
                          style={{ aspectRatio: image.ratio }}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            style={{ objectPosition: image.focus }}
                            /* Half the pile: the pile is capped at 24rem below lg. */
                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 11rem, 15vw"
                          />
                        </div>
                      </figure>
                    );
                  })}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
