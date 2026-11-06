import type { AboutImage, SiteConfig, SocialLink } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Mufaddal",
  fullName: "Mufaddal Yousuf Vijliwala",
  title: "Mufaddal Yousuf",
  description:
    "Growth, operations and 0→1 brand building. Student at Mesa School of Business, Bengaluru. Previously Ultrahuman (Growth UK) and Frido.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  role: "Growth · Operations · D2C",
  location: "Bengaluru, India",
  email: "mufaddal66you@gmail.com",
  phone: "8010592847",
  resume: "/mufaddal-yousuf-resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mufaddal-yousuf-b62075337/",
  },
  {
    label: "GitHub",
    href: "https://github.com/muffi538",
    handle: "@muffi538",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mufmuf_eats",
    handle: "@mufmuf_eats",
  },
];

/** The opening lines of the deck, lightly tidied. */
export const intro = [
  "I'm a first-year student at Mesa School of Business, pursuing entrepreneurship while serving as Sports Secretary on the student council.",
  "Always exploring new ideas — currently building a sports brand, working on football equipment, specifically engineering the best shoe possible.",
];

/** Background and interests — from the deck's sportsman and food-reviewer slides. */
export const background =
  "Beyond that: football at club level, previously with the AS Roma youth setup in Dubai, and @mufmuf_eats — a Bengaluru food-review channel past a million views.";

/** The second half of the deck's opening slide, pulled out so it reads as current. */
export const currentlyBuilding = {
  label: "Currently building",
  text: "A sports brand — football equipment, and specifically engineering the best shoe possible.",
};

/**
 * The photograph beside the About copy.
 * TODO: swap `src`, `alt`, `width` and `height` for the new photograph, and set
 * `fit` to "cover" so it fills the panel edge to edge. The current file is the
 * transparent cut-out from the deck, which is why it is contained rather than
 * cropped.
 */
export const aboutImage: AboutImage = {
  src: "/images/football-muffi-66.png",
  alt: "Mufaddal on the pitch in a shirt reading MUFFI 66",
  width: 464,
  height: 1120,
  fit: "contain",
  focus: "center bottom",
};

/** One-line positioning used on the home page and in metadata. */
export const positioning =
  "I build brands and ship products — across growth, supply chain, D2C and AI tooling.";
