import type { Metadata } from "next";
import { PeopleSection } from "@/components/sections/people-section";

export const metadata: Metadata = {
  title: "Meeting cool people",
  description:
    "Founders I've met and what I took from those conversations — California Burrito, BigBasket, Bombay Shaving Company, Neeman's, Yoga Bar and more.",
};

export default function PeoplePage() {
  return <PeopleSection />;
}
