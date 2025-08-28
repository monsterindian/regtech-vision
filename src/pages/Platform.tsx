import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import StatsSection from "@/components/shared/StatsSection";
import CTASection from "@/components/shared/CTASection";
import { FeaturesSection } from "@/components/shared/FeatureCard";
import AgenticArchitecture from "@/components/AgenticArchitecture";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle,
  Lock,
  Server,
  Globe,
  Code,
  FileCheck,
  Award,
  ArrowRight,
  Calendar
} from "lucide-react";

const Platform = () => {
  // 1. OVERVIEW - Platform Performance Metrics
  const platformMetrics = [
    { metric: "<100ms", label: "API Response Time", description: "Sub-second processing for real-time compliance", icon: Zap },
    { metric: "99.99%", label: "System Uptime", description: "Enterprise-grade reliability and availability", icon: CheckCircle },
    { metric: "10M+", label: "Transactions/Day", description: "Massive scale processing capability", icon: BarChart3 },
    { metric: "50+", label: "Global Regions", description: "Worldwide deployment and data residency", icon: Globe }
  ];

  // 2. ARCHITECTURE is handled by the existing AgenticArchitecture component

  // 3. FEATURES - Core Platform Capabilities
  const platformFeatures = [
    {
      icon: Cloud,
      title: "Multi-Cloud Deployment",
      description: "Deploy across AWS, Azure, and Google Cloud with automatic failover and load balancing for maximum reliability.",
      benefits: [
        "99.99% uptime guarantee",
        "Automatic scaling based on demand",
        "Global data residency compliance",
        "Disaster recovery built-in"
      ],
      tags: ["AWS", "Azure", "GCP", "Kubernetes"],
      metrics: [
        { value: "3", label: "Cloud Providers" },
        { value: "50+", label: "Global Regions" }
      ]
    },
    {
      icon: Database,
      title: "Real-Time Data Processing",
      description: "Process millions of transactions in real-time with advanced stream processing and vector databases for AI models.",
      benefits: [
        "Sub-second transaction analysis",
        "Real-time fraud detection",
        "Continuous data ingestion",
        "Advanced analytics capabilities"
      ],
      tags: ["Apache Kafka", "Vector DB", "Stream Processing"],
      metrics: [
        { value: "<100ms", label: "Processing Time" },
        { value: "10M+", label: "Daily Transactions" }
      ]
    },
    {
      icon: Code,
      title: "Developer-First APIs",
      description: "Comprehensive REST and GraphQL APIs with SDKs, webhooks, and extensive documentation for rapid integration.",
      benefits: [
        "OpenAPI 3.0 specification",
        "Multi-language SDKs",
        "Real-time webhooks",
        "Interactive documentation"
      ],
      tags: ["REST API", "GraphQL", "SDKs", "Webhooks"],
      metrics: [
        { value: "99.9%", label: "API Uptime" },
        { value: "5", label: "SDK Languages" }
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Monitoring",
      description: "Real-time dashboards, custom alerting, and predictive analytics with comprehensive audit trails.",
      benefits: [
        "Custom dashboard creation",
        "Predictive risk analytics",
        "Automated compliance reporting",
        "Real-time performance monitoring"
      ],
      tags: ["Dashboards", "Analytics", "Monitoring", "Reporting"],
      metrics: [
        { value: "24/7", label: "Monitoring" },
        { value: "Real-time", label: "Alerts" }
      ]
    }
  ];

  // 4. SECURITY - Comprehensive Security Features
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "AES-256 encryption for data at rest and in transit with hardware security modules (HSM) for key management.",
      benefits: [
        "AES-256 encryption standard",
        "Hardware security modules",
        "Perfect forward secrecy",
        "Encrypted data lakes"
      ],
      tags: ["AES-256", "HSM", "Encryption"]
    },
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify approach with continuous authentication and authorization for all system components.",
      benefits: [
        "Continuous authentication",
        "Micro-segmentation",
        "Identity-based access",
        "Behavioral analysis"
      ],
      tags: ["Zero-Trust", "Identity", "Access Control"]
    },
    {
      icon: FileCheck,
      title: "Compliance & Audit",
      description: "Immutable audit trails, automated compliance reporting, and real-time monitoring for regulatory adherence.",
      benefits: [
        "Immutable audit logs",
        "Automated compliance checks",
        "Real-time monitoring",
        "Regulatory reporting"
      ],
      tags: ["Audit", "Compliance", "SOC2", "ISO27001"]
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Multi-layered security with network segmentation, intrusion detection, and automated threat response.",
      benefits: [
        "Network segmentation",
        "Intrusion detection",
        "Automated response",
        "Threat intelligence"
      ],
      tags: ["Network Security", "IDS", "Threat Response"]
    }
  ];

  // Security Certifications
  const securityCertifications = [
    "SOC2 Type II", "ISO 27001", "PCI-DSS Level 1", "FedRAMP Ready", "GDPR Compliant", "HIPAA Compliant"
  ];

  // 5. INTEGRATION - Examples and Documentation
  const integrationExamples = [
    {
      system: "Core Banking Systems",
      description: "Seamless integration with major banking platforms including Temenos, Finastra, and custom core systems.",
      endpoints: [
        "POST /api/v1/accounts/verify",
        "GET /api/v1/transactions/monitor", 
        "PUT /api/v1/compliance/update"
      ],
      features: ["Real-time account verification", "Transaction monitoring", "Compliance status updates"]
    },
    {
      system: "CRM & Customer Data",
      description: "Bi-directional sync with Salesforce, Microsoft Dynamics, and custom CRM platforms for enriched customer profiles.",
      endpoints: [
        "POST /api/v1/customers/kyc",
        "GET /api/v1/risk-scores",
        "POST /api/v1/alerts/create"
      ],
      features: ["Customer onboarding", "Risk scoring", "Alert management"]
    },
    {
      system: "Regulatory Reporting",
      description: "Automated compliance reporting to regulators including FINRA, SEC, FCA, and other global regulatory bodies.",
      endpoints: [
        "POST /api/v1/reports/generate",
        "GET /api/v1/compliance/status",
        "POST /api/v1/filings/submit"
      ],
      features: ["Automated report generation", "Compliance tracking", "Regulatory filing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28">
        {/* 1. OVERVIEW - Hero with Platform Metrics */}
        <PageHero
          title="Enterprise-Ready Agentic AI Platform"
          subtitle="Built for scale, security, and performance. Our platform delivers enterprise-grade agentic AI capabilities with bank-level security and compliance."
          description="Trusted by 500+ financial institutions worldwide for mission-critical compliance operations."
        >
          <StatsSection
            stats={platformMetrics}
            columns={4}
            backgroundVariant="white"
            size="md"
          />
        </PageHero>

        {/* 2. ARCHITECTURE - Multi-Agent System */}
        <AgenticArchitecture />

        {/* 3. FEATURES - Core Platform Capabilities */}
        <FeaturesSection
          title="Comprehensive Platform Capabilities"
          subtitle="Everything you need to deploy, manage, and scale agentic AI across your entire compliance infrastructure."
          features={platformFeatures}
          variant="detailed"
          columns={2}
          backgroundVariant="gray"
        />

        {/* 4. SECURITY - Bank-Grade Security */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Bank-Grade Security & Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform is built with security-first principles, meeting the most stringent 
                requirements of global financial institutions and regulatory bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="space-y-2 mb-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Security Certifications */}
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Security Certifications & Standards
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {securityCertifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="bg-white text-gray-700 px-4 py-2 text-sm border border-gray-200">
                    <Award className="h-3 w-3 mr-2" />
                    {cert}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Independently verified security controls and compliance frameworks ensure 
                your data and operations meet the highest industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* 5. INTEGRATION - Examples and Documentation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Seamless Integration & Developer Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive APIs and pre-built integrations for rapid deployment 
                into your existing technology stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {integrationExamples.map((integration, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{integration.system}</CardTitle>
                    <p className="text-gray-600 text-sm">{integration.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Sample Endpoints:</h4>
                        <div className="space-y-2">
                          {integration.endpoints.map((endpoint, endpointIndex) => (
                            <code key={endpointIndex} className="block bg-gray-900 text-green-400 p-2 rounded text-xs">
                              {endpoint}
                            </code>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                        <div className="space-y-1">
                          {integration.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-blue-600 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Developer Resources CTA */}
            <div className="bg-blue-50 rounded-lg p-12 text-center">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Developer Resources & Documentation
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Access comprehensive API documentation, SDKs, code samples, and integration 
                guides to accelerate your implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTASection
                  title=""
                  subtitle=""
                  buttons={[
                    { text: "View API Documentation", variant: 'primary', icon: Code },
                    { text: "Download SDKs", variant: 'secondary' }
                  ]}
                  backgroundVariant="blue"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Ready to Deploy Enterprise Agentic AI?"
          subtitle="See our platform in action with a technical deep-dive demo. Our solutions architects will show you how to integrate agentic AI into your infrastructure."
          buttons={[
            { text: "Schedule Platform Demo", variant: 'primary', icon: Calendar },
            { text: "Speak with Solutions Architect", variant: 'secondary' }
          ]}
          benefits={[
            { text: "Technical architecture review" },
            { text: "Integration planning session" },
            { text: "Security & compliance assessment" }
          ]}
          backgroundVariant="blue"
          size="lg"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;