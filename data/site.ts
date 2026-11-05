import type { SiteConfig, SocialLink } from "@/lib/types";

/**
 * Placeholder site metadata.
 * TODO: replace every value below with real information.
 */
export const siteConfig: SiteConfig = {
  name: "Portfolio",
  title: "Portfolio",
  description: "Personal portfolio website. Content to be added.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: "",
};

/** TODO: add real social profiles. */
export const socialLinks: SocialLink[] = [];
