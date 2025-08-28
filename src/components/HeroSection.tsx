import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl font-bold mb-8 text-foreground leading-tight">
            Autonomous AI Agents for
            <br />
            Financial Compliance
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Deploy intelligent AI agents that autonomously handle KYC, fraud detection, 
            transaction monitoring, and regulatory compliance across BFSI operations.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Trust Indicator */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by 500+ financial institutions worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-400 font-semibold">HSBC</div>
              <div className="text-gray-400 font-semibold">JPMorgan</div>
              <div className="text-gray-400 font-semibold">Deutsche Bank</div>
              <div className="text-gray-400 font-semibold">Wells Fargo</div>
              <div className="text-gray-400 font-semibold">Citibank</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;