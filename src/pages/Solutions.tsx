import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import StatsSection from "@/components/shared/StatsSection";
import CTASection from "@/components/shared/CTASection";
import { TestimonialsSection } from "@/components/shared/TestimonialCard";
import { FeaturesSection } from "@/components/shared/FeatureCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AlertTriangle, 
  UserCheck, 
  CreditCard, 
  Activity, 
  Shield, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Calendar
} from "lucide-react";

const Solutions = () => {
  // 1. PROBLEM - Industry Pain Points
  const industryProblems = [
    {
      icon: AlertTriangle,
      title: "Manual KYC Processes",
      description: "5-7 day onboarding times with 40% customer abandonment rates due to lengthy manual verification processes.",
      impact: "High abandonment rates, compliance risks, operational costs"
    },
    {
      icon: AlertTriangle,
      title: "False Positive Overload",
      description: "Transaction monitoring systems generating 1000+ daily false positives, overwhelming compliance teams.",
      impact: "Missed real threats, team burnout, regulatory exposure"
    },
    {
      icon: AlertTriangle,
      title: "Regulatory Complexity",
      description: "Managing compliance across multiple jurisdictions with constantly changing regulations and manual processes.",
      impact: "Compliance violations, penalties, operational inefficiency"
    },
    {
      icon: AlertTriangle,
      title: "Scalability Bottlenecks",
      description: "Manual processes that can't scale with business growth, creating operational constraints and delays.",
      impact: "Limited growth, increased costs, competitive disadvantage"
    }
  ];

  // 2. SOLUTION - Agentic AI Capabilities
  const agenticSolutions = [
    {
      icon: UserCheck,
      title: "Autonomous KYC Agents",
      description: "AI agents that independently verify identities, assess risk, and ensure compliance in real-time without human intervention.",
      benefits: [
        "85% faster onboarding process",
        "99.2% accuracy in identity verification", 
        "Real-time fraud detection",
        "Automatic compliance checking"
      ],
      tags: ["Identity Verification", "Risk Assessment", "Fraud Detection"],
      link: { text: "Learn More", href: "/platform" }
    },
    {
      icon: Activity,
      title: "Intelligent Transaction Monitoring",
      description: "Adaptive AI agents that learn transaction patterns and autonomously detect suspicious activities with minimal false positives.",
      benefits: [
        "90% reduction in false positives",
        "99.5% true threat detection rate",
        "Continuous pattern learning",
        "Automated alert prioritization"
      ],
      tags: ["AML", "Pattern Recognition", "Real-time Monitoring"],
      link: { text: "Learn More", href: "/platform" }
    },
    {
      icon: CreditCard,
      title: "Lending Compliance Automation",
      description: "Multi-agent systems that handle loan underwriting, risk assessment, and regulatory compliance across jurisdictions.",
      benefits: [
        "70% faster loan decisions",
        "45% lower default rates",
        "Multi-jurisdiction compliance",
        "Automated documentation"
      ],
      tags: ["Underwriting", "Risk Management", "Regulatory Compliance"],
      link: { text: "Learn More", href: "/platform" }
    },
    {
      icon: Shield,
      title: "Proactive Risk Management",
      description: "Autonomous agents that continuously monitor regulatory changes and adapt compliance policies in real-time.",
      benefits: [
        "Automatic regulatory updates",
        "Predictive risk analytics",
        "Policy alignment automation",
        "Continuous compliance monitoring"
      ],
      tags: ["Regulatory Monitoring", "Policy Management", "Risk Analytics"],
      link: { text: "Learn More", href: "/platform" }
    }
  ];

  // 3. BENEFITS - Quantified Business Impact
  const businessBenefits = [
    { metric: "75%", label: "Cost Reduction", description: "Average operational cost savings within 12 months", icon: DollarSign },
    { metric: "85%", label: "Faster Processing", description: "Reduction in compliance workflow processing times", icon: Clock },
    { metric: "90%", label: "Risk Reduction", description: "Decrease in compliance violations and penalties", icon: Shield },
    { metric: "300%", label: "ROI Achievement", description: "Average return on investment within 18 months", icon: TrendingUp }
  ];

  // 4. PROOF - Client Success Stories
  const successStories = [
    {
      quote: "Gaigentic AI transformed our KYC operations completely. We reduced processing time by 85% while improving accuracy to 99.2%. Customer satisfaction increased dramatically.",
      author: "Sarah Johnson",
      title: "Chief Compliance Officer",
      company: "Global Investment Bank",
      industry: "Investment Banking",
      rating: 5
    },
    {
      quote: "The autonomous transaction monitoring eliminated our false positive problem. We went from 1000+ daily alerts to just 50 high-priority, accurate detections.",
      author: "Michael Chen",
      title: "Head of AML",
      company: "International Insurance Group", 
      industry: "Insurance",
      rating: 5
    },
    {
      quote: "Implementation was seamless and ROI was evident within the first quarter. The platform scales perfectly with our rapid growth in lending operations.",
      author: "Lisa Rodriguez",
      title: "CTO",
      company: "Digital Lending Platform",
      industry: "Fintech",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <PageHero
          title="Solve Compliance Challenges with Agentic AI"
          subtitle="Transform your financial compliance operations from manual, error-prone processes to autonomous, intelligent systems that scale with your business."
          description="Discover how leading financial institutions are eliminating compliance bottlenecks and achieving operational excellence."
        />

        {/* 1. PROBLEM - Industry Pain Points */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                The Compliance Challenge
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Financial institutions face mounting pressure from regulatory complexity, 
                operational inefficiency, and the need to scale compliance operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryProblems.map((problem, index) => (
                <Card key={index} className="bg-white shadow-sm border-0 border-l-4 border-l-red-500">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                        <problem.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {problem.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{problem.description}</p>
                    <div className="text-sm text-red-600 font-medium">
                      Impact: {problem.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SOLUTION - Agentic AI Capabilities */}
        <FeaturesSection
          title="The Agentic AI Solution"
          subtitle="Autonomous AI agents that work independently to handle complex compliance tasks, learn from data, and adapt to changing regulations in real-time."
          features={agenticSolutions}
          variant="detailed"
          columns={2}
          backgroundVariant="white"
        />

        {/* 3. BENEFITS - Quantified Business Impact */}
        <StatsSection
          title="Measurable Business Impact"
          subtitle="Our clients consistently achieve significant ROI through reduced costs, improved efficiency, and enhanced regulatory compliance."
          stats={businessBenefits}
          columns={4}
          backgroundVariant="gray"
          size="lg"
        />

        {/* 4. PROOF - Client Success Stories */}
        <TestimonialsSection
          title="Proven Results Across BFSI"
          subtitle="Leading financial institutions trust our agentic AI platform to transform their compliance operations."
          testimonials={successStories}
          variant="grid"
          backgroundVariant="white"
        />

        {/* Additional Proof - Industry Recognition */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Industry Recognition & Trust
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-sm border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Financial Institutions</div>
                  <div className="text-sm text-gray-600">Trust our platform globally</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$50M</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Series B Funding</div>
                  <div className="text-sm text-gray-600">Led by top-tier investors</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Industry Awards</div>
                  <div className="text-sm text-gray-600">RegTech excellence recognition</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. ACTION - Clear Next Steps */}
        <CTASection
          title="Ready to Transform Your Compliance Operations?"
          subtitle="Join 500+ financial institutions that have revolutionized their compliance with autonomous AI agents. See our solutions in action with a personalized demo."
          buttons={[
            { text: "Request Solutions Demo", variant: 'primary', icon: ArrowRight, href: '/contact' },
            { text: "Speak with Solutions Expert", variant: 'secondary', href: '/contact' }
          ]}
          benefits={[
            { text: "30-minute personalized demo" },
            { text: "Custom ROI analysis" },
            { text: "Implementation roadmap" }
          ]}
          backgroundVariant="blue"
          size="lg"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;