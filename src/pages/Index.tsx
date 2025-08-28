
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import AgenticArchitecture from "@/components/AgenticArchitecture";
import UseCaseScenarios from "@/components/UseCaseScenarios";
import AgenticDifferentiators from "@/components/AgenticDifferentiators";
import ComplianceExcellence from "@/components/ComplianceExcellence";
import TechnicalSpecifications from "@/components/TechnicalSpecifications";
import AboutSection from "@/components/AboutSection";
import DemoRequestForm from "@/components/DemoRequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionsOverview />
        <AgenticArchitecture />
        <UseCaseScenarios />
        <AgenticDifferentiators />
        <ComplianceExcellence />
        <TechnicalSpecifications />
        <AboutSection />
        <DemoRequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
