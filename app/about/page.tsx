import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationSection } from "@/components/sections/education-section";
import { SportSection } from "@/components/sections/sport-section";
import { FoodSection } from "@/components/sections/food-section";
import { AwardsSection } from "@/components/sections/awards-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "First-year student at Mesa School of Business and Sports Secretary, building ventures across technology, D2C and business operations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <SportSection />
      <FoodSection />
      <AwardsSection />
    </>
  );
}
