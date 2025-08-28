import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Eye, 
  Globe, 
  TrendingUp,
  Award,
  Lock,
  Database,
  AlertTriangle,
  RefreshCw,
  Target,
  BarChart3,
  Users,
  CreditCard,
  Building,
  Gavel
} from "lucide-react";

const ComplianceExcellence = () => {
  const regulatoryFrameworks = [
    {
      name: "Basel III",
      description: "Capital adequacy and risk management",
      icon: BarChart3,
      color: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800",
      region: "Global"
    },
    {
      name: "GDPR",
      description: "Data privacy and protection",
      icon: Lock,
      color: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800",
      region: "EU"
    },
    {
      name: "PCI-DSS",
      description: "Payment card security",
      icon: CreditCard,
      color: "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800",
      region: "Global"
    },
    {
      name: "SOX",
      description: "Financial reporting accuracy",
      icon: FileText,
      color: "bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-200 dark:border-orange-800",
      region: "US"
    },
    {
      name: "AML/CFT",
      description: "Anti-money laundering compliance",
      icon: Shield,
      color: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400",
      borderColor: "border-red-200 dark:border-red-800",
      region: "Global"
    },
    {
      name: "FFIEC",
      description: "US banking regulations",
      icon: Building,
      color: "bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      region: "US"
    },
    {
      name: "SEBI",
      description: "Securities market compliance",
      icon: TrendingUp,
      color: "bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400",
      borderColor: "border-teal-200 dark:border-teal-800",
      region: "India"
    },
    {
      name: "COSO",
      description: "Internal control frameworks",
      icon: Gavel,
      color: "bg-pink-50 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400",
      borderColor: "border-pink-200 dark:border-pink-800",
      region: "Global"
    }
  ];

  const complianceFeatures = [
    {
      icon: FileText,
      title: "Automated Regulatory Reporting",
      description: "Generate compliance reports automatically with real-time data aggregation and regulatory formatting",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      title: "Real-time Compliance Monitoring",
      description: "Continuous surveillance of all transactions and activities with instant alert generation",
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Audit-ready Decision Trails",
      description: "Complete explainability and documentation for every AI decision and compliance action",
      color: "text-purple-500"
    },
    {
      icon: RefreshCw,
      title: "Continuous Regulatory Change Management",
      description: "Automatic updates to compliance rules and policies based on regulatory changes",
      color: "text-orange-500"
    },
    {
      icon: Globe,
      title: "Cross-jurisdictional Compliance Support",
      description: "Unified platform supporting multiple regulatory frameworks across different regions",
      color: "text-teal-500"
    }
  ];

  const complianceStats = [
    {
      metric: "99.9%",
      label: "Regulatory Accuracy Rate",
      description: "Precision in compliance decisions",
      icon: Target,
      color: "text-green-500"
    },
    {
      metric: "Zero",
      label: "Compliance Violations",
      description: "In production environments",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      metric: "50+",
      label: "Financial Regulations",
      description: "Supported globally",
      icon: Globe,
      color: "text-purple-500"
    },
    {
      metric: "100%",
      label: "Audit Approval Rate",
      description: "Successful regulatory examinations",
      icon: Award,
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            Built for <span className="text-gradient">Regulatory Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our agentic AI platform is designed from the ground up to meet the most stringent 
            regulatory requirements across global financial services markets.
          </p>
        </div>

        {/* Compliance Statistics */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{stat.metric}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supported Regulatory Frameworks */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              <span className="text-gradient">Supported Regulatory</span> Frameworks
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of major financial regulations across global markets, 
              ensuring your operations remain compliant regardless of jurisdiction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className={`border-2 ${framework.borderColor} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${framework.color}`}>
                      <framework.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {framework.region}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{framework.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Features */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              <span className="text-gradient">Enterprise Compliance</span> Features
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities that ensure continuous compliance, reduce regulatory risk, 
              and streamline audit processes across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-accent/30 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regulatory Excellence Guarantee */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Regulatory Excellence <span className="text-gradient">Guarantee</span>
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We stand behind our compliance capabilities with industry-leading guarantees. 
                  Our platform has maintained a perfect compliance record across all deployments, 
                  with zero regulatory violations and 100% audit success rate.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">Continuous regulatory monitoring and updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">Automated compliance documentation and reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">Real-time risk assessment and mitigation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">Full audit trail and explainable AI decisions</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                  <Shield className="w-5 h-5 text-accent mr-2" />
                  Compliance Certifications
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold text-foreground">SOC 2 Type II</div>
                    <div className="text-xs text-muted-foreground">Security & Availability</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold text-foreground">ISO 27001</div>
                    <div className="text-xs text-muted-foreground">Information Security</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold text-foreground">PCI-DSS Level 1</div>
                    <div className="text-xs text-muted-foreground">Payment Security</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold text-foreground">GDPR Compliant</div>
                    <div className="text-xs text-muted-foreground">Data Protection</div>
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

export default ComplianceExcellence;
