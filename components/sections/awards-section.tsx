import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { awards } from "@/data/skills";

export function AwardsSection() {
  return (
    <Section id="awards" eyebrow="Recognition" title="Awards" ruled>
      <ul className="rule-ink">
        {awards.map((award, i) => (
          <li key={award} className="border-b border-border">
            <Reveal delay={Math.min(i, 6) * 0.03}>
              <div className="flex items-baseline gap-5 py-4">
                <span
                  aria-hidden="true"
                  className="text-xs font-bold tabular-nums text-muted-foreground"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium sm:text-lg">{award}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
