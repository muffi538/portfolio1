import type { SectionImage } from "@/lib/types";

/**
 * One founder Mufaddal has met, and what he took from the conversation.
 *
 * `takeaway` is his own learning, written in his words — not a quotation, and
 * not something attributed to the founder. Some of it is drawn from publicly
 * told company stories rather than a private remark, which is why nothing here
 * is in quotation marks or framed as "they told me".
 *
 * `linkedin` is only set where a verified URL exists; a card without one simply
 * shows no link rather than a guessed profile.
 */
export type Founder = {
  id: string;
  name: string;
  company: string;
  /** Industry label, e.g. "D2C". Left off where it would be a guess. */
  category?: string;
  takeaway: string;
  /**
   * A second thing worth keeping. Set where one conversation left more than
   * a single line behind.
   */
  more?: string;
  /**
   * Mufaddal's own LinkedIn post about meeting them — not the founder's
   * profile, which is why the card calls it a post rather than a name.
   */
  post?: string;
  /**
   * The photograph in full, shown in the dialog. Falls back to the company
   * monogram. These are all group frames, so `focus` aims the crop.
   */
  photo?: SectionImage;
  /**
   * A square crop of the same frame for the card.
   *
   * A square box of a landscape photograph takes its whole height, so
   * `object-position` cannot zoom in on a face — the crop has to be cut
   * rather than steered.
   */
  thumb?: SectionImage;
};

