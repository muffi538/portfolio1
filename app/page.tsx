import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { StudySection } from "@/components/sections/study-section";
import { ExperiencePreviewSection } from "@/components/sections/experience-preview-section";
import { MomentsSection } from "@/components/sections/moments-section";
import { CoolStuffSection } from "@/components/sections/cool-stuff-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StudySection />
      <IntroSection />
      <MomentsSection />
      <SelectedWorkSection />
      <ExperiencePreviewSection />
      <CoolStuffSection />
    </>
  );
}
