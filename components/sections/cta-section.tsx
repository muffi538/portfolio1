import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { availability, siteConfig, socialLinks } from "@/data/site";

const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");

const linkClasses =
  "group inline-flex items-center gap-1.5 rounded-sm font-bold underline decoration-border decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-accent hover:text-ink focus-visible:decoration-accent";

/**
 * Closing block on the home page: availability stated once, in a line, with
 * the three ways to follow up. Deliberately not a banner.
 */
export function CtaSection() {
  return (
    <Section id="cta" ruled>
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          05 / Contact
        </p>

        {/* A pill, not a headline — availability should read as a note, not a
            recruitment banner. The footer below carries the visual weight. */}
        <h2 className="mt-4">
          <Tag accent>{availability.label}</Tag>
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed">
          {availability.description}
        </p>

        <ul className="mt-7 flex flex-col gap-x-10 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center">
          <li>
            <a href={`mailto:${siteConfig.email}`} className={linkClasses}>
              {siteConfig.email}
            </a>
          </li>

          {linkedIn && (
            <li>
              <a
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                LinkedIn
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          )}

          <li>
            <Link href="/contact" className={linkClasses}>
              View contact page
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
