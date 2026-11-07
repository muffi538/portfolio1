"use client"

import * as React from "react"
import Link from "next/link"

/* ------------------------------------------------------------------ types */

export type MascotPortfolioHeroProps = {
  /**
   * Height of the hero. Must be a definite length — the poster is fitted to
   * this box, so a percentage collapses to 0px unless every ancestor up to
   * `<html>` has a real height. Never pass `"100%"`.
   */
  height?: string
  /** Floor for the height, so the headline stays legible. */
  minHeight?: string

  /* ---- top rule ---- */
  /** The bold line, top left. */
  tagline?: string
  /** Top right, two lines beside the green dot. */
  reel?: [string, string]

  /* ---- headline ---- */
  /** The name, one word per line. It is the whole headline. */
  name?: [string, string]

  /* ---- call to action and services ---- */
  /** Label on the pill button below the name. Omit to drop the button. */
  ctaLabel?: string
  /** Where the button goes. Paths starting "/" route client-side. */
  href?: string
  /** The row along the bottom edge. */
  services?: string[]

  /* ---- the character ---- */
  /** Cycled through, one per click on the character. */
  greetings?: string[]
  skin?: string
  hair?: string
  shirt?: string

  /* ---- palette ---- */
  /** The green: the status dot and the name underline on hover. */
  accent?: string
  /** The sheet. */
  paper?: string
  /** Type, rules and the room. */
  ink?: string
  className?: string
}

/* Wired to the project's next/font variables, with the original stacks kept
   as fallbacks. Nothing else in this file differs from the supplied source. */
const SANS_STACK =
  'var(--font-inter),"Inter","Helvetica Neue",Helvetica,Arial,system-ui,sans-serif'
const DISPLAY_STACK =
  'var(--font-archivo),"Archivo Black","Arial Black","Helvetica Neue",Helvetica,Arial,system-ui,sans-serif'

/* The character's sheet. Every coordinate in the figure lives in this box. */
const CW = 600
const CH = 720

/* --------------------------------------------------------------- the gaze
   The figure is flat SVG. What sells it as a head turning is parallax: the
   features ride on top of the skull and move further than it does, the nose
   sits proud of the face and moves further still, and the ears go the other
   way and foreshorten. Nothing here is 3D maths — it is a stack of layers
   whose offsets are ordered by how far each one sits from the neck. */

// #region gaze

/**
 * Where the pointer is, relative to the head, as a direction in (-1, 1) on
 * each axis. Soft-saturated rather than clamped, so the head never slams into
 * a stop: it keeps turning a little further the further away you go.
 */
export function aim(px: number, py: number, cx: number, cy: number, rx: number, ry: number) {
  const sat = (v: number) => v / Math.sqrt(1 + v * v)
  return [sat((px - cx) / rx), sat((py - cy) / ry)]
}

/** Frame-rate-independent easing of `cur` towards `target`. */
export function approach(cur: number, target: number, dt: number, rate: number) {
  return target + (cur - target) * Math.exp(-rate * dt)
}

/**
 * How far each layer moves for a gaze of (x, y). Offsets are in figure units
 * and nested: `face` is relative to `head`, `nose` and `eyes` to `face`.
 * `near` is 0..1, how close the pointer is to the face — it widens the eyes
 * and lifts the brows.
 */
export function pose(x: number, y: number, near: number) {
  return {
    body: { dx: x * 4, dy: 0 },
    head: { dx: x * 10, dy: y * 7, rot: x * 4 },
    ears: { dx: -x * 7, dy: -y * 3, lead: 1 + x * 0.16, trail: 1 - x * 0.16 },
    hair: { dx: x * 13, dy: y * 4 },
    blush: { dx: x * 20, dy: y * 14 },
    face: { dx: x * 28, dy: y * (y < 0 ? 11 : 20) },
    nose: { dx: x * 10, dy: y * 7 },
    eyes: { dx: x * 4, dy: y * 4, scale: 1 + near * 0.14 },
    brows: { dx: x * 3, dy: y * 2 + Math.min(0, y) * 3 - near * 9 },
  }
}

/** Blink envelope: 1 is open, dips towards 0.08 across a 150ms blink. */
export function blink(since: number) {
  const d = 0.15
  if (since < 0 || since > d) return 1
  return 1 - Math.sin((Math.PI * since) / d) * 0.92
}

// #endregion

/* ------------------------------------------------------------- the room */

type Seg = [number, number, number, number]

/**
 * A one-point-perspective room in a 1000x1000 box that is stretched to fill
 * the hero. The back wall is a grid; every grid line on its edge runs out to
 * the frame away from the vanishing point; the depth lines are the back wall
 * scaled up about that point. Stretching distorts it, which is fine — it is a
 * room, and a taller screen just gets a taller one.
 */
