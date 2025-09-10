// Header is rendered globally from App.tsx
import PageHero from "@/components/shared/PageHero";
import StatsSection from "@/components/shared/StatsSection";
import CTASection from "@/components/shared/CTASection";
import { FeaturesSection } from "@/components/shared/FeatureCard";
import { useState } from "react";
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
  Calendar,
  Plug,
  Power,
  UserCheck,
  BookOpen,
  ShieldCheck,
  GitBranch,
  Building2
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

  // LLM mode toggle state
  const [llmMode, setLlmMode] = useState<'onprem' | 'hosted'>('onprem');

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

        {/* 2.5 IMPLEMENTATION METHODOLOGY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  🧭 Implementation Methodology
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Secure, On‑Prem, Non‑Intrusive</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Confidence by design: we use open‑source tooling, deploy entirely inside your perimeter, and enforce strict guardrails so agents only access approved data.
              </p>
            </div>

            {/* Assurances grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[ 
                { icon: BookOpen, title: 'Open Source First', desc: 'Built on proven open‑source (Kubernetes, Postgres, Kafka, OpenTelemetry) with enterprise hardening.' },
                { icon: Server, title: 'On‑Prem by Default', desc: 'The platform runs in your VPC/datacenter. Depending on the LLM you choose, no data leaves your perimeter.' },
                { icon: Plug, title: 'Non‑Intrusive', desc: 'No changes to existing systems. We integrate via APIs/webhooks and read‑only connectors.' },
                { icon: Power, title: 'Zero‑Downtime Control', desc: 'Turn the platform on/off without impacting uptime of your current stack.' },
                { icon: UserCheck, title: 'No Learning Curve', desc: 'Familiar UX embedded into your existing tools and workflows for quick adoption.' },
                { icon: ShieldCheck, title: 'Strong Guardrails', desc: 'Least‑privilege access, policy controls, and full audit on every agent action.' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-slate-50 via-white to-blue-50 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* LLM mode toggle */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-sm font-medium text-gray-900">LLM Configuration</span>
                <p className="text-xs text-gray-600">Switch to see how data flow changes between on‑prem and hosted LLMs.</p>
              </div>
              <div className="inline-flex p-1 rounded-lg border border-gray-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setLlmMode('onprem')}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${llmMode === 'onprem' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  On‑Prem LLM
                </button>
                <button
                  type="button"
                  onClick={() => setLlmMode('hosted')}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${llmMode === 'hosted' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Hosted LLM
                </button>
              </div>
            </div>

            {/* Professional visual (inline SVG) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
              <div className="px-6 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900">Your Premises (VPC / Datacenter)</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-1"><span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span><span>Gaigentic</span></div>
                    <div className="flex items-center space-x-1"><span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span><span>Guardrails</span></div>
                    <div className="flex items-center space-x-1"><span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span><span>Data</span></div>
                    <div className="flex items-center space-x-1"><span className={`inline-block w-3 h-3 rounded-full ${llmMode === 'hosted' ? 'bg-amber-500' : 'bg-slate-300'}`}></span><span>LLM Path</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
                <svg viewBox="0 0 980 280" className="w-full h-[260px]">{/* Outer on‑prem boundary */}
                  <rect x="10" y="10" width="960" height="260" rx="14" ry="14" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6"/>
                  {/* Inner boundary for workload zone */}
                  <rect x="30" y="30" width="790" height="220" rx="12" ry="12" fill="none" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="5 6"/>

                  {/* Gaigentic Platform */}
                  <rect x="60" y="40" width="240" height="200" rx="12" fill="#7C3AED" fillOpacity="0.08" stroke="#7C3AED" strokeWidth="1.5"/>
                  <text x="72" y="66" fontSize="12" fill="#111827" fontWeight="600">Gaigentic Platform (Containers)</text>
                  <rect x="72" y="88" width="216" height="48" rx="8" fill="#7C3AED" fillOpacity="0.14"/>
                  <text x="84" y="116" fontSize="12" fill="#111827">APIs • Orchestration • Observability</text>
                  <rect x="72" y="148" width="216" height="72" rx="8" fill="#7C3AED" fillOpacity="0.14"/>
                  <text x="84" y="176" fontSize="12" fill="#111827">
                    <tspan x="84" dy="0">Adapters • Webhooks</tspan>
                    <tspan x="84" dy="16">Read‑only Connectors</tspan>
                  </text>

                  {/* Guardrails */}
                  <rect x="320" y="40" width="240" height="200" rx="12" fill="#3B82F6" fillOpacity="0.08" stroke="#3B82F6" strokeWidth="1.5"/>
                  <text x="332" y="66" fontSize="12" fill="#111827" fontWeight="600">Guardrails & Policy</text>
                  <rect x="340" y="88" width="200" height="48" rx="8" fill="#3B82F6" fillOpacity="0.14"/>
                  <text x="352" y="116" fontSize="12" fill="#111827">Least‑Privilege • RBAC</text>
                  <rect x="340" y="148" width="200" height="48" rx="8" fill="#3B82F6" fillOpacity="0.14"/>
                  <text x="352" y="176" fontSize="12" fill="#111827">Audit • Policy Checks</text>

                  {/* Data zone */}
                  <rect x="580" y="40" width="240" height="200" rx="12" fill="#10B981" fillOpacity="0.08" stroke="#10B981" strokeWidth="1.5"/>
                  <text x="592" y="66" fontSize="12" fill="#111827" fontWeight="600">Approved Data (Subset)</text>
                  <rect x="600" y="88" width="200" height="48" rx="8" fill="#10B981" fillOpacity="0.14"/>
                  <text x="612" y="116" fontSize="12" fill="#111827">Vector Store / Cache</text>
                  <rect x="600" y="148" width="200" height="48" rx="8" fill="#10B981" fillOpacity="0.14"/>
                  <text x="612" y="176" fontSize="12" fill="#111827">Temporal Access</text>

                  {/* External LLM (mode-dependent) */}
                  <g opacity={llmMode === 'onprem' ? 0.4 : 1} style={{ transition: 'opacity 300ms ease, transform 300ms ease' }}>
                    <rect x="840" y="90" width="90" height="60" rx="10" fill="#F1F5F9" stroke="#CBD5E1"/>
                    <text x="885" y="120" textAnchor="middle" fontSize="11" fill="#111827">External</text>
                    <text x="885" y="136" textAnchor="middle" fontSize="11" fill="#111827">LLM</text>
                  </g>

                  {/* LLM path (only for hosted) */}
                  {llmMode === 'hosted' ? (
                    <g>
                      <line x1="820" y1="120" x2="840" y2="120" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="5 6" style={{ transition: 'opacity 250ms ease' }} />
                      <circle cx="820" cy="120" r="6" fill="#FEF3C7" stroke="#F59E0B"/>
                    </g>
                  ) : (
                    <g>
                      {/* Place inside Vector block, top‑right, aligned */}
                      <text x={600 + 200 - 12} y={88 + 20} textAnchor="end" fontSize="11" fill="#0F766E">No egress</text>
                    </g>
                  )}
                </svg>
              </div>
              <div className="px-6 pb-6 text-xs text-gray-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                {llmMode === 'onprem' ? (
                  <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /><span>On‑prem LLM: data never leaves your perimeter.</span></div>
                ) : (
                  <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-amber-600" /><span>Hosted LLM: outbound path uses redaction and strict policies.</span></div>
                )}
                <div className="flex items-center gap-2"><GitBranch className="h-4 w-4 text-purple-600" /><span>Integrates alongside existing systems—no modifications required.</span></div>
                <div className="flex items-center gap-2"><Power className="h-4 w-4 text-emerald-600" /><span>Safe to enable/disable without downtime.</span></div>
              </div>
              {/* Code snippet: policy-based redaction example */}
              <div className="px-6 pb-6">
                <div className="rounded-lg bg-gray-900 text-gray-100 p-4 overflow-x-auto">
                  <div className="text-xs text-gray-400 mb-2">TypeScript • outbound policy enforcement</div>
                  <pre className="text-xs leading-relaxed"><code>{`// redactOutbound.ts
type Policy = { pii: boolean; secrets: boolean; patternMasks: Record<string, string> };

export function redactOutbound(input: string, policy: Policy) {
  let out = input;
  if (policy.pii) {
    // Mask emails and phone numbers
    out = out
      .replace(/([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/g, '***@***')
      .replace(/\b\+?\d[\d\s\-()]{6,}\b/g, '********');
  }
  if (policy.secrets) {
    out = out.replace(/(api_key|token|secret)\s*[:=]\s*['\"][^'\"]+['\"]/gi, '$1: "********"');
  }
  for (const [pattern, mask] of Object.entries(policy.patternMasks)) {
    out = out.replace(new RegExp(pattern, 'gi'), mask);
  }
  return out;
}

// Usage when llmMode === 'hosted'
const sanitized = redactOutbound(JSON.stringify(payload), {
  pii: true,
  secrets: true,
  patternMasks: { '(account|iban)\\s*[:=]\\s*[A-Z0-9]+' : 'account: ****' }
});
// send sanitized to external LLM with zero-retention headers
`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* 6. TURNKEY ROLLOUT PLAN */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  🧩 Turnkey Rollout Plan
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">From POC to Production—Clear, Confidence‑Building Delivery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">A structured, low‑risk path with measurable milestones, tight security, and zero disruption to your current stack.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* POC */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-gray-900">1) Proof of Concept (2–4 weeks)</CardTitle>
                    <Badge className="inline-flex items-center justify-center px-3 py-1 bg-purple-100 text-purple-700 border-purple-200">Low Risk</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Objectives</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Validate agent outputs on a limited, approved dataset (read‑only).</li>
                        <li>Confirm on‑prem deployment and security guardrails.</li>
                        <li>Demonstrate no impact to production systems.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Scope</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Single business use‑case (e.g., KYC document triage).</li>
                        <li>Sandbox/VPC with least‑privilege access to a data subset.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Activities</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Deploy containers in your VPC/datacenter.</li>
                        <li>Configure data connectors (read‑only) and guardrails.</li>
                        <li>Redaction and policy tuning (if hosted LLM used).</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 border-blue-200">Owner: Sec/IT</Badge>
                      <Badge className="inline-flex items-center justify-center px-3 py-1 bg-emerald-100 text-emerald-700 border-emerald-200">Exit: Precision &gt; 85%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pilot */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-gray-900">2) Pilot (4–8 weeks)</CardTitle>
                    <Badge className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 border-blue-200">Controlled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Objectives</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Operate with a small group of users in production‑like workflows.</li>
                        <li>Establish measurable KPIs (speed, accuracy, deflection rates).</li>
                        <li>Verify operational monitoring and audit trails.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Scope</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>2–3 processes; integrations via APIs/webhooks; no system changes.</li>
                        <li>Role‑based access with approval workflows.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Activities</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Fine‑tune prompts, policies, and routing strategies.</li>
                        <li>Train champions; embed UI into existing tools (no learning curve).</li>
                        <li>Run A/B against baseline processes.</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 border-blue-200">Owner: Ops</Badge>
                      <Badge className="inline-flex items-center justify-center px-3 py-1 bg-emerald-100 text-emerald-700 border-emerald-200">Exit: KPIs met</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Production */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-gray-900">3) Production (8+ weeks)</CardTitle>
                    <Badge className="inline-flex items-center justify-center px-3 py-1 bg-emerald-100 text-emerald-700 border-emerald-200">Scale</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Objectives</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Hardened, monitored, and auditable operations.</li>
                        <li>Horizontal scale across lines of business and regions.</li>
                        <li>Continuous improvement loop and governance.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Scope</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>HA/DR, SLOs, runbooks, and incident response.</li>
                        <li>Regular validation of guardrails and access controls.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Activities</div>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Expand integrations; automate reporting and dashboards.</li>
                        <li>Capacity planning, cost controls, compliance audits.</li>
                        <li>Quarterly model/policy review; change management.</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 border-blue-200">Owner: Platform</Badge>
                      <Badge className="inline-flex items-center justify-center px-3 py-1 bg-emerald-100 text-emerald-700 border-emerald-200">SLOs: 99.9%+</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional assurances */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"><span className="font-medium text-gray-900">No disruption:</span> deploy alongside existing stack; toggle on/off without downtime.</div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"><span className="font-medium text-gray-900">Security‑first:</span> least‑privilege, audit trails, policy gates, redaction (for hosted LLM).</div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"><span className="font-medium text-gray-900">Adoption:</span> embed into tools your teams already use—no learning curve.</div>
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