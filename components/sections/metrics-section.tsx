import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/** Headline numbers, each one drawn from a role in `data/experience.ts`. */
const metrics = [
  { value: "£5,000+", label: "GMV driven at Ultrahuman UK" },
  { value: "₹1,00,000+", label: "Revenue built at ChewCheer" },
  { value: "1M+", label: "Views as @mufmuf_eats" },
  { value: "98", label: "Students led as Sports Secretary" },
];

export function MetricsSection() {
  return (
    <Section id="metrics" contained>
      <ul className="grid gap-px overflow-hidden rounded-lg border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <li key={metric.label} className="bg-paper p-6 sm:p-8">
            <Reveal delay={i * 0.06}>
              <p className="display display-md">{metric.value}</p>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {metric.label}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
