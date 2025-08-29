import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;