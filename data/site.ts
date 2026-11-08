import type { AboutImage, SiteConfig, SocialLink } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Mufaddal",
  fullName: "Mufaddal Yousuf Vijliwala",
  title: "Mufaddal Yousuf",
  description:
    "Student at Mesa School of Business, Bengaluru, building D2C brands and AI products. Previously Ultrahuman and Frido.",
  /**
   * The canonical origin, used for `metadataBase`, the OpenGraph tags and
   * every absolute link a crawler or a link preview builds from them.
   *
   * The live domain is the default, so production is right without any
   * environment setup. `NEXT_PUBLIC_SITE_URL` overrides it, which is what
   * preview deployments and local work should set.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mufaddalyousuf.com",
  role: "Building brands and products",
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

/**
 * How availability is stated, in the one place it is stated. Deliberately
 * understated — a line, not a banner.
 */
export const availability = {
  label: "Open to internship opportunities",
  description:
    "Interested in working with ambitious D2C brands, startups and teams building something from zero.",
};

/** Background and interests — from the deck's sportsman and food-reviewer slides. */
export const background =
  "Beyond that: football at club level, previously with the AS Roma youth setup in Dubai, and @mufmuf_eats — a Bengaluru food-review channel past a million views.";

/** The second half of the deck's opening slide, pulled out so it reads as current. */
export const currentlyBuilding = {
  label: "Currently building",
  text: "A sports brand — football equipment, and specifically engineering the best shoe possible.",
};

/** The photograph beside the About copy. */
export const aboutImage: AboutImage = {
  src: "/images/about-portrait.jpg",
  alt: "Mufaddal, arms folded, in a navy quarter-zip",
  width: 1239,
  height: 1269,
  // Near square, so the panel crops it barely at all side by side; stacked it
  // takes a 4:5 frame and the focus keeps him centred.
  fit: "cover",
  focus: "48% center",
};

/** One-line positioning used on the home page and in metadata. */
export const positioning =
  "I build brands and ship products — across growth, supply chain, D2C and AI tooling.";
