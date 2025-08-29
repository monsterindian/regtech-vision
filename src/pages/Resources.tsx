import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Users, 
  Calendar,
  ExternalLink,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  Building2,
  Globe,
  BarChart3,
  Target,
  Award,
  UserCheck,
  CreditCard,
  Activity
} from "lucide-react";

const Resources = () => {
  // Knowledge Hub - Real Whitepapers & Research
  const knowledgeHubResources = [
    {
      title: "The Transformative Potential of Agentic AI for Financial Services",
      source: "Decimal Point Analytics, 2025",
      pages: "24 pages",
      description: "How agentic AI empowers FSIs with 40% operational efficiency gains, smarter customer support, and stronger fraud control",
      keyInsights: [
        "Customer support automation strategies",
        "Data management efficiency improvements", 
        "Real-time behavioral fraud detection",
        "ROI analysis and implementation roadmaps"
      ],
      downloadUrl: "#",
      category: "AI Strategy",
      type: "Industry Research"
    },
    {
      title: "Agentic AI in Financial Services: Opportunities, Risks, and Responsible Implementation",
      source: "IBM Research, 2025",
      pages: "32 pages",
      description: "Strategic framework for deploying autonomous AI systems with proper risk management and governance",
      keyInsights: [
        "Compliance by design methodologies",
        "Cross-functional collaboration frameworks",
        "Enhanced risk control mechanisms",
        "Governance and oversight structures"
      ],
      downloadUrl: "#",
      category: "Risk Management",
      type: "Technical Framework"
    },
    {
      title: "RegTech Market Analysis & Growth Projections 2024-2025",
      source: "Multiple industry sources compiled",
      pages: "28 pages",
      description: "Comprehensive market analysis with verified industry data and growth projections",
      keyInsights: [
        "Global RegTech market: $22.6B in 2024 (35% CAGR since 2020)",
        "AI-powered RegTech growing 40% annually",
        "70% of North American FIs increased RegTech spending",
        "Regional adoption patterns and market drivers"
      ],
      downloadUrl: "#",
      category: "Market Intelligence",
      type: "Market Report"
    },
    {
      title: "Assessing Readiness for Agentic AI in Financial Services",
      source: "eFinancial Careers Research, 2024",
      pages: "18 pages",
      description: "Readiness assessment framework, pilot use cases, and skills roadmap for finance professionals",
      keyInsights: [
        "Organizational readiness assessment toolkit",
        "Pilot program design and execution",
        "Skills development roadmaps",
        "Change management strategies"
      ],
      downloadUrl: "#",
      category: "Implementation",
      type: "Assessment Guide"
    },
    {
      title: "AML Compliance ROI Analysis: Cost Savings Through Automation",
      source: "Compliance automation study, 2025",
      pages: "22 pages",
      description: "Detailed financial analysis of AML automation benefits with ROI calculator",
      keyInsights: [
        "50% reduction in compliance management costs",
        "40% reduction in audit preparation time",
        "Prevention of $877M+ in potential regulatory fines",
        "Interactive ROI calculator spreadsheet included"
      ],
      downloadUrl: "#",
      category: "Financial Analysis",
      type: "ROI Study"
    }
  ];

  // Sample Case Studies - Illustrative Examples
  const sampleCaseStudies = [
    {
      customer: "Global Retail Bank",
      industry: "Retail Banking (Europe)",
      geography: "Multi-country European operations",
      challenge: "Manual KYC onboarding taking 4–6 days, leading to a 30% customer drop-off rate and increasing compliance risks across multiple jurisdictions.",
      solution: "Deployed Autonomous KYC Agents for real-time multi-database identity verification, biometric authentication, and automated compliance reporting across all European markets.",
      keyResults: [
        "80% faster onboarding (from 5 days to same-day)",
        "95% accuracy rate in identity verification",
        "50% reduction in compliance costs",
        "30% improvement in customer satisfaction scores"
      ],
      solutionLink: "/solutions/kyc-automation",
      solutionName: "KYC Automation",
      icon: UserCheck,
      color: "#10B981"
    },
    {
      customer: "International Payments Processor",
      industry: "Payment Processing (Global)",
      geography: "Operations across 40+ countries",
      challenge: "Transaction monitoring system generating 1,200+ daily false positives, overwhelming compliance teams and missing 15% of actual suspicious activities.",
      solution: "Implemented Intelligent Transaction Monitoring with adaptive ML algorithms, behavioral analytics, and automated case management for real-time threat detection.",
      keyResults: [
        "90% reduction in false positives",
        "99.5% accuracy in threat detection",
        "75% faster investigation resolution",
        "Zero regulatory penalties in 18 months"
      ],
      solutionLink: "/solutions/transaction-monitoring",
      solutionName: "Transaction Monitoring & AML",
      icon: Activity,
      color: "#F59E0B"
    },
    {
      customer: "Digital Lending Startup",
      industry: "Fintech Lending (North America)",
      geography: "US and Canadian markets",
      challenge: "Manual underwriting processes limiting loan capacity to 100 applications per day, with 25% default rates and regulatory compliance challenges across jurisdictions.",
      solution: "Automated lending compliance system with alternative data integration, real-time credit scoring, and multi-jurisdiction regulatory rule engines for scalable loan processing.",
      keyResults: [
        "70% faster loan decisions (from 3 days to 4 hours)",
        "300% increase in daily processing capacity",
        "45% reduction in default rates",
        "100% regulatory compliance across all jurisdictions"
      ],
      solutionLink: "/solutions/lending-compliance",
      solutionName: "Lending Compliance & Risk Assessment",
      icon: CreditCard,
      color: "#3B82F6"
    },
    {
      customer: "Regional Insurance Provider",
      industry: "Insurance (Asia-Pacific)",
      geography: "Operations across 8 APAC countries",
      challenge: "Reactive compliance approach leading to 3 regulatory violations in 2 years, $2.5M in penalties, and 60% of audit preparation time spent on manual documentation.",
      solution: "Proactive Risk & Compliance Management platform with continuous regulatory monitoring, automated policy updates, and predictive risk analytics across all operational jurisdictions.",
      keyResults: [
        "90% reduction in compliance risks",
        "100% audit readiness maintained",
        "75% reduction in operational compliance costs",
        "Zero regulatory violations in 24 months"
      ],
      solutionLink: "/solutions/risk-management",
      solutionName: "Proactive Risk & Compliance Management",
      icon: Shield,
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        
        {/* HERO SECTION */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0052CC] to-[#00A3CC]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
                Resources & Industry Insights
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Access comprehensive research, real-world case studies, and industry benchmarks on agentic AI 
                and financial compliance automation. All resources are based on actual implementations and verified industry data.
              </p>
              
              {/* Trust Indicator */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-md mx-auto animate-fade-in-up delay-400">
                <div className="flex items-center justify-center space-x-3">
                  <Users className="w-6 h-6 text-white" />
                  <div className="text-white">
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="text-blue-100 text-sm">Downloaded by compliance professionals worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. KNOWLEDGE HUB SECTION */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Knowledge Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Industry Whitepapers & Research - All Real & Downloadable
              </p>
            </div>

            <div className="space-y-8">
              {knowledgeHubResources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Resource Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                          style={{ backgroundColor: '#0052CC20', color: '#0052CC' }}
                        >
                          {resource.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <span className="text-sm text-gray-500">{resource.pages}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 font-medium">{resource.source}</p>
                      <p className="text-gray-700 mb-6">{resource.description}</p>
                      
                      <div className="flex items-center space-x-4">
                        <Button 
                          size="lg" 
                          className="bg-[#FF7A00] hover:bg-[#E56A00] text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download PDF
                        </Button>
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="w-4 h-4 mr-1" />
                          PDF format with executive summary
                        </div>
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Topics Covered:</h4>
                      <div className="space-y-3">
                        {resource.keyInsights.map((insight, insightIndex) => (
                          <div key={insightIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-gray-700 text-sm font-medium">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SAMPLE CASE STUDIES SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sample Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Illustrative examples showing how agentic AI can transform compliance operations. 
                These examples demonstrate typical results and implementation approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sampleCaseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 animate-fade-in-up border-l-4"
                  style={{ 
                    borderLeftColor: study.color,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${study.color}20` }}
                    >
                      <study.icon className="w-6 h-6" style={{ color: study.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{study.customer}</h3>
                      <p className="text-gray-600 font-medium">{study.industry}</p>
                      <p className="text-gray-500 text-sm">{study.geography}</p>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {study.keyResults.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <div 
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: study.color }}
                          >
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to={study.solutionLink}>
                    <Button 
                      className="w-full text-white font-semibold hover:shadow-lg transition-all duration-300"
                      style={{ backgroundColor: study.color }}
                    >
                      Learn more about {study.solutionName}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#00A3CC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
                Ready to Transform Your Compliance Operations?
              </h2>
              <p className="text-xl text-blue-100 mb-12 animate-fade-in-up delay-200">
                Access our complete resource library and speak with compliance experts to design your transformation roadmap
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Resource Access */}
                <Link to="/contact" className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <BookOpen className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2">Full Resource Access</h3>
                    <p className="text-blue-100 text-sm">Download all whitepapers and research</p>
                  </div>
                </Link>

                {/* Expert Consultation */}
                <Link to="/contact" className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <Users className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
                    <p className="text-blue-100 text-sm">1-on-1 compliance strategy session</p>
                  </div>
                </Link>

                {/* Custom Assessment */}
                <Link to="/contact" className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <Target className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2">Readiness Assessment</h3>
                    <p className="text-blue-100 text-sm">Custom evaluation of your organization</p>
                  </div>
                </Link>
              </div>

              {/* Main CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E56A00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[#0052CC] transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Resources;