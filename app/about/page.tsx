import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About",
  description: "Placeholder about page.",
};

export default function AboutPage() {
  return <AboutSection />;
}
