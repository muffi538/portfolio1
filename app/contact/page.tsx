import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Placeholder contact page.",
};

export default function ContactPage() {
  return <ContactSection />;
}
