import type { EducationItem } from "@/lib/types";

export const education: EducationItem[] = [
  {
    institution: "Mesa School of Business",
    qualification: "BBA (NMIMS, batch of 2029)",
    period: "2025 – 2029",
    location: "Bengaluru",
    description:
      "First-year student, active in both leadership and entrepreneurship within the student body. Serving as Sports Secretary while pursuing ventures across technology, D2C and business operations, with a focus on building and scaling real-world products and brands.",
    highlights: [
      "Sports Secretary, Student Council",
      "Winner — Mesa Ad Hackathon 2026 (₹30,000)",
      "Best D2C Product — ChewCheer",
      "Top Scorer — Mesa School of Business",
    ],
    image: {
      src: "/images/mesa-ad-hackathon.jpg",
      alt: "Mufaddal holding the ₹30,000 winner's cheque at the Mesa Ad Hackathon 2026",
      width: 768,
      height: 383,
    },
  },
  {
    institution: "RIMS International School & Junior College",
    qualification: "Higher Secondary Certificate (HSC)",
    period: "2022 – 2024",
    location: "Pune",
    description:
      "Sports Captain and Football Team Captain. Served as Sports Head, leading and representing the entire school across all sporting events.",
    highlights: [
      "Won the IIT Bombay Football Tournament as Team Captain",
      "Won the FLAMES Tournament as Team Captain",
      "Won the Cambridge Cup Dubai as Team Captain",
    ],
  },
  {
    institution: "Cambridge International School",
    qualification: "UK curriculum · IGCSE",
    period: "2016 – 2021",
    location: "Dubai, UAE",
    description:
      "Served as Sports Secretary, leading sports activities and student engagement initiatives alongside academics. Built strong exposure to leadership, teamwork and extracurricular management within an internationally focused education system.",
    highlights: [
      "Won Best Spokesperson Award",
      "Attended 10+ Model United Nations (MUN) conferences",
    ],
    logo: {
      src: "/images/logo-cambridge.jpg",
      alt: "Cambridge International School, Dubai logo",
      width: 300,
      height: 149,
    },
  },
];
