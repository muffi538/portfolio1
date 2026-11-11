import type { SectionImage } from "@/lib/types";

/** A self-hosted clip, shown with its own poster so nothing loads until played. */
export type Clip = {
  src: string;
  poster: SectionImage;
  /** What it shows, read out under the player. */
  caption: string;
};

/**
 * Things Mufaddal has done — the second chapter of Cool stuff.
 *
 * Every line here is his own account of it. `description` is the one line the
 * card carries; `body` is the longer telling on the entry's own page. Where a
 * photograph or a clip is still to come, the entry simply has none rather than
 * a placeholder standing in for one.
 */
export type Doing = {
  slug: string;
  title: string;
  /** Where or what it was, in a few words. */
  context: string;
  category: string;
  /** One line, for the card. */
  description: string;
  /** The fuller account, for the entry's own page. */
  body?: string[];
  /** Figures worth scanning, shown on the page. */
  facts?: string[];
  /** Two or three letters, shown where there is no photograph yet. */
  mark: string;
  photo?: SectionImage;
  gallery?: SectionImage[];
  video?: Clip;
};

export const doing: Doing[] = [
  {
    slug: "tanzania",
    title: "Played football in Tanzania",
    context: "Representing Bengaluru",
    category: "Sport",
    description:
      "Flew out to Tanzania to play for the Bengaluru side at the Pongwe Cup. Played as a midfielder, and scored from a free kick.",
    body: [
      "Flew out to Tanzania to play for the Bengaluru side at the Pongwe Cup, in front of a proper crowd on a proper pitch.",
      "Played as a midfielder across the tournament, and scored from a free kick.",
    ],
    mark: "TZ",
    photo: {
      src: "/images/tanzania-strike.jpg",
      alt: "Mufaddal striking the ball in the Bangalore kit at the Pongwe Cup",
      width: 1200,
      height: 801,
      focus: "center 55%",
    },
    gallery: [
      {
        src: "/images/tanzania-kit.jpg",
        alt: "Mufaddal in the Bangalore number 11 shirt on the pitch",
        width: 900,
        height: 506,
        focus: "center 35%",
      },
      {
        src: "/images/tanzania-dribble.jpg",
        alt: "Mufaddal carrying the ball past two defenders",
        width: 900,
        height: 720,
        focus: "35% center",
      },
      {
        src: "/images/tanzania-challenge.jpg",
        alt: "Mufaddal going in for the ball against an opponent",
        width: 900,
        height: 720,
        focus: "center 55%",
      },
    ],
  },
  {
    slug: "pant-project",
    title: "The Pant Project ad",
    context: "Ad Week at Mesa",
    category: "Ad project",
    description:
      "Made the ad film for The Pant Project during Ad Week. First out of 500 students, and the ₹30,000 prize.",
    body: [
      "Ad Week at Mesa: build the best advert for The Pant Project. We wrote it, shot it and cut it as a team.",
      "Ours came first out of 500 students, and took the ₹30,000 prize. One of the best things I've worked on.",
    ],
    facts: ["1st of 500 students", "₹30,000 prize", "Mesa Ad Hackathon 2026"],
    mark: "PP",
    photo: {
      src: "/images/pant-project-pitch.jpg",
      alt: "Mufaddal presenting to the room, The Pant Project on the screen behind him",
      width: 901,
      height: 1200,
      focus: "center 45%",
    },
    video: {
      src: "/video/pant-project-ad.mp4",
      poster: {
        src: "/images/pant-project-ad-poster.jpg",
        alt: "A frame from The Pant Project advert",
        width: 576,
        height: 1024,
      },
      caption: "The advert we made for The Pant Project.",
    },
    gallery: [
      {
        src: "/images/pant-project-cheque.jpg",
        alt: "The team with the ₹30,000 Ad Hackathon 2026 cheque",
        width: 1200,
        height: 900,
        focus: "center 45%",
      },
      {
        src: "/images/pant-project-wall.jpg",
        alt: "Mufaddal with the cheque at the Mesa School of Business wall",
        width: 675,
        height: 900,
        focus: "center 55%",
      },
      {
        src: "/images/pant-project-judge.jpg",
        alt: "Mufaddal with one of the judges after the result",
        width: 900,
        height: 675,
        focus: "center 40%",
      },
    ],
  },
  {
    slug: "sids-farm",
    title: "A day at Sid's Farm",
    context: "Dairy, end to end",
    category: "Immersion",
    description:
      "Followed milk the whole way — how it's produced, how it's processed, and how it reaches the person who buys it.",
    body: [
      "An immersion at Sid's Farm, following milk the whole way: how it is produced, how it is processed, and how it reaches the person who buys it.",
    ],
    mark: "SF",
  },
  {
    slug: "dev-components",
    title: "Inside Dev Components",
    context: "Electrical steel",
    category: "Immersion",
    description:
      "A steel factory making electrical steel components — the parts that end up inside motors, transformers and aerospace.",
    body: [
      "Dev Components makes electrical stampings and laminations — the steel parts that end up inside motors, transformers and aerospace equipment.",
      "Spent the day on the floor watching coil become component: the presses, the tooling, and the stack of finished shapes at the end of it.",
    ],
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
