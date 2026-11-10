import type { SectionImage } from "@/lib/types";

/**
 * Things Mufaddal has done — the second chapter of Cool stuff.
 *
 * Every line here is his own account of it. Where a photograph or a video is
 * still to come, the entry simply has none rather than a placeholder standing
 * in for one.
 */
export type Doing = {
  id: string;
  title: string;
  /** Where or what it was, in a few words. */
  context: string;
  category: string;
  description: string;
  /** Two or three letters, shown where there is no photograph yet. */
  mark: string;
  photo?: SectionImage;
  thumb?: SectionImage;
  /**
   * A few more frames from the same day, shown as a strip under the copy.
   * Everything stays on the face of the card — nothing behind a click.
   */
  gallery?: SectionImage[];
  /** Somewhere it is written up or shown. */
  link?: { label: string; href: string };
};

export const doing: Doing[] = [
  {
    id: "tanzania",
    title: "Played football in Tanzania",
    context: "Representing Bengaluru",
    category: "Sport",
    description:
      "Flew out to Tanzania to play for the Bengaluru side. Played as a midfielder, and scored from a free kick.",
    mark: "TZ",
  },
  {
    id: "paan-ad",
    title: "The paan ad",
    context: "Mesa Ad Hackathon 2026",
    category: "Ad project",
    description:
      "Built the paan ad film for the hackathon. We came first, and took the ₹30,000 prize — one of the best things I've worked on.",
    mark: "AD",
    photo: {
      src: "/images/award-hackathon.jpg",
      alt: "Mufaddal holding the ₹30,000 Ad Hackathon 2026 cheque at Mesa School of Business",
      width: 825,
      height: 1100,
      focus: "center 50%",
    },
    thumb: {
      src: "/images/mesa-ad-hackathon.jpg",
      alt: "The ₹30,000 winner's cheque",
      width: 768,
      height: 383,
    },
  },
  {
    id: "sids-farm",
    title: "A day at Sid's Farm",
    context: "Dairy, end to end",
    category: "Immersion",
    description:
      "Followed milk the whole way — how it's produced, how it's processed, and how it reaches the person who buys it.",
    mark: "SF",
  },
  {
    id: "dev-components",
    title: "Inside Dev Components",
    context: "Electrical steel",
    category: "Immersion",
    description:
      "A steel factory making electrical steel components — the parts that end up inside motors, transformers and aerospace equipment.",
    mark: "DC",
    photo: {
      src: "/images/dev-components-floor.jpg",
      alt: "The Dev Components shop floor, rows of stamping presses in use",
      width: 1200,
      height: 900,
    },
    gallery: [
      {
        src: "/images/dev-components-cohort.jpg",
        alt: "The Mesa cohort at the Dev Components reception",
        width: 1200,
        height: 669,
        focus: "center 40%",
      },
      {
        src: "/images/dev-components-laminations.jpg",
        alt: "A board of electrical steel stampings and laminations in every size",
        width: 675,
        height: 900,
        focus: "center 45%",
      },
      {
        src: "/images/dev-components-coils.jpg",
        alt: "Coils of electrical steel stacked in the Dev Components warehouse",
        width: 900,
        height: 675,
      },
    ],
  },
];
