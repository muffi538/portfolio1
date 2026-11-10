import type { Metadata } from "next";
import { DoingSection } from "@/components/sections/doing-section";

export const metadata: Metadata = {
  title: "Doing cool stuff",
  description:
    "Football in Tanzania, a dairy and a steel factory from the inside, and the paan advert that won the Mesa Ad Hackathon.",
};

export default function DoingPage() {
  return <DoingSection />;
}
