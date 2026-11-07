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

/** A photograph in the awards collection, with the line that runs under it. */
export type AwardImage = SectionImage & {
  /** Describes what is in the frame; never claims an award the frame does not show. */
  caption: string;
};

/** Awards of one kind, grouped so the list reads rather than runs. */
export type AwardGroup = {
  heading: string;
  items: string[];
};

/** A course currently in progress, shown on the home page with its progress. */
export type StudyItem = {
  institution: string;
  /** The course, e.g. "UG Program · Business Management & Entrepreneurship". */
  programme: string;
  startYear: number;
  endYear: number;
  /** Which year of the course is running now. */
  year: number;
  /** How many years the course runs for. */
  years: number;
  logo?: Asset;
};

/** A number worth scanning for, shown large with the label under it. */
export type Metric = {
  /** The figure itself, e.g. "£5,000" or "6 → 2". */
  value: string;
  /** What it counts, e.g. "GMV in 3 months". */
  label: string;
};

/** A named run of bullets inside a section, e.g. one workstream of several. */
export type DetailGroup = {
  heading: string;
  points: string[];
};

/**
 * One section of an experience detail page.
 *
 * Everything here is drawn from the portfolio deck, the resume, or what
 * Mufaddal has written about the role. A section with no material is left out
 * of the array rather than rendered empty.
 */
export type DetailSection = {
  /** Heading, e.g. "What I worked on". Numbered by position when rendered. */
  title: string;
  body?: string[];
  points?: string[];
  /** Used where a section holds several distinct workstreams. */
  groups?: DetailGroup[];
  /** Figures set large, for the results of the role. */
  metrics?: Metric[];
  /** Photograph shown beside the copy. Omit and the section runs full width. */
  image?: SectionImage;
  /** Which side the photograph takes from `lg` up. Defaults to the right. */
  imageSide?: "left" | "right";
};

/**
 * The body of an experience detail page, in the order it is shown.
 *
 * An ordered list rather than fixed slots, so each role can carry the sections
 * its own story needs — and only those. The page numbers them 01, 02, 03 … as
 * it renders, so there is never a gap in the sequence.
 */
export type ExperienceDetail = {
  sections: DetailSection[];
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
  /**
   * Two or three figures for the directory card. Drawn from this entry's own
   * Results section — nothing here is a new claim.
   */
  stats?: Metric[];
  /**
   * The overlapping frames on the directory card, front first. Two or three,
   * all already used on this role's own page.
   */
  collage?: SectionImage[];
  /** Extra frames a section on another page draws on (the About food block). */
  images?: Asset[];
  links?: ExternalLink[];
  /** Everything the detail page at /experience/<slug> renders. */
  detail: ExperienceDetail;
};

export type Project = {
  slug: string;
  title: string;
  /** The name as it reads inline in the home page gist. */
  shortName: string;
  /**
   * One line for the home page, condensed from this entry's own summary and
   * highlights. It continues from `shortName`, so it starts lower-case.
   */
  gist: string;
  /** e.g. "Website build", "Consumer research". */
  kind: string;
  year: string;
  summary: string;
  highlights: string[];
  tags: string[];
  /**
   * Two or three figures for the card. Drawn from this entry's own summary
   * and highlights — nothing here is a new claim.
   */
  stats?: Metric[];
  logo?: Asset;
  /** The first is the card's front frame, the second sits behind it. */
  images?: SectionImage[];
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
