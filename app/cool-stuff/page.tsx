import type { Metadata } from "next";
import { CoolStuffSection } from "@/components/sections/cool-stuff-section";

export const metadata: Metadata = {
  title: "Cool stuff",
  description:
    "Founders I've met and what I took from those conversations — California Burrito, BigBasket, Bombay Shaving Company, Yoga Bar and more.",
};

export default function CoolStuffPage() {
  return <CoolStuffSection />;
}
