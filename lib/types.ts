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

/**
 * A photograph sitting beside a detail block.
 *
 * `ratio` frames it so sections stay consistent: landscape shots take "4 / 3"
 * and portraits "4 / 5", both within a few percent of the source, so nothing
 * is badly cropped. `focus` keeps the subject in frame when it is not centred.
 */
export type SectionImage = Asset & {
  ratio?: string;
  focus?: string;
  /**
   * "cover" fills the frame and is right for photographs. "contain" shows the
   * whole thing on the panel instead, for screenshots that would lose their
   * point to a crop.
   */
  fit?: "cover" | "contain";
};

/**
 * One block of an experience detail page.
 *
 * `body` and `points` hold material drawn from the portfolio deck and resume.
 * `todo` names what is still missing, and renders as a visible placeholder —
 * nothing is written to fill a gap.
 */
export type DetailBlock = {
  body?: string[];
  points?: string[];
  todo?: string;
  /** Photograph shown beside the copy. Omit and the block runs full width. */
  image?: SectionImage;
  /** Which side the photograph takes from `lg` up. Defaults to the right. */
  imageSide?: "left" | "right";
};

/** The body of an experience detail page, in the order it is shown. */
export type ExperienceDetail = {
  /** The organisation, what it does, and how I was involved. */
  overview: DetailBlock;
  /** Specific tasks and the workstreams I held. */
  responsibilities: DetailBlock;
  /** Projects shipped, problems solved, systems contributed to. */
  work: DetailBlock;
  /** Results, with metrics where they exist. */
  outcomes: DetailBlock;
  /** Prompt for the photographs and screenshots still to be added. */
  visualsTodo?: string;
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
  /** Everything the detail page at /experience/<slug> renders. */
  detail: ExperienceDetail;
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
