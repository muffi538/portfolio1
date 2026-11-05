import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mufaddal Yousuf — email, phone, LinkedIn, GitHub, Instagram and résumé.",
};

export default function ContactPage() {
  return <ContactSection />;
}
