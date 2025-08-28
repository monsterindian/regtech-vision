
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsOverview from "@/components/SolutionsOverview";
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
        <AboutSection />
        <DemoRequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