export const founders: Founder[] = [
  {
    id: "bert-mueller",
    name: "Bert Mueller",
    company: "California Burrito",
    category: "Food",
    takeaway:
      "Growth isn't always about expanding everywhere. Master one market, duplicate what works and learn from people who've already done it.",
    photo: {
      src: "/images/founder-bert-mueller.jpg",
      alt: "Mufaddal with Bert Mueller at a California Burrito counter",
      width: 1200,
      height: 900,
      focus: "38% center",
    },
    thumb: {
      src: "/images/thumb-bert-mueller.jpg",
      alt: "Bert Mueller",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gb8eFS2J",
  },
  {
    id: "utkarsh-gupta",
    name: "Utkarsh Gupta",
    company: "Comet",
    category: "D2C",
    takeaway:
      "A homegrown brand can compete through strong design, smart marketing, seasonal drops and pricing that truly understands its audience.",
    photo: {
      src: "/images/founder-utkarsh-gupta.jpg",
      alt: "Mufaddal with Utkarsh Gupta",
      width: 1200,
      height: 900,
      focus: "40% center",
    },
    thumb: {
      src: "/images/thumb-utkarsh-gupta.jpg",
      alt: "Utkarsh Gupta",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gfTEEm8D",
  },
  {
    id: "hari-menon",
    name: "Hari Menon",
    company: "BigBasket",
    category: "Consumer tech",
    takeaway:
      "Don't fall in love with your ideas. Sometimes accepting that you're wrong is what moves a business forward.",
    photo: {
      src: "/images/founder-hari-menon.jpg",
      alt: "Mufaddal with Hari Menon of BigBasket",
      width: 676,
      height: 1200,
      focus: "center 32%",
    },
    thumb: {
      src: "/images/thumb-hari-menon.jpg",
      alt: "Hari Menon",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/g2GCAgUq",
  },
  {
    id: "aniket-shah",
    name: "Aniket Shah",
    company: "Swish",
    category: "Food",
    takeaway:
      "Marketing doesn't always need to look like marketing. Curiosity, clever placement and FOMO can make people discover a brand themselves.",
    photo: {
      src: "/images/founder-aniket-shah.jpg",
      alt: "Mufaddal with Aniket Shah at the Swish office",
      width: 1200,
      height: 900,
      focus: "center 34%",
    },
    thumb: {
      src: "/images/thumb-aniket-shah.jpg",
      alt: "Aniket Shah",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gNBnR9v9",
  },
  {
    id: "yash-kalra",
    name: "Yash Kalra",
    company: "Goat Life",
    takeaway:
      "A founder should be willing to get their hands dirty. Founder-led marketing and genuine belief in the product make a difference.",
    photo: {
      src: "/images/founder-yash-kalra.jpg",
      alt: "Mufaddal with Yash Kalra at the Mesa School of Business wall, holding We Eat Breakfast cards",
      width: 1200,
      height: 900,
      focus: "center 52%",
    },
    thumb: {
      src: "/images/thumb-yash-kalra.jpg",
      alt: "Yash Kalra",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gweC5jE6",
  },
  {
    id: "garima-luthra",
    name: "Garima Luthra",
    company: "Vaaree",
    category: "D2C",
    takeaway:
      "When customers cannot touch a product, trust has to be built through curation, great visuals, product information and reliable fulfilment.",
    photo: {
      src: "/images/founder-garima-luthra.jpg",
      alt: "Mufaddal with Garima Luthra of Vaaree and two classmates",
      width: 1200,
      height: 900,
      focus: "center 42%",
    },
    thumb: {
      src: "/images/thumb-garima-luthra.jpg",
      alt: "Garima Luthra",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gwHs2mss",
  },
  {
    id: "ishan-sukul",
    name: "Ishan Sukul",
    company: "Kreo",
    category: "Consumer tech",
    takeaway:
      "Build products around a real customer gap. Great technology means little if the product isn't accessible to the people who need it.",
    photo: {
      src: "/images/founder-ishan-sukul.jpg",
      alt: "Mufaddal with Ishan Sukul at the Kreo office",
      width: 900,
      height: 1200,
      focus: "center 30%",
    },
    thumb: {
      src: "/images/thumb-ishan-sukul.jpg",
      alt: "Ishan Sukul",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gWgFCc-h",
  },
  {
    id: "shantanu-deshpande",
    name: "Shantanu Deshpande",
    company: "Bombay Shaving Company",
    category: "D2C",
    takeaway:
      "One advertisement, one sharp message. Trying to communicate everything at once makes nothing memorable.",
    photo: {
      src: "/images/founder-shantanu-deshpande.jpg",
      alt: "Mufaddal with Shantanu Deshpande",
      width: 1200,
      height: 813,
      focus: "center 38%",
    },
    thumb: {
      src: "/images/thumb-shantanu-deshpande.jpg",
      alt: "Shantanu Deshpande",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/g-JzY2ry",
  },
  {
    id: "kiran-shah",
    name: "Kiran Shah",
    company: "Go Zero",
    category: "Food",
    takeaway:
      "Choose distribution around how customers actually shop. Finding the right channel can change the trajectory of a consumer brand.",
    photo: {
      src: "/images/founder-kiran-shah.jpg",
      alt: "Mufaddal with Kiran Shah at the Go Zero office",
      width: 1200,
      height: 873,
      focus: "38% center",
    },
    thumb: {
      src: "/images/thumb-kiran-shah.jpg",
      alt: "Kiran Shah",
      width: 420,
      height: 420,
    },
  },
  {
    id: "shivang-chandna",
    name: "Shivang Chandna",
    company: "Past Modern",
    category: "Craft",
    takeaway:
      "There's so much value in India's traditional crafts and textiles. Sometimes the opportunity is simply helping people rediscover what already exists.",
    photo: {
      src: "/images/founder-shivang-chandna-2.jpg",
      alt: "Mufaddal with Shivang Chandna after his fireside chat at Mesa School of Business",
      width: 900,
      height: 1200,
      focus: "center 34%",
    },
    thumb: {
      src: "/images/thumb-shivang-chandna-2.jpg",
      alt: "Shivang Chandna",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gEyfJWDu",
  },
  {
    id: "anindita-sampath",
    name: "Anindita Sampath",
    company: "Yoga Bar",
    category: "Food",
    takeaway:
      "Building a new category means challenging existing consumer habits. Start with a real need and make people believe in a better alternative.",
  },
  {
    id: "amarpreet-singh",
    name: "Amar Preet Singh",
    company: "Neeman's",
    category: "D2C",
    takeaway:
      "You can't be the best in every category. Know who you're for, pick your niche and own it — people buy what a brand stands for.",
    more:
      "And in India a claim has to be exact. People will use a product for anything and everything, and if it doesn't hold up in that use, they'll say the product failed.",
    photo: {
      src: "/images/founder-amarpreet-singh.jpg",
      alt: "Mufaddal with Amar Preet Singh of Neeman's",
      width: 1200,
      height: 900,
      focus: "center 36%",
    },
    thumb: {
      src: "/images/thumb-amarpreet-singh.jpg",
      alt: "Amar Preet Singh",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gd8nXEnb",
  },
  {
    id: "dhananjay-yadav",
    name: "Dhananjay Yadav",
    company: "NeoSapien",
    category: "Consumer tech",
    takeaway:
      "A screenless AI wearable — a necklace that listens, transcribes and acts like a second brain.",
    photo: {
      src: "/images/founder-dhananjay-yadav.jpg",
      alt: "Mufaddal with Dhananjay Yadav of NeoSapien at the gym",
      width: 1200,
      height: 900,
      focus: "center 32%",
    },
    thumb: {
      src: "/images/thumb-dhananjay-yadav.jpg",
      alt: "Dhananjay Yadav",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gdVbHBM8",
  },
  {
    id: "sahib-aggarwal",
    name: "Sahib Aggarwal",
    company: "Zen Barefoot",
    takeaway:
      "Ran a kilometre with him and talked through the space I'm building in — every doubt I had, answered on the move.",
    photo: {
      src: "/images/founder-sahib-aggarwal.jpg",
      alt: "Mufaddal with Sahib Aggarwal of Zen Barefoot at the gym",
      width: 1200,
      height: 900,
      focus: "center 38%",
    },
    thumb: {
      src: "/images/thumb-sahib-aggarwal.jpg",
      alt: "Sahib Aggarwal",
      width: 420,
      height: 420,
    },
    post: "https://lnkd.in/p/gdVbHBM8",
  },
  {
    id: "varun-limaye",
    name: "Varun Limaye",
    company: "Mesa School of Business",
    category: "Education",
    takeaway: "Build useful things.",
    photo: {
      src: "/images/founder-varun-limaye.jpg",
      alt: "Mufaddal with Varun Limaye, holding the Mesa tournament trophy",
      width: 900,
      height: 1200,
      focus: "center 36%",
    },
    thumb: {
      src: "/images/thumb-varun-limaye.jpg",
      alt: "Varun Limaye",
      width: 420,
      height: 420,
    },
  },
  {
    id: "vinay-kothari",
    name: "Vinay Kothari",
    company: "GO DESi",
    category: "Food",
    takeaway:
      "A product that already exists in a village can become a national brand. The hard part isn't inventing something new — it's the sourcing, the packaging and the distribution that get it onto shelves across the country.",
    photo: {
      src: "/images/founder-vinay-kothari.jpg",
      alt: "Mufaddal with Vinay Kothari of GO DESi",
      width: 900,
      height: 1200,
      focus: "center 15%",
    },
  },
];

/**
 * Initials of the company, used where no photograph exists yet.
 *
 * Multi-word names give one letter per word. A single word gives its internal
 * capitals where it has them — BigBasket reads BB — and its first two letters
 * otherwise, so every mark is two or three characters rather than a lone
 * letter beside a three-letter one.
 */
export function monogram(company: string) {
  const words = company.trim().split(/\s+/);

  if (words.length > 1) {
    return words
      .slice(0, 3)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  const capitals = words[0].match(/[A-Z]/g) ?? [];
  if (capitals.length > 1) return capitals.slice(0, 3).join("");

  return words[0].slice(0, 2).toUpperCase();
}
