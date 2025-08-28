
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  UserCheck, 
  Shield, 
  AlertTriangle, 
  FileText, 
  CreditCard,
  Activity,
  Bot,
  CheckCircle,
  ArrowRight,
  Database,
  Eye,
  Zap,
  Clock
} from "lucide-react";

const SolutionsOverview = () => {
  const agenticSolutions = [
    {
      icon: UserCheck,
      title: "Autonomous KYC Agents for Insurance",
      description: "Intelligent AI agents that autonomously handle customer identity verification and onboarding across insurance operations",
      benefits: [
        "Auto-verify customer identities across multiple databases",
        "Intelligent document processing and validation",
        "Real-time risk scoring and onboarding decisions",
        "Continuous monitoring for regulatory changes"
      ],
      complianceBadges: ["GDPR", "KYC", "AML", "IAIS"],
      color: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: CreditCard,
      title: "Intelligent Lending Compliance Agents",
      description: "Autonomous AI agents that handle loan underwriting, credit assessment, and regulatory compliance in lending operations",
      benefits: [
        "Automated loan underwriting and credit assessment",
        "Dynamic risk evaluation using alternative data",
        "Real-time regulatory compliance checking",
        "Autonomous fraud detection in applications"
      ],
      complianceBadges: ["Basel III", "FCRA", "ECOA", "TILA"],
      color: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      icon: Activity,
      title: "Transaction Monitoring AI Agents",
      description: "Real-time autonomous agents that detect suspicious activities and ensure AML/CFT compliance across all transactions",
      benefits: [
        "Real-time suspicious activity detection",
        "Adaptive pattern recognition for emerging threats",
        "Automated AML/CFT compliance reporting",
        "Behavioral analytics and anomaly detection"
      ],
      complianceBadges: ["AML", "CFT", "BSA", "FATF"],
      color: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      icon: Shield,
      title: "Risk & Compliance Management Agents",
      description: "Comprehensive autonomous agents that continuously monitor, assess, and manage regulatory compliance and risk across all operations",
      benefits: [
        "Continuous regulatory monitoring and updates",
        "Automated policy alignment and documentation",
        "Predictive risk assessment and mitigation",
        "Audit-ready compliance reporting"
      ],
      complianceBadges: ["SOX", "PCI DSS", "ISO 27001", "COSO"],
      color: "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            <span className="text-gradient">Agentic AI Solutions</span> for BFSI Compliance
          </h2>
          <p className="text-lg text-muted-foreground">
            Deploy autonomous AI agents that revolutionize compliance operations across insurance, lending, and banking with intelligent automation and continuous monitoring.
          </p>
        </div>

        {/* Agentic Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {agenticSolutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`compliance-card group cursor-pointer border-2 ${solution.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${solution.color}`}>
                    <solution.icon className="h-8 w-8" />
                  </div>
                  <Bot className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors mb-2">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compliance Badges */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Shield className="h-4 w-4 text-blue-500 mr-2" />
                    Compliance Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.complianceBadges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="outline" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agentic AI Capabilities */}
        <div className="bg-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            <span className="text-gradient">Autonomous Agent</span> Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Bot className="h-6 w-6 text-accent" />
              </div>
              <span className="text-foreground font-medium">Fully Autonomous</span>
              <span className="text-sm text-muted-foreground">No human intervention required</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <span className="text-foreground font-medium">Real-time Processing</span>
              <span className="text-sm text-muted-foreground">Millisecond response times</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <span className="text-foreground font-medium">Continuous Learning</span>
              <span className="text-sm text-muted-foreground">Adaptive to new patterns</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <span className="text-foreground font-medium">24/7 Monitoring</span>
              <span className="text-sm text-muted-foreground">Always-on compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
