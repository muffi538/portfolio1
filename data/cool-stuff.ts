import type { Asset } from "@/lib/types";

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
  linkedin?: string;
  /** A photograph, once one exists. Falls back to the company monogram. */
  photo?: Asset;
};

export const founders: Founder[] = [
  {
    id: "bert-mueller",
    name: "Bert Mueller",
    company: "California Burrito",
    category: "Food",
    takeaway:
      "Growth isn't always about expanding everywhere. Master one market, duplicate what works and learn from people who've already done it.",
    linkedin: "https://www.linkedin.com/in/bert-mueller-47430326/",
  },
  {
    id: "utkarsh-gupta",
    name: "Utkarsh Gupta",
    company: "Comet",
    category: "D2C",
    takeaway:
      "A homegrown brand can compete through strong design, smart marketing, seasonal drops and pricing that truly understands its audience.",
  },
  {
    id: "hari-menon",
    name: "Hari Menon",
    company: "BigBasket",
    category: "Consumer tech",
    takeaway:
      "Don't fall in love with your ideas. Sometimes accepting that you're wrong is what moves a business forward.",
    linkedin: "https://www.linkedin.com/in/harimenon-bigbasket/",
  },
  {
    id: "aniket-shah",
    name: "Aniket Shah",
    company: "Swish",
    category: "Food",
    takeaway:
      "Marketing doesn't always need to look like marketing. Curiosity, clever placement and FOMO can make people discover a brand themselves.",
    linkedin: "https://www.linkedin.com/in/aniketshah30/",
  },
  {
    id: "yash-kalra",
    name: "Yash Kalra",
    company: "Goat Life",
    takeaway:
      "A founder should be willing to get their hands dirty. Founder-led marketing and genuine belief in the product make a difference.",
    linkedin: "https://www.linkedin.com/in/yashkalra98/",
  },
  {
    id: "garima-luthra",
    name: "Garima Luthra",
    company: "Vaaree",
    category: "D2C",
    takeaway:
      "When customers cannot touch a product, trust has to be built through curation, great visuals, product information and reliable fulfilment.",
  },
  {
    id: "ishan-sukul",
    name: "Ishan Sukul",
    company: "Kreo",
    category: "Consumer tech",
    takeaway:
      "Build products around a real customer gap. Great technology means little if the product isn't accessible to the people who need it.",
  },
  {
    id: "shantanu-deshpande",
    name: "Shantanu Deshpande",
    company: "Bombay Shaving Company",
    category: "D2C",
    takeaway:
      "One advertisement, one sharp message. Trying to communicate everything at once makes nothing memorable.",
  },
  {
    id: "kiran-shah",
    name: "Kiran Shah",
    company: "Go Zero",
    category: "Food",
    takeaway:
      "Choose distribution around how customers actually shop. Finding the right channel can change the trajectory of a consumer brand.",
  },
  {
    id: "shivang-chandna",
    name: "Shivang Chandna",
    company: "Past Modern",
    category: "Craft",
    takeaway:
      "There's so much value in India's traditional crafts and textiles. Sometimes the opportunity is simply helping people rediscover what already exists.",
    linkedin: "https://www.linkedin.com/in/shivangchandna/",
  },
  {
    id: "anindita-sampath",
    name: "Anindita Sampath",
    company: "Yoga Bar",
    category: "Food",
    takeaway:
      "Building a new category means challenging existing consumer habits. Start with a real need and make people believe in a better alternative.",
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
