import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsPreview from "@/components/SolutionsPreview";
import ProcessSection from "@/components/ProcessSection";
import CustomerLogos from "@/components/CustomerLogos";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsPreview />
        <ProcessSection />
        <CustomerLogos />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;