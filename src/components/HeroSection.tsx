import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#0052CC] to-[#00A3CC]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-white/20 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="w-16 h-16 border-2 border-white/30 rotate-45 animate-bounce-slow"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4">
          <div className="w-12 h-12 bg-white/20 transform rotate-12 animate-float"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
            Autonomous AI Agents for
            <br />
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Financial Compliance
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Deploy intelligent AI agents that autonomously handle KYC, fraud detection, 
            transaction monitoring, and regulatory compliance across BFSI operations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-400">
            <Link to="/contact">
              <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E56A00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[#0052CC] transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100 text-sm">Financial Institutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100 text-sm">Compliance Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-100 text-sm">Processing Time Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;