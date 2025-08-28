import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle,
  Server,
  Globe,
  Lock,
  Gauge
} from "lucide-react";

const TechnicalSpecifications = () => {
  const performanceMetrics = [
    { icon: Zap, metric: "<100ms", label: "API Response Time" },
    { icon: BarChart3, metric: "99.99%", label: "System Uptime" },
    { icon: Database, metric: "10M+", label: "Transactions/Day" },
    { icon: Globe, metric: "50+", label: "Global Regions" }
  ];

  const specifications = [
    {
      icon: Cloud,
      title: "Deployment Options",
      items: ["Multi-cloud (AWS, Azure, GCP)", "On-premises installation", "Hybrid cloud architecture", "Edge computing support"]
    },
    {
      icon: Server,
      title: "Integration Capabilities",
      items: ["RESTful APIs (OpenAPI 3.0)", "GraphQL endpoints", "Real-time webhooks", "Message queues (Kafka, RabbitMQ)"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      items: ["End-to-end encryption (AES-256)", "Zero-trust architecture", "Multi-factor authentication", "Role-based access control"]
    },
    {
      icon: Gauge,
      title: "Scalability & Performance",
      items: ["Auto-scaling infrastructure", "Load balancing", "Microservices architecture", "Container orchestration (K8s)"]
    },
    {
      icon: BarChart3,
      title: "Monitoring & Analytics",
      items: ["Real-time dashboards", "Custom alerting", "Performance metrics", "Audit logging"]
    },
    {
      icon: CheckCircle,
      title: "Compliance & Governance",
      items: ["Data residency controls", "Regulatory reporting", "Audit trail management", "Policy enforcement"]
    }
  ];

  const architectureHighlights = [
    "Event-driven microservices architecture",
    "Real-time stream processing with Apache Kafka",
    "Vector databases for AI model storage",
    "Graph analytics with Neo4j",
    "MLOps pipeline with automated model deployment"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Enterprise-Ready Agentic AI Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for scale, security, and performance. Our platform meets the demanding 
            requirements of global financial institutions with enterprise-grade architecture.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <metric.icon className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.metric}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="bg-white shadow-sm border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      <spec.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{spec.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Architecture Highlights
          </h3>
          <Card className="bg-gray-50 shadow-sm border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectureHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Developer Integration */}
        <div className="bg-gray-50 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Developer-First Integration
          </h3>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Comprehensive APIs, SDKs, and documentation for seamless integration with your existing systems.
          </p>
          
          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
            <div className="text-sm text-gray-500 mb-2">Sample API Endpoint</div>
            <code className="block bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
              POST /api/v1/compliance/kyc/verify<br/>
              {`{`}<br/>
              &nbsp;&nbsp;"document_type": "passport",<br/>
              &nbsp;&nbsp;"document_data": "base64_encoded_image",<br/>
              &nbsp;&nbsp;"customer_id": "cust_12345"<br/>
              {`}`}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;