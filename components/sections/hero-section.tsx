import MascotPortfolioHero from "@/components/ui/mascot-portfolio-hero";
import { siteConfig } from "@/data/site";

/**
 * The landing poster. Copy is Mufaddal's; the character, palette and layout
 * are the supplied template, untouched.
 */
export function HeroSection() {
  return (
    <MascotPortfolioHero
      height="calc(100svh - var(--layout-header-height))"
      minHeight="560px"
      index="2026"
      discipline="Growth & Ops"
      tagline="Zero to one"
      collection={["Selected", "Work"]}
      reel={["Portfolio @ 2026", "Growth · Ops · D2C"]}
      year="2026"
      initials="MY"
      badge="Hire me"
      line2="Mufaddal"
      line3="Yousuf"
      word="Work"
      verticalTag="Growth"
      bracketed="S"
      seekingLabel="Seeking*"
      seeking="Growth / Ops roles"
      href={`mailto:${siteConfig.email}`}
      /* Kept short: the row sits along the bottom edge and longer labels
         run under the character. */
      services={["Growth", "Supply chain", "D2C brands", "AI products"]}
      greetings={[
        "Hi, I'm Mufaddal.",
        "I build brands and ship products.",
        "Open to growth & ops roles.",
        "Okay, you can stop poking me :)",
      ]}
    />
  );
}
