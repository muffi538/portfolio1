import type { StudyItem } from "@/lib/types";

/**
 * The two courses currently running, shown on the home page.
 *
 * Years and progress are stated, not computed from the clock, so the page
 * never claims a year that has not started.
 */
export const study: StudyItem[] = [
  {
    institution: "Mesa School of Business",
    programme: "UG Program · Business Management & Entrepreneurship",
    startYear: 2025,
    endYear: 2029,
    year: 2,
    years: 4,
    logo: {
      src: "/images/logo-mesa.png",
      alt: "Mesa School of Business logo",
      width: 295,
      height: 316,
    },
  },
  {
    institution: "NMIMS",
    programme: "BBA",
    startYear: 2025,
    endYear: 2028,
    year: 2,
    years: 3,
    logo: {
      src: "/images/logo-nmims.png",
      alt: "NMIMS logo",
      width: 281,
      height: 101,
    },
  },
];
