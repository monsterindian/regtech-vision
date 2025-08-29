import { Button } from "@/components/ui/button";
import { ArrowRight, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SolutionHeroProps {
  title: string;
  description: string;
  backgroundColor: string;
  breadcrumbs: Array<{ name: string; href: string }>;
}

const SolutionHero = ({ title, description, backgroundColor, breadcrumbs }: SolutionHeroProps) => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 100%)` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/30 rotate-45 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-white/60 mx-2" />
                )}
                {index === 0 ? (
                  <Link
                    to={crumb.href}
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                  >
                    <Home className="h-4 w-4 mr-1" />
                    {crumb.name}
                  </Link>
                ) : index === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{crumb.name}</span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link to="/contact">
              <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E56A00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
