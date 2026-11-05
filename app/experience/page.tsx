import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience-section";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Growth at Ultrahuman UK, inventory and supply chain at Frido, plus ChewCheer, Procur.AI and content creation.",
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
