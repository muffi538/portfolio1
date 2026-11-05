import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/data/site";
import { getCurrentYear } from "@/lib/date";

/** Site footer: secondary navigation, optional social links and a copyright line. */
export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-auto border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {socialLinks.length > 0 && (
            <nav aria-label="Social links">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <p className="border-t border-border py-6 text-sm text-muted-foreground">
          &copy; {year} {siteConfig.author || siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
