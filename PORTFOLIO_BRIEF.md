# Build my portfolio website

## What I've attached

1. **`mufaddal_prtfolio_101_compressed.pdf`** — my portfolio deck (11 slides). **This is the source of truth for all content.** Every fact, number, link and piece of copy on the website must come from this deck or my resume. Do not invent anything.
2. **`Mufaddal_Resume_Mesa_Format_2.pdf`** — my resume. Use it to fill gaps the deck doesn't cover (dates, education, award list), and **put it in `public/` and link it from the site** as a "Résumé" / "Download CV" button in the navbar and on the Contact page.
3. **`mascot-portfolio-hero.tsx` + a screenshot of it** — this is the visual template for my landing hero. I want the site to look like this. Use the component as given; don't redesign it.

Read all three before writing any code.

---

## The project as it stands

A Next.js foundation already exists in this repo — don't re-scaffold it:

- Next.js 16.4.5 (App Router, Turbopack), React 19, TypeScript strict
- Tailwind CSS v4 (via `@tailwindcss/turbopack`, **no** `postcss.config.mjs` — don't add one)
- framer-motion, lucide-react, clsx + tailwind-merge (`cn()` in `lib/utils.ts`)
- Routes: `/`, `/about`, `/projects`, `/experience`, `/contact` + `loading`, `error`, `not-found`
- `components/layout/` (site-layout, navbar, nav-link, footer), `components/sections/`, `components/ui/` (container, section, button, loading)
- `data/` holds content (`site.ts`, `navigation.ts`, `projects.ts`, `experience.ts`), typed by `lib/types.ts`
- Design tokens live as CSS custom properties in `styles/globals.css`, exposed to Tailwind via `@theme inline`
- `@/*` aliases the project root

**Read `node_modules/next/dist/docs/` before writing code** — this Next.js version has breaking changes. Note `cacheComponents: true` is on, so unstable values (`new Date()`, `Math.random()`) must sit inside a `"use cache"` scope — see `lib/date.ts` for the pattern.

### Installing the hero component

Drop `mascot-portfolio-hero.tsx` into `components/ui/` as-is. **It needs zero new dependencies** — it imports only `react` and carries its own CSS in a `<style>` tag. No shadcn CLI setup is required; `components/ui/` already exists and is the right home for it.

---

## Design direction

Take it from the screenshot and the deck together:

- **Palette:** keep the hero's own — paper `#ebebea`, ink `#111111`, green accent `#5fb57a`. Carry that same palette through every other section so the site reads as one piece. My deck photos are black-and-white, so they sit fine on light paper.
- **Typography:** oversized, tight-tracked, all-caps condensed black display type for section headings — the deck's `EXPERIENCE` / `PERSONAL SKILLS` / `WHAT I HAVE WORKED ON` treatment. Body copy in a clean grotesque.
- **Feel:** editorial / brutalist poster. Hard rules, index pills, bracketed labels, asterisks, vertical tags, numeric markers — the vocabulary already in the hero. Restraint over decoration.
- **Motion:** framer-motion for section reveals on scroll and hover states. Keep it subtle; respect `prefers-reduced-motion`. The hero already handles its own animation — don't wrap it.

---

## Site structure

### `/` Home
Full-viewport `MascotPortfolioHero`, then short teasers linking into the other pages.

Use these props:

```tsx
<MascotPortfolioHero
  index="2026"
  discipline="Growth & Ops"
  tagline="Zero to one"
  collection={["Selected", "Work"]}
  reel={["Portfolio @ 2026", "Growth · Ops · D2C"]}
  year="2026"
  initials="MY"
  badge="Hire me"
  line2="Mufaddal"
  line3="Yousuf"
  word="Work"
  verticalTag="0→1"
  bracketed="S"
  seekingLabel="Seeking*"
  seeking="Growth / Ops roles"
  href="mailto:mufaddal66you@gmail.com"
  services={[
    "Growth & partnerships",
    "Supply chain & ops",
    "D2C brand building",
    "AI product building",
  ]}
  greetings={[
    "Hi, I'm Mufaddal.",
    "I build brands and ship products.",
    "Open to growth & ops roles.",
    "Okay, you can stop poking me :)",
  ]}
/>
```

The mascot is a stand-in persona, not a portrait of me — keep it as drawn. My real photos go on the inner pages.

### `/about`
Intro, education, personal skills.

### `/experience`
Ultrahuman, Frido, ChewCheer, Procur.AI, Content creator, Sports Secretary.

### `/projects`
Elemax website, Nua sanitary pads research, Procur.AI, ChewCheer.

### `/contact`
Email, phone, LinkedIn, Instagram, GitHub, résumé download.

Keep `data/` as the single source of content — pages and sections read from it, nothing hard-coded in JSX.

---

## Content

### Identity
- **Name:** Mufaddal Yousuf Vijliwala
- **Born:** October 2006
- **Based:** Bengaluru, India
- **Email:** mufaddal66you@gmail.com
- **Phone:** 8010592847
- **Food-content email:** mufmufeats@gmail.com
- **Instagram:** https://www.instagram.com/mufmuf_eats
- **GitHub:** https://github.com/muffi538
- **LinkedIn:** (link is in the deck/resume — pull the real URL from the PDF)

### Intro (deck, slide 2)
> Hello, my name is Mufaddal Yousuf. I'm currently a first-year student at Mesa School of Business, pursuing my journey of entrepreneurship while also being part of the student body as Sports Secretary.
>
> Always exploring new ideas — currently building a sports brand, working on football equipment, specifically engineering the best shoe possible.

(Fix the deck's typos; keep the voice.)

### Personal skills (deck, slide 3)
| Skill | Detail |
| --- | --- |
| Vibe coding | Lovable, Claude Code, Emergent, n8n |
| Communication | Confident, well-spoken |
| Content strategy | Planning content for many pages |
| Leadership | Years of experience in team building & leadership |

**Tools:** Lovable, n8n, Cursor, GitHub, Meta Ads, Antigravity, Claude Code, Content Strategy
**Core:** Public speaking, community building, operations, market research, 0→1 execution

### Education
**Mesa School of Business, Bengaluru — 2025–2029**
First-year student, active in leadership and entrepreneurship within the student body. Sports Secretary, while pursuing ventures across technology, D2C and business operations, focused on building and scaling real-world products and brands. 65% merit scholarship. Won the Mesa Ad Hackathon 2026 (₹30,000).

**NMIMS — BBA (Batch of 2029), Bengaluru**

**RIMS International School & Junior College, Pune — 2022–2024**
Higher Secondary Certificate (HSC). Sports Captain & Football Team Captain. Served as Sports Head, leading and representing the entire school across all sporting events. Won the IIT Bombay Football Tournament, FLAMES Tournament, and Cambridge Cup Dubai as Football Team Captain.

**Cambridge International School, Dubai, UAE — 2016–2021**
UK curriculum / IGCSE. Sports Secretary. Won Best Spokesperson Award; attended 10+ Model United Nations (MUN) conferences.

### Experience

**Ultrahuman (Growth UK) — Growth Intern — Dec 2025**
*TikTok Shop UK | Affiliate & Creator Partnerships*
Managed TikTok Shop UK operations, driving affiliate-led sales growth and creator partnerships.
- Affiliate sourcing and outreach
- Onboarding creators with strong GMV potential
- Coordinating product shipments to affiliates
- Scaling TikTok Shop traction through influencer-led campaigns

Worked across Ultrahuman Rings, blue-light blocking glasses and sleep masks. Achieved a sales target of **£5,000+ GMV** through affiliate-driven growth and TikTok Shop activations in the UK market.

**Frido — Inventory & Supply Chain — April 2026**
*Procurement & Marketplace Operations*
Worked across procurement, inventory and marketplace operations, focused on improving operational efficiency and performance tracking.

Built:
- PO Management Dashboard to streamline tracking and improve procurement efficiency
- Amazon Performance Dashboard comparing India vs. Middle East marketplace performance
- Operational dashboards to improve visibility across key metrics

Worked across procurement & PO management; inventory & supply chain; Amazon, e-commerce, Q-commerce & D2C channels. Improved visibility, tracking and decision-making across procurement and marketplace operations.

**ChewCheer (D2C Brand) — Co-Founder — 2025**
*Bengaluru · 0→1 Brand Building & Operations* · Instagram [@chewcheerr](https://instagram.com/chewcheerr)
Built a clean-label functional pet nutrition D2C brand improving gut health for dogs through prebiotic-based dog sticks. Created after identifying a gap in pet nutrition where most treats were highly processed and lacked functional health benefits, especially for dogs facing digestion and gut-related issues.

Led the brand 0→1 across product ideation, customer discovery, positioning, early GTM strategy and retail partnerships. Conducted 50+ customer interviews with pet parents to understand pain points around dog digestion, ingredient transparency and preventive nutrition. Led end-to-end operations including packaging design, supplier sourcing and logistics. Ran Meta Ads campaigns generating **₹1,00,000+ in revenue** while remaining profitable.

**Procur.AI — Founder — 2025**
*Bengaluru · Product Development & Automation* · [github.com/muffi538/msme-rfq](https://github.com/muffi538/msme-rfq)
Built Procur.AI, an AI-powered SaaS procurement automation platform for Indian MSMEs to streamline supplier coordination and RFQ management. The platform reads RFQ emails, extracts product requirements, categorizes inquiries by supplier type, and automatically routes them to the right suppliers through a centralized workflow system.

Key highlights:
- Reduced RFQ processing time to under 2 minutes
- Achieved 85%+ extraction accuracy
- Automated inquiry categorization and supplier routing
- Simplified procurement workflows for MSMEs

Tagline: *"From inbox to supplier. Instantly."* Prototyped with Lovable and n8n workflows using Cursor and GitHub.

**Content Creator — @mufmuf_eats — 2025**
Food reviewer and content creator exploring Bengaluru's food culture through reviews of upcoming cafés, food chains, hidden gems and unique dining experiences. Built a growing food content platform through consistent short-form content, reaching a combined **1M+ views** with strong organic traction. Multiple reels crossing 100K+ views. Built deep understanding of the Instagram algorithm, content hooks and engagement tactics.

**Sports Secretary — Student Council, Mesa School of Business — 2025**
Led and coordinated a cohort of 98 students across all sports activities and events. Secured sponsorship from Epigamia with 1,000+ units distributed across inter-collegiate events. Hosted tournaments featuring 10+ top colleges across Bengaluru, managing end-to-end logistics.

### Projects

**Elemax Building Materials — Full Website Build — 2025**
Designed and developed a full-scale corporate website for Elemax, a UAE-based company, focused on creating a strong digital presence and showcasing the company's products, catalogs and brand identity. Led the project end-to-end across design, development, deployment, domain integration and content structuring.

Built a modern, responsive website that lets the company showcase products and catalogs, communicate offerings clearly, strengthen online brand presence and improve accessibility for clients and partners. Successfully deployed live with full domain setup and production launch. Built with Lovable, Antigravity and Claude Code — a polished, client-ready product using AI-first no-code development tools.
- Live: https://elemaxbm.com
- Code: https://github.com/muffi538/elemax-calm-corporate

**Nua Sanitary Pads — Brand Strategy & Consumer Research — 2025**
Consumer insights and market research project on how consumers perceive Nua's "Zero Irritation" claim for their sanitary pads. Conducted in-depth consumer interviews with women across different segments, including users experiencing PCOS and PCOD, to understand pad usage behaviour, irritation-related concerns, product preferences, and perception toward comfort and skin-sensitivity claims.

Led primary and secondary research analysis to identify consumer pain points, behavioural patterns and trust factors influencing purchase decisions. Synthesized insights and presented strategic recommendations directly to the Nua team through a final presentation. Demonstrated strong market research, analysis and communication skills throughout.
- Pitch video / slide deck: links are in the deck and resume — pull the real URLs from the PDFs.

### Sportsman (deck, slide 11)
Passionate football player with competitive experience across school, collegiate and club level. Currently Sports Secretary at Mesa School of Business, leading sports initiatives and student athletic engagement. Previously played for the **AS Roma youth setup in Dubai**, representing an Italian football club at professional club level and gaining exposure to competitive international football environments.

### Awards & recognitions
IIT Bombay Football Winner · FLAMES Winner · MIT-WPU Tournament Winner · Cambridge Cup Dubai Winner · Gems Tournament Winner · Best Player – Football (GEMS) · Best Athlete Award · Best D2C Product – ChewCheer · Top Scorer – Mesa School of Business · Best Spokesperson Award (Cambridge Dubai) · Mesa Ad Hackathon 2026 Winner (₹30,000)

---

## Assets

Pull the images out of the portfolio PDF and put them in `public/images/` — don't substitute stock photography for photos of me or my work.

Needed: my portrait (deck cover), the football photo (deck slide 2), the Mesa hackathon cheque photo, Cambridge International School logo, Ultrahuman + TikTok Shop logos, Frido logo + warehouse photos, ChewCheer logo + product shots, Procur.AI logo + dashboard + landing-page screenshots, Elemax logo + site screenshot, Nua logo + presentation photo, mufmuf_eats profile + reel screenshots, AS Roma Academy Dubai logo, trophy photos.

Where a logo is cleaner as an icon, use `lucide-react` rather than a low-res crop. Every image needs real alt text. Use `next/image` with explicit `width`/`height`.

Put the resume at `public/mufaddal-yousuf-resume.pdf`.

---

## Technical requirements

- Keep content in `data/`, typed via `lib/types.ts`. Extend the existing types rather than inventing parallel shapes.
- Keep pages in `app/` thin: export `metadata`, render a section.
- New reusable primitives → `components/ui/`. New page blocks → `components/sections/`.
- Change design tokens in `styles/globals.css`; don't hard-code colours or sizes in components.
- Responsive at desktop, tablet and mobile. No horizontal overflow at any width.
- Accessibility: keep the skip link as the first tab stop, exactly one `<h1>` per page, semantic landmarks, `aria-current` on the active nav link, visible focus outlines, reduced-motion support.
- Per-page `metadata` with real titles and descriptions. Add Open Graph tags and an OG image.
- `npm run typecheck`, `npm run lint` and `npm run build` must all pass clean. No console errors or warnings in the browser.
- Verify every route renders at all three breakpoints before telling me it's done.

---

## Don't invent anything

Everything on the site must trace back to the deck or the resume. If something is missing, leave a visible `TODO` and tell me — don't fill it with plausible-sounding copy.

**A few things conflict between the two documents. Ask me before choosing:**

1. **Schooling.** The deck says I completed schooling at Cambridge International School (IGCSE). The resume says Cambridge Dubai was middle school (2016–2021) and my HSC was at RIMS International, Pune (2022–2024).
2. **Nua interviews.** The deck says 50–60 interviews; the resume says 45.
3. **Food content reach.** The deck says 1M+ combined views; the resume says reels crossing 100K+. Probably both true, but confirm the framing.
4. **Phone number.** The deck shows `8010592847`; the resume shows `801059284` (one digit short). I'll confirm which is right.
5. **Procur.AI repo.** The resume links a GitHub repo generically; the deck gives `github.com/muffi538/msme-rfq`. Use the deck's.

---

## Done means

1. The hero matches the screenshot, with my copy.
2. Every page is built from the deck and resume, with real images from the PDF.
3. The résumé is downloadable from the navbar and the Contact page.
4. Typecheck, lint and build pass; all routes work at desktop, tablet and mobile with no console errors.
5. Show me the running site and tell me what's left as TODO.
