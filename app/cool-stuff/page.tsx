import type { Metadata } from "next";
import { CoolStuffHub } from "@/components/sections/cool-stuff-hub";

export const metadata: Metadata = {
  title: "Cool stuff",
  description:
    "People I've met. Ideas I've stolen. Lessons I won't forget.",
};

export default function CoolStuffPage() {
  return <CoolStuffHub />;
}
