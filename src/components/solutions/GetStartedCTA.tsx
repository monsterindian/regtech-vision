import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface GetStartedCTAProps {
  title: string;
  description: string;
  accentColor: string;
  benefits: string[];
}

const GetStartedCTA = ({ title, description, accentColor, benefits }: GetStartedCTAProps) => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/30 rotate-45 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E56A00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Start Implementation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-4 text-white/80">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">
                  Questions? Contact our solutions team at{" "}
                  <a href="mailto:info@gaigentic.ai" className="underline hover:text-white">
                    info@gaigentic.ai
                  </a>
                </span>
              </div>
            </div>

            {/* Benefits */}
            <div className="animate-fade-in-up delay-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What You Get
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#FF7A00] rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-white/90 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
