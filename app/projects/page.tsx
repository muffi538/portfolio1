import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Projects",
  description: "Placeholder projects page.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
