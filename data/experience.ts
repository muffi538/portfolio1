import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    slug: "ultrahuman",
    role: "Growth Intern",
    organisation: "Ultrahuman (Growth UK)",
    period: "Dec 2025",
    focus: "TikTok Shop UK · Affiliate & Creator Partnerships",
    summary:
      "Managed TikTok Shop UK operations, driving affiliate-led sales growth and creator partnerships.",
    highlights: [
      "Handled affiliate sourcing and outreach across the UK market.",
      "Onboarded creators with strong GMV potential.",
      "Coordinated product shipments to affiliates.",
      "Scaled TikTok Shop traction through influencer-led campaigns.",
      "Worked across Ultrahuman Rings, blue-light blocking glasses and sleep masks.",
    ],
    metric: { value: "£5,000+", label: "GMV sales target achieved" },
    tags: ["Growth", "Affiliate marketing", "Creator partnerships", "E-commerce"],
    logo: {
      src: "/images/logo-ultrahuman.jpg",
      alt: "Ultrahuman logo",
      width: 600,
      height: 381,
    },
    images: [
      {
        src: "/images/logo-tiktok-shop.jpg",
        alt: "TikTok Shop logo",
        width: 155,
        height: 154,
      },
      {
        src: "/images/ultrahuman-sleep-better.jpg",
        alt: "Ultrahuman campaign graphic reading Sleep better. Earn more.",
        width: 157,
        height: 173,
      },
    ],
  },
  {
    slug: "frido",
    role: "Inventory & Supply Chain",
    organisation: "Frido",
    period: "April 2026",
    focus: "Procurement & Marketplace Operations",
    summary:
      "Worked across procurement, inventory and marketplace operations, focused on improving operational efficiency and performance tracking.",
    highlights: [
      "Built a PO Management Dashboard to streamline tracking and improve procurement efficiency.",
      "Built an Amazon Performance Dashboard comparing India vs. Middle East marketplace performance.",
      "Built operational dashboards to improve visibility across key metrics.",
      "Worked across Amazon, e-commerce, Q-commerce and D2C channels.",
      "Improved visibility, tracking and decision-making across procurement and marketplace operations.",
    ],
    tags: ["Supply chain", "Procurement", "Dashboards", "Marketplace ops"],
    logo: {
      src: "/images/logo-frido.jpg",
      alt: "Frido logo",
      width: 472,
      height: 219,
    },
    images: [
      {
        src: "/images/frido-stock-check.jpg",
        alt: "Mufaddal checking stock against a tablet in the Frido warehouse",
        width: 389,
        height: 640,
      },
      {
        src: "/images/frido-warehouse.jpg",
        alt: "Aisles of racked inventory in the Frido warehouse",
        width: 413,
        height: 640,
      },
    ],
    links: [
      {
        label: "Amazon performance dashboard",
        href: "https://dashboarddfrido.vercel.app/#/uae",
      },
    ],
  },
  {
    slug: "chewcheer",
    role: "Co-Founder",
    organisation: "ChewCheer",
    period: "2025",
    location: "Bengaluru",
    focus: "D2C Brand · 0→1 Brand Building & Operations",
    summary:
      "Built a clean-label functional pet nutrition brand improving gut health for dogs through prebiotic-based dog sticks.",
    highlights: [
      "Created after identifying a gap where most dog treats were highly processed and lacked functional health benefits.",
      "Led the brand 0→1 across product ideation, customer discovery, positioning, early GTM strategy and retail partnerships.",
      "Conducted 50+ customer interviews with pet parents on digestion, ingredient transparency and preventive nutrition.",
      "Ran end-to-end operations including packaging design, supplier sourcing and logistics.",
      "Ran Meta Ads campaigns that stayed profitable.",
    ],
    metric: { value: "₹1,00,000+", label: "revenue from Meta Ads, profitably" },
    tags: ["D2C", "0→1", "Brand building", "Meta Ads", "Operations"],
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
      {
        src: "/images/chewcheer-dog.jpg",
        alt: "A cocker spaniel sitting beside a car boot loaded with ChewCheer stock",
        width: 556,
        height: 520,
      },
    ],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/chewcheerr" },
    ],
  },
  {
    slug: "procur-ai",
    role: "Founder",
    organisation: "Procur.AI",
    period: "2025",
    location: "Bengaluru",
    focus: "Product Development & Automation",
    summary:
      "An AI-powered SaaS procurement platform for Indian MSMEs, streamlining supplier coordination and RFQ management.",
    highlights: [
      "The platform reads RFQ emails, extracts product requirements, categorises inquiries by supplier type and routes them automatically.",
      "Reduced RFQ processing time to under 2 minutes.",
      "Achieved 85%+ extraction accuracy.",
      "Automated inquiry categorisation and supplier routing.",
      "Prototyped with Lovable and n8n workflows, using Cursor and GitHub.",
    ],
    metric: { value: "85%+", label: "extraction accuracy" },
    tags: ["SaaS", "AI", "Automation", "B2B", "MSME"],
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
    slug: "mufmuf-eats",
    role: "Content Creator",
    organisation: "@mufmuf_eats",
    period: "2025",
    location: "Bengaluru",
    focus: "Food reviews & short-form content",
    summary:
      "Food reviewer exploring Bengaluru's food culture through upcoming cafés, food chains, hidden gems and unique dining experiences.",
    highlights: [
      "Built a growing food content platform through consistent short-form content.",
      "Multiple reels crossing 100K+ views organically.",
      "Built deep understanding of the Instagram algorithm, content hooks and engagement tactics.",
      "Grew a personal brand through consistent storytelling and platform-native video.",
    ],
    metric: { value: "1M+", label: "combined views" },
    tags: ["Content strategy", "Short-form video", "Personal brand"],
    images: [
      {
        src: "/images/mufmuf-eats-street-food.jpg",
        alt: "Mufaddal holding a street-food plate outside Mumbai Pav Co. in Bengaluru",
        width: 480,
        height: 554,
      },
      {
        src: "/images/mufmuf-eats-profile.jpg",
        alt: "The @mufmuf_eats Instagram profile showing reels with 919K, 320K and 157K views",
        width: 651,
        height: 1105,
      },
    ],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/mufmuf_eats" },
    ],
  },
  {
    slug: "sports-secretary",
    role: "Sports Secretary",
    organisation: "Student Council, Mesa School of Business",
    period: "2025",
    location: "Bengaluru",
    summary:
      "Leading sports initiatives and student athletic engagement across the institution.",
    highlights: [
      "Led and coordinated a cohort of 98 students across all sports activities and events.",
      "Secured sponsorship from Epigamia, with 1,000+ units distributed across inter-collegiate events.",
      "Hosted tournaments featuring 10+ top colleges across Bengaluru, managing end-to-end logistics.",
    ],
    metric: { value: "98", label: "students coordinated" },
    tags: ["Leadership", "Events", "Sponsorship", "Logistics"],
  },
];
