// Header is rendered globally from App.tsx
import HeroSection from "@/components/HeroSection";
import GaigenticLabsSection from "@/components/GaigenticLabsSection";
import SolutionsPreview from "@/components/SolutionsPreview";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
  <div className="min-h-screen bg-white">
  <main className="pt-16 md:pt-0">
        <HeroSection />
        <GaigenticLabsSection />
        <SolutionsPreview />
        <ProcessSection />
        <AboutSection />
      </main>
  <StickyCTA />
    </div>
  );
};

export default Index;