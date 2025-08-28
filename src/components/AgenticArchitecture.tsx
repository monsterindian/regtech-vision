import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Network, 
  Database, 
  Shield, 
  CheckCircle, 
  Users, 
  Activity, 
  FileText,
  Zap,
  Eye,
  Lock,
  GitBranch,
  Brain,
  Layers
} from "lucide-react";

const AgenticArchitecture = () => {
  const technicalHighlights = [
    {
      icon: Brain,
      title: "Autonomous Decision-Making",
      description: "AI agents make independent decisions with human oversight",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous adaptation to new patterns and threats",
      color: "text-green-500"
    },
    {
      icon: FileText,
      title: "Full Audit Trail",
      description: "Complete explainability and compliance documentation",
      color: "text-purple-500"
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Multi-tenant design supporting enterprise scale",
      color: "text-orange-500"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security and privacy protection",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            <span className="text-gradient">Multi-Agent Architecture</span> for Financial Compliance
          </h2>
          <p className="text-lg text-muted-foreground">
            Our sophisticated multi-agent system orchestrates specialized AI agents to deliver comprehensive, 
            autonomous compliance solutions across all BFSI operations.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 border border-border/50">
            
            {/* Central Orchestrator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-accent text-white rounded-full p-6 shadow-lg border-4 border-accent/20">
                <Network className="h-12 w-12" />
              </div>
              <div className="text-center mt-3">
                <h3 className="font-bold text-accent">Orchestrator Agent</h3>
                <p className="text-xs text-muted-foreground">Central Coordination</p>
              </div>
            </div>

            {/* Specialist Agents - Top Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* KYC Agent */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-lg p-4 shadow-md">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-semibold text-sm">KYC Agent</h4>
                  <p className="text-xs text-muted-foreground">Identity Verification</p>
                </div>
              </div>

              {/* Fraud Detection Agent */}
              <div className="flex flex-col items-center">
                <div className="bg-red-500 text-white rounded-lg p-4 shadow-md">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-semibold text-sm">Fraud Detection</h4>
                  <p className="text-xs text-muted-foreground">Threat Analysis</p>
                </div>
              </div>

              {/* Risk Assessment Agent */}
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 text-white rounded-lg p-4 shadow-md">
                  <Activity className="h-8 w-8" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-semibold text-sm">Risk Assessment</h4>
                  <p className="text-xs text-muted-foreground">Risk Scoring</p>
                </div>
              </div>

              {/* Compliance Monitoring Agent */}
              <div className="flex flex-col items-center">
                <div className="bg-green-500 text-white rounded-lg p-4 shadow-md">
                  <Eye className="h-8 w-8" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-semibold text-sm">Compliance Monitor</h4>
                  <p className="text-xs text-muted-foreground">Regulatory Watch</p>
                </div>
              </div>
            </div>

            {/* Data Pipeline Agents - Middle Row */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <div className="bg-purple-500 text-white rounded-lg p-4 shadow-md">
                    <Database className="h-8 w-8" />
                  </div>
                  <div className="text-center mt-2">
                    <h4 className="font-semibold text-sm">Data Pipeline</h4>
                    <p className="text-xs text-muted-foreground">Real-time Ingestion</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-teal-500 text-white rounded-lg p-4 shadow-md">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div className="text-center mt-2">
                    <h4 className="font-semibold text-sm">Validation Agent</h4>
                    <p className="text-xs text-muted-foreground">Quality Assurance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Layer - Bottom */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex items-center justify-center mb-3">
                <GitBranch className="h-6 w-6 text-muted-foreground mr-2" />
                <h4 className="font-semibold">Integration Layer</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-background rounded p-3 border">
                  <p className="text-sm font-medium">Core Banking Systems</p>
                </div>
                <div className="bg-background rounded p-3 border">
                  <p className="text-sm font-medium">Regulatory Databases</p>
                </div>
                <div className="bg-background rounded p-3 border">
                  <p className="text-sm font-medium">External Data Sources</p>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Lines from orchestrator to specialist agents */}
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="currentColor" strokeWidth="2" className="text-accent/30" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="currentColor" strokeWidth="2" className="text-accent/30" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="currentColor" strokeWidth="2" className="text-accent/30" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="currentColor" strokeWidth="2" className="text-accent/30" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Technical Excellence & <span className="text-gradient">Enterprise Features</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalHighlights.map((highlight, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional highlight for completeness */}
            <Card className="border-2 border-border/50 hover:border-accent/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <Bot className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle className="text-lg">Intelligent Orchestration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Smart task distribution and resource optimization across agent network</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Architecture Benefits */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 border border-border/50">
          <h3 className="text-xl font-semibold text-center mb-6 text-foreground">
            Why Multi-Agent Architecture?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Specialized Expertise</h4>
                  <p className="text-sm text-muted-foreground">Each agent focuses on specific compliance domains for maximum accuracy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Fault Tolerance</h4>
                  <p className="text-sm text-muted-foreground">Distributed architecture ensures system resilience and uptime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Parallel Processing</h4>
                  <p className="text-sm text-muted-foreground">Multiple agents work simultaneously for faster processing</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Dynamic Scaling</h4>
                  <p className="text-sm text-muted-foreground">Agents scale independently based on workload demands</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">Agents share insights and improve collectively over time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Regulatory Compliance</h4>
                  <p className="text-sm text-muted-foreground">Built-in audit trails and explainability for regulatory requirements</p>
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