function room(): { back: Seg[]; rays: Seg[]; depth: string[] } {
  const x0 = 95
  const x1 = 905
  const y0 = 85
  const y1 = 865
  const vx = (x0 + x1) / 2
  const vy = (y0 + y1) / 2
  const cols = 14
  const rows = 11
  const back: Seg[] = []
  const rays: Seg[] = []
  const out = (x: number, y: number): Seg => {
    // Walk from (x, y) away from the vanishing point until the frame.
    const dx = x - vx
    const dy = y - vy
    const tx = dx > 0 ? (1000 - x) / dx : dx < 0 ? -x / dx : Infinity
    const ty = dy > 0 ? (1000 - y) / dy : dy < 0 ? -y / dy : Infinity
    const t = Math.min(tx, ty)
    return [x, y, x + dx * t, y + dy * t]
  }
  for (let i = 0; i <= cols; i++) {
    const x = x0 + ((x1 - x0) * i) / cols
    back.push([x, y0, x, y1])
    rays.push(out(x, y0), out(x, y1))
  }
  for (let j = 0; j <= rows; j++) {
    const y = y0 + ((y1 - y0) * j) / rows
    back.push([x0, y, x1, y])
    rays.push(out(x0, y), out(x1, y))
  }
  const depth = [1.07, 1.16, 1.28, 1.45, 1.7].map((s) => {
    const l = vx + (x0 - vx) * s
    const r = vx + (x1 - vx) * s
    const t = vy + (y0 - vy) * s
    const b = vy + (y1 - vy) * s
    return "M" + l + " " + t + "H" + r + "V" + b + "H" + l + "Z"
  })
  return { back, rays, depth }
}

const ROOM = room()

/* ------------------------------------------------------------------ hair
   Locks, not rings and not spikes. Each tuft leaves a wide base, bows to one
   side and closes in a rounded lobe — the curves meet the tip tangentially,
   so it reads as a curl rather than a shard. Each one also carries a shorter
   twin that nests inside it and catches the light.

   Everything is rounded to two decimals: the spec lets each engine choose
   its own precision for sin and cos, so Node and the browser disagreed in
   the last decimal and React reported a hydration mismatch on every lock. */

type Lock = { d: string; hi: string; i: number }

const r2 = (v: number) => Math.round(v * 100) / 100

/** One tuft: wide base, bowed body, rounded tip. */
function lockPath(bx: number, by: number, ang: number, len: number, wid: number, bow: number) {
  const dx = Math.cos(ang)
  const dy = Math.sin(ang)
  const nx = -dy
  const ny = dx
  const tipw = wid * 0.3
  const P = (x: number, y: number) => `${r2(x)} ${r2(y)}`

  const b1x = bx + (nx * wid) / 2
  const b1y = by + (ny * wid) / 2
  const b2x = bx - (nx * wid) / 2
  const b2y = by - (ny * wid) / 2
  const tx = bx + dx * len
  const ty = by + dy * len

  // Control points run along the lock and arrive at the tip side-on, which
  // is what rounds the apex instead of pinching it to a point.
  const c1x = b1x + dx * len * 0.6 + nx * bow
  const c1y = b1y + dy * len * 0.6 + ny * bow
  const c2x = tx + nx * tipw
  const c2y = ty + ny * tipw
  const c3x = tx - nx * tipw
  const c3y = ty - ny * tipw
  const c4x = b2x + dx * len * 0.6 + nx * bow * 0.3
  const c4y = b2y + dy * len * 0.6 + ny * bow * 0.3

  return (
    `M${P(b1x, b1y)} C${P(c1x, c1y)} ${P(c2x, c2y)} ${P(tx, ty)}` +
    ` C${P(c3x, c3y)} ${P(c4x, c4y)} ${P(b2x, b2y)} Z`
  )
}

function hairLocks(): Lock[] {
  const out: Lock[] = []
  let n = 0

  const add = (bx: number, by: number, ang: number, len: number, wid: number, bow: number) => {
    out.push({
      d: lockPath(bx, by, ang, len, wid, bow),
      hi: lockPath(bx, by, ang, len * 0.74, wid * 0.4, bow * 0.8),
      i: n++,
    })
  }

  /** A ring of tufts growing outward from the crown. */
  const ring = (
    count: number,
    rx: number,
    ry: number,
    cy: number,
    len: number,
    wid: number,
    phase: number,
  ) => {
    for (let i = 0; i <= count; i++) {
      const t = i / count
      const a = Math.PI * (1 - t)
      const bx = 300 + Math.cos(a) * rx
      const by = cy - Math.sin(a) * ry
      add(
        bx,
        by,
        Math.atan2(by - 318, bx - 300) + 0.42 * Math.sin(t * 9.1 + phase),
        len + 13 * Math.sin(t * 7.4 + phase),
        wid + 10 * Math.sin(t * 5.2 + phase),
        22 * Math.sin(t * 6.1 + phase),
      )
    }
  }

  ring(16, 130, 150, 286, 56, 60, 0.4)  // crown: the standing silhouette
  ring(12, 88, 100, 292, 46, 54, 2.2)   // second layer
  ring(7, 42, 48, 298, 38, 46, 3.9)     // centre of the head

  // The hairline: short, broad tufts falling forward over the brow.
  for (let i = 0; i <= 9; i++) {
    const t = i / 9
    add(
      r2(180 + t * 240),
      r2(236 + Math.sin(t * Math.PI) * 6),
      Math.PI / 2 + 0.75 * Math.sin(t * 5.3 + 0.8),
      24 + 6 * Math.sin(t * 8.1),
      44,
      14 * Math.sin(t * 7.2 + 1.1),
    )
  }
  return out
}

