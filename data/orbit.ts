import { experience } from "@/data/experiences";
import type { Asset } from "@/lib/types";

/** One card in the experience universe. */
export type OrbitNode = {
  /** Stable key, and the slug of the entry this is drawn from. */
  id: string;
  name: string;
  role: string;
  /** One short line: the entry's own headline figure. */
  achievement: string;
  /** The page this card opens. */
  href: string;
  /** A logo or a frame from the work. */
  mark?: Asset;
  /** Whether `mark` is a logo on a plate or a photograph to be cropped. */
  markFit: "contain" | "cover";
  /** Position on the stage, as a percentage of its width and height. */
  x: number;
  y: number;
  /** Per-card drift, so the group never rises and falls in step. */
  drift: { distance: string; duration: string; delay: string };
};

const roles = new Map(experience.map((item) => [item.slug, item]));

/**
 * Builds a card from the matching entry in `data/experiences.ts`, so the name,
 * the role and the figure are the entry's own and cannot drift from it.
 */
function fromRole(
  slug: string,
  rest: Pick<OrbitNode, "mark" | "markFit" | "x" | "y" | "drift"> & { name?: string },
): OrbitNode | null {
  const item = roles.get(slug);
  if (!item) return null;

  return {
    id: slug,
    name: rest.name ?? item.organisation,
    role: item.role,
    achievement: item.metric ? `${item.metric.value} ${item.metric.label}` : item.focus ?? "",
    href: `/experience/${slug}`,
    mark: rest.mark,
    markFit: rest.markFit,
    x: rest.x,
    y: rest.y,
    drift: rest.drift,
  };
}

/**
 * The cards around the portrait.
 *
 * Positions are hand-placed rather than spread round a circle: the portrait is
 * not a point, and the cards have to clear it and each other at every width
 * the stage is shown at.
 *
 * Nua is the one entry that is not a role — it is a brand strategy project,
 * so its card opens its entry on /projects.
 */
export const orbit: OrbitNode[] = [
  fromRole("ultrahuman", {
    mark: { src: "/images/logo-ultrahuman.jpg", alt: "", width: 600, height: 381 },
    markFit: "contain",
    x: 1,
    y: 8,
    drift: { distance: "-11px", duration: "7.5s", delay: "0s" },
  }),
  fromRole("frido", {
    mark: { src: "/images/logo-frido.jpg", alt: "", width: 472, height: 219 },
    markFit: "contain",
    x: 0,
    y: 41,
    drift: { distance: "-8px", duration: "8.5s", delay: "-1.4s" },
  }),
  fromRole("chewcheer", {
    mark: { src: "/images/logo-chewcheer.jpg", alt: "", width: 585, height: 550 },
    markFit: "contain",
    x: 3,
    y: 73,
    drift: { distance: "-12px", duration: "6.8s", delay: "-2.8s" },
  }),
  fromRole("procur-ai", {
    mark: { src: "/images/logo-procur-ai.jpg", alt: "", width: 490, height: 382 },
    markFit: "contain",
    x: 77,
    y: 6,
    drift: { distance: "-9px", duration: "7.9s", delay: "-0.7s" },
  }),
  fromRole("mufmuf-eats", {
    // No logo exists for the channel, so a frame from it stands in.
    mark: { src: "/images/mufmuf-burger.jpg", alt: "", width: 1000, height: 1575 },
    markFit: "cover",
    x: 79,
    y: 39,
    drift: { distance: "-13px", duration: "9.2s", delay: "-2.1s" },
  }),
  fromRole("sports-secretary", {
    name: "Mesa Student Council",
    mark: { src: "/images/logo-mesa.png", alt: "", width: 295, height: 316 },
    markFit: "contain",
    x: 75,
    y: 72,
    drift: { distance: "-10px", duration: "8.1s", delay: "-3.5s" },
  }),
  {
    id: "nua",
    name: "Nua",
    role: "Brand strategy project",
    achievement: "45+ in-depth interviews",
    href: "/projects#nua",
    mark: { src: "/images/logo-nua.jpg", alt: "", width: 383, height: 184 },
    markFit: "contain",
    x: 40,
    y: 0,
    drift: { distance: "-8px", duration: "7.2s", delay: "-4.2s" },
  },
].filter((node): node is OrbitNode => node !== null);
