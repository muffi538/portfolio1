import type { AwardGroup, AwardImage, SkillGroup } from "@/lib/types";

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

/**
 * The same eleven awards as before, grouped so the list reads as a collection
 * rather than a run. Nothing has been added, removed or reworded.
 */
export const awardGroups: AwardGroup[] = [
  {
    heading: "Sport",
    items: [
      "IIT Bombay Football Tournament — Winner",
      "FLAMES Tournament — Winner",
      "MIT-WPU Tournament — Winner",
      "Cambridge Cup Dubai — Winner",
      "GEMS Tournament — Winner",
      "Best Player, Football — GEMS",
      "Best Athlete Award",
      "Top Scorer — Mesa School of Business",
    ],
  },
  {
    heading: "Business & academics",
    items: [
      "Best D2C Product — ChewCheer",
      "Mesa Ad Hackathon 2026 — Winner (₹30,000)",
      "Best Spokesperson Award — Cambridge International School, Dubai",
    ],
  },
];

/**
 * The awards collection. Every frame keeps its own full dimensions for the
 * lightbox; the grid crops each to a common 4:3 with a focus point, so the
 * page stays aligned while the full photograph is still one click away.
 *
 * Captions describe what is in the frame. Where the frame itself names the
 * award — a cheque, a trophy plaque, a tournament banner — the caption says
 * so; where it does not, it describes the photograph and nothing more.
 */
export const awardImages: AwardImage[] = [
  {
    src: "/images/award-trophy-row.jpg",
    alt: "Mufaddal kneeling behind a row of eleven football trophies and a framed FLAME Vyaparkshetra 2025 certificate laid out on a lawn",
    caption: "Eleven trophies and the FLAME Vyaparkshetra certificate, laid out",
    width: 1280,
    height: 720,
    focus: "center 55%",
  },
  {
    src: "/images/award-hackathon.jpg",
    alt: "Mufaddal holding a ₹30,000 Ad Hackathon 2026 cheque in front of the Mesa School of Business wall",
    caption: "Mesa Ad Hackathon 2026 — winner, ₹30,000",
    width: 825,
    height: 1100,
    focus: "center 58%",
  },
  {
    src: "/images/award-top-scorer.jpg",
    alt: "Mufaddal in a Mesa shirt with two gold medals, holding a top scorer trophy at the Maverion 2026 five-a-side tournament",
    caption: "Top scorer, Maverion 2026 five-a-side",
    width: 825,
    height: 1100,
    focus: "center 46%",
  },
  {
    src: "/images/award-mvp.jpg",
    alt: "Mufaddal holding an MVP award trophy for ChewCheer, beside a member of the Mesa team",
    caption: "MVP award for ChewCheer, Mesa",
    width: 825,
    height: 1100,
    focus: "center 50%",
  },
  {
    src: "/images/award-two-trophies.jpg",
    alt: "Mufaddal in an MIT-WPU kit holding a futsal trophy and a football trophy, medals around his neck",
    caption: "Futsal and football, in MIT-WPU colours",
    width: 619,
    height: 1100,
    focus: "center 44%",
  },
  {
    src: "/images/award-mit-wpu.jpg",
    alt: "Mufaddal in an MIT-WPU football kit, holding a trophy, a medal and a certificate after a tournament",
    caption: "Trophy, medal and certificate after an MIT-WPU tournament",
    width: 619,
    height: 1100,
    focus: "center 42%",
  },
  {
    src: "/images/award-podium.jpg",
    alt: "Mufaddal on the podium with a trophy beside a teammate at a school sports fest",
    caption: "On the podium at a school sports fest",
    width: 768,
    height: 1024,
    focus: "center 40%",
  },
  {
    src: "/images/award-certificate.jpg",
    alt: "Mufaddal and a classmate holding certificates of achievement with a member of school staff, outside the school auditorium in Dubai",
    caption: "Certificate of achievement, Cambridge International School, Dubai",
    width: 1100,
    height: 825,
    focus: "center 45%",
  },
  {
    src: "/images/award-kit.jpg",
    alt: "Mufaddal resting beside a trophy, two medals and his number 66 jersey after a tournament",
    caption: "Trophy, medals and the number 66 shirt, after the final",
    width: 619,
    height: 1100,
    focus: "center 58%",
  },
];