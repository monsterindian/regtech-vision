import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, DollarSign, Target, Clock, Shield, TrendingUp, Settings, Grid3X3, Layers, Zap, Gauge, Puzzle, TrendingDown, Crosshair, Rocket } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const platformMetrics = [
    { icon: Puzzle, value: "Modular", label: "Design", description: "Flexible, scalable architecture that adapts to your specific compliance needs" },
    { icon: TrendingDown, value: "75%", label: "Projected Savings", description: "Expected compliance cost reduction based on our AI automation capabilities" },
    { icon: Crosshair, value: "99.9%", label: "Accuracy Rate", description: "Industry-leading precision across all compliance and verification solutions" },
    { icon: Rocket, value: "75%", label: "Time Reduction", description: "Average processing time improvement across all compliance workflows" }
  ];

  const solutions = [
    {
      id: "kyc",
      title: "Autonomous KYC & Identity Verification",
      subtitle: "Real-time identity verification with 99.2% accuracy",
      problemHeadline: "Manual identity verification takes 5-7 days, causing 40% customer abandonment",
      solutionSummary: "Multi-source identity verification in real-time with biometric authentication and continuous risk monitoring",
      keyResults: [
        { metric: "85%", label: "faster processing", icon: Clock },
        { metric: "60%", label: "cost reduction", icon: DollarSign },
        { metric: "99.2%", label: "accuracy", icon: Target }
      ],
      technicalHighlights: [
        "OCR with handwriting recognition",
        "Facial recognition and anti-spoofing",
        "Database checks across 50+ global sources",
        "ML-powered fraud pattern detection",
        "Automated compliance reporting"
      ],
      regulatory: ["KYC", "CDD", "EDD", "AML", "GDPR", "CCPA"],
      industries: ["Banking", "Insurance", "Fintech", "Wealth Management"],
      demoLink: "/solutions/kyc-automation"
    },
    {
      id: "transaction",
      title: "Intelligent Transaction Monitoring & AML",
      subtitle: "90% false positive reduction with 99.5% threat detection",
      problemHeadline: "1000+ daily false positives overwhelming compliance teams",
      solutionSummary: "Real-time transaction analysis with behavioral modeling and adaptive ML algorithms",
      keyResults: [
        { metric: "90%", label: "false positive reduction", icon: Shield },
        { metric: "75%", label: "faster investigations", icon: Clock },
        { metric: "99.5%", label: "threat detection", icon: Target }
      ],
      technicalHighlights: [
        "Stream processing for real-time analysis",
        "Graph databases for relationship mapping",
        "Behavioral analytics and anomaly detection",
        "Sanctions screening and PEP monitoring",
        "Case management automation"
      ],
      regulatory: ["AML", "BSA", "FATF", "OFAC", "EU AML Directives"],
      industries: ["Banks", "Payment Processors", "Cryptocurrency", "Remittance"],
      demoLink: "/solutions/transaction-monitoring"
    },
    {
      id: "lending",
      title: "Lending Compliance & Risk Assessment",
      subtitle: "70% faster decisions with 45% lower defaults",
      problemHeadline: "Manual underwriting limiting loan capacity and increasing defaults",
      solutionSummary: "Automated credit risk assessment using alternative data with real-time compliance checking",
      keyResults: [
        { metric: "70%", label: "faster decisions", icon: Clock },
        { metric: "300%", label: "loan volume increase", icon: TrendingUp },
        { metric: "45%", label: "lower defaults", icon: Shield }
      ],
      technicalHighlights: [
        "Alternative data integration (social, mobile, utility)",
        "ML credit scoring models",
        "Income and employment verification",
        "Regulatory rule engines",
        "Automated decision documentation"
      ],
      regulatory: ["Capital Requirements", "Fair Lending", "Credit Assessment", "Consumer Protection", "Anti-Discrimination"],
      industries: ["Banks", "Credit Unions", "Fintech Lenders", "NBFC"],
      demoLink: "/solutions/lending-compliance"
    },
    {
      id: "risk",
      title: "Proactive Risk & Compliance Management",
      subtitle: "90% risk reduction with 100% audit readiness",
      problemHeadline: "Reactive compliance approach leading to violations and penalties",
      solutionSummary: "Continuous regulatory change monitoring with automated policy updates and predictive analytics",
      keyResults: [
        { metric: "90%", label: "risk reduction", icon: Shield },
        { metric: "75%", label: "operational savings", icon: DollarSign },
        { metric: "100%", label: "audit readiness", icon: CheckCircle }
      ],
      technicalHighlights: [
        "Regulatory API integrations",
        "Policy automation engines",
        "Predictive risk modeling",
        "Audit trail immutability",
        "Compliance workflow orchestration"
      ],
      regulatory: ["Financial Controls", "Risk Frameworks", "Security Standards", "Payment Security", "Industry Best Practices"],
      industries: ["All BFSI sectors requiring regulatory compliance"],
      demoLink: "/solutions/risk-management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm">
                  Complete Agentic AI Suite
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                Complete Agentic AI Suite for
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Financial Compliance</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                End-to-end autonomous compliance solutions that eliminate manual processes, reduce costs by <strong>75%</strong>, and ensure <strong>100% regulatory adherence</strong> across all BFSI operations.
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center lg:justify-start mb-12 animate-fade-in-up delay-600">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:bg-blue-400 hover:text-white hover:border-blue-400 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators with Animation */}
              <div className="grid grid-cols-3 gap-8 animate-fade-in-up delay-800">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    75%
                  </div>
                  <p className="text-sm text-gray-600">Cost Reduction</p>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    99.9%
                  </div>
                  <p className="text-sm text-gray-600">Accuracy Rate</p>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    4
                  </div>
                  <p className="text-sm text-gray-600">Core Solutions</p>
                </div>
              </div>
            </div>

            {/* Right Content - Platform Metrics */}
            <div className="relative animate-fade-in-up delay-1000">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Platform Metrics</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Interactive Metrics */}
                <div className="space-y-4">
                  {platformMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center p-4 rounded-lg border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-purple-500 text-white">
                        <metric.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg">{metric.value}</div>
                        <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                        <div className="text-xs text-gray-600 mt-1">{metric.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Four Core Solutions, Infinite Possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution works independently or as part of an integrated compliance ecosystem
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <Card key={solution.id} className="overflow-hidden border-0 shadow-2xl">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <Badge variant="outline" className="mb-4 px-3 py-1 text-purple-600 border-purple-200">
                      Solution {index + 1}
                    </Badge>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>

                    <p className="text-lg text-purple-600 font-semibold mb-6">
                      {solution.subtitle}
                    </p>

                    {/* Problem/Solution */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-red-600 mb-2">Current Problem:</h4>
                        <p className="text-gray-600">{solution.problemHeadline}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">Our Solution:</h4>
                        <p className="text-gray-600">{solution.solutionSummary}</p>
                      </div>
                    </div>

                    {/* Key Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {solution.keyResults.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                          <result.icon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
                    >
                      <Link to={solution.demoLink}>
                        Learn more
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual/Demo Side */}
                  <div className={`bg-gradient-to-br from-purple-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="w-full max-w-md">

                      {/* Technical Highlights */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                        <h4 className="font-bold text-gray-900 mb-4">Technical Capabilities</h4>
                        <div className="space-y-3">
                          {solution.technicalHighlights.slice(0, 3).map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Regulatory & Industries */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-md">
                          <h5 className="font-semibold text-gray-900 mb-2">Regulatory</h5>
                          <div className="flex flex-wrap gap-1">
                            {solution.regulatory.slice(0, 3).map((reg, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                                {reg}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-md">
                          <h5 className="font-semibold text-gray-900 mb-2">Industries</h5>
                          <div className="flex flex-wrap gap-1">
                            {solution.industries.slice(0, 2).map((industry, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                🚀 Get Started Today
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Compliance Operations?</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Join our beta testing program and be among the first to experience the future of compliance automation
            </p>
          </div>

          {/* Feature Cards - Consistent with page design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tailored Demo</h3>
              <p className="text-gray-600 leading-relaxed">Solution-specific demonstration</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ROI Calculator</h3>
              <p className="text-gray-600 leading-relaxed">Calculate potential savings</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">30-Day Trial</h3>
              <p className="text-gray-600 leading-relaxed">Risk-free pilot program</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Consultation</h3>
              <p className="text-gray-600 leading-relaxed">1-on-1 compliance review</p>
            </div>
          </div>

          {/* CTA Button - Consistent styling */}
          <div className="text-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
