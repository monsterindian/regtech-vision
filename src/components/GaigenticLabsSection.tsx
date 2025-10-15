import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Rocket,
  ArrowRight,
  Brain
} from "lucide-react";

const GaigenticLabsSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const stages = [
    {
      id: 1,
      title: "Challenges",
      subtitle: "Use Case • Business problem",
      icon: AlertTriangle,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      items: ["Use Case", "Business problem"],
      description: "Identify and analyze compliance challenges and business requirements"
    },
    {
      id: 2,
      title: "Gaigentic Lab",
      subtitle: "Solutioning • AI Agents",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      items: ["Solutioning", "AI Agents"],
      description: "Design and develop autonomous AI agent solutions"
    },
    {
      id: 3,
      title: "Outcome",
      subtitle: "Validate assumptions • Validate outcome • Calculate ROI",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      items: ["Validate assumptions", "Validate outcome", "Calculate ROI"],
      description: "Test solutions and measure business impact"
    },
    {
      id: 4,
      title: "MVP/Product",
      subtitle: "Implementation",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      items: ["Implementation"],
      description: "Deploy production-ready AI agent solutions"
    }
  ];

  useEffect(() => {
    // Auto-start animation when component mounts
    setIsAnimating(true);
    setActiveStage(0);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % stages.length);
      }, 3000); // Increased to 3 seconds for better viewing
      return () => clearInterval(interval);
    }
  }, [isAnimating, stages.length]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
    if (!isAnimating) {
      setActiveStage(0);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Gaigentic LABS
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Proven
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Innovation Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From identifying challenges to deploying production-ready AI agents, we follow a systematic approach that ensures successful outcomes.
          </p>
        </div>

        {/* Main Workflow Visualization */}
        <div className="mb-16">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative">
            {/* Curved Arrow Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" style={{ zIndex: 1 }}>
              <path
                d="M 100 200 Q 300 100 500 200 Q 700 300 900 200 Q 1100 100 1200 200"
                stroke="url(#arrowGradient)"
                strokeWidth="3"
                fill="none"
                className={`transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-30'}`}
                style={{
                  strokeDasharray: isAnimating ? '0' : '20,10',
                  animation: isAnimating ? 'dash 2s ease-in-out infinite' : 'none'
                }}
              />
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Workflow Stages */}
            <div className="relative z-10 grid grid-cols-4 gap-8">
              {stages.map((stage, index) => (
                <Card
                  key={stage.id}
                  className={`group relative overflow-hidden transition-all duration-700 transform hover:scale-105 ${
                    activeStage === index ? 'ring-4 ring-purple-300 shadow-2xl' : ''
                  } ${stage.bgColor} ${stage.borderColor} border-2`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    transform: isAnimating && activeStage === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <CardContent className="p-6 text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stage.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.title}</h3>

                    {/* Items */}
                    <div className="space-y-2 mb-4">
                      {stage.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`text-sm px-3 py-1 rounded-full transition-all duration-500 ${
                            activeStage === index
                              ? 'bg-white text-gray-800 shadow-md transform scale-105'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                          style={{
                            animationDelay: `${(index * 200) + (itemIndex * 100)}ms`
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className={`text-sm text-gray-600 transition-all duration-500 ${
                      activeStage === index ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
                    }`}>
                      {stage.description}
                    </p>

                    {/* Pulse Effect for Active Stage */}
                    {activeStage === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {stages.map((stage, index) => (
              <Card
                key={stage.id}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  activeStage === index ? 'ring-2 ring-purple-300 shadow-lg' : ''
                } ${stage.bgColor} ${stage.borderColor} border-2`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <stage.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{stage.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {stage.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="text-xs px-2 py-1 bg-white/70 rounded-full text-gray-700">
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{stage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Process Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-white/70 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
            <div className="text-sm text-gray-600">Stage Process</div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">2-4</div>
            <div className="text-sm text-gray-600">Weeks to MVP</div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">AI Monitoring</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to transform your compliance operations with our proven process?
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          @keyframes dash {
            to { stroke-dashoffset: -20; }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .delay-1000 {
            animation-delay: 1s;
          }

          .delay-2000 {
            animation-delay: 2s;
          }
        `
      }} />
    </section>
  );
};

export default GaigenticLabsSection;