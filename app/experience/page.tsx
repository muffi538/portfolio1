import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience-section";

export const metadata: Metadata = {
  title: "Experience",
  description: "Placeholder experience page.",
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
