import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navItems } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/data/site";
import { getCurrentYear } from "@/lib/date";

/** Site footer: a closing call to action, secondary navigation and social links. */
export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-auto border-t border-ink bg-ink text-paper">
      <Container>
        <div className="py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/60">
            Get in touch
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="display display-md mt-4 inline-block break-all text-paper transition-colors hover:text-accent"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="grid gap-10 border-t border-paper/20 py-10 sm:grid-cols-2">
          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-paper/60">
              Pages
            </h2>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm font-medium text-paper/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-paper/60">
              Elsewhere
            </h2>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-paper/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                    {link.handle && (
                      <span className="text-paper/50">{link.handle}</span>
                    )}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resume}
                  className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-paper/80 transition-colors hover:text-accent"
                >
                  Résumé (PDF)
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="border-t border-paper/20 py-6 text-xs uppercase tracking-wide text-paper/50">
          &copy; {year} {siteConfig.fullName} · {siteConfig.location}
        </p>
      </Container>
    </footer>
  );
}