const HAIR = hairLocks()

/** The mass the tufts grow out of, so no skin shows between them. */
const HAIR_CAP =
  "M300 118 C410 118 470 196 470 288 C470 302 466 310 462 314 C452 300 440 258 300 258 C160 258 148 300 138 314 C134 310 130 302 130 288 C130 196 190 118 300 118 Z"

/* ----------------------------------------------------------------- styles */

const CSS = `
.mph-root{position:relative;width:100%;overflow:hidden;isolation:isolate;background:var(--mph-paper);color:var(--mph-ink);container:mph / size;font-family:var(--mph-sans);-webkit-font-smoothing:antialiased;}
.mph-room{position:absolute;inset:0;width:100%;height:100%;display:block;color:var(--mph-ink);pointer-events:none;}
.mph-room line,.mph-room path{vector-effect:non-scaling-stroke;}
.mph-stage{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(100cqw,177.78cqh);aspect-ratio:16/9;container:mphs / inline-size;}

.mph-top{position:absolute;left:4.6%;right:4.6%;top:4.4%;display:flex;align-items:center;justify-content:space-between;gap:2.4cqw;font-size:1.05cqw;font-weight:800;line-height:1.1;text-transform:uppercase;letter-spacing:.02em;}
.mph-tagline{font-size:1.18em;font-weight:900;}
.mph-reel{display:flex;align-items:center;gap:.8em;font-size:.8em;text-align:right;}
.mph-reel i{display:block;width:1.9em;height:1.9em;border-radius:50%;background:var(--mph-accent);border:.12cqw solid var(--mph-ink);flex:none;}

.mph-h1{position:absolute;left:8.8%;top:29%;margin:0;font-family:var(--mph-display);font-weight:900;font-size:7.2cqw;line-height:.96;letter-spacing:-.045em;text-transform:uppercase;color:var(--mph-ink);}
.mph-line{display:block;width:max-content;white-space:nowrap;position:relative;}
.mph-ch{display:inline-block;transition:transform .35s cubic-bezier(.3,1.6,.5,1),color .2s;}
.mph-ch:hover{transform:translateY(-.08em) rotate(-4deg);color:var(--mph-accent);}

/* Minimal pill: ink type, a hairline border, the arrow nudging on hover and
   the whole button easing down on press. */
.mph-cta{position:absolute;left:8.8%;top:62%;display:inline-flex;align-items:center;gap:.65em;padding:1em 2.1em;border:.08cqw solid color-mix(in srgb,var(--mph-ink) 30%,transparent);border-radius:999px;background:transparent;color:var(--mph-ink);font-family:var(--mph-sans);font-size:1.5cqw;font-weight:700;line-height:1;letter-spacing:.01em;text-decoration:none;cursor:pointer;transition:border-color .35s cubic-bezier(.22,1,.36,1),background-color .35s cubic-bezier(.22,1,.36,1),transform .18s cubic-bezier(.22,1,.36,1);}
.mph-cta em{font-style:normal;display:inline-block;transition:transform .35s cubic-bezier(.22,1,.36,1);}
.mph-cta:hover,.mph-cta:focus-visible{border-color:var(--mph-ink);background:color-mix(in srgb,var(--mph-ink) 6%,transparent);}
.mph-cta:hover em,.mph-cta:focus-visible em{transform:translate(.22em,-.22em);}
.mph-cta:active{transform:scale(.96);}

.mph-services{position:absolute;left:4.6%;bottom:4.6%;display:flex;gap:4cqw;margin:0;padding:0;list-style:none;font-size:1.3cqw;font-weight:800;}
.mph-services li{position:relative;cursor:default;padding-bottom:.25em;}
.mph-services li::after{content:"";position:absolute;left:0;right:0;bottom:0;height:.18em;background:var(--mph-accent);transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.6,0,.2,1);}
.mph-services li:hover::after{transform:scaleX(1);}

.mph-rule{position:absolute;width:0;border-left:.1cqw solid var(--mph-ink);}
.mph-rule::after{content:"";position:absolute;bottom:0;left:-.1cqw;width:1.1cqw;border-top:.1cqw solid var(--mph-ink);transform:rotate(28deg);transform-origin:left;}
.mph-rule-l{left:3.7%;top:23%;height:13%;}
.mph-rule-r{left:94.8%;top:66%;height:13%;}

.mph-char{position:absolute;left:55.5%;bottom:-1.2%;width:40.5%;aspect-ratio:600/720;padding:0;margin:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent;border-radius:40% 40% 8% 8%;}
.mph-char:focus-visible{outline:.2cqw dashed var(--mph-ink);outline-offset:.4cqw;}
.mph-char svg{display:block;width:100%;height:100%;overflow:visible;}
.mph-bubble{position:absolute;left:-4%;top:6%;max-width:46%;background:#fff;color:var(--mph-ink);border:.16cqw solid var(--mph-ink);border-radius:1.4em 1.4em 1.4em .2em;padding:.8em 1.1em;font-size:1.3cqw;font-weight:800;line-height:1.2;text-align:left;box-shadow:.35cqw .35cqw 0 var(--mph-accent);transform-origin:0 100%;transform:scale(0) rotate(-8deg);opacity:0;transition:transform .45s cubic-bezier(.3,1.6,.5,1),opacity .2s;pointer-events:none;}
.mph-bubble[data-on="true"]{transform:scale(1) rotate(-4deg);opacity:1;}

@keyframes mph-draw{from{stroke-dashoffset:1;}to{stroke-dashoffset:0;}}

@container mph (orientation: portrait){
.mph-stage{top:0;transform:translateX(-50%);width:min(100cqw,56.25cqh);height:100cqh;aspect-ratio:auto;}
.mph-top{top:5cqw;left:6%;right:6%;font-size:2.5cqw;}
.mph-h1{left:7%;top:22cqw;font-size:13.5cqw;}
.mph-cta{left:7%;top:56cqw;font-size:3.4cqw;border-width:.18cqw;}
.mph-services{left:7%;right:7%;bottom:auto;top:84cqw;flex-wrap:wrap;gap:1.6cqw 5cqw;font-size:3cqw;}
.mph-rule-l{left:3%;top:22cqw;height:12cqw;}
.mph-rule-r{left:95%;top:auto;bottom:40cqw;height:12cqw;}
.mph-char{left:12%;width:76%;bottom:-.6%;}
.mph-bubble{font-size:3cqw;left:-8%;top:2%;max-width:52%;}
}

/* Tall, narrow stages (phones) have more height than the portrait rules above
   can fill, which left a band of empty grid between the services row and the
   character. Spread the block out and let the character rise to meet it. The
   bound excludes tablets, whose stage is wider relative to its height. */
@container mph (orientation: portrait) and (max-aspect-ratio: 5/9){
.mph-h1{top:28cqw;}
.mph-cta{top:62cqw;}
/* Anchored to the bottom, not the top: the character is bottom-aligned and its
   height is a multiple of the stage width, so this keeps the same clearance
   above its head on every phone rather than drifting with stage height. */
.mph-services{top:auto;bottom:104cqw;}
.mph-char{left:6%;width:88%;}
}

@media (prefers-reduced-motion: reduce){
.mph-root *,.mph-root *::after{animation:none!important;transition:none!important;}
}
`

