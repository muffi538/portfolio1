import MascotPortfolioHero from "@/components/ui/mascot-portfolio-hero";

/**
 * The landing poster: the name, one supporting line top-left, a single call to
 * action and the character. Everything else the template offered — the index
 * pill, the year, the ringed badge, the bracketed word and the swash — is off,
 * to keep the composition quiet enough for the name to lead.
 */
export function HeroSection() {
  return (
    <MascotPortfolioHero
      height="calc(100svh - var(--layout-header-height))"
      minHeight="560px"
      tagline="Zero to one"
      reel={["Portfolio", "Bengaluru, India"]}
      name={["Mufaddal", "Yousuf"]}
      ctaLabel="Currently Building"
      href="/projects"
      /* Kept short: the row sits along the bottom edge and longer labels
         run under the character. */
      services={["Growth", "Supply chain", "D2C brands", "AI products"]}
      greetings={[
        "Hi, I'm Mufaddal.",
        "I build brands and ship products.",
        "Open to internships with D2C brands.",
        "Okay, you can stop poking me :)",
      ]}
    />
  );
}
