/**
 * Shared content types.
 * These describe the shape of the data in `data/`. Every value there is drawn
 * from the portfolio deck or the resume — nothing is invented.
 */

export type NavItem = {
  /** Visible label. */
  label: string;
  /** Route path, e.g. "/about". */
  href: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  /** Short wordmark used in the navbar. */
  name: string;
  /** Full name. */
  fullName: string;
  title: string;
  description: string;
  url: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  /** Path under /public. */
  resume: string;
};

export type SocialLink = ExternalLink & {
  /** Shown under the label, e.g. "@mufmuf_eats". */
  handle?: string;
};

/** A logo or photograph pulled out of the portfolio deck. */
export type Asset = {
  /** Path under /public/images. */
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * The photograph beside the About copy.
 * `fit` is "cover" for an ordinary photograph that should fill the panel, and
 * "contain" for a cut-out with transparency that would be ruined by cropping.
 */
export type AboutImage = Asset & {
  fit: "cover" | "contain";
  /** CSS object-position, e.g. "center 25%". */
  focus?: string;
};

export type ExperienceItem = {
  slug: string;
  role: string;
  organisation: string;
  /** Free-form, e.g. "Dec 2025". */
  period: string;
  location?: string;
  /** Sub-title, e.g. "TikTok Shop UK | Affiliate & Creator Partnerships". */
  focus?: string;
  summary: string;
  /** Bullet points. */
  highlights: string[];
  /** The headline number, e.g. "£5,000+ GMV". */
  metric?: { value: string; label: string };
  tags: string[];
  logo?: Asset;
  images?: Asset[];
  links?: ExternalLink[];
};

export type Project = {
  slug: string;
  title: string;
  /** e.g. "Website build", "Consumer research". */
  kind: string;
  year: string;
  summary: string;
  highlights: string[];
  tags: string[];
  logo?: Asset;
  images?: Asset[];
  links?: ExternalLink[];
};

export type EducationItem = {
  institution: string;
  qualification: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  logo?: Asset;
  image?: Asset;
};

export type SkillGroup = {
  label: string;
  detail: string;
};
