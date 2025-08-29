import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/solutions/SolutionHero";
import ProblemStatement from "@/components/solutions/ProblemStatement";
import SolutionDetails from "@/components/solutions/SolutionDetails";
import CaseStudyCard from "@/components/solutions/CaseStudyCard";
import MetricsDisplay from "@/components/solutions/MetricsDisplay";
import TechnicalSpecs from "@/components/solutions/TechnicalSpecs";
import ComplianceFrameworks from "@/components/solutions/ComplianceFrameworks";
import GetStartedCTA from "@/components/solutions/GetStartedCTA";
import { CreditCard, TrendingUp, Shield, Brain, Database, Code, Settings, Lock } from "lucide-react";

const LendingCompliance = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Lending Compliance", href: "/solutions/lending-compliance" }
  ];

  const problems = [
    "Manual underwriting processes take 7-14 days, causing customer frustration and lost opportunities",
    "High default rates due to inadequate risk assessment and limited data sources",
    "Complex regulatory requirements across multiple jurisdictions creating compliance gaps",
    "Inability to scale lending operations without proportional increase in operational costs",
    "Difficulty in detecting fraudulent applications and synthetic identity fraud"
  ];

  const problemStats = [
    { value: "12%", label: "Average default rate with traditional underwriting" },
    { value: "14 days", label: "Average loan processing time" },
    { value: "$500", label: "Cost per loan application processed" }
  ];

  const features = [
    {
      title: "Multi-Agent Credit Assessment",
      description: "Specialized AI agents analyze credit history, alternative data, and behavioral patterns to provide comprehensive risk scoring in real-time.",
      icon: Brain
    },
    {
      title: "Alternative Data Analysis",
      description: "Leverage non-traditional data sources including social media, utility payments, and transaction patterns for more accurate risk assessment.",
      icon: TrendingUp
    },
    {
      title: "Real-time Fraud Detection",
      description: "Advanced machine learning models detect synthetic identities, application fraud, and suspicious patterns before loan approval.",
      icon: Shield
    },
    {
      title: "Automated Compliance Checking",
      description: "Continuous monitoring ensures all lending decisions comply with FCRA, ECOA, Fair Lending, and local regulatory requirements.",
      icon: CreditCard
    }
  ];

  const metrics = [
    {
      value: "70%",
      label: "Faster Decisions",
      description: "Reduce loan processing time from weeks to hours"
    },
    {
      value: "45%",
      label: "Lower Defaults",
      description: "Significant reduction in default rates through better risk assessment"
    },
    {
      value: "98.5%",
      label: "Compliance Rate",
      description: "Maintain regulatory compliance across all jurisdictions"
    }
  ];

  const technicalSpecs = [
    {
      category: "Credit Scoring Models",
      items: [
        "Advanced ML algorithms with 500+ variables",
        "Alternative data integration and analysis",
        "Real-time credit bureau API connections",
        "Behavioral pattern recognition systems"
      ],
      icon: Brain
    },
    {
      category: "Risk Assessment",
      items: [
        "Multi-layered fraud detection algorithms",
        "Synthetic identity detection systems",
        "Income and employment verification",
        "Debt-to-income ratio optimization"
      ],
      icon: Shield
    },
    {
      category: "Data Processing",
      items: [
        "Real-time data aggregation from 100+ sources",
        "Bank statement analysis and categorization",
        "Social media and digital footprint analysis",
        "Open banking API integrations"
      ],
      icon: Database
    },
    {
      category: "Compliance Engine",
      items: [
        "Automated regulatory rule enforcement",
        "Fair lending compliance monitoring",
        "Audit trail generation and reporting",
        "Regulatory change management system"
      ],
      icon: Settings
    }
  ];

  const complianceFrameworks = [
    {
      name: "Basel III Requirements",
      description: "Advanced capital adequacy and risk management frameworks for international banking operations.",
      requirements: [
        "Capital conservation buffer maintenance",
        "Liquidity coverage ratio compliance",
        "Credit risk assessment standards",
        "Operational risk management protocols"
      ]
    },
    {
      name: "FCRA Compliance",
      description: "Fair Credit Reporting Act compliance ensuring proper use and handling of consumer credit information.",
      requirements: [
        "Permissible purpose verification",
        "Adverse action notice automation",
        "Consumer rights notification",
        "Data accuracy and dispute handling"
      ]
    },
    {
      name: "ECOA & Fair Lending",
      description: "Equal Credit Opportunity Act compliance preventing discrimination in lending practices.",
      requirements: [
        "Prohibited basis monitoring",
        "Disparate impact analysis",
        "Fair lending statistical testing",
        "Corrective action implementation"
      ]
    },
    {
      name: "State Lending Laws",
      description: "Automated compliance with varying state and local lending regulations across jurisdictions.",
      requirements: [
        "Interest rate cap enforcement",
        "Licensing requirement verification",
        "State-specific disclosure requirements",
        "Consumer protection law compliance"
      ]
    }
  ];

  const ctaBenefits = [
    "45-day implementation with comprehensive staff training",
    "Integration with existing loan origination systems",
    "24/7 monitoring with real-time compliance alerts",
    "Scalable architecture supporting high-volume lending",
    "Comprehensive reporting and audit trail capabilities"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionHero
          title="Intelligent Lending & Credit Assessment"
          description="Transform your lending operations with AI agents that deliver faster, more accurate credit decisions while maintaining strict regulatory compliance."
          backgroundColor="#3B82F6"
          breadcrumbs={breadcrumbs}
        />
        
        <ProblemStatement
          title="The Lending Challenge"
          problems={problems}
          stats={problemStats}
        />
        
        <SolutionDetails
          title="How Our AI Agents Solve It"
          description="Our intelligent lending agents combine advanced credit scoring, alternative data analysis, and automated compliance to revolutionize your lending process."
          features={features}
          accentColor="#3B82F6"
        />
        
        <CaseStudyCard
          title="Success Story"
          company="Digital Fintech Lender"
          industry="Financial Technology & Lending"
          challenge="A fast-growing fintech needed to scale their lending operations 10x while maintaining low default rates and regulatory compliance. Manual processes were limiting growth and increasing operational costs."
          solution="We deployed our multi-agent lending platform with advanced credit scoring, alternative data analysis, and automated compliance monitoring. The system integrated with their existing technology stack and provided real-time decision making."
          results={[
            "Scaled loan processing from 100 to 10,000 applications per day",
            "Reduced default rates from 12% to 6.8%",
            "Decreased processing time from 14 days to 4 hours",
            "Achieved 99.2% regulatory compliance across 25 states",
            "Increased loan approval rates by 28% through better risk assessment"
          ]}
          accentColor="#3B82F6"
        />
        
        <MetricsDisplay
          title="Lending Performance Metrics"
          subtitle="Proven results from fintech and traditional lenders using our platform"
          metrics={metrics}
          accentColor="#3B82F6"
        />
        
        <TechnicalSpecs
          title="Technical Capabilities"
          specs={technicalSpecs}
          accentColor="#3B82F6"
        />
        
        <ComplianceFrameworks
          title="Regulatory Compliance"
          frameworks={complianceFrameworks}
          accentColor="#3B82F6"
        />
        
        <GetStartedCTA
          title="Ready to Scale Your Lending Operations?"
          description="Join innovative lenders who have transformed their operations with our intelligent lending platform. Start with a personalized assessment of your current processes."
          accentColor="#3B82F6"
          benefits={ctaBenefits}
        />
      </main>
      <Footer />
    </div>
  );
};

export default LendingCompliance;
