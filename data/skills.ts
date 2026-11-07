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
 * Photographs that sit with the awards list. Each one is described by what is
 * visible in the frame — none of them is tied to a specific award above. The
 * first is the lead, shown wide above the list; the rest stack beside it.
 */
export const awardImages: SectionImage[] = [
  {
    src: "/images/award-trophy-row.jpg",
    alt: "Mufaddal kneeling behind a row of eleven football trophies and a framed FLAME Vyaparkshetra 2025 certificate laid out on a lawn",
    width: 1280,
    height: 720,
    ratio: "16 / 9",
    focus: "center 55%",
  },
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
    src: "/images/award-kit.jpg",
    alt: "Mufaddal resting beside a trophy, two medals and his number 66 jersey after a tournament",
    width: 619,
    height: 1100,
    // Holds the trophy, the jersey and him; the empty floor above is dropped.
    ratio: "3 / 4",
    focus: "center 62%",
  },
  {
    src: "/images/award-two-trophies.jpg",
    alt: "Mufaddal in an MIT-WPU kit holding a futsal trophy and a football trophy, medals around his neck",
    width: 619,
    height: 1100,
    ratio: "3 / 4",
    focus: "center 45%",
  },
  {
    src: "/images/award-top-scorer.jpg",
    alt: "Mufaddal in a Mesa shirt with two gold medals, holding a top scorer trophy at the Maverion 2026 five-a-side tournament",
    width: 825,
    height: 1100,
    ratio: "4 / 5",
    focus: "center 48%",
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
    src: "/images/award-hackathon.jpg",
    alt: "Mufaddal holding a ₹30,000 Ad Hackathon 2026 cheque in front of the Mesa School of Business wall",
    width: 825,
    height: 1100,
    ratio: "4 / 5",
    focus: "center 55%",
  },
  {
    src: "/images/award-mvp.jpg",
    alt: "Mufaddal holding an MVP award trophy for ChewCheer, beside a member of the Mesa team",
    width: 825,
    height: 1100,
    ratio: "4 / 5",
    focus: "center 52%",
  },
];
