import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  CreditCard, 
  Activity, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Clock,
  FileText,
  Database,
  Eye,
  Bot,
  ArrowRight,
  Target,
  Zap
} from "lucide-react";

const UseCaseScenarios = () => {
  const useCases = [
    {
      id: "insurance-kyc",
      icon: Users,
      title: "Insurance KYC Automation",
      subtitle: "Autonomous Policyholder Onboarding",
      description: "Our AI agents automatically process policyholder applications, verify identities against multiple databases, detect fraudulent documents, and complete onboarding in under 5 minutes while maintaining 100% regulatory compliance.",
      problem: {
        title: "Traditional Challenge",
        points: [
          "Manual document verification takes 2-5 business days",
          "High error rates in identity verification (15-20%)",
          "Fraudulent applications slip through manual reviews",
          "Regulatory compliance requires extensive documentation"
        ]
      },
      solution: {
        title: "Agentic AI Solution",
        points: [
          "Autonomous document processing with OCR and NLP validation",
          "Real-time identity verification across 50+ global databases",
          "AI-powered fraud detection using behavioral biometrics",
          "Automated compliance documentation and audit trails"
        ]
      },
      benefits: [
        { metric: "5 minutes", label: "Average onboarding time", icon: Clock },
        { metric: "100%", label: "Regulatory compliance", icon: CheckCircle },
        { metric: "95%", label: "Fraud detection accuracy", icon: Shield },
        { metric: "80%", label: "Cost reduction", icon: TrendingUp }
      ],
      frameworks: ["GDPR", "KYC", "AML", "IAIS", "Solvency II"],
      color: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      id: "lending-risk",
      icon: CreditCard,
      title: "Lending Risk Assessment",
      subtitle: "Intelligent Credit Decision Engine",
      description: "Autonomous agents analyze 200+ data points including transaction patterns, social signals, and alternative credit data to provide real-time loan decisions with 70% faster processing and 50% fewer defaults.",
      problem: {
        title: "Traditional Challenge",
        points: [
          "Limited data sources lead to incomplete risk profiles",
          "Manual underwriting takes 7-14 days for decisions",
          "High default rates due to inadequate risk assessment",
          "Regulatory compliance across multiple jurisdictions"
        ]
      },
      solution: {
        title: "Agentic AI Solution",
        points: [
          "Multi-source data aggregation from 200+ alternative sources",
          "Real-time credit scoring with machine learning models",
          "Behavioral pattern analysis for fraud prevention",
          "Automated regulatory compliance checking and reporting"
        ]
      },
      benefits: [
        { metric: "70%", label: "Faster processing", icon: Zap },
        { metric: "50%", label: "Fewer defaults", icon: Target },
        { metric: "200+", label: "Data points analyzed", icon: Database },
        { metric: "24/7", label: "Continuous assessment", icon: Eye }
      ],
      frameworks: ["Basel III", "FCRA", "ECOA", "TILA", "GDPR"],
      color: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      id: "transaction-monitoring",
      icon: Activity,
      title: "Transaction Monitoring",
      subtitle: "Real-time Financial Crime Detection",
      description: "AI agents continuously monitor millions of transactions, detecting suspicious patterns in real-time, automatically filing SARs, and reducing false positives by 80% while catching 95% of actual financial crimes.",
      problem: {
        title: "Traditional Challenge",
        points: [
          "Rule-based systems generate 90%+ false positives",
          "Manual investigation of alerts takes weeks",
          "Emerging fraud patterns go undetected",
          "Regulatory reporting is time-intensive and error-prone"
        ]
      },
      solution: {
        title: "Agentic AI Solution",
        points: [
          "ML-powered pattern recognition for emerging threats",
          "Real-time transaction scoring and risk assessment",
          "Automated SAR generation and regulatory filing",
          "Behavioral analytics for customer profiling and anomaly detection"
        ]
      },
      benefits: [
        { metric: "80%", label: "Reduction in false positives", icon: Target },
        { metric: "95%", label: "Financial crime detection", icon: Shield },
        { metric: "Real-time", label: "Transaction monitoring", icon: Eye },
        { metric: "Automated", label: "SAR filing", icon: FileText }
      ],
      frameworks: ["AML", "CFT", "BSA", "FATF", "PCI-DSS"],
      color: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      id: "regulatory-compliance",
      icon: Shield,
      title: "Regulatory Compliance",
      subtitle: "Autonomous Compliance Management",
      description: "Our compliance agents automatically track regulatory changes, update internal policies, generate audit reports, and ensure continuous adherence to Basel III, GDPR, PCI-DSS, and local regulations.",
      problem: {
        title: "Traditional Challenge",
        points: [
          "Manual tracking of regulatory changes across jurisdictions",
          "Policy updates lag behind regulatory requirements",
          "Audit preparation requires months of manual work",
          "Compliance gaps discovered only during examinations"
        ]
      },
      solution: {
        title: "Agentic AI Solution",
        points: [
          "Continuous monitoring of regulatory updates globally",
          "Automated policy alignment and documentation updates",
          "Real-time compliance gap analysis and remediation",
          "Predictive compliance risk assessment and mitigation"
        ]
      },
      benefits: [
        { metric: "100%", label: "Regulatory coverage", icon: CheckCircle },
        { metric: "Real-time", label: "Policy updates", icon: Zap },
        { metric: "Automated", label: "Audit reporting", icon: FileText },
        { metric: "Predictive", label: "Risk assessment", icon: TrendingUp }
      ],
      frameworks: ["Basel III", "GDPR", "PCI-DSS", "SOX", "COSO", "ISO 27001"],
      color: "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            Real-World <span className="text-gradient">Use Case Scenarios</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how our agentic AI solutions transform compliance operations across insurance, lending, 
            and banking with measurable results and regulatory adherence.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <Card 
              key={useCase.id} 
              className={`border-2 ${useCase.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-lg ${useCase.color}`}>
                      <useCase.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                      <p className="text-lg text-muted-foreground">{useCase.subtitle}</p>
                    </div>
                  </div>
                  <Bot className="h-8 w-8 text-accent" />
                </div>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  {useCase.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Problem vs Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Problem Statement */}
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="font-semibold text-red-700 dark:text-red-400">{useCase.problem.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {useCase.problem.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-red-700 dark:text-red-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Agentic AI Solution */}
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                    <div className="flex items-center mb-4">
                      <Bot className="h-5 w-5 text-green-500 mr-2" />
                      <h4 className="font-semibold text-green-700 dark:text-green-400">{useCase.solution.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {useCase.solution.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-green-700 dark:text-green-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quantified Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-accent mr-2" />
                    Quantified Benefits
                  </h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="bg-background rounded-lg p-4 border border-border text-center">
                        <div className="flex justify-center mb-2">
                          <benefit.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-accent mb-1">{benefit.metric}</div>
                        <div className="text-xs text-muted-foreground">{benefit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Frameworks */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    Compliance Frameworks Addressed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.frameworks.map((framework, frameworkIndex) => (
                      <Badge key={frameworkIndex} variant="outline" className="text-sm px-3 py-1">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <Button className="w-full sm:w-auto">
                    Learn More About This Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-accent/10 rounded-2xl p-8 border border-accent/20 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Ready to Transform Your <span className="text-gradient">Compliance Operations?</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            See how our agentic AI solutions can deliver similar results for your organization. 
            Schedule a personalized demo to explore use cases specific to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseScenarios;
