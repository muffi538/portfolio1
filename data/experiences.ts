import type { ExperienceItem } from "@/lib/types";

/**
 * The single source for the experience directory and every
 * /experience/<slug> detail page.
 *
 * Every figure and claim here comes from the portfolio deck, the resume, or
 * what Mufaddal has written about the role. A detail page is an ordered list
 * of sections, so each role carries only the ones its own story needs — a
 * section with nothing to say is left out rather than rendered empty.
 */

export const experience: ExperienceItem[] = [
  {
    slug: "ultrahuman",
    role: "Growth Intern",
    organisation: "Ultrahuman",
    period: "Dec 2025 · 3 months",
    location: "Bengaluru",
    focus: "TikTok Shop UK & US · Affiliate growth",
    summary:
      "Helped build Ultrahuman's TikTok Shop presence in the UK and US, managing 300+ affiliates towards a £5,000 GMV target.",
    highlights: [
      "Helped set the UK and US markets up on TikTok Shop and get products listed.",
      "Managed and coordinated with 300+ affiliates in the UK.",
      "Researched the UK market using TikTok Shop analytics and AI tools.",
      "Worked across smart rings, blue-light-blocking glasses and sleep masks.",
    ],
    metric: { value: "£5,000", label: "GMV in 3 months" },
    tags: ["Growth", "TikTok Shop", "Affiliate marketing", "E-commerce"],
    logo: {
      src: "/images/logo-ultrahuman.jpg",
      alt: "Ultrahuman logo",
      width: 600,
      height: 381,
    },
    stats: [
      { value: "£5,000", label: "GMV in 3 months" },
      { value: "300+", label: "UK affiliates" },
      { value: "3", label: "product categories" },
    ],
    collage: [
      {
        src: "/images/ultrahuman-creators.jpg",
        alt: "The TikTok Shop creator table: affiliate handles, follower counts and sample requests",
        width: 1400,
        height: 693,
        focus: "center 45%",
      },
      {
        src: "/images/ultrahuman-affiliate-deck.jpg",
        alt: "The Ultrahuman TikTok Shop affiliate deck",
        width: 880,
        height: 1170,
        focus: "center 40%",
      },
    ],
    detail: {
      sections: [
        {
          title: "Overview",
          body: [
            "Ultrahuman makes wearable health hardware — the Ultrahuman Ring and a range of sleep and recovery products. I joined its growth team as a Growth Intern for three months, working on the company's TikTok Shop presence in the UK and US.",
            "The brief covered three product categories: smart rings, blue-light-blocking glasses and sleep masks. The objective was to help generate £5,000 in GMV through TikTok Shop inside three months.",
            "We hit the £5,000 target within the three months, after which the operation was handed over to an agency. I was one of the interns on the initiative rather than its owner.",
          ],
          image: {
            src: "/images/ultrahuman-affiliate-deck.jpg",
            alt: "The Ultrahuman TikTok Shop affiliate deck: premium sleep tech, 20% commission, blue-light glasses and the blackout sleep mask",
            width: 880,
            height: 1170,
            // The deck's own 3:4, so nothing is cropped off a document.
            ratio: "3 / 4",
          },
        },
        {
          title: "What I worked on",
          groups: [
            {
              heading: "TikTok Shop expansion",
              points: [
                "Helped get the UK and US markets set up on TikTok Shop.",
                "Worked on getting products listed and ready to sell.",
                "Learned the operational requirements of selling through the channel.",
              ],
            },
            {
              heading: "Affiliate management",
              points: [
                "Managed and coordinated with 300+ affiliates in the UK.",
                "Worked on getting affiliates to promote Ultrahuman products.",
                "Built relationships with creators and affiliates.",
                "Supported the process of getting products in front of relevant audiences.",
              ],
            },
            {
              heading: "Market research and AI tools",
              points: [
                "Researched the UK market to understand customer preferences and product opportunities.",
                "Used TikTok Shop analytics and AI tools such as Eureka AI to read market trends.",
                "Explored how AI could help identify opportunities and speed up affiliate and product research.",
              ],
            },
          ],
          image: {
            src: "/images/ultrahuman-creators.jpg",
            alt: "The TikTok Shop creator table: affiliate handles, follower counts and sample requests against the glasses and the ring",
            width: 1400,
            height: 693,
            ratio: "2 / 1",
          },
          imageSide: "left",
        },
        {
          title: "Results",
          metrics: [
            { value: "£5,000", label: "GMV, inside 3 months" },
            { value: "300+", label: "UK affiliates managed" },
            { value: "2", label: "markets set up on TikTok Shop" },
            { value: "3", label: "product categories worked on" },
          ],
          points: [
            "The £5,000 GMV target was met within the three-month period, before the operation moved to an agency.",
          ],
        },
        {
          title: "Takeaways",
          points: [
            "How a social commerce channel actually works, from listing products to getting them in front of the right audience.",
            "That affiliate growth is relationship work at volume — 300 creators is a coordination problem before it is a marketing one.",
            "Where AI genuinely speeds up research, and where it only looks like it does.",
          ],
        },
      ],
    },
  },
  {
    slug: "frido",
    role: "Inventory & Supply Chain Intern",
    organisation: "Frido",
    period: "April 2026 · 3 months",
    focus: "Inventory, procurement & supply chain operations",
    summary:
      "Three months across inventory, procurement and supply chain operations, building dashboards that made marketplace and purchase-order data easier to act on.",
    highlights: [
      "Visited the warehouse and manufacturing facility and traced the full operational process.",
      "Identified 10 inputs and potential improvements for warehouse operations.",
      "Built a dashboard tracking Amazon ratings across India, Dubai and the US.",
      "Built a purchase order dashboard across quick commerce, e-commerce and e-trade.",
    ],
    metric: { value: "10", label: "warehouse improvement inputs" },
    tags: ["Supply chain", "Procurement", "Dashboards", "Marketplace ops"],
    logo: {
      src: "/images/logo-frido.jpg",
      alt: "Frido logo",
      width: 472,
      height: 219,
    },
    links: [
      {
        label: "Amazon performance dashboard",
        href: "https://dashboarddfrido.vercel.app/#/uae",
      },
    ],
    stats: [
      { value: "10", label: "warehouse inputs" },
      { value: "3", label: "markets tracked" },
      { value: "2", label: "dashboards built" },
    ],
    collage: [
      {
        src: "/images/frido-stock-count.jpg",
        alt: "Mufaddal counting stock against a notebook in front of racked Frido inventory",
        width: 1000,
        height: 1333,
        focus: "center 55%",
      },
      {
        src: "/images/frido-warehouse-floor.jpg",
        alt: "The Frido warehouse floor, racking and pallets running the length of the building",
        width: 1000,
        height: 1333,
        focus: "center 58%",
      },
      {
        src: "/images/frido-office.jpg",
        alt: "The Frido office reception wall, carrying the brand mark",
        width: 1000,
        height: 1333,
        focus: "center 45%",
      },
    ],
    detail: {
      sections: [
        {
          title: "Overview",
          body: [
            "Frido is a D2C brand selling ergonomic and comfort products. I spent three months there across inventory management, procurement and supply chain operations.",
            "The internship was practical exposure to how a D2C business moves a product from manufacturing through warehousing to shipping and customer delivery — and where that chain loses time.",
          ],
          image: {
            src: "/images/frido-office.jpg",
            alt: "The Frido office reception wall, carrying the brand mark and the line freedom to do more",
            width: 1000,
            height: 1333,
            ratio: "1 / 1",
            focus: "center 50%",
          },
        },
        {
          title: "What I worked on",
          groups: [
            {
              heading: "Warehouse and manufacturing operations",
              points: [
                "Visited the warehouse and the manufacturing facility in person.",
                "Traced how products move from manufacturing to warehousing and on to customers.",
                "Studied inventory handling, dispatch and fulfilment.",
                "Identified 10 inputs and potential improvements for warehouse operations.",
              ],
            },
            {
              heading: "Operational efficiency",
              points: [
                "Worked on making operational information easier to reach and easier to read.",
                "Aimed at cutting manual tracking and improving visibility, so teams could decide on current numbers rather than chase them.",
              ],
            },
          ],
          image: {
            src: "/images/frido-stock-count.jpg",
            alt: "Mufaddal counting stock against a notebook in front of racked Frido inventory",
            width: 1000,
            height: 1333,
            ratio: "1 / 1",
            focus: "center 62%",
          },
          imageSide: "left",
        },
        {
          title: "Selected work",
          groups: [
            {
              heading: "Marketplace performance dashboard",
              points: [
                "Tracked Amazon ratings across India, Dubai and the US in one view.",
                "Built so the team could see where products were performing well, and where customer feedback pointed at something to fix.",
              ],
            },
            {
              heading: "Purchase order management dashboard",
              points: [
                "Consolidated purchase order information across quick commerce, e-commerce and e-trade.",
                "Gave the team one place to track orders rather than three, which made the state of procurement checkable instead of assembled.",
              ],
            },
          ],
          image: {
            src: "/images/frido-dashboard-build.jpg",
            alt: "A laptop on a windowsill showing the dashboard code in progress, overlooking the city",
            width: 1000,
            height: 1333,
            ratio: "1 / 1",
            focus: "center 60%",
          },
        },
        {
          title: "Results",
          metrics: [
            { value: "10", label: "warehouse improvement inputs" },
            { value: "3", label: "markets on the ratings dashboard" },
            { value: "2", label: "operational dashboards built" },
            { value: "3", label: "months, end to end" },
          ],
          points: [
            "Exposure across manufacturing, warehousing and fulfilment, rather than one desk of it.",
          ],
          image: {
            src: "/images/frido-warehouse-floor.jpg",
            alt: "The Frido warehouse floor, with racking and pallets of stock running the length of the building",
            width: 1000,
            height: 1333,
            ratio: "1 / 1",
            focus: "center 58%",
          },
          imageSide: "left",
        },
        {
          title: "Takeaways",
          points: [
            "That a supply chain is only as good as what the team can see of it — most of the delay I found was visibility, not capacity.",
            "How a D2C operation actually runs across quick commerce, e-commerce and e-trade at once.",
            "That a dashboard earns its place when it replaces a manual check, not when it adds a chart.",
          ],
        },
      ],
    },
  },
  {
    slug: "chewcheer",
    role: "Co-Founder",
    organisation: "ChewCheer",
    period: "2025",
    location: "Bengaluru",
    focus: "D2C pet nutrition · 0→1",
    summary:
      "Co-founded a clean-label prebiotic dog-treat brand and took it 0→1 — production, selling at Cubbon Park, Shopify, and the books.",
    highlights: [
      "Took the product from concept to roughly 500 sticks produced with our baker.",
      "Sold at Cubbon Park from 6 AM to 3 PM, speaking to 200–250 dog owners.",
      "Set up and ran the Shopify channel, which took ~₹20,000 in orders organically.",
      "Handled the financial and operational side: tracking, production planning and order management.",
    ],
    metric: { value: "₹1L+", label: "revenue in 3 weeks" },
    tags: ["D2C", "0→1", "Operations", "Shopify", "Customer discovery"],
    logo: {
      src: "/images/logo-chewcheer.jpg",
      alt: "ChewCheer logo, a cocker spaniel holding a chew stick",
      width: 585,
      height: 550,
    },
    links: [{ label: "Instagram", href: "https://www.instagram.com/chewcheerr" }],
    stats: [
      { value: "₹1L+", label: "revenue in 3 weeks" },
      { value: "~200", label: "packets sold" },
      { value: "200–250", label: "customer conversations" },
    ],
    collage: [
      {
        src: "/images/chewcheer-customers.jpg",
        alt: "Two pet parents on a Bengaluru street holding a ChewCheer pack beside their dogs",
        width: 720,
        height: 1280,
        focus: "center 56%",
      },
      {
        src: "/images/chewcheer-pouches.jpg",
        alt: "Three ChewCheer PawBiota prebiotic inulin stick pouches on a wooden table",
        width: 1184,
        height: 864,
        focus: "center 50%",
      },
      {
        src: "/images/chewcheer-stall.jpg",
        alt: "The ChewCheer market stall, the brand mascot beside the product display",
        width: 960,
        height: 1280,
        focus: "center 50%",
      },
    ],
    detail: {
      sections: [
        {
          title: "Overview",
          body: [
            "ChewCheer was a clean-label functional pet nutrition venture: prebiotic-based dog sticks aimed at gut health. We found a gap where most treats were heavily processed and carried no functional benefit, and built a product to make functional nutrition reachable for ordinary dog owners.",
            "We took it from an idea through product development and manufacturing to selling — offline at the park, and online through Shopify.",
          ],
          image: {
            src: "/images/chewcheer-pouches.jpg",
            alt: "Three ChewCheer PawBiota prebiotic inulin stick pouches on a wooden table, with loose sticks in front",
            width: 1184,
            height: 864,
            ratio: "4 / 3",
          },
        },
        {
          title: "What I worked on",
          groups: [
            {
              heading: "Product development and production",
              points: [
                "Developed the product concept.",
                "Coordinated with our baker to produce roughly 500 sticks.",
                "Took it from an idea to something that could actually be sold.",
              ],
            },
            {
              heading: "Finance and operations",
              points: [
                "Financial tracking and production planning.",
                "Operational coordination across the venture.",
                "Sales and order management, and the day-to-day execution behind it.",
              ],
            },
          ],
          image: {
            src: "/images/chewcheer-packaging.jpg",
            alt: "ChewCheer printed packaging and leaflets explaining the prebiotic stick's ingredients",
            width: 960,
            height: 1280,
            ratio: "1 / 1",
            focus: "center 48%",
          },
          imageSide: "left",
        },
        {
          title: "Selling it",
          body: [
            "Most of what we learned came from standing behind the product rather than reading about the category.",
          ],
          groups: [
            {
              heading: "Cubbon Park, 6 AM to 3 PM",
              points: [
                "Sold directly to dog owners at the park.",
                "Spoke to roughly 200–250 customers about their problems, preferences and what they actually buy.",
                "Used that feedback to understand the market rather than guess at it.",
              ],
            },
            {
              heading: "Shopify",
              points: [
                "Set up and ran the Shopify sales channel.",
                "Took roughly ₹20,000 in orders through it organically, with no paid advertising.",
                "Worked on the online selling process and the customer experience around it.",
              ],
            },
          ],
          image: {
            src: "/images/chewcheer-customers.jpg",
            alt: "Two pet parents on a Bengaluru street holding a ChewCheer pack beside their dogs",
            width: 720,
            height: 1280,
            ratio: "1 / 1",
            focus: "center 64%",
          },
        },
        {
          title: "Results",
          metrics: [
            { value: "₹1L+", label: "revenue in 3 weeks" },
            { value: "~200", label: "packets sold" },
            { value: "~500", label: "sticks produced" },
            { value: "200–250", label: "customer conversations" },
          ],
          points: [
            "Of the ₹1,00,000+, roughly ₹20,000 came through the Shopify store organically, with no paid advertising behind it.",
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
          imageSide: "left",
        },
        {
          title: "Takeaways",
          points: [
            "That 250 conversations at a park tell you more about a market than any amount of desk research.",
            "What it takes to get a physical product made, packed and into someone's hand — and how much of that is logistics, not branding.",
            "That organic orders are the honest signal: nothing was propping up the Shopify sales.",
          ],
          image: {
            src: "/images/chewcheer-products.jpg",
            alt: "Three ChewCheer prebiotic inulin stick pouches on a wooden surface",
            width: 1053,
            height: 465,
            // The photograph's own wide crop, which sits level with the copy.
            ratio: "21 / 9",
          },
        },
      ],
    },
  },
  {
    slug: "procur-ai",
    role: "Founder & Builder",
    organisation: "Procur.AI",
    period: "2025 – present",
    location: "Bengaluru",
    focus: "SaaS · Procurement automation & AI",
    summary:
      "Built a procurement SaaS for a real operating business, cutting the workflow from about six people to two.",
    highlights: [
      "Built for my father's business, to speed up a procurement process I had watched run by hand.",
      "Reads incoming RFQ emails, extracts requirements and routes them to the right suppliers.",
      "Cut the people needed for that workflow from roughly six to two.",
      "Prototyped with Lovable and n8n workflows, using Cursor and GitHub.",
    ],
    metric: { value: "6 → 2", label: "people needed for the workflow" },
    tags: ["SaaS", "AI", "Automation", "B2B", "Procurement"],
    logo: {
      src: "/images/logo-procur-ai.jpg",
      alt: "Procur AI logo",
      width: 490,
      height: 382,
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/muffi538/msme-rfq" },
    ],
    stats: [
      { value: "6 → 2", label: "people on the workflow" },
      { value: "85%+", label: "extraction accuracy" },
      { value: "<2 min", label: "per RFQ" },
    ],
    collage: [
      {
        src: "/images/procur-ai-dashboard.jpg",
        alt: "Procur.AI RFQ dashboard listing inbound requests by status",
        width: 1120,
        height: 574,
        focus: "center 40%",
      },
      {
        src: "/images/procur-ai-landing.jpg",
        alt: "Procur.AI landing page reading From inbox to supplier. Instantly.",
        width: 792,
        height: 400,
        focus: "center 40%",
      },
    ],
    detail: {
      sections: [
        {
          title: "Overview",
          body: [
            "Procur.AI is a SaaS product I built for my father's business to simplify and speed up its procurement operations.",
            "The problem was concrete: inbound emails had to be read, the requirement in each one understood, and the right supplier found — all by hand, all day. I built the product to take the repetitive part of that off people, and make sourcing faster.",
          ],
          image: {
            src: "/images/procur-ai-landing.jpg",
            alt: "Procur.AI landing page reading From inbox to supplier. Instantly.",
            width: 792,
            height: 400,
            ratio: "2 / 1",
          },
        },
        {
          title: "What I worked on",
          groups: [
            {
              heading: "Identifying the problem",
              points: [
                "Worked through the existing procurement workflow as it actually ran.",
                "Found the repetitive manual steps inside it.",
                "Studied how inbound emails and procurement requests were being handled.",
                "Looked for where technology would remove friction rather than add a tool.",
              ],
            },
            {
              heading: "Building the product",
              points: [
                "Designed and built Procur.AI end to end.",
                "Automated the email-based procurement workflow.",
                "Built a system that makes sourcing and procurement faster.",
                "Prototyped with Lovable and n8n workflows, using Cursor and GitHub.",
              ],
            },
            {
              heading: "Putting it into the business",
              points: [
                "Implemented the product inside a business that was already running on the old process.",
                "Brought the people needed for that workflow down from roughly six to two.",
                "Let the business handle more work without adding manual resource.",
              ],
            },
          ],
        },
        {
          title: "Selected work",
          points: [
            "Reads inbound RFQ emails and extracts the product requirements from them.",
            "Categorises inquiries by supplier type and routes them to the right supplier.",
            "Holds the whole flow in one centralised workflow rather than an inbox.",
          ],
          image: {
            src: "/images/procur-ai-dashboard.jpg",
            alt: "Procur.AI RFQ dashboard listing inbound requests by status",
            width: 1120,
            height: 574,
            ratio: "2 / 1",
          },
          imageSide: "left",
        },
        {
          title: "Results",
          metrics: [
            { value: "6 → 2", label: "people on the workflow" },
            { value: "~2x", label: "business revenue growth alongside" },
            { value: "<2 min", label: "RFQ processing time" },
            { value: "85%+", label: "extraction accuracy" },
          ],
          points: [
            "The business roughly doubled its revenue over this period. The product was not the only reason — it ran alongside the growth, by freeing capacity that had been going into manual work.",
            "Built, deployed and in use inside a real operating business rather than a demo.",
          ],
        },
        {
          title: "Takeaways",
          points: [
            "That the best product brief comes from watching a process run, not from asking what people want.",
            "How far AI and automation get you on a workflow that is mostly reading and routing.",
            "That shipping into a live business is a different discipline from building a prototype — it has to work on the first day.",
          ],
        },
      ],
    },
  },
  {
    slug: "mufmuf-eats",
    role: "Founder & Content Creator",
    organisation: "@mufmuf_eats",
    period: "2025 – present",
    location: "Bengaluru",
    focus: "Food content, social media & F&B",
    summary:
      "A food channel built from one follower to ~1,500 in under two months, with a video at 1.5M views and 30–35 Bengaluru spots covered.",
    highlights: [
      "Grew the account from 1 follower to roughly 1,500 in under two months.",
      "One video reached approximately 1.5 million views.",
      "Explored 30–35 food spots across Bengaluru.",
      "Started barter collaborations with restaurants across the city.",
    ],
    metric: { value: "1.5M", label: "views on the top video" },
    tags: ["Content strategy", "Short-form video", "F&B", "Personal brand"],
    // Drawn on by the food block on /about, not by this role's own page.
    images: [
      {
        src: "/images/mufmuf-eats-street-food.jpg",
        alt: "Mufaddal holding a street-food plate outside Mumbai Pav Co. in Bengaluru",
        width: 480,
        height: 554,
      },
      {
        src: "/images/mufmuf-eats-followers.jpg",
        alt: "The @mufmuf_eats Instagram profile: 31 posts, 1,506 followers, with reels at 1.4M, 322K and 214K views",
        width: 535,
        height: 1100,
      },
    ],
    links: [{ label: "Instagram", href: "https://www.instagram.com/mufmuf_eats" }],
    stats: [
      { value: "1.5M", label: "views on the top video" },
      { value: "1 → 1,500", label: "followers in under 2 months" },
      { value: "30–35", label: "food spots explored" },
    ],
    collage: [
      {
        src: "/images/mufmuf-burger.jpg",
        alt: "A finished review frame: a burger held to camera under the title In N Out Burger",
        width: 1000,
        height: 1575,
        focus: "center 46%",
      },
      {
        src: "/images/mufmuf-filming.jpg",
        alt: "Mufaddal filming a review to camera on a restaurant terrace hung with marigold garlands",
        width: 912,
        height: 1600,
        focus: "center 50%",
      },
      {
        src: "/images/mufmuf-dining.jpg",
        alt: "Mufaddal at a western-themed burger café in Bengaluru",
        width: 960,
        height: 1280,
        focus: "center 45%",
      },
    ],
    detail: {
      sections: [
        {
          title: "Overview",
          body: [
            "Mufmuf Eats started as a way to explore Bengaluru through food and make something out of what I found — the restaurants, the street food, the places that never get written about.",
            "A personal interest in finding new places turned into a food channel, and the channel turned into a way into the city's F&B industry: restaurant owners, founders, people who run kitchens.",
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
        {
          title: "What I worked on",
          groups: [
            {
              heading: "Content creation",
              points: [
                "Short-form food videos and restaurant reels.",
                "Experimented with storytelling, editing and hooks.",
                "Worked out what actually makes food content hold someone's attention.",
                "Tried different formats and content strategies rather than one.",
              ],
            },
            {
              heading: "F&B networking",
              points: [
                "Connected with food founders and restaurant owners across Bengaluru.",
                "Built relationships with F&B businesses in the city.",
                "Started collaborating with new restaurants through barter collaborations.",
              ],
            },
            {
              heading: "Exploring Bengaluru",
              points: [
                "Found and visited roughly 30–35 food spots across the city.",
                "Used the channel as a reason to go to cuisines and places I would not have otherwise.",
                "Built an understanding of how restaurants actually pull customers in.",
              ],
            },
          ],
          image: {
            src: "/images/mufmuf-filming.jpg",
            alt: "Mufaddal filming a review to camera on a restaurant terrace hung with marigold garlands",
            width: 912,
            height: 1600,
            ratio: "1 / 1",
            focus: "center 56%",
          },
          imageSide: "left",
        },
        {
          title: "Selected work",
          body: [
            "The format that worked: shot on the spot, cut tight, and built around the food rather than the reviewer.",
          ],
          image: {
            src: "/images/mufmuf-burger.jpg",
            alt: "A finished review frame: a burger held to camera under the title In N Out Burger",
            width: 1000,
            height: 1575,
            ratio: "4 / 5",
            focus: "center 48%",
          },
        },
        {
          title: "Results",
          metrics: [
            { value: "1.5M", label: "views on the top video" },
            { value: "200K+", label: "views across several others" },
            { value: "1 → 1,500", label: "followers in under 2 months" },
            { value: "30–35", label: "food spots explored" },
          ],
          points: ["Ongoing barter collaborations with restaurants across Bengaluru."],
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
          imageSide: "left",
        },
        {
          title: "Takeaways",
          points: [
            "That an audience is built one format at a time — the video that went to 1.5M was not the one I expected.",
            "How the F&B industry in a city actually connects, and that a camera is a reason to be let in.",
            "That distribution is a skill of its own, separate from the thing being distributed.",
          ],
        },
      ],
    },
  },
  {
    slug: "sports-secretary",
    role: "Sports Secretary",
    organisation: "Student Council, Mesa School of Business",
    period: "2025",
    location: "Bengaluru",
    focus: "Leadership · Events & sponsorship",
    summary:
      "Leading sports initiatives and student athletic engagement across the institution.",
    highlights: [
      "Led and coordinated a cohort of 98 students across all sports activities and events.",
      "Secured sponsorship from Epigamia, with 1,000+ units distributed across inter-collegiate events.",
      "Hosted tournaments featuring 10+ top colleges across Bengaluru, managing end-to-end logistics.",
    ],
    metric: { value: "98", label: "students coordinated" },
    tags: ["Leadership", "Events", "Sponsorship", "Logistics"],
    stats: [
      { value: "98", label: "students coordinated" },
      { value: "10+", label: "colleges hosted" },
      { value: "1,000+", label: "sponsor units distributed" },
    ],
    collage: [
      {
        src: "/images/mesa-tournament.jpg",
        alt: "The Mesa squad with the trophy after a five-a-side inter-collegiate tournament",
        width: 1586,
        height: 992,
        focus: "center 45%",
      },
      {
        src: "/images/mesa-team-huddle.jpg",
        alt: "Mufaddal briefing a circle of players on a floodlit pitch",
        width: 956,
        height: 1645,
        focus: "center 38%",
      },
      {
        src: "/images/mesa-cohort-session.jpg",
        alt: "Mufaddal on stage with a microphone addressing the full student cohort",
        width: 1400,
        height: 1050,
        focus: "center 45%",
      },
    ],
    detail: {
      sections: [
        {
          title: "Overview",
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
        {
          title: "What I worked on",
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
          imageSide: "left",
        },
        {
          title: "Selected work",
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
        },
        {
          title: "Results",
          metrics: [
            { value: "98", label: "students coordinated" },
            { value: "10+", label: "colleges hosted" },
            { value: "1,000+", label: "sponsor units distributed" },
          ],
          image: {
            src: "/images/mesa-cohort-session.jpg",
            alt: "Mufaddal on stage with a microphone addressing the full student cohort",
            width: 1400,
            height: 1050,
            ratio: "4 / 3",
          },
          imageSide: "left",
        },
      ],
    },
  },
];
