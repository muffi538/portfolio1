import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { ExperiencePreviewSection } from "@/components/sections/experience-preview-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <MetricsSection />
      <SelectedWorkSection />
      <ExperiencePreviewSection />
      <CtaSection />
    </>
  );
}
