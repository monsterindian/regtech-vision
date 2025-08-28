
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Clock, CheckCircle, Bot, Zap, Eye, Activity } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: TrendingUp, label: "Reduce False Positives by", value: "80%" },
    { icon: Eye, label: "Autonomous Detection of", value: "95%", suffix: "of Financial Crimes" },
    { icon: Zap, label: "Real-time Risk Assessment in", value: "Milliseconds" },
    { icon: Activity, label: "24/7 Continuous Compliance", value: "Monitoring" },
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
            <span className="text-gradient">Autonomous AI Agents</span>{" "}
            Revolutionizing{" "}
            <span className="text-gradient">BFSI Compliance</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy intelligent AI agents that autonomously handle KYC, fraud detection, transaction monitoring, and regulatory compliance across insurance, lending, and banking operations
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

          {/* Agentic AI vs Traditional AI Section */}
          <div className="mt-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              <span className="text-gradient">Agentic AI</span> vs Traditional AI
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traditional AI */}
              <div className="bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-muted-foreground">Traditional AI</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Requires constant human oversight
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Rule-based decision making
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    High false positive rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Limited adaptability to new threats
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Reactive compliance approach
                  </li>
                </ul>
              </div>

              {/* Agentic AI */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Bot className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-accent">Agentic AI</h3>
                </div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Fully autonomous decision making
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Self-learning and adaptive algorithms
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    80% reduction in false positives
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Proactive threat identification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Continuous 24/7 monitoring & response
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
