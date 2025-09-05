import { HeroSection } from "@/modules/Hero/hero-section";
import { WorksSection } from "@/modules/Works/work-section";

export default function Home() {
  return (
    <div className="bg-gradient-to-bl from-[#d4d4d4] to-[#707070]">
        <HeroSection />
        <WorksSection />
    </div>
  );
}