/* ------------------------------------------------------------- component */

type Layers = Partial<
  Record<
    | "body" | "head" | "earL" | "earR" | "hair" | "blush"
    | "face" | "nose" | "eyes" | "brows",
    SVGGElement | null
  >
>

const DEFAULT_SERVICES = ["Brand design", "Logo design", "Interface design", "IP character design"]
const DEFAULT_GREETINGS = ["Hi there!", "Let's make something bold.", "Psst — I'm open to work.", "Okay, you can stop poking me :)"]

export default function MascotPortfolioHero({
  height = "100svh",
  minHeight = "440px",
  tagline = "Make it helpful",
  reel = ["Portfolio", "Visual design"],
  name = ["Portfolio", "Design"],
  ctaLabel,
  href,
  services = DEFAULT_SERVICES,
  greetings = DEFAULT_GREETINGS,
  skin = "#bf7d54",
  hair = "#241a13",
  shirt = "#1a2340",
  accent = "#5fb57a",
  paper = "#ebebea",
  ink = "#111111",
  className,
}: MascotPortfolioHeroProps) {
  // Gradient and filter ids are global. Two heroes on one page would otherwise
  // share them and the second mount would repaint the first.
  const uid = React.useId().replace(/:/g, "")
  const id = (n: string) => n + uid
  const u = (n: string) => "url(#" + id(n) + ")"

  const rootRef = React.useRef<HTMLDivElement>(null)
  const charRef = React.useRef<HTMLButtonElement>(null)
  const layers = React.useRef<Layers>({})
  const set = (k: keyof Layers) => (el: SVGGElement | null) => {
    layers.current[k] = el
  }

  const [happy, setHappy] = React.useState(false)
  const [said, setSaid] = React.useState(-1)
  const happyTimer = React.useRef<number | undefined>(undefined)

  const poke = () => {
    setSaid((n) => (n + 1) % Math.max(1, greetings.length))
    setHappy(true)
    window.clearTimeout(happyTimer.current)
    happyTimer.current = window.setTimeout(() => setHappy(false), 2200)
  }
  React.useEffect(() => () => window.clearTimeout(happyTimer.current), [])

  /* The loop. Everything the pointer drives is written straight to the SVG —
     running it through React state would re-render the whole poster at 60fps. */
  React.useEffect(() => {
    const root = rootRef.current
    const char = charRef.current
    if (!root || !char) return

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    let still = mq.matches
    const onMq = () => (still = mq.matches)
    mq.addEventListener("change", onMq)

    let px = 0
    let py = 0
    let lastMove = -1e9
    let gx = 0
    let gy = 0
    let near = 0
    let prev = performance.now()
    let nextBlink = prev + 1800
    let blinkAt = -1e9
    let raf = 0
    let visible = true

    const onMove = (e: PointerEvent) => {
      px = e.clientX
      py = e.clientY
      lastMove = performance.now()
    }
    const onLeave = () => (lastMove = -1e9)
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerdown", onMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)
    window.addEventListener("blur", onLeave)

    const tr = (dx: number, dy: number) => "translate(" + dx.toFixed(2) + " " + dy.toFixed(2) + ")"
    const L = layers.current

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      if (!visible) return
      const dt = Math.min(0.05, (now - prev) / 1000)
      prev = now

      const r = char.getBoundingClientRect()
      // The head, not the box: the face sits at about 50% across and 48% down.
      const cx = r.left + r.width * 0.5
      const cy = r.top + r.height * 0.48
      let tx = 0
      let ty = 0
      let tn = 0
      const idle = now - lastMove > 3500
      if (!idle) {
        const reach = Math.max(innerWidth, innerHeight)
        ;[tx, ty] = aim(px, py, cx, cy, reach * 0.3, reach * 0.26)
        const dist = Math.hypot(px - cx, py - cy)
        tn = Math.max(0, 1 - dist / (r.width * 0.45))
      } else if (!still) {
        // Nobody is there: look around the room on its own.
        const t = now / 1000
        tx = Math.sin(t * 0.45) * 0.55 + Math.sin(t * 1.1) * 0.1
        ty = Math.sin(t * 0.31 + 1) * 0.25
      }

      const rate = still ? 30 : 7
      gx = approach(gx, tx, dt, rate)
      gy = approach(gy, ty, dt, rate)
      near = approach(near, tn, dt, 8)
      const p = pose(gx, gy, near)
      const breathe = still ? 0 : Math.sin(now / 620) * 1.6

      if (!still && now > nextBlink) {
        blinkAt = now
        // Now and then a double blink, the way people actually do it.
        nextBlink = now + (Math.random() < 0.2 ? 260 : 2200 + Math.random() * 3200)
      }
      const open = still ? 1 : blink((now - blinkAt) / 1000)

      L.body?.setAttribute("transform", tr(p.body.dx, p.body.dy + breathe * 0.4))
      L.head?.setAttribute(
        "transform",
        tr(p.head.dx, p.head.dy + breathe) + " rotate(" + p.head.rot.toFixed(2) + " 300 560)",
      )
      // Pivot on each ear's own centre, so foreshortening squashes it in
      // place instead of sliding it along the side of the head.
      L.earL?.setAttribute("transform", tr(p.ears.dx, p.ears.dy) + " translate(144 382) scale(" + p.ears.lead.toFixed(3) + " 1) translate(-144 -382)")
      L.earR?.setAttribute("transform", tr(p.ears.dx, p.ears.dy) + " translate(456 382) scale(" + p.ears.trail.toFixed(3) + " 1) translate(-456 -382)")
      L.hair?.setAttribute("transform", tr(p.hair.dx, p.hair.dy))
      L.blush?.setAttribute("transform", tr(p.blush.dx, p.blush.dy))
      L.face?.setAttribute("transform", tr(p.face.dx, p.face.dy))
      L.nose?.setAttribute("transform", tr(p.nose.dx, p.nose.dy))
      L.brows?.setAttribute("transform", tr(p.brows.dx, p.brows.dy))
      L.eyes?.setAttribute(
        "transform",
        tr(p.eyes.dx, p.eyes.dy) +
          " translate(300 350) scale(" + p.eyes.scale.toFixed(3) + " " + (p.eyes.scale * open).toFixed(3) + ") translate(-300 -350)",
      )
    }
    raf = requestAnimationFrame(frame)

    // Offscreen, the loop keeps its slot but does no work.
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      prev = performance.now()
    })
    io.observe(root)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      mq.removeEventListener("change", onMq)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      window.removeEventListener("blur", onLeave)
    }
  }, [])

  const chars = (s: string) =>
    Array.from(s).map((c, i) => (
      <span key={i} className="mph-ch">
        {c === " " ? " " : c}
      </span>
    ))

  const greeting = said >= 0 ? greetings[said % greetings.length] : greetings[0]

  const vars = {
    "--mph-accent": accent,
    "--mph-paper": paper,
    "--mph-ink": ink,
    "--mph-sans": SANS_STACK,
    "--mph-display": DISPLAY_STACK,
    height,
    minHeight,
  } as React.CSSProperties

  const ctaInner = ctaLabel && (
    <>
      {ctaLabel}
      <em aria-hidden="true">↗</em>
    </>
  )

  return (
    <div ref={rootRef} className={"mph-root" + (className ? " " + className : "")} style={vars}>
      <style>{CSS}</style>

      <svg className="mph-room" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.13">
          {ROOM.back.map((s, i) => (
            <line key={"b" + i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} />
          ))}
          {ROOM.rays.map((s, i) => (
            <line key={"r" + i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} />
          ))}
          {ROOM.depth.map((d, i) => (
            <path key={"d" + i} d={d} />
          ))}
        </g>
      </svg>

      <div className="mph-stage">
        <header className="mph-top">
          <span className="mph-tagline">{tagline}</span>
          <span className="mph-reel">
            <i aria-hidden="true" />
            <span>
              {reel[0]}
              <br />
              {reel[1]}
            </span>
          </span>
        </header>

        <span className="mph-rule mph-rule-l" aria-hidden="true" />
        <span className="mph-rule mph-rule-r" aria-hidden="true" />

        <h1 className="mph-h1" aria-label={name.join(" ")}>
          <span className="mph-line" aria-hidden="true">
            {chars(name[0])}
            {/* Separates the two words for anything reading textContent.
                It collapses at the end of the line, so layout is unchanged. */}{" "}
          </span>
          <span className="mph-line" aria-hidden="true">
            {chars(name[1])}
          </span>
        </h1>

        {ctaInner &&
          (href ? (
            href.startsWith("/") ? (
              <Link className="mph-cta" href={href}>
                {ctaInner}
              </Link>
            ) : (
              <a className="mph-cta" href={href}>
                {ctaInner}
              </a>
            )
          ) : (
            <button type="button" className="mph-cta">
              {ctaInner}
            </button>
          ))}

        <ul className="mph-services">
          {services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <button
          ref={charRef}
          type="button"
          className={"mph-char" + (happy ? " mph-happy" : "")}
          onClick={poke}
          aria-label="Say hi to the character"
        >
          <svg viewBox={"0 0 " + CW + " " + CH} aria-hidden="true">
            <defs>
              {/* Shading is layered over a flat fill rather than baked into it,
                  so every colour prop still reads as lit and round. */}
              <radialGradient id={id("shade")} cx="46%" cy="40%" r="62%">
                <stop offset="0.55" stopColor="#4a2312" stopOpacity="0" />
                <stop offset="1" stopColor="#4a2312" stopOpacity="0.36" />
              </radialGradient>
              <radialGradient id={id("hi")} cx="36%" cy="30%" r="42%">
                <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id={id("blush")}>
                <stop offset="0" stopColor="#d4584a" stopOpacity="0.45" />
                <stop offset="1" stopColor="#ff6f6f" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id={id("hair")}
                gradientUnits="userSpaceOnUse"
                cx="240"
                cy="160"
                r="310"
              >
                <stop offset="0" stopColor="#fff" stopOpacity="0.13" />
                <stop offset="0.45" stopColor="#fff" stopOpacity="0.02" />
                <stop offset="1" stopColor="#000" stopOpacity="0.45" />
              </radialGradient>
              <radialGradient id={id("eye")} cx="40%" cy="35%" r="70%">
                <stop offset="0" stopColor="#3a3a3c" />
                <stop offset="1" stopColor="#050505" />
              </radialGradient>
              <radialGradient id={id("nose")} cx="42%" cy="36%" r="66%">
                <stop offset="0" stopColor="#e8a177" stopOpacity="0.2" />
                <stop offset="1" stopColor="#6d3a20" stopOpacity="0.4" />
              </radialGradient>
              <linearGradient id={id("neck")} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3f1d0e" stopOpacity="0.5" />
                <stop offset="0.5" stopColor="#3f1d0e" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id={id("cloth")} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.1" />
                <stop offset="1" stopColor="#000" stopOpacity="0.3" />
              </linearGradient>
              {/* The whole head of hair as one clip, so the shading overlay can
                  be a single shape. Drawn per curl it compounded wherever two
                  circles overlapped and the hair read as bubble wrap. */}
              {/* The hair as one mask, so the lighting pass is a single shape.
                  Per-curl it compounded wherever two overlapped. */}
              <mask id={id("hairmask")}>
                <path d={HAIR_CAP} fill="#fff" />
                <g fill="#fff">
                  {HAIR.map((c) => (
                    <path key={"m" + c.i} d={c.d} />
                  ))}
                </g>
              </mask>
              <clipPath id={id("collar")}>
                <path d="M206 580 Q300 554 394 580 L404 658 Q300 692 196 658 Z" />
              </clipPath>
              <clipPath id={id("mouth")}>
                <path d="M240 444 Q300 462 360 444 Q356 512 300 520 Q244 512 240 444 Z" />
              </clipPath>
            </defs>

            {/* Contact shadow on the floor. */}
            <ellipse cx="300" cy="712" rx="250" ry="16" fill="#000" opacity="0.08" />

            <g ref={set("body")}>
              {/* Neck first, so the collar sits over it. */}
              <path d="M256 498 L344 498 L350 594 Q300 616 250 594 Z" fill={skin} />
              <path d="M256 498 L344 498 L350 594 Q300 616 250 594 Z" fill={u("neck")} />

              {/* The navy quarter-zip from the photograph. */}
              <path d="M24 730 C36 646 100 604 200 590 L400 590 C500 604 564 646 576 730 Z" fill={shirt} />
              <path d="M24 730 C36 646 100 604 200 590 L400 590 C500 604 564 646 576 730 Z" fill={u("cloth")} />

              {/* High ribbed collar, standing away from the neck. */}
              <path d="M206 580 Q300 554 394 580 L404 658 Q300 692 196 658 Z" fill="#2a3560" />
              <g clipPath={u("collar")} stroke="#000" strokeOpacity="0.22" strokeWidth="3">
                {Array.from({ length: 21 }, (_, i) => (
                  <line key={i} x1={208 + i * 9.4} y1="548" x2={208 + i * 9.4} y2="696" />
                ))}
              </g>
              <path d="M206 580 Q300 554 394 580 L404 658 Q300 692 196 658 Z" fill={u("cloth")} />
              <path d="M206 580 Q300 554 394 580" fill="none" stroke="#000" strokeOpacity="0.28" strokeWidth="3" />

              {/* The zip: tape, teeth, then the pull. */}
              <rect x="291" y="576" width="18" height="154" rx="3" fill="#323d68" />
              <g stroke="#b9bec9" strokeWidth="3.4" strokeLinecap="round">
                {Array.from({ length: 18 }, (_, i) => (
                  <line key={i} x1="294" y1={584 + i * 8} x2="306" y2={584 + i * 8} />
                ))}
              </g>
              <rect x="292" y="576" width="16" height="154" rx="3" fill="none" stroke="#000" strokeOpacity="0.25" strokeWidth="2" />
              <g transform="translate(300 672)">
                <rect x="-7" y="-10" width="14" height="20" rx="4" fill="#cdd2db" />
                <rect x="-7" y="-10" width="14" height="20" rx="4" fill={u("cloth")} />
                <rect x="-3.5" y="6" width="7" height="24" rx="3.5" fill="#b4bac6" />
              </g>
            </g>

            <g ref={set("head")}>
              <g ref={set("earL")}>
                <ellipse cx="144" cy="382" rx="46" ry="60" fill={skin} />
                <ellipse cx="144" cy="382" rx="46" ry="60" fill={u("shade")} />
                <path d="M156 352 Q124 364 130 396 Q136 420 155 416" fill="none" stroke="#7a3c22" strokeOpacity="0.4" strokeWidth="6" strokeLinecap="round" />
              </g>
              <g ref={set("earR")}>
                <ellipse cx="456" cy="382" rx="46" ry="60" fill={skin} />
                <ellipse cx="456" cy="382" rx="46" ry="60" fill={u("shade")} />
                <path d="M444 352 Q476 364 470 396 Q464 420 445 416" fill="none" stroke="#7a3c22" strokeOpacity="0.4" strokeWidth="6" strokeLinecap="round" />
              </g>

              {/* Skull and face. */}
              <path d="M300 148 C400 148 462 228 462 350 C462 460 404 550 338 564 C322 567 278 567 262 564 C196 550 138 460 138 350 C138 228 200 148 300 148 Z" fill={skin} />
              <path d="M300 148 C400 148 462 228 462 350 C462 460 404 550 338 564 C322 567 278 567 262 564 C196 550 138 460 138 350 C138 228 200 148 300 148 Z" fill={u("shade")} />
              <path d="M300 148 C400 148 462 228 462 350 C462 460 404 550 338 564 C322 567 278 567 262 564 C196 550 138 460 138 350 C138 228 200 148 300 148 Z" fill={u("hi")} />

              <g ref={set("blush")}>
                <ellipse cx="202" cy="428" rx={happy ? 46 : 40} ry={happy ? 32 : 28} fill={u("blush")} />
                <ellipse cx="398" cy="428" rx={happy ? 46 : 40} ry={happy ? 32 : 28} fill={u("blush")} />
              </g>

              <g ref={set("face")}>
                <g ref={set("brows")}>
                  <path d={happy ? "M206 294 Q248 276 288 290" : "M206 302 Q248 288 288 298"} fill="none" stroke="#221a15" strokeWidth="25" strokeLinecap="round" />
                  <path d={happy ? "M312 290 Q352 276 394 294" : "M312 298 Q352 288 394 302"} fill="none" stroke="#221a15" strokeWidth="25" strokeLinecap="round" />
                </g>

                <g ref={set("eyes")}>
                  {happy ? (
                    <>
                      <path d="M222 358 Q246 328 270 358" fill="none" stroke="#1b1310" strokeWidth="13" strokeLinecap="round" />
                      <path d="M330 358 Q354 328 378 358" fill="none" stroke="#1b1310" strokeWidth="13" strokeLinecap="round" />
                    </>
                  ) : (
                    <>
                      <ellipse cx="246" cy="352" rx="23" ry="29" fill={u("eye")} />
                      <circle cx="238" cy="339" r="8" fill="#fff" />
                      <circle cx="255" cy="362" r="3.2" fill="#fff" opacity="0.8" />
                      <ellipse cx="354" cy="352" rx="23" ry="29" fill={u("eye")} />
                      <circle cx="346" cy="339" r="8" fill="#fff" />
                      <circle cx="363" cy="362" r="3.2" fill="#fff" opacity="0.8" />
                    </>
                  )}
                </g>

                {/* The small mark on his cheek. */}
                <ellipse cx="396" cy="396" rx="5" ry="4.4" fill="#4a2a1b" opacity="0.85" />

                {/* The grin. */}
                <g transform={happy ? "translate(300 440) scale(1.06 1.12) translate(-300 -440)" : undefined}>
                  <path d="M240 444 Q300 462 360 444 Q356 512 300 520 Q244 512 240 444 Z" fill="#36100f" />
                  <g clipPath={u("mouth")}>
                    <ellipse cx="300" cy="520" rx="38" ry="19" fill="#c4504f" />
                    <path d="M234 440 Q300 460 366 440 L366 474 Q300 488 234 474 Z" fill="#fff" />
                    <path d="M252 506 Q300 494 348 506 L348 530 L252 530 Z" fill="#f3efe9" />
                    <path d="M272 454 V480 M300 458 V484 M328 454 V480" stroke="#000" strokeOpacity="0.08" strokeWidth="2" />
                  </g>
                  <path d="M240 444 Q300 462 360 444 Q356 512 300 520 Q244 512 240 444 Z" fill="none" stroke="#6b2a1a" strokeOpacity="0.45" strokeWidth="3" />
                  <path d="M232 440 Q236 448 242 452 M368 440 Q364 448 358 452" fill="none" stroke="#7a3c22" strokeOpacity="0.4" strokeWidth="4" strokeLinecap="round" />
                </g>

                <g ref={set("nose")}>
                  <path d="M300 348 Q292 378 286 396" fill="none" stroke="#6b3a20" strokeOpacity="0.18" strokeWidth="9" strokeLinecap="round" />
                  <ellipse cx="300" cy="418" rx="27" ry="11" fill="#4a2312" opacity="0.16" />
                  <ellipse cx="300" cy="400" rx="28" ry="26" fill={skin} />
                  <ellipse cx="300" cy="400" rx="28" ry="26" fill={u("nose")} />
                  <ellipse cx="291" cy="389" rx="9" ry="7.5" fill="#fff" opacity="0.42" />
                </g>
              </g>

              <g ref={set("hair")}>
                {/* The mass, then the tufts, then one lighting pass over the
                    whole thing. Shading drawn per tuft compounds wherever two
                    overlap, which is what made the first pass read as bubbles. */}
                <path d={HAIR_CAP} fill={hair} />
                <g fill={hair}>
                  {HAIR.map((c) => (
                    <path key={"b" + c.i} d={c.d} />
                  ))}
                </g>
                {/* Every third tuft, drawn again smaller and lifted, so the
                    surface is sculpted rather than flat. */}
                <g fill="#3a2a1f" opacity="0.32">
                  {HAIR.filter((c) => c.i % 3 !== 2).map((c) => (
                    <path key={"l" + c.i} d={c.hi} />
                  ))}
                </g>
                <g mask={u("hairmask")}>
                  <rect x="80" y="20" width="440" height="420" fill={u("hair")} />
                </g>
              </g>
            </g>
          </svg>
          <span className="mph-bubble" data-on={happy ? "true" : "false"} aria-live="polite">
            {greeting}
          </span>
        </button>
      </div>
    </div>
  )
}
