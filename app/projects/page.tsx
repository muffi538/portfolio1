import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The Elemax corporate website, Procur.AI procurement automation, Nua consumer research and the ChewCheer D2C brand.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
