"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { orbit, type OrbitNode } from "@/data/orbit";

/** Where a card's line meets it, as a fraction of the card's own box. */
const ANCHOR = { x: 0.5, y: 0.5 };

/** The point every line runs from, in stage percentages. */
const CENTRE = { x: 50, y: 46 };

/** Card width as a percentage of the stage, matched in the markup below. */
const CARD_W = 21;
/** Card height as a percentage of the stage, approximate — only the lines use it. */
const CARD_H = 21;

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * One floating card.
 *
 * Its own component so the parallax hooks are called at the top level rather
 * than inside a map, and so the drift, the lift and the pointer offset each
 * stay on their own CSS property and compose instead of fighting.
 */
function OrbitCard({
  node,
  index,
  depth,
  px,
  py,
  active,
  setActive,
  still,
  absolute,
}: {
  node: OrbitNode;
  index: number;
  /** How far this card moves with the pointer, in pixels at full deflection. */
  depth: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
  active: string | null;
  setActive: (id: string | null) => void;
  still: boolean;
  /** Positioned on the stage, or laid out in the stacked list below lg. */
  absolute: boolean;
}) {
  const x = useTransform(px, (v) => v * depth);
  const y = useTransform(py, (v) => v * depth);
  const dimmed = active !== null && active !== node.id;

  return (
    <motion.div
      className={cn(absolute && "absolute", !still && absolute && "orbit-drift")}
      style={
        absolute
          ? ({
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${CARD_W}%`,
              "--drift": node.drift.distance,
              "--drift-duration": node.drift.duration,
              "--drift-delay": node.drift.delay,
            } as React.CSSProperties)
          : undefined
      }
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: EASE }}
    >
      {/* The parallax offset sits on its own element, so the entrance
          animation above can own `y` without the two overwriting each other. */}
      <motion.div style={still ? undefined : { x, y }}>
        <Link
          href={node.href}
          onMouseEnter={() => setActive(node.id)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(node.id)}
          onBlur={() => setActive(null)}
          className={cn(
            "group/card block rounded-xl border border-border bg-surface p-3.5",
            "shadow-[0_8px_24px_-18px_rgb(17_17_17/0.5)]",
            "transition-[transform,border-color,box-shadow,opacity] duration-500 ease-out",
            "hover:border-accent hover:shadow-[0_18px_40px_-20px_rgb(17_17_17/0.45)]",
            "focus-visible:border-accent",
            absolute && "hover:scale-[1.06] focus-visible:scale-[1.06]",
            dimmed && "opacity-45",
          )}
        >
          <div className="flex items-start gap-3">
            {node.mark && (
              <span className="relative size-9 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                <Image
                  src={node.mark.src}
                  alt=""
                  fill
                  className={node.markFit === "cover" ? "object-cover" : "object-contain p-0.5"}
                  sizes="2.25rem"
                />
              </span>
            )}

            <span className="min-w-0 flex-1">
              {/* No mid-word breaking: "@mufmuf_eats" has no word boundary,
                  so the card is sized to hold it on one line instead. */}
              <span className="display block text-sm leading-tight">
                {node.name}
              </span>
              <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                {node.role}
              </span>
            </span>

            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-accent"
            />
          </div>

          {/* On the stage the figure is revealed on hover, the card growing
              into it. A 0fr→1fr grid row animates that height smoothly, and
              because the cards are absolutely positioned the growth shifts
              nothing around them. On the stacked layout it simply shows. */}
          {absolute ? (
            <span className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover/card:grid-rows-[1fr] group-focus-visible/card:grid-rows-[1fr]">
              <span className="overflow-hidden">
                <span className="mt-2.5 block border-t border-border pt-2.5 text-xs font-medium leading-snug">
                  {node.achievement}
                </span>
              </span>
            </span>
          ) : (
            <span className="mt-2.5 block border-t border-border pt-2.5 text-xs font-medium leading-snug">
              {node.achievement}
            </span>
          )}
        </Link>
      </motion.div>
    </motion.div>
  );
}

/**
 * The experience section as a universe: the portrait at the centre with every
 * role and venture floating around it, joined to it by a thin line.
 *
 * Pointer parallax runs through two springs shared by every card, each card
 * reading them at its own depth. The drift is CSS, the lift and the dimming
 * are transitions, and the lines are one SVG in stage coordinates — so the
 * only JavaScript doing work per frame is the two springs.
 *
 * Below `lg` the stage is replaced by a stacked list of the same cards: an
 * orbit squeezed onto a phone is neither readable nor tappable.
 */
export function ExperienceUniverse() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const still = useMediaQuery("(prefers-reduced-motion: reduce)");

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const px = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.6 });
  const py = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.6 });

  /* The portrait moves against the cards rather than with them, which is what
     reads as depth. Hoisted here because hooks cannot be called in JSX. */
  const portraitX = useTransform(px, (v) => v * -10);
  const portraitY = useTransform(py, (v) => v * -6);

  /** Normalises the pointer to -1…1 across the stage. */
  function handlePointer(event: React.PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage || still) return;
    const r = stage.getBoundingClientRect();
    pointerX.set(((event.clientX - r.left) / r.width) * 2 - 1);
    pointerY.set(((event.clientY - r.top) / r.height) * 2 - 1);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <>
      {/* Desktop: the stage. */}
      <div
        ref={stageRef}
        onPointerMove={handlePointer}
        onPointerLeave={resetPointer}
        className="relative hidden aspect-[16/10] w-full lg:block"
      >
        {/* The lines, in stage coordinates. `preserveAspectRatio="none"` maps
            the viewBox straight onto the percentages the cards are placed by,
            and the non-scaling stroke keeps them hairline despite the stretch. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
        >
          {orbit.map((node, i) => {
            const toX = node.x + CARD_W * ANCHOR.x;
            const toY = node.y + CARD_H * ANCHOR.y;
            const faded = active !== null && active !== node.id;

            return (
              <motion.line
                key={node.id}
                x1={CENTRE.x}
                y1={CENTRE.y}
                x2={toX}
                y2={toY}
                stroke="currentColor"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                className={cn(
                  "transition-colors duration-500",
                  active === node.id ? "text-accent" : "text-ink",
                )}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: faded ? 0.08 : 0.22 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  pathLength: { duration: 0.9, delay: 0.1 + i * 0.07, ease: EASE },
                  opacity: { duration: 0.5, delay: 0.1 + i * 0.07 },
                }}
              />
            );
          })}
        </svg>

        {/* The portrait. Bottom-anchored, so he stands on the composition
            rather than floating in the middle of it. */}
        <motion.div
          className="absolute bottom-0 left-1/2 h-[86%] w-[22%] -translate-x-1/2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <motion.div
            className="relative size-full"
            style={still ? undefined : { x: portraitX, y: portraitY }}
          >
            <Image
              src="/images/portrait.png"
              alt="Mufaddal Yousuf"
              fill
              className="object-contain object-bottom"
              sizes="22vw"
              priority={false}
            />
          </motion.div>
        </motion.div>

        {orbit.map((node, i) => (
          <OrbitCard
            key={node.id}
            node={node}
            index={i}
            /* Alternating depth, so the group does not slide as one sheet. */
            depth={i % 2 === 0 ? 16 : 10}
            px={px}
            py={py}
            active={active}
            setActive={setActive}
            still={still}
            absolute
          />
        ))}
      </div>

      {/* Below lg: the portrait, then the same cards in a column. */}
      <div className="lg:hidden">
        <div className="relative mx-auto h-64 w-40 sm:h-72 sm:w-48">
          <Image
            src="/images/portrait.png"
            alt="Mufaddal Yousuf"
            fill
            className="object-contain object-bottom"
            sizes="12rem"
          />
        </div>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {orbit.map((node, i) => (
            <li key={node.id}>
              <OrbitCard
                node={node}
                index={i}
                depth={0}
                px={px}
                py={py}
                active={active}
                setActive={setActive}
                still={still}
                absolute={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
