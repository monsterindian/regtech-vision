// Header is rendered globally from App.tsx
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
      title: "Security Monitoring & Compliance",
      description: "Built-in security monitoring, audit trails, and compliance-ready architecture designed for future regulatory requirements.",
      benefits: [
        "Comprehensive audit logging",
        "Security event monitoring",
        "Compliance-ready framework",
        "Future certification preparation"
      ],
      tags: ["Audit", "Compliance", "Security", "Monitoring"]
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
      <main className="pt-28">
        {/* 1. ENHANCED HERO SECTION */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  ⚡ Enterprise Agentic AI Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                Enterprise-Ready
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Agentic AI Platform</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-400">
                Built for scale, security, and performance. Our platform delivers enterprise-grade agentic AI
                capabilities with bank-level security and compliance.
              </p>

              {/* Platform Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mt-12 animate-fade-in-up delay-600">
                {platformMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white shadow-md border border-gray-100 text-center"
                  >
                    <metric.icon className="h-8 w-8 text-purple-600 mx-auto mb-3 fill-current" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {metric.metric}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">{metric.label}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. ARCHITECTURE - Multi-Agent System */}
        <AgenticArchitecture />

        {/* 3. FEATURES - Core Platform Capabilities */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  ⚡ Comprehensive Platform Capabilities
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Comprehensive Platform Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to deploy, manage, and scale agentic AI across your entire compliance infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {feature.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {feature.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-purple-100 text-purple-700 border-purple-200 text-xs font-medium">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECURITY - Bank-Grade Security */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  🛡️ Bank-Grade Security & Compliance
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Bank-Grade Security & Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform is built with security-first principles, meeting the most stringent
                requirements of global financial institutions and regulatory bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="space-y-2 mb-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. INTEGRATION - Examples and Documentation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  🔗 Seamless Integration & Developer Experience
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Seamless Integration & Developer Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive APIs and pre-built integrations for rapid deployment
                into your existing technology stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {integrationExamples.map((integration, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">{integration.system}</CardTitle>
                    <p className="text-gray-600 text-sm">{integration.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-3">Sample Endpoints:</h4>
                        <div className="space-y-2">
                          {integration.endpoints.map((endpoint, endpointIndex) => (
                            <code key={endpointIndex} className="block bg-gray-900 text-green-400 p-2 rounded text-xs">
                              {endpoint}
                            </code>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features:</h4>
                        <div className="space-y-1">
                          {integration.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
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
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  🚀 Ready to Deploy Enterprise Agentic AI?
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Deploy Your
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Enterprise Agentic AI?</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                See our platform in action with a technical deep-dive demo. Our solutions architects will show you how to integrate agentic AI into your infrastructure.
              </p>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">Technical architecture review</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">Integration planning session</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">Security & compliance assessment</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center">
                <CTASection
                  title=""
                  subtitle=""
                  buttons={[
                    { text: "Schedule Platform Demo", variant: 'primary', icon: Calendar, href: '/contact' }
                  ]}
                  backgroundVariant="blue"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Platform;