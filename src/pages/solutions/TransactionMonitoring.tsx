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
import { Activity, Eye, Network, AlertTriangle, Database, Code, Settings, Lock } from "lucide-react";

const TransactionMonitoring = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Transaction Monitoring", href: "/solutions/transaction-monitoring" }
  ];

  const problems = [
    "Traditional rule-based systems generate 95% false positives, overwhelming compliance teams",
    "Sophisticated money laundering schemes evade detection through complex transaction patterns",
    "Manual investigation of alerts takes 4-6 hours per case, creating backlogs",
    "Inability to detect emerging threats and new typologies in real-time",
    "High operational costs with teams of analysts working around the clock"
  ];

  const problemStats = [
    { value: "95%", label: "False positive rate with traditional systems" },
    { value: "6 hours", label: "Average time to investigate each alert" },
    { value: "$2M", label: "Annual cost of compliance team operations" }
  ];

  const features = [
    {
      title: "Adaptive Pattern Recognition",
      description: "AI agents continuously learn from transaction patterns, adapting to new money laundering techniques and reducing false positives by 90%.",
      icon: Network
    },
    {
      title: "Real-time Behavioral Analytics",
      description: "Monitor customer behavior patterns and detect anomalies in real-time, identifying suspicious activities within milliseconds of occurrence.",
      icon: Eye
    },
    {
      title: "Automated SAR Generation",
      description: "Intelligent agents automatically generate Suspicious Activity Reports with comprehensive evidence packages and regulatory-compliant documentation.",
      icon: AlertTriangle
    },
    {
      title: "Network Analysis & Visualization",
      description: "Advanced graph analytics reveal complex money laundering networks and relationships between entities across multiple transactions.",
      icon: Activity
    }
  ];

  const metrics = [
    {
      value: "95%",
      label: "Detection Rate",
      description: "Industry-leading accuracy in identifying suspicious activities"
    },
    {
      value: "80%",
      label: "False Positive Reduction",
      description: "Dramatic reduction in false alerts and investigation time"
    },
    {
      value: "<1sec",
      label: "Response Time",
      description: "Real-time detection and alerting capabilities"
    }
  ];

  const technicalSpecs = [
    {
      category: "Stream Processing",
      items: [
        "Real-time transaction processing at scale",
        "Apache Kafka for high-throughput messaging",
        "Complex event processing engines",
        "Millisecond-level latency monitoring"
      ],
      icon: Code
    },
    {
      category: "Machine Learning",
      items: [
        "Unsupervised anomaly detection algorithms",
        "Deep learning for pattern recognition",
        "Ensemble models for improved accuracy",
        "Continuous model retraining and optimization"
      ],
      icon: Network
    },
    {
      category: "Data Analytics",
      items: [
        "Graph database for network analysis",
        "Time-series analysis for trend detection",
        "Statistical modeling for risk scoring",
        "Big data processing with Spark and Hadoop"
      ],
      icon: Database
    },
    {
      category: "Integration & APIs",
      items: [
        "RESTful APIs for system integration",
        "Real-time webhook notifications",
        "SWIFT message processing",
        "Core banking system connectors"
      ],
      icon: Settings
    }
  ];

  const complianceFrameworks = [
    {
      name: "AML Regulations",
      description: "Comprehensive anti-money laundering compliance covering detection, reporting, and record-keeping requirements.",
      requirements: [
        "Suspicious activity monitoring and reporting",
        "Customer due diligence and enhanced due diligence",
        "Record keeping and audit trail maintenance",
        "Training and awareness program support"
      ]
    },
    {
      name: "Bank Secrecy Act (BSA)",
      description: "Full compliance with BSA requirements for financial institutions operating in the United States.",
      requirements: [
        "Currency transaction reporting (CTR)",
        "Suspicious activity reporting (SAR)",
        "Customer identification program (CIP)",
        "Information sharing and cooperation"
      ]
    },
    {
      name: "FATF Recommendations",
      description: "Implementation of Financial Action Task Force guidelines for combating money laundering and terrorist financing.",
      requirements: [
        "Risk-based approach implementation",
        "Customer due diligence measures",
        "Record keeping and monitoring",
        "International cooperation protocols"
      ]
    },
    {
      name: "Sanctions Screening",
      description: "Real-time screening against global sanctions lists and watchlists for comprehensive compliance.",
      requirements: [
        "OFAC sanctions list screening",
        "EU and UN sanctions compliance",
        "PEP and adverse media monitoring",
        "Real-time list updates and matching"
      ]
    }
  ];

  const ctaBenefits = [
    "60-day implementation with full system integration",
    "Real-time monitoring with sub-second alert generation",
    "Comprehensive training for compliance and IT teams",
    "24/7 support with guaranteed 99.9% uptime SLA",
    "Scalable cloud infrastructure supporting millions of transactions"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionHero
          title="Real-Time Transaction Monitoring & AML"
          description="Deploy intelligent agents that monitor transactions in real-time, detect sophisticated money laundering schemes, and dramatically reduce false positives."
          backgroundColor="#F59E0B"
          breadcrumbs={breadcrumbs}
        />
        
        <ProblemStatement
          title="The Transaction Monitoring Challenge"
          problems={problems}
          stats={problemStats}
        />
        
        <SolutionDetails
          title="How Our AI Agents Solve It"
          description="Our advanced transaction monitoring agents use machine learning and behavioral analytics to detect suspicious activities with unprecedented accuracy."
          features={features}
          accentColor="#F59E0B"
        />
        
        <CaseStudyCard
          title="Success Story"
          company="Regional Banking Network"
          industry="Commercial Banking"
          challenge="A regional bank with $50B in assets was struggling with 95% false positive rates from their legacy transaction monitoring system. Compliance costs were escalating while sophisticated threats went undetected."
          solution="We implemented our AI-powered transaction monitoring platform with real-time behavioral analytics, network analysis, and adaptive pattern recognition. The system integrated with their core banking platform and existing compliance workflows."
          results={[
            "Reduced false positives from 95% to 15% (80% improvement)",
            "Increased suspicious activity detection by 300%",
            "Decreased investigation time from 6 hours to 45 minutes per case",
            "Achieved 100% regulatory compliance across all examinations",
            "Saved $1.8M annually in compliance operational costs"
          ]}
          accentColor="#F59E0B"
        />
        
        <MetricsDisplay
          title="Transaction Monitoring Metrics"
          subtitle="Real performance data from banks using our AI-powered monitoring platform"
          metrics={metrics}
          accentColor="#F59E0B"
        />
        
        <TechnicalSpecs
          title="Technical Capabilities"
          specs={technicalSpecs}
          accentColor="#F59E0B"
        />
        
        <ComplianceFrameworks
          title="Regulatory Compliance"
          frameworks={complianceFrameworks}
          accentColor="#F59E0B"
        />
        
        <GetStartedCTA
          title="Ready to Transform Your AML Operations?"
          description="Join leading banks who have revolutionized their transaction monitoring with our AI-powered platform. Reduce false positives while improving detection rates."
          accentColor="#F59E0B"
          benefits={ctaBenefits}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TransactionMonitoring;
