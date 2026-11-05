# Portfolio — Mufaddal Yousuf

Personal portfolio site. Content is drawn from the portfolio deck and resume;
the landing hero is the supplied `MascotPortfolioHero` template, with its
palette (paper, ink, a single green accent) carried through the whole site and
the deck's oversized condensed-black display type used for section headings.

---

## Technologies

| Package | Version | Purpose |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16.4.5 | React framework, App Router, Turbopack |
| [React](https://react.dev) | 19.3.0 | UI library |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Static typing (`strict` mode) |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | ^14.9 | Scroll reveals (`components/ui/reveal.tsx`) |
| [lucide-react](https://lucide.dev) | ^1.69 | Icon set |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | ^2.1 / ^3.7 | The `cn()` class helper in `lib/utils.ts` |
| [ESLint](https://eslint.org) | ^9 | Linting via `eslint-config-next` |

## Project structure

```
portfolio/
├── app/                        # Routes (App Router)
│   ├── layout.tsx              # Fonts, metadata, Open Graph, no-JS reveal fallback
│   ├── page.tsx                # /            Hero, intro, metrics, work, experience, CTA
│   ├── about/page.tsx          # /about       About, skills, education, sport, food, awards
│   ├── experience/page.tsx     # /experience
│   ├── projects/page.tsx       # /projects
│   ├── contact/page.tsx        # /contact
│   ├── loading.tsx             # Route-level loading state
│   ├── error.tsx               # Error boundary (client component)
│   ├── not-found.tsx           # 404 page
│   └── favicon.ico
│
├── components/
│   ├── layout/                 # Site chrome
│   │   ├── site-layout.tsx     # Skip link + navbar + main + footer
│   │   ├── navbar.tsx          # Responsive nav + résumé button (client component)
│   │   ├── nav-link.tsx        # Single link with active state
│   │   └── footer.tsx
│   ├── sections/               # Page sections
│   │   ├── hero-section.tsx            # Wraps the mascot hero with Mufaddal's copy
│   │   ├── intro-section.tsx
│   │   ├── metrics-section.tsx
│   │   ├── selected-work-section.tsx   # Home teaser → /projects
│   │   ├── experience-preview-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── education-section.tsx
│   │   ├── sport-section.tsx
│   │   ├── food-section.tsx
│   │   ├── awards-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── project-card.tsx
│   │   └── contact-section.tsx
│   └── ui/                     # Reusable primitives
│       ├── mascot-portfolio-hero.tsx   # Supplied template (see note below)
│       ├── container.tsx       # Page container (max width + gutter)
│       ├── section.tsx         # Section wrapper (spacing + display heading)
│       ├── button.tsx          # Button + ButtonLink
│       ├── tag.tsx             # Outlined pill
│       ├── reveal.tsx          # Scroll-reveal wrapper
│       └── loading.tsx         # Spinner + Loading
│
├── data/                       # All content, separated from presentation
│   ├── site.ts                 # Identity, contact details, social links, intro
│   ├── navigation.ts           # Navigation items
│   ├── experience.ts           # Six roles
│   ├── projects.ts             # Four projects
│   ├── education.ts            # Three institutions
│   ├── skills.ts               # Skill groups, tools, core skills, awards
│   └── sport.ts                # Football background
│
├── lib/
│   ├── utils.ts                # cn() class-name helper
│   ├── date.ts                 # Cached current-year helper
│   └── types.ts                # Shared content types
│
├── hooks/
│   ├── use-media-query.ts      # Media query as React state
│   └── use-scroll-lock.ts      # Lock body scroll (used by the mobile menu)
│
├── styles/
│   └── globals.css             # Tailwind import, design tokens, display utilities
│
├── public/
│   ├── images/                 # Assets extracted from the portfolio deck
│   ├── fonts/                  # Self-hosted font files (currently empty)
│   └── mufaddal-yousuf-resume.pdf
│
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── .env.example
└── package.json
```

The `@/*` path alias maps to the project root, so imports read as
`@/components/ui/button`, `@/data/site`, `@/lib/utils`.

## Getting started

Requires **Node.js 20.9+** (developed on Node 22).

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

The site runs at **http://localhost:3000**.

### Production build

```bash
npm run build
```

```bash
npm start
```

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint and apply fixes |
| `npm run typecheck` | Run `tsc --noEmit` |

## Where things go

### Images

Put files in `public/images/` (subfolders encouraged, e.g. `public/images/projects/`)
and reference them from the web root:

```tsx
import Image from "next/image";

<Image src="/images/projects/example.png" alt="…" width={1200} height={800} />
```

### Fonts

Two options:

- **Google Fonts** — swap the `next/font/google` imports in `app/layout.tsx`.
- **Self-hosted** — drop the files in `public/fonts/` and load them with
  `next/font/local` in `app/layout.tsx`, then point `--font-sans` in
  `styles/globals.css` at the new CSS variable.

### Portfolio content

Content lives in `data/`, never hard-coded in JSX:

| File | Holds |
| --- | --- |
| `data/site.ts` | Name, role, location, email, phone, social links, intro paragraphs |
| `data/navigation.ts` | Which links appear in the navbar and footer |
| `data/experience.ts` | Roles — Ultrahuman, Frido, ChewCheer, Procur.AI, @mufmuf_eats, Sports Secretary |
| `data/projects.ts` | Elemax, Procur.AI, Nua, ChewCheer |
| `data/education.ts` | Mesa School of Business, RIMS Pune, Cambridge Dubai |
| `data/skills.ts` | Skill groups, tools, core skills, awards |
| `data/sport.ts` | Football background and photos |

Each entry is typed by `lib/types.ts`, so adding a field means extending the type
first. Images attached to an entry carry their own `alt`, `width` and `height`.

### Résumé

`public/mufaddal-yousuf-resume.pdf`, linked from the navbar, the Contact page and
the footer via `siteConfig.resume`. Replace the file in place to publish a new
version — no code change needed.

### Components

- A new reusable primitive → `components/ui/`
- A new block on a page → `components/sections/`
- Anything in the site chrome → `components/layout/`

Pages in `app/` should stay thin: they set metadata and render a section.

### Adding a route

Create `app/<route>/page.tsx`, export a `metadata` object and a default component,
then add the route to `navItems` in `data/navigation.ts`.

## Design foundation

The current look is deliberately plain — neutral greys, the default Geist font, a
minimal layout. The visual direction will be applied later.

All design decisions are expressed as CSS custom properties in `styles/globals.css`:
colour, typography, spacing, layout and radii. They are exposed to Tailwind through
`@theme inline`, so `bg-background`, `text-muted-foreground`, `border-border` and
friends resolve to those tokens. **Change the tokens, not the components**, when the
design direction arrives.

A dark-scheme token set responds to `prefers-color-scheme: dark`, and a
`prefers-reduced-motion` block disables transitions for users who ask for it.

## Notes on the configuration

- **No `postcss.config.mjs`.** Next.js 16 builds with Turbopack, and this project uses
  the `@tailwindcss/turbopack` loader configured in `next.config.ts` instead of the
  PostCSS plugin. Adding a PostCSS config as well would process Tailwind twice.
- **Cache Components is enabled** (`cacheComponents: true` in `next.config.ts`). Values
  that change between renders — `new Date()`, `Math.random()`, request headers — must sit
  inside a `"use cache"` scope or a `<Suspense>` boundary. See `lib/date.ts` for the
  pattern.
- **`AGENTS.md`** is generated and maintained by `next dev`; it is committed so the
  working tree stays clean.
- **The hero component** (`components/ui/mascot-portfolio-hero.tsx`) is used as
  supplied, with one change: the two font stacks point at this project's
  `next/font` CSS variables (`--font-inter`, `--font-archivo`), keeping the
  original families as fallbacks. The React Compiler lint rules misfire on its
  ref-callback factory and its `requestAnimationFrame` loop, so `react-hooks/refs`
  and `react-hooks/purity` are disabled for that one file in `eslint.config.mjs`
  and stay on everywhere else.
- **Scroll reveals** render at `opacity: 0` on the server and are animated in by
  Framer Motion. A `<noscript>` rule in `app/layout.tsx` forces every
  `[data-reveal]` block visible when JavaScript never runs.

## Accessibility

Already in place, and worth preserving as the design lands: a skip link as the first tab
stop, one `<h1>` per page, semantic landmarks (`header`, `nav`, `main`, `footer`),
`aria-current="page"` on the active nav link, `aria-expanded`/`aria-controls` on the
mobile menu toggle, visible focus outlines, and reduced-motion support.
