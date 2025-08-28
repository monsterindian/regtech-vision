import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import TrustIndicators from "@/components/TrustIndicators";
import DemoRequestForm from "@/components/DemoRequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsOverview />
        <TrustIndicators />
        <DemoRequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;