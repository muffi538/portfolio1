import type { SectionImage, SkillGroup } from "@/lib/types";

/** The four groups from the deck's Personal Skills slide. */
export const skillGroups: SkillGroup[] = [
  { label: "Vibe coding", detail: "Lovable, Claude Code, Emergent, n8n" },
  { label: "Communication", detail: "Confident, well-spoken" },
  { label: "Content strategy", detail: "Planning content across many pages" },
  { label: "Leadership", detail: "Years of experience in team building and leadership" },
];

export const technicalTools = [
  "Lovable",
  "n8n",
  "Cursor",
  "GitHub",
  "Meta Ads",
  "Antigravity",
  "Claude Code",
  "Content Strategy",
];

export const coreSkills = [
  "Public speaking",
  "Community building",
  "Operations",
  "Market research",
  "0→1 execution",
];

export const awards = [
  "IIT Bombay Football Tournament — Winner",
  "FLAMES Tournament — Winner",
  "MIT-WPU Tournament — Winner",
  "Cambridge Cup Dubai — Winner",
  "GEMS Tournament — Winner",
  "Best Player, Football — GEMS",
  "Best Athlete Award",
  "Best D2C Product — ChewCheer",
  "Top Scorer — Mesa School of Business",
  "Best Spokesperson Award — Cambridge International School, Dubai",
  "Mesa Ad Hackathon 2026 — Winner (₹30,000)",
];

/**
 * Photographs that sit beside the awards list. Each one is described by what
 * is visible in the frame — none of them is tied to a specific award above.
 * Ordered to read as a jumble: a landscape, then three portraits.
 */
export const awardImages: SectionImage[] = [
  {
    src: "/images/award-certificate.jpg",
    alt: "Mufaddal and a classmate holding certificates of achievement with a member of school staff, outside the school auditorium in Dubai",
    width: 1100,
    height: 825,
    ratio: "4 / 3",
    focus: "center 45%",
  },
  {
    src: "/images/award-mit-wpu.jpg",
    alt: "Mufaddal in an MIT-WPU football kit, holding a trophy, a medal and a certificate after a tournament",
    width: 619,
    height: 1100,
    // A 9:16 frame squared off: aim the crop at him, the trophy and the
    // certificate rather than the ground below them.
    ratio: "4 / 5",
    focus: "center 42%",
  },
  {
    src: "/images/award-podium.jpg",
    alt: "Mufaddal on the podium with a trophy beside a teammate at a school sports fest",
    width: 768,
    height: 1024,
    ratio: "4 / 5",
    focus: "center 38%",
  },
  {
    src: "/images/award-kit.jpg",
    alt: "Mufaddal resting beside a trophy, two medals and his number 66 jersey after a tournament",
    width: 619,
    height: 1100,
    // Holds the trophy, the jersey and him; the empty floor above is dropped.
    ratio: "3 / 4",
    focus: "center 62%",
  },
];
