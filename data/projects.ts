import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "elemax",
    title: "Elemax Building Materials",
    shortName: "Elemax",
    gist:
      "a full corporate website for a UAE building-materials company — designed, built, and shipped live on its own domain.",
    kind: "Full website build",
    year: "2025",
    summary:
      "Designed and developed a full-scale corporate website for Elemax, a UAE-based building materials company, focused on creating a strong digital presence and showcasing products, catalogs and brand identity.",
    highlights: [
      "Led the project end-to-end across design, development, deployment, domain integration and content structuring.",
      "Built a modern, responsive site that showcases products and catalogs and communicates company offerings clearly.",
      "Strengthened online brand presence and improved accessibility for clients and partners.",
      "Deployed live with full domain setup and production launch.",
      "Built with Lovable, Antigravity and Claude Code — a client-ready product using AI-first no-code tooling.",
    ],
    stats: [
      { value: "Live", label: "on its own domain" },
      { value: "End to end", label: "design to deployment" },
      { value: "AI-first", label: "Lovable · Claude Code" },
    ],
    tags: ["Web", "Design", "Deployment", "AI-first build"],
    logo: {
      src: "/images/logo-elemax.jpg",
      alt: "Elemax Building Materials Trading LLC logo",
      width: 367,
      height: 367,
    },
    images: [
      {
        src: "/images/elemax-website.jpg",
        alt: "The Elemax website: the top-category product grid, with the category filters and request-a-quote buttons",
        width: 1600,
        height: 848,
      },
    ],
    links: [
      { label: "Live site", href: "https://elemaxbm.com" },
      {
        label: "GitHub repository",
        href: "https://github.com/muffi538/elemax-calm-corporate",
      },
    ],
  },
  {
    slug: "procur-ai",
    title: "Procur.AI",
    shortName: "Procur.AI",
    gist:
      "an AI procurement platform for Indian MSMEs that reads RFQ emails and routes them to the right suppliers, in under two minutes at 85%+ extraction accuracy.",
    kind: "AI SaaS product",
    year: "2025",
    summary:
      "An AI-powered procurement automation platform for Indian MSMEs, built for and deployed inside my father's business. It reads RFQ emails, extracts product requirements, categorises inquiries by supplier type and routes them to the right suppliers through a centralised workflow.",
    highlights: [
      "Cut the people needed for the procurement workflow from roughly six to two.",
      "Reduced RFQ processing time to under 2 minutes.",
      "Achieved 85%+ extraction accuracy.",
      "Automated inquiry categorisation and supplier routing.",
      "Simplified procurement workflows for MSMEs.",
    ],
    stats: [
      { value: "6 → 2", label: "people on the workflow" },
      { value: "85%+", label: "extraction accuracy" },
      { value: "<2 min", label: "per RFQ" },
    ],
    tags: ["AI", "SaaS", "Automation", "B2B"],
    logo: {
      src: "/images/logo-procur-ai.jpg",
      alt: "Procur AI logo",
      width: 490,
      height: 382,
    },
    images: [
      {
        src: "/images/procur-ai-pitch.jpg",
        alt: "Mufaddal presenting Procur.AI to a room, the product on the screen behind him",
        width: 900,
        height: 1200,
        focus: "center 45%",
      },
      {
        src: "/images/procur-ai-landing.jpg",
        alt: "Procur.AI landing page reading From inbox to supplier. Instantly.",
        width: 792,
        height: 400,
      },
      {
        src: "/images/procur-ai-dashboard.jpg",
        alt: "Procur.AI RFQ dashboard listing inbound requests by status",
        width: 1120,
        height: 574,
      },
    ],
    links: [
      { label: "Full case study", href: "/experience/procur-ai" },
      { label: "GitHub repository", href: "https://github.com/muffi538/msme-rfq" },
    ],
  },
  {
    slug: "nua",
    title: "Nua — Zero Irritation",
    shortName: "Nua",
    gist:
      "45+ interviews on the brand's \u201cZero Irritation\u201d claim, turned into a repositioning pitch and presented to their team.",
    kind: "Consumer research & brand strategy",
    year: "2025",
    summary:
      "A consumer insights and market research project on how consumers perceive Nua's “Zero Irritation” claim for their sanitary pads.",
    highlights: [
      "Conducted 45+ in-depth interviews with women aged 16–25, including users experiencing PCOS and PCOD.",
      "Explored pad usage behaviour, irritation-related concerns, product preferences and perception of comfort and skin-sensitivity claims.",
      "Led primary and secondary research to identify pain points, behavioural patterns and the trust factors behind purchase decisions.",
      "Synthesised insights and presented strategic recommendations directly to the Nua team.",
      "Developed a competitive repositioning pitch and presented it to a panel.",
    ],
    stats: [
      { value: "45+", label: "in-depth interviews" },
      { value: "16–25", label: "age group covered" },
      { value: "Pitched", label: "to the Nua team" },
    ],
    tags: ["Market research", "Consumer insights", "Brand strategy"],
    logo: {
      src: "/images/logo-nua.jpg",
      alt: "Nua logo",
      width: 383,
      height: 184,
    },
    images: [
      {
        src: "/images/nua-pitch.jpg",
        alt: "Mufaddal presenting the Nua work, the Nua brand mark on the screen behind him",
        width: 1086,
        height: 1448,
        // A 9:16 portrait in a 16:9 card: hold the brand mark and him.
        focus: "center 55%",
      },
      {
        src: "/images/nua-presentation.jpg",
        alt: "Mufaddal presenting research findings to the Nua team",
        width: 317,
        height: 325,
      },
      {
        src: "/images/nua-pack.jpg",
        alt: "A Nua sanitary pad pack carrying the Zero Irritation promise",
        width: 306,
        height: 378,
      },
    ],
    links: [
      {
        label: "Slide deck & presentation video",
        href: "https://drive.google.com/drive/folders/1nUXkCH4_aYH1O-Lsy0aKCOl4h6HTWzzm?usp=sharing",
      },
    ],
  },
];
