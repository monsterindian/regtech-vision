import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-secondary text-white px-8 py-4 text-lg">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;