import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "elemax",
    title: "Elemax Building Materials",
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
        alt: "The Elemax website showing a top-category product grid with quote buttons",
        width: 640,
        height: 337,
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
    kind: "AI SaaS product",
    year: "2025",
    summary:
      "An AI-powered procurement automation platform for Indian MSMEs. It reads RFQ emails, extracts product requirements, categorises inquiries by supplier type and routes them to the right suppliers through a centralised workflow.",
    highlights: [
      "Reduced RFQ processing time to under 2 minutes.",
      "Achieved 85%+ extraction accuracy.",
      "Automated inquiry categorisation and supplier routing.",
      "Simplified procurement workflows for MSMEs.",
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
      { label: "GitHub repository", href: "https://github.com/muffi538/msme-rfq" },
    ],
  },
  {
    slug: "nua",
    title: "Nua — Zero Irritation",
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
    tags: ["Market research", "Consumer insights", "Brand strategy"],
    logo: {
      src: "/images/logo-nua.jpg",
      alt: "Nua logo",
      width: 387,
      height: 387,
    },
    images: [
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
  {
    slug: "chewcheer",
    title: "ChewCheer",
    kind: "D2C brand, 0→1",
    year: "2025",
    summary:
      "A clean-label functional pet nutrition brand built from scratch, improving gut health for dogs through prebiotic-based dog sticks.",
    highlights: [
      "Conducted 50+ customer interviews to validate product-market fit and refine brand positioning.",
      "Led end-to-end operations including packaging design, supplier sourcing and logistics.",
      "Ran Meta Ads campaigns generating ₹1,00,000+ in revenue while remaining profitable.",
      "Named Best D2C Product at Mesa School of Business.",
    ],
    tags: ["D2C", "0→1", "Brand", "Operations"],
    logo: {
      src: "/images/logo-chewcheer.jpg",
      alt: "ChewCheer logo, a cocker spaniel holding a chew stick",
      width: 585,
      height: 550,
    },
    images: [
      {
        src: "/images/chewcheer-products.jpg",
        alt: "Three ChewCheer prebiotic inulin stick pouches on a wooden surface",
        width: 1053,
        height: 465,
      },
    ],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/chewcheerr" },
    ],
  },
];
