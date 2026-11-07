import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { awards, awardImages } from "@/data/skills";

/**
 * A different tilt per photograph, cycled down the pile, so the prints never
 * sit square to each other. Hover straightens the one under the cursor.
 */
const tilts = [
  "rotate-[-3deg]",
  "rotate-[2.5deg]",
  "rotate-[1.5deg]",
  "rotate-[-2deg]",
  "rotate-[3deg]",
  "rotate-[-1.5deg]",
];

export function AwardsSection() {
  /* The widest frame leads above the list; the rest stack beside it. */
  const [lead, ...pile] = awardImages;

  return (
    <Section id="awards" eyebrow="Recognition" title="Awards" ruled>
      {/* The list runs long and the pile stacks tall, so the two columns are
          evened out rather than left to pool slack under one of them. */}
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-14">
        <Reveal>
          {/* Wide enough to read the row of trophies, and it fills the air
              that a centred list would otherwise leave above itself. */}
          <figure className="relative mb-8 w-full rotate-[-1.5deg] rounded-lg border border-ink bg-surface p-1.5 transition-transform duration-500 ease-out hover:z-10 hover:rotate-0 hover:scale-[1.02]">
            <div
              className="relative w-full overflow-hidden rounded-sm bg-muted"
              style={{ aspectRatio: lead.ratio }}
            >
              <Image
                src={lead.src}
                alt={lead.alt}
                fill
                priority={false}
                className="object-cover"
                style={{ objectPosition: lead.focus }}
                sizes="(max-width: 1024px) 92vw, 30vw"
              />
            </div>
          </figure>

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

        {/* CSS columns rather than a grid: the prints keep their own heights
            and the browser balances the stacks, so nothing lines up across
            the pile and the column count can follow the breakpoint. Capped
            below lg so the pile stays a detail beside the list rather than
            taking over a tablet. */}
        <Reveal delay={0.1}>
          <div className="w-full columns-2 gap-3 px-1 sm:columns-3 sm:gap-4">
            {pile.map((image, i) => (
              <figure
                key={image.src}
                className={cn(
                  "relative mb-3 break-inside-avoid rounded-lg border border-ink bg-surface p-1.5 transition-transform duration-500 ease-out hover:z-10 hover:rotate-0 hover:scale-[1.05] sm:mb-4",
                  tilts[i % tilts.length],
                )}
              >
                {/* Each print is cropped to its own ratio, so no two sit at
                    the same height down a stack. */}
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
                    /* Two columns of a 24rem pile, three of 28rem, then ~13vw. */
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 13vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
