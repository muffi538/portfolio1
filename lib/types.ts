/**
 * Shared content types.
 * These describe the shape of the data in `data/`, not any visual design.
 * Extend them as real portfolio content is added.
 */

export type NavItem = {
  /** Visible label. */
  label: string;
  /** Route path, e.g. "/about". */
  href: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  /** Path under /public/images, e.g. "/images/projects/example.png". */
  image?: string;
  href?: string;
};

export type ExperienceItem = {
  role: string;
  organisation: string;
  /** Free-form, e.g. "2023 — Present". */
  period: string;
  description: string;
};
