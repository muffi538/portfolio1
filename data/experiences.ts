import type { ExperienceItem } from "@/lib/types";

/**
 * The single source for the experience directory and every
 * /experience/<slug> detail page.
 *
 * Everything here comes from the portfolio deck and the resume. Where a
 * section has no material yet, it carries a `todo` instead of filler — that
 * renders as a visible placeholder on the page rather than being written up.
 */

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
    detail: {
      overview: {
        body: [
          "I joined Ultrahuman's Growth UK team as a Growth Intern, running TikTok Shop UK operations with a focus on affiliate-led sales and creator partnerships.",
          "The products I worked across were the Ultrahuman Ring, blue-light blocking glasses and sleep masks.",
        ],
        todo: "Add a line on what Ultrahuman does as a company, and how the internship came about.",
        image: {
          src: "/images/ultrahuman-affiliate-deck.jpg",
          alt: "The Ultrahuman TikTok Shop affiliate deck: premium sleep tech, 20% commission, blue-light glasses and the blackout sleep mask",
          width: 880,
          height: 1170,
          // The deck's own 3:4, so nothing is cropped off a document.
          ratio: "3 / 4",
        },
      },
      responsibilities: {
        points: [
          "Affiliate sourcing and outreach across the UK market.",
          "Onboarding creators with strong GMV potential.",
          "Coordinating product shipments to affiliates.",
          "Scaling TikTok Shop traction through influencer-led campaigns.",
        ],
        image: {
          src: "/images/ultrahuman-creators.jpg",
          alt: "The TikTok Shop creator table: affiliate handles, follower counts and sample requests against the glasses and the ring",
          width: 1400,
          height: 693,
          ratio: "2 / 1",
        },
      },
      work: {
        todo: "Add the specific campaigns, creators and activations you ran, and anything you built or changed along the way.",
      },
      outcomes: {
        points: [
          "Hit a sales target of £5,000+ GMV through affiliate-driven growth and TikTok Shop activations in the UK market.",
        ],
        todo: "Add any other numbers you can share — creators onboarded, campaign reach, conversion rate.",
      },
    },
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
    detail: {
      overview: {
        body: [
          "I worked across procurement, inventory and marketplace operations at Frido, focused on improving operational efficiency and performance tracking.",
          "The role spanned Amazon, e-commerce, Q-commerce and D2C channels, across the India and Middle East markets.",
        ],
        todo: "Add a line on what Frido makes and sells.",
        image: {
          src: "/images/frido-office.jpg",
          alt: "The Frido office reception wall, carrying the brand mark and the line freedom to do more",
          width: 1000,
          height: 1333,
          ratio: "1 / 1",
          focus: "center 50%",
        },
      },
      responsibilities: {
        points: [
          "Procurement and PO management.",
          "Inventory and supply chain.",
          "Marketplace operations across Amazon, e-commerce, Q-commerce and D2C.",
        ],
        image: {
          src: "/images/frido-stock-count.jpg",
          alt: "Mufaddal counting stock against a notebook in front of racked Frido inventory",
          width: 1000,
          height: 1333,
          ratio: "1 / 1",
          focus: "center 62%",
        },
      },
      work: {
        points: [
          "Built a PO Management Dashboard to streamline tracking and improve procurement efficiency.",
          "Built an Amazon Performance Dashboard comparing India against Middle East marketplace performance.",
          "Built operational dashboards to improve visibility across key metrics.",
        ],
        image: {
          src: "/images/frido-dashboard-build.jpg",
          alt: "A laptop on a windowsill showing the dashboard code in progress, overlooking the city",
          width: 1000,
          height: 1333,
          ratio: "1 / 1",
          focus: "center 60%",
        },
        imageSide: "left",
      },
      outcomes: {
        points: [
          "Improved visibility, tracking and decision-making across procurement and marketplace operations.",
        ],
        image: {
          src: "/images/frido-warehouse-floor.jpg",
          alt: "The Frido warehouse floor, with racking and pallets of stock running the length of the building",
          width: 1000,
          height: 1333,
          ratio: "1 / 1",
          focus: "center 58%",
        },
        todo: "Add numbers if you have them — time saved, SKUs covered, accuracy before and after.",
      },
    },
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
    detail: {
      overview: {
        body: [
          "ChewCheer is a clean-label functional pet nutrition brand I co-founded, improving gut health for dogs through prebiotic-based dog sticks.",
          "It came out of a gap in the pet nutrition market, where most treats were highly processed and lacked functional health benefits — particularly for dogs facing digestion and gut-related issues.",
        ],
        image: {
          src: "/images/chewcheer-pouches.jpg",
          alt: "Three ChewCheer PawBiota prebiotic inulin stick pouches on a wooden table, with loose sticks in front",
          width: 1184,
          height: 864,
          ratio: "4 / 3",
        },
      },
      responsibilities: {
        points: [
          "Product ideation and customer discovery.",
          "Positioning and early go-to-market strategy.",
          "Retail partnerships.",
          "End-to-end operations: packaging design, supplier sourcing and logistics.",
        ],
        image: {
          src: "/images/chewcheer-packaging.jpg",
          alt: "ChewCheer printed packaging and leaflets explaining the prebiotic stick's ingredients",
          width: 960,
          height: 1280,
          ratio: "1 / 1",
          focus: "center 48%",
        },
      },
      work: {
        points: [
          "Ran 50+ customer interviews with pet parents on digestion, ingredient transparency and preventive nutrition.",
          "Ran Meta Ads campaigns that stayed profitable.",
        ],
        image: {
          src: "/images/chewcheer-customers.jpg",
          alt: "Two pet parents on a Bengaluru street holding a ChewCheer pack beside their dogs",
          width: 720,
          height: 1280,
          ratio: "1 / 1",
          focus: "center 64%",
        },
        imageSide: "left",
      },
      outcomes: {
        points: [
          "₹1,00,000+ in revenue from Meta Ads while remaining profitable.",
          "Named Best D2C Product at Mesa School of Business.",
        ],
        image: {
          src: "/images/chewcheer-stall.jpg",
          alt: "The ChewCheer market stall, with the brand mascot holding a free hugs sign beside the product display",
          width: 960,
          height: 1280,
          ratio: "1 / 1",
          focus: "center 52%",
        },
      },
    },
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
    detail: {
      overview: {
        body: [
          "Procur.AI is an AI-powered SaaS procurement platform I founded for Indian MSMEs, built to streamline supplier coordination and RFQ management.",
          "It reads RFQ emails, extracts product requirements, categorises inquiries by supplier type and routes them to the right suppliers through a centralised workflow.",
        ],
      },
      responsibilities: {
        points: [
          "Product development and automation design.",
          "Prototyping with Lovable and n8n workflows, using Cursor and GitHub.",
        ],
      },
      work: {
        points: [
          "Automated inquiry categorisation and supplier routing.",
          "Simplified procurement workflows for MSMEs.",
        ],
      },
      outcomes: {
        points: [
          "Reduced RFQ processing time to under 2 minutes.",
          "Achieved 85%+ extraction accuracy.",
        ],
        todo: "Add where the product stands now — pilots, users, what is next.",
      },
      visualsTodo: "Add product screenshots and workflow diagrams.",
    },
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
    detail: {
      overview: {
        body: [
          "@mufmuf_eats is my food review channel, exploring Bengaluru's food culture through upcoming cafés, food chains, hidden gems and unique dining experiences.",
        ],
        image: {
          src: "/images/mufmuf-dining.jpg",
          alt: "Mufaddal at a western-themed burger café in Bengaluru, holding props at the table",
          width: 960,
          height: 1280,
          ratio: "1 / 1",
          focus: "center 45%",
        },
      },
      responsibilities: {
        points: [
          "Consistent short-form content built around discoveries across the city.",
          "Planning content hooks and platform-native video.",
        ],
        image: {
          src: "/images/mufmuf-filming.jpg",
          alt: "Mufaddal filming a review to camera on a restaurant terrace hung with marigold garlands",
          width: 912,
          height: 1600,
          ratio: "1 / 1",
          focus: "center 56%",
        },
      },
      work: {
        points: [
          "Built a deep understanding of the Instagram algorithm, content hooks and engagement tactics.",
          "Grew a personal brand through consistent storytelling.",
        ],
        image: {
          src: "/images/mufmuf-burger.jpg",
          alt: "A finished review frame: a burger held to camera under the title In N Out Burger",
          width: 1000,
          height: 1575,
          ratio: "1 / 1",
          focus: "center 48%",
        },
        imageSide: "left",
      },
      outcomes: {
        points: [
          "1M+ combined views.",
          "Multiple reels crossing 100K+ views organically.",
        ],
        image: {
          src: "/images/mufmuf-reach.jpg",
          alt: "The @mufmuf_eats profile: 1,506 followers, with reels at 1.4M, 322K and 214K views",
          width: 778,
          height: 1600,
          ratio: "4 / 5",
          // A phone screenshot: cropping it would cut off the very numbers
          // it is there to show, so it sits whole on the panel instead.
          fit: "contain",
        },
      },
    },
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
    detail: {
      overview: {
        body: [
          "I serve as Sports Secretary on the student council at Mesa School of Business, leading sports initiatives and student athletic engagement across the institution.",
        ],
        image: {
          src: "/images/mesa-sport-club.jpg",
          alt: "Mufaddal presenting the Mesa Sport Club to a seated audience, the opening slide on the screen beside him",
          width: 960,
          height: 1280,
          ratio: "1 / 1",
          focus: "center 45%",
        },
      },
      responsibilities: {
        points: [
          "Leading and coordinating a cohort of 98 students across all sports activities and events.",
          "End-to-end event logistics.",
        ],
        image: {
          src: "/images/mesa-team-huddle.jpg",
          alt: "Mufaddal in a Muffi 9 shirt briefing a circle of players on a floodlit pitch",
          width: 956,
          height: 1645,
          ratio: "1 / 1",
          // Holds the whole circle of players and him head to shin.
          focus: "center 40%",
        },
      },
      work: {
        points: [
          "Secured sponsorship from Epigamia, with 1,000+ units distributed across inter-collegiate events.",
          "Hosted tournaments featuring 10+ top colleges across Bengaluru.",
        ],
        image: {
          src: "/images/mesa-tournament.jpg",
          alt: "The Mesa squad with the trophy after a five-a-side inter-collegiate tournament",
          width: 1586,
          height: 992,
          // The photograph's own 8:5, so the squad is not cropped at the ends.
          ratio: "8 / 5",
        },
        imageSide: "left",
      },
      outcomes: {
        points: ["98 students coordinated across the sports programme."],
        image: {
          src: "/images/mesa-cohort-session.jpg",
          alt: "Mufaddal on stage with a microphone addressing the full student cohort",
          width: 1400,
          height: 1050,
          ratio: "4 / 3",
        },
        todo: "Add participation numbers or event outcomes you want to highlight.",
      },
    },
  },
];
