import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { ExperiencePreviewSection } from "@/components/sections/experience-preview-section";
import { MomentsSection } from "@/components/sections/moments-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SelectedWorkSection />
      <ExperiencePreviewSection />
      <MomentsSection />
      <CtaSection />
    </>
  );
}
