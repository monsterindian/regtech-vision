import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  Users, 
  CreditCard, 
  Activity, 
  Shield, 
  Database, 
  Zap, 
  CheckCircle,
  Cloud,
  Lock,
  Gauge,
  Route,
  Workflow,
  ShieldCheck,
  BookOpen
} from "lucide-react";

const AgenticArchitecture = () => {
  const technicalHighlights = [
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable microservices with auto-scaling capabilities and multi-region deployment support."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "End-to-end encryption, zero-trust architecture, and enterprise-grade security practices."
    },
    {
      icon: Gauge,
      title: "Real-Time Processing",
      description: "Sub-second response times with event-driven architecture and stream processing."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Multi-Agent Architecture for Financial Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sophisticated multi-agent system orchestrates specialized AI agents to deliver comprehensive, 
            autonomous compliance solutions across all BFSI operations.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            {/* Central Orchestrator */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-4">
                <Bot className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Orchestrator Agent</h3>
              <p className="text-gray-600">Plans, routes, and validates tasks across specialists</p>
            </div>

            {/* Flow steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2"><Route className="h-4 w-4 text-blue-600" /><span className="text-sm font-medium text-foreground">Task Planning</span></div>
                <p className="text-sm text-gray-600">Breaks requests into atomic steps, defines success criteria and guardrails.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2"><Workflow className="h-4 w-4 text-blue-600" /><span className="text-sm font-medium text-foreground">Policy‑Aware Routing</span></div>
                <p className="text-sm text-gray-600">Routes to agents with least‑privilege data access; redacts where needed.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2"><ShieldCheck className="h-4 w-4 text-blue-600" /><span className="text-sm font-medium text-foreground">Human‑in‑the‑Loop</span></div>
                <p className="text-sm text-gray-600">Optional approvals and reviews for sensitive workflows.</p>
              </div>
            </div>

            {/* Specialist Agents */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, title: 'KYC Agent', desc: 'Identity & document verification, sanctions checks' },
                { icon: CreditCard, title: 'Lending Agent', desc: 'Eligibility, affordability, document extraction' },
                { icon: Activity, title: 'Monitoring Agent', desc: 'Transaction monitoring, AML rule assistance' },
                { icon: Shield, title: 'Risk Agent', desc: 'Policy checks, explainability, audit artifacts' },
              ].map((a, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <a.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">{a.title}</h4>
                  <p className="text-sm text-gray-600">{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Governance strip */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Database, label: 'Data Access', text: 'Read‑only connectors, data minimization' },
                { icon: BookOpen, label: 'Policies', text: 'Role‑based controls, retention policies' },
                { icon: Zap, label: 'Observability', text: 'Audit logs, traces, and metrics' },
              ].map((g, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-3">
                  <g.icon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{g.label}</div>
                    <div className="text-xs text-gray-600">{g.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Enterprise-Ready Platform
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalHighlights.map((highlight, index) => (
              <Card key={index} className="bg-white shadow-sm border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Benefits */}
        <div className="bg-gray-50 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Multi-Agent Architecture?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Specialized Expertise</h4>
                  <p className="text-gray-600">Each agent is optimized for specific compliance tasks and regulations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Scalable Performance</h4>
                  <p className="text-gray-600">Independent scaling based on workload and processing requirements</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Fault Tolerance</h4>
                  <p className="text-gray-600">Isolated failures don't affect the entire compliance system</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Continuous Learning</h4>
                  <p className="text-gray-600">Agents learn and adapt to new regulations and threat patterns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticArchitecture;