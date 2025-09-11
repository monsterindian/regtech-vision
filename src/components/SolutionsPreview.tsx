import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SolutionsPreview = () => {
  const [hoveredSolution, setHoveredSolution] = useState(null);

  const solutions = [
    {
      id: 1,
      icon: Brain,
      title: "KYC Automation",
      description: "Autonomous identity verification and onboarding with real-time compliance monitoring",
      metrics: { primary: "99.2%", secondary: "85%", label1: "Accuracy", label2: "Faster" },
      features: ["Biometric verification", "Document analysis", "Global database checks", "Fraud detection"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      demoLink: "/solutions/kyc-automation"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Lending Compliance",
      description: "Intelligent loan underwriting and credit assessment with automated regulatory compliance",
      metrics: { primary: "70%", secondary: "45%", label1: "Faster", label2: "Lower Defaults" },
      features: ["Credit scoring", "Alternative data", "Risk assessment", "Regulatory compliance"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      demoLink: "/solutions/lending-compliance"
    },
    {
      id: 3,
      icon: Eye,
      title: "Transaction Monitoring",
      description: "Real-time suspicious activity detection with adaptive pattern recognition",
      metrics: { primary: "90%", secondary: "99.5%", label1: "False Positive Reduction", label2: "Detection Rate" },
      features: ["Real-time monitoring", "Pattern recognition", "Network analysis", "SAR generation"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 hover:bg-green-100",
      demoLink: "/solutions/transaction-monitoring"
    },
    {
      id: 4,
      icon: Shield,
      title: "Risk Management",
      description: "Continuous regulatory monitoring with automated policy alignment and predictive analytics",
      metrics: { primary: "90%", secondary: "100%", label1: "Risk Reduction", label2: "Audit Ready" },
      features: ["Risk assessment", "Policy automation", "Predictive analytics", "Audit trails"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      demoLink: "/solutions/risk-management"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-purple-600 border-purple-200">
            🤖 Agentic AI Solutions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Four Core Solutions,
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Infinite Possibilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy autonomous AI agents that revolutionize compliance operations across insurance, lending, and banking with intelligent automation.
          </p>
        </div>

        {/* Interactive Solution Flow */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Our AI Agents Work Together</h3>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center space-x-8 p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Collect</span>
                </div>
                <ArrowRight className="text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Analyze</span>
                </div>
                <ArrowRight className="text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Monitor</span>
                </div>
                <ArrowRight className="text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Protect</span>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden grid grid-cols-2 gap-6 p-6 bg-white rounded-2xl shadow-lg max-w-sm mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Collect</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Analyze</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Monitor</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Protect</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className={`group relative overflow-hidden border-2 border-transparent hover:border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${solution.bgColor}`}
              onMouseEnter={() => setHoveredSolution(solution.id)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <CardContent className="p-8">

                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{solution.metrics.primary}</div>
                    <div className="text-sm text-gray-600">{solution.metrics.label1}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Metrics Bar */}
                <div className="flex items-center justify-between mb-6 p-4 bg-white/70 rounded-lg">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{solution.metrics.secondary}</div>
                    <div className="text-sm text-gray-600">{solution.metrics.label2}</div>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${solution.color} text-white text-xs font-semibold rounded-full`}>
                    Enterprise Ready
                  </div>
                </div>

                {/* CTA Button */}
                <Link to={solution.demoLink} className="w-full block">
                  <Button
                    className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 text-white font-semibold transition-all duration-300 ${
                      hoveredSolution === solution.id ? 'transform scale-105' : ''
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                {/* Hover Overlay */}
                {hoveredSolution === solution.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                      Live Demo Available
                    </div>
                  </div>
                )}

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/solutions">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl"
            >
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SolutionsPreview;
