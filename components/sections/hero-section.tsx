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
      /* Where the work actually happened, in place of the category words
         that were there before. */
      brands={[
        {
          src: "/images/logo-ultrahuman.jpg",
          alt: "Ultrahuman",
          width: 600,
          height: 381,
        },
        { src: "/images/logo-frido.jpg", alt: "Frido", width: 472, height: 219 },
        {
          src: "/images/logo-chewcheer.jpg",
          alt: "ChewCheer",
          width: 585,
          height: 550,
        },
        { src: "/images/logo-nua.jpg", alt: "Nua", width: 383, height: 184 },
      ]}
      greetings={[
        "Hi, I'm Mufaddal.",
        "I build brands and ship products.",
        "Open to internships with D2C brands.",
        "Okay, you can stop poking me :)",
      ]}
    />
  );
}
