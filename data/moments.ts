import type { SectionImage } from "@/lib/types";

/** One frame in the home page strip. */
export type Moment = {
  image: SectionImage;
  /** One short line naming what the photograph shows. */
  caption: string;
  /** Where the full story lives. */
  href: string;
};

/**
 * The home page strip — work already written up elsewhere on the site, shown
 * as photographs. Every frame reuses an existing image and its alt text, and
 * every caption restates something the linked page already says. Nothing here
 * is new material.
 *
 * All eight are cropped to 4:3, so the strip keeps an even rhythm; the focus
 * points hold the subject through the crop.
 */
export const moments: Moment[] = [
  {
    image: {
      src: "/images/elemax-website.jpg",
      alt: "The Elemax website: the top-category product grid, with the category filters and request-a-quote buttons",
      width: 1600,
      height: 848,
      focus: "center 30%",
    },
    caption: "Shipped the Elemax website",
    href: "/projects#elemax",
  },
  {
    image: {
      src: "/images/chewcheer-customers.jpg",
      alt: "Two pet parents on a Bengaluru street holding a ChewCheer pack beside their dogs",
      width: 720,
      height: 1280,
      focus: "center 52%",
    },
    caption: "ChewCheer, out with pet parents",
    href: "/experience/chewcheer",
  },
  {
    image: {
      src: "/images/frido-stock-count.jpg",
      alt: "Mufaddal counting stock against a notebook in front of racked Frido inventory",
      width: 1000,
      height: 1333,
      focus: "center 55%",
    },
    caption: "Counting stock at Frido",
    href: "/experience/frido",
  },
  {
    image: {
      src: "/images/nua-pitch.jpg",
      alt: "Mufaddal presenting the Nua work, the Nua brand mark on the screen behind him",
      width: 1086,
      height: 1448,
      focus: "center 48%",
    },
    caption: "Presenting the Nua pitch",
    href: "/projects#nua",
  },
  {
    image: {
      src: "/images/ultrahuman-creators.jpg",
      alt: "The TikTok Shop creator table: affiliate handles, follower counts and sample requests against the glasses and the ring",
      width: 1400,
      height: 693,
      focus: "center 50%",
    },
    caption: "Creator affiliates at Ultrahuman",
    href: "/experience/ultrahuman",
  },
  {
    image: {
      src: "/images/mufmuf-filming.jpg",
      alt: "Mufaddal filming a review to camera on a restaurant terrace hung with marigold garlands",
      width: 912,
      height: 1600,
      focus: "center 42%",
    },
    caption: "Filming for @mufmuf_eats",
    href: "/experience/mufmuf-eats",
  },
  {
    image: {
      src: "/images/mesa-tournament.jpg",
      alt: "The Mesa squad with the trophy after a five-a-side inter-collegiate tournament",
      width: 1586,
      height: 992,
      focus: "center 45%",
    },
    caption: "Ran Maverion 2026",
    href: "/experience/sports-secretary",
  },
  {
    image: {
      src: "/images/award-hackathon.jpg",
      alt: "Mufaddal holding a ₹30,000 Ad Hackathon 2026 cheque in front of the Mesa School of Business wall",
      width: 825,
      height: 1100,
      focus: "center 58%",
    },
    caption: "Won the Mesa Ad Hackathon",
    href: "/about#awards",
  },
];
