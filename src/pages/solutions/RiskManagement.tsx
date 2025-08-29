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
import { Shield, TrendingUp, AlertTriangle, FileText, Database, Code, Settings, Lock } from "lucide-react";

const RiskManagement = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Risk Management", href: "/solutions/risk-management" }
  ];

  const problems = [
    "Manual policy updates take weeks to implement across the organization, creating compliance gaps",
    "Reactive approach to regulatory changes results in penalties and audit findings",
    "Siloed risk management systems provide incomplete visibility into enterprise-wide risks",
    "Time-consuming audit preparation processes strain resources and delay business operations",
    "Difficulty in quantifying and predicting operational and compliance risks"
  ];

  const problemStats = [
    { value: "3 weeks", label: "Average time to update policies organization-wide" },
    { value: "$5M", label: "Average annual regulatory penalty costs" },
    { value: "40%", label: "Of audit findings due to outdated policies" }
  ];

  const features = [
    {
      title: "Regulatory Change Detection",
      description: "AI agents continuously monitor regulatory sources worldwide, automatically identifying changes that impact your organization and assessing their implications.",
      icon: AlertTriangle
    },
    {
      title: "Automated Policy Management",
      description: "Intelligent policy engines automatically update procedures, controls, and documentation based on regulatory changes and business requirements.",
      icon: FileText
    },
    {
      title: "Predictive Risk Analytics",
      description: "Advanced analytics predict potential compliance failures and operational risks before they occur, enabling proactive risk mitigation.",
      icon: TrendingUp
    },
    {
      title: "Continuous Audit Readiness",
      description: "Maintain perpetual audit readiness with automated evidence collection, control testing, and comprehensive audit trail generation.",
      icon: Shield
    }
  ];

  const metrics = [
    {
      value: "90%",
      label: "Risk Reduction",
      description: "Significant reduction in compliance and operational risks"
    },
    {
      value: "75%",
      label: "Operational Savings",
      description: "Lower costs through automation and efficiency gains"
    },
    {
      value: "24/7",
      label: "Real-time Monitoring",
      description: "Continuous risk monitoring and alerting capabilities"
    }
  ];

  const technicalSpecs = [
    {
      category: "Regulatory Intelligence",
      items: [
        "AI-powered regulatory change detection",
        "Natural language processing for rule interpretation",
        "Global regulatory database integration",
        "Impact assessment and prioritization algorithms"
      ],
      icon: AlertTriangle
    },
    {
      category: "Policy Automation",
      items: [
        "Automated policy generation and updates",
        "Version control and change management",
        "Workflow automation for approvals",
        "Multi-language policy translation"
      ],
      icon: FileText
    },
    {
      category: "Risk Analytics",
      items: [
        "Predictive risk modeling and simulation",
        "Monte Carlo risk analysis",
        "Scenario planning and stress testing",
        "Real-time risk dashboard and reporting"
      ],
      icon: TrendingUp
    },
    {
      category: "Audit & Controls",
      items: [
        "Automated control testing and validation",
        "Evidence collection and documentation",
        "Audit trail generation and maintenance",
        "Compliance reporting and attestation"
      ],
      icon: Shield
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOX Compliance",
      description: "Comprehensive Sarbanes-Oxley compliance with automated controls testing and financial reporting oversight.",
      requirements: [
        "Internal control over financial reporting (ICFR)",
        "Management assessment and certification",
        "External auditor attestation support",
        "Deficiency remediation tracking"
      ]
    },
    {
      name: "COSO Framework",
      description: "Implementation of COSO internal control framework with automated monitoring and assessment capabilities.",
      requirements: [
        "Control environment assessment",
        "Risk assessment and response",
        "Control activities monitoring",
        "Information and communication systems"
      ]
    },
    {
      name: "ISO 27001",
      description: "Information security management system compliance with automated security controls and risk assessment.",
      requirements: [
        "Information security policy management",
        "Risk assessment and treatment",
        "Security controls implementation",
        "Continuous improvement processes"
      ]
    },
    {
      name: "Basel III",
      description: "Advanced capital adequacy and risk management compliance for banking institutions.",
      requirements: [
        "Capital conservation buffer maintenance",
        "Liquidity coverage ratio monitoring",
        "Operational risk management",
        "Stress testing and scenario analysis"
      ]
    }
  ];

  const ctaBenefits = [
    "90-day comprehensive implementation program",
    "Integration with existing GRC and ERP systems",
    "Dedicated risk management consultant for 6 months",
    "Continuous regulatory updates and system enhancements",
    "Enterprise-grade security with role-based access controls"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionHero
          title="Continuous Risk & Compliance Management"
          description="Deploy intelligent agents that proactively manage enterprise risk, automate compliance processes, and maintain perpetual audit readiness."
          backgroundColor="#8B5CF6"
          breadcrumbs={breadcrumbs}
        />
        
        <ProblemStatement
          title="The Risk Management Challenge"
          problems={problems}
          stats={problemStats}
        />
        
        <SolutionDetails
          title="How Our AI Agents Solve It"
          description="Our comprehensive risk management platform combines regulatory intelligence, automated policy management, and predictive analytics for enterprise-wide risk control."
          features={features}
          accentColor="#8B5CF6"
        />
        
        <CaseStudyCard
          title="Success Story"
          company="Global Financial Institution"
          industry="Investment Banking & Asset Management"
          challenge="A global bank with operations in 40 countries struggled to maintain compliance across multiple regulatory jurisdictions. Manual processes led to policy inconsistencies, audit findings, and regulatory penalties."
          solution="We implemented our comprehensive risk management platform with automated regulatory monitoring, policy management, and continuous audit readiness capabilities. The system integrated with their existing GRC infrastructure and business applications."
          results={[
            "Achieved 100% audit readiness across all business units",
            "Reduced regulatory penalties by 95% through proactive compliance",
            "Decreased policy update time from 3 weeks to 2 days",
            "Eliminated 85% of manual risk assessment processes",
            "Saved $3.2M annually in compliance and audit costs"
          ]}
          accentColor="#8B5CF6"
        />
        
        <MetricsDisplay
          title="Risk Management Metrics"
          subtitle="Proven results from global financial institutions using our risk management platform"
          metrics={metrics}
          accentColor="#8B5CF6"
        />
        
        <TechnicalSpecs
          title="Technical Capabilities"
          specs={technicalSpecs}
          accentColor="#8B5CF6"
        />
        
        <ComplianceFrameworks
          title="Regulatory Compliance"
          frameworks={complianceFrameworks}
          accentColor="#8B5CF6"
        />
        
        <GetStartedCTA
          title="Ready to Transform Your Risk Management?"
          description="Join global financial institutions who have revolutionized their risk and compliance operations. Achieve continuous compliance and audit readiness with our AI-powered platform."
          accentColor="#8B5CF6"
          benefits={ctaBenefits}
        />
      </main>
      <Footer />
    </div>
  );
};

export default RiskManagement;
