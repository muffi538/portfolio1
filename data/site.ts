import type { SiteConfig, SocialLink } from "@/lib/types";

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

/** One-line positioning used on the home page and in metadata. */
export const positioning =
  "I build brands and ship products — across growth, supply chain, D2C and AI tooling.";
