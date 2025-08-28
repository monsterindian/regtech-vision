
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Clock, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: TrendingUp, label: "Reduce Compliance Costs by", value: "60%" },
    { icon: Shield, label: "Prevent", value: "80%", suffix: "of Financial Crimes" },
    { icon: CheckCircle, label: "Achieve", value: "100%", suffix: "Regulatory Accuracy" },
    { icon: Clock, label: "Onboard Customers", value: "70%", suffix: "Faster" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="mb-6 text-foreground">
            Transform Compliance from{" "}
            <span className="text-gradient">Cost Center</span> to{" "}
            <span className="text-gradient">Competitive Advantage</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-Powered Compliance Automation for Financial Institutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Solutions
            </Button>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card group hover:bg-accent/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label} {stat.suffix && stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
