import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle,
  Code,
  Database,
  Network,
  Lock,
  Activity,
  Layers,
  GitBranch,
  Eye,
  Cpu,
  Globe,
  Settings,
  Monitor,
  Webhook
} from "lucide-react";

const TechnicalSpecifications = () => {
  const technicalSpecs = [
    {
      category: "Deployment Options",
      icon: Server,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      items: [
        { name: "Cloud", description: "AWS, Azure, GCP native deployment" },
        { name: "On-premise", description: "Private data center installation" },
        { name: "Hybrid", description: "Multi-cloud and edge deployment" }
      ]
    },
    {
      category: "Integration",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      items: [
        { name: "RESTful APIs", description: "OpenAPI 3.0 compliant endpoints" },
        { name: "Real-time Webhooks", description: "Event-driven notifications" },
        { name: "GraphQL", description: "Flexible data querying interface" }
      ]
    },
    {
      category: "Security",
      icon: Shield,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      items: [
        { name: "End-to-end Encryption", description: "AES-256 data protection" },
        { name: "Zero-trust Architecture", description: "Identity-based access control" },
        { name: "Multi-factor Authentication", description: "SAML/OIDC integration" }
      ]
    },
    {
      category: "Scalability",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      items: [
        { name: "Auto-scaling", description: "Dynamic resource allocation" },
        { name: "Multi-tenant Support", description: "Isolated tenant environments" },
        { name: "Load Balancing", description: "High availability architecture" }
      ]
    },
    {
      category: "Monitoring",
      icon: BarChart3,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      items: [
        { name: "Real-time Dashboards", description: "Grafana-based visualization" },
        { name: "Performance Metrics", description: "SLA monitoring and alerting" },
        { name: "Audit Logging", description: "Comprehensive activity tracking" }
      ]
    },
    {
      category: "Compliance",
      icon: CheckCircle,
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      items: [
        { name: "SOC2 Type II", description: "Security and availability controls" },
        { name: "ISO27001", description: "Information security management" },
        { name: "FedRAMP Ready", description: "Government cloud compliance" }
      ]
    }
  ];

  const architectureHighlights = [
    {
      icon: Layers,
      title: "Microservices-based Agent Deployment",
      description: "Containerized agents with Kubernetes orchestration for independent scaling and deployment",
      color: "text-blue-500"
    },
    {
      icon: Activity,
      title: "Event-driven Processing",
      description: "Apache Kafka-based streaming for real-time decision making and low-latency responses",
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Vector Databases for Contextual Understanding",
      description: "Pinecone/Weaviate integration for semantic search and contextual AI reasoning",
      color: "text-purple-500"
    },
    {
      icon: Network,
      title: "Graph Analytics for Relationship Mapping",
      description: "Neo4j-powered entity relationship analysis for complex compliance scenarios",
      color: "text-orange-500"
    },
    {
      icon: GitBranch,
      title: "MLOps Pipeline for Continuous Improvement",
      description: "Automated model training, validation, and deployment with A/B testing capabilities",
      color: "text-teal-500"
    }
  ];

  const performanceMetrics = [
    {
      metric: "<100ms",
      label: "API Response Time",
      description: "Average endpoint latency",
      icon: Zap
    },
    {
      metric: "99.99%",
      label: "Platform Uptime",
      description: "SLA guarantee",
      icon: Server
    },
    {
      metric: "1M+",
      label: "Transactions/Second",
      description: "Peak processing capacity",
      icon: Activity
    },
    {
      metric: "24/7",
      label: "Support Coverage",
      description: "Enterprise support",
      icon: Eye
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            <span className="text-gradient">Enterprise-Ready</span> Agentic AI Platform
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for enterprise scale with robust architecture, comprehensive security, 
            and seamless integration capabilities for mission-critical compliance operations.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="text-center border-2 border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{metric.metric}</div>
                  <div className="font-semibold text-foreground mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              <span className="text-gradient">Technical Specifications</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical capabilities designed for enterprise deployment, 
              security, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-accent/30 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${spec.bgColor} flex items-center justify-center`}>
                      <spec.icon className={`w-5 h-5 ${spec.color}`} />
                    </div>
                    <CardTitle className="text-lg">{spec.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {spec.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-2 border-accent/20 pl-4">
                        <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              <span className="text-gradient">Architecture Highlights</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern, cloud-native architecture built for scalability, reliability, 
              and continuous innovation in financial compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {architectureHighlights.map((highlight, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{highlight.title}</CardTitle>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration & APIs */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Developer-First <span className="text-gradient">Integration</span>
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Comprehensive APIs, SDKs, and documentation designed for seamless integration 
                  with your existing technology stack and compliance workflows.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">OpenAPI 3.0 specification with interactive docs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">SDKs for Python, Java, Node.js, and .NET</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">Webhook subscriptions for real-time events</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">Rate limiting and authentication built-in</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                  <Monitor className="w-5 h-5 text-accent mr-2" />
                  API Endpoints
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-green-600">POST</span>
                    <span className="text-muted-foreground">/api/v1/agents/deploy</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-blue-600">GET</span>
                    <span className="text-muted-foreground">/api/v1/compliance/status</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-purple-600">PUT</span>
                    <span className="text-muted-foreground">/api/v1/rules/update</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-orange-600">WS</span>
                    <span className="text-muted-foreground">/ws/events/stream</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;
