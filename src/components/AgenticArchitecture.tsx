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
  Gauge
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
      description: "End-to-end encryption, zero-trust architecture, and ISO 27001 compliance."
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
          <div className="bg-gray-50 rounded-lg p-12">
            {/* Central Orchestrator */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-4">
                <Bot className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Orchestrator Agent</h3>
              <p className="text-gray-600">Central Coordination</p>
            </div>

            {/* Specialist Agents */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="font-semibold text-foreground">KYC Agent</h4>
                <p className="text-sm text-gray-600">Identity Verification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 mx-auto">
                  <CreditCard className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="font-semibold text-foreground">Lending Agent</h4>
                <p className="text-sm text-gray-600">Credit Assessment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 mx-auto">
                  <Activity className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="font-semibold text-foreground">Monitoring Agent</h4>
                <p className="text-sm text-gray-600">Transaction Analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="font-semibold text-foreground">Risk Agent</h4>
                <p className="text-sm text-gray-600">Compliance Monitoring</p>
              </div>
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