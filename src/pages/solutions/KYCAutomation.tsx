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
import { UserCheck, Eye, Shield, Zap, Database, Code, Settings, Lock } from "lucide-react";

const KYCAutomation = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "KYC Automation", href: "/solutions/kyc-automation" }
  ];

  const problems = [
    "Manual document verification takes 3-5 business days, leading to 40% customer abandonment",
    "High operational costs with teams of analysts reviewing documents around the clock",
    "Inconsistent verification standards across different regions and compliance officers",
    "Difficulty detecting sophisticated document fraud and identity theft attempts",
    "Regulatory compliance gaps due to human error and outdated verification processes"
  ];

  const problemStats = [
    { value: "40%", label: "Customer abandonment due to slow onboarding" },
    { value: "5 days", label: "Average verification time for complex cases" },
    { value: "$150", label: "Cost per manual KYC verification" }
  ];

  const features = [
    {
      title: "Real-time Document Verification",
      description: "AI-powered OCR and document analysis that verifies identity documents in seconds, detecting forgeries and alterations with 99.8% accuracy.",
      icon: Eye
    },
    {
      title: "Multi-Database Cross-Referencing",
      description: "Simultaneous checks against global watchlists, sanctions lists, PEP databases, and adverse media sources for comprehensive risk assessment.",
      icon: Database
    },
    {
      title: "Biometric Identity Matching",
      description: "Advanced facial recognition and liveness detection to ensure the person presenting the document is the legitimate owner.",
      icon: UserCheck
    },
    {
      title: "Continuous Compliance Monitoring",
      description: "Ongoing monitoring of customer profiles against updated watchlists and regulatory changes with automated alerts and reporting.",
      icon: Shield
    }
  ];

  const metrics = [
    {
      value: "85%",
      label: "Faster Processing",
      description: "Reduce KYC verification time from days to minutes"
    },
    {
      value: "99.2%",
      label: "Accuracy Rate",
      description: "Industry-leading precision in document verification"
    },
    {
      value: "60%",
      label: "Cost Reduction",
      description: "Lower operational costs through automation"
    }
  ];

  const technicalSpecs = [
    {
      category: "Document Processing",
      items: [
        "Advanced OCR with 180+ document types support",
        "Real-time fraud detection algorithms",
        "Multi-language document processing",
        "Automated data extraction and validation"
      ],
      icon: Code
    },
    {
      category: "Biometric Verification",
      items: [
        "3D facial recognition technology",
        "Liveness detection and anti-spoofing",
        "Voice pattern analysis (optional)",
        "Behavioral biometrics monitoring"
      ],
      icon: Eye
    },
    {
      category: "Data Integration",
      items: [
        "Real-time API connections to 50+ databases",
        "Global sanctions and watchlist screening",
        "PEP and adverse media monitoring",
        "Credit bureau and financial data access"
      ],
      icon: Database
    },
    {
      category: "Security & Privacy",
      items: [
        "End-to-end encryption (AES-256)",
        "Zero-knowledge architecture",
        "GDPR-compliant data handling",
        "SOC 2 Type II certified infrastructure"
      ],
      icon: Lock
    }
  ];

  const complianceFrameworks = [
    {
      name: "KYC (Know Your Customer)",
      description: "Comprehensive customer identification and verification processes meeting global KYC standards.",
      requirements: [
        "Customer identification program (CIP)",
        "Customer due diligence (CDD)",
        "Enhanced due diligence (EDD)",
        "Ongoing monitoring requirements"
      ]
    },
    {
      name: "AML (Anti-Money Laundering)",
      description: "Advanced screening and monitoring capabilities to detect and prevent money laundering activities.",
      requirements: [
        "Sanctions list screening",
        "PEP identification and monitoring",
        "Suspicious activity detection",
        "Transaction pattern analysis"
      ]
    },
    {
      name: "GDPR Compliance",
      description: "Privacy-by-design architecture ensuring full compliance with European data protection regulations.",
      requirements: [
        "Data minimization principles",
        "Right to be forgotten implementation",
        "Consent management systems",
        "Data breach notification protocols"
      ]
    },
    {
      name: "CDD Requirements",
      description: "Automated customer due diligence processes meeting regulatory standards across jurisdictions.",
      requirements: [
        "Risk-based customer profiling",
        "Beneficial ownership identification",
        "Source of funds verification",
        "Ongoing relationship monitoring"
      ]
    }
  ];

  const ctaBenefits = [
    "30-day implementation with full training and support",
    "99.9% uptime SLA with 24/7 technical support",
    "Seamless integration with existing systems via APIs",
    "Comprehensive compliance reporting and audit trails",
    "Scalable architecture supporting millions of verifications"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionHero
          title="Autonomous KYC & Identity Verification"
          description="Deploy AI agents that transform customer onboarding with instant, accurate identity verification while maintaining the highest compliance standards."
          backgroundColor="#10B981"
          breadcrumbs={breadcrumbs}
        />
        
        <ProblemStatement
          title="The KYC Challenge"
          problems={problems}
          stats={problemStats}
        />
        
        <SolutionDetails
          title="How Our AI Agents Solve It"
          description="Our autonomous KYC agents combine advanced AI technologies to deliver instant, accurate, and compliant identity verification at scale."
          features={features}
          accentColor="#10B981"
        />
        
        <CaseStudyCard
          title="Success Story"
          company="Global Insurance Leader"
          industry="Insurance & Financial Services"
          challenge="A leading insurance company was losing 40% of potential customers due to a 5-day manual KYC process. High operational costs and compliance risks were impacting their growth in emerging markets."
          solution="We implemented our autonomous KYC agents with real-time document verification, biometric matching, and continuous compliance monitoring. The solution integrated seamlessly with their existing CRM and policy management systems."
          results={[
            "Reduced onboarding time from 5 days to 2 hours (95% improvement)",
            "Increased customer conversion rate by 35%",
            "Lowered KYC operational costs by 70%",
            "Achieved 100% regulatory compliance across 15 countries",
            "Detected 23% more fraudulent applications than manual processes"
          ]}
          accentColor="#10B981"
        />
        
        <MetricsDisplay
          title="Proven Performance Metrics"
          subtitle="Real results from financial institutions using our KYC automation platform"
          metrics={metrics}
          accentColor="#10B981"
        />
        
        <TechnicalSpecs
          title="Technical Capabilities"
          specs={technicalSpecs}
          accentColor="#10B981"
        />
        
        <ComplianceFrameworks
          title="Regulatory Compliance"
          frameworks={complianceFrameworks}
          accentColor="#10B981"
        />
        
        <GetStartedCTA
          title="Ready to Transform Your KYC Process?"
          description="Join leading financial institutions who have revolutionized their customer onboarding with our autonomous KYC agents. Get started with a personalized demo today."
          accentColor="#10B981"
          benefits={ctaBenefits}
        />
      </main>
      <Footer />
    </div>
  );
};

export default KYCAutomation;
