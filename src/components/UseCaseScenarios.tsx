import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserCheck, 
  CreditCard, 
  Activity, 
  Shield,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle
} from "lucide-react";

const UseCaseScenarios = () => {
  const useCases = [
    {
      id: "insurance-kyc",
      icon: UserCheck,
      title: "Insurance KYC Automation",
      subtitle: "Autonomous Identity Verification",
      description: "Streamline customer onboarding with intelligent document verification and risk assessment.",
      benefits: [
        { icon: TrendingUp, metric: "85%", label: "Faster Onboarding" },
        { icon: DollarSign, metric: "60%", label: "Cost Reduction" },
        { icon: CheckCircle, metric: "99.2%", label: "Accuracy Rate" },
        { icon: Clock, metric: "24/7", label: "Processing" }
      ],
      frameworks: ["GDPR", "KYC", "AML", "IAIS"]
    },
    {
      id: "lending-compliance",
      icon: CreditCard,
      title: "Lending Compliance Automation",
      subtitle: "Intelligent Credit Assessment",
      description: "Automate loan underwriting and regulatory compliance with real-time risk evaluation.",
      benefits: [
        { icon: TrendingUp, metric: "70%", label: "Faster Decisions" },
        { icon: DollarSign, metric: "45%", label: "Lower Default Rate" },
        { icon: CheckCircle, metric: "98.5%", label: "Compliance Rate" },
        { icon: Clock, metric: "2min", label: "Avg Decision Time" }
      ],
      frameworks: ["Capital Requirements", "Fair Lending", "Credit Assessment", "Consumer Protection"]
    },
    {
      id: "transaction-monitoring",
      icon: Activity,
      title: "Transaction Monitoring",
      subtitle: "Real-Time Fraud Detection",
      description: "Monitor transactions continuously with adaptive pattern recognition for emerging threats.",
      benefits: [
        { icon: TrendingUp, metric: "95%", label: "Detection Rate" },
        { icon: DollarSign, metric: "80%", label: "False Positive Reduction" },
        { icon: CheckCircle, metric: "99.9%", label: "Uptime" },
        { icon: Clock, metric: "<1sec", label: "Response Time" }
      ],
      frameworks: ["AML", "Financial Crime Prevention", "International Standards", "Payment Security"]
    },
    {
      id: "risk-management",
      icon: Shield,
      title: "Risk & Compliance Management",
      subtitle: "Continuous Regulatory Monitoring",
      description: "Maintain regulatory alignment with automated policy updates and predictive risk assessment.",
      benefits: [
        { icon: TrendingUp, metric: "90%", label: "Risk Reduction" },
        { icon: DollarSign, metric: "75%", label: "Operational Savings" },
        { icon: CheckCircle, metric: "100%", label: "Audit Readiness" },
        { icon: Clock, metric: "Real-time", label: "Monitoring" }
      ],
      frameworks: ["Financial Controls", "Risk Management", "Information Security", "Data Privacy"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Real-World Use Case Scenarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our agentic AI solutions transform compliance operations across insurance, lending, 
            and banking with measurable results and regulatory adherence.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <Card key={useCase.id} className="bg-white shadow-sm border-0">
              <CardHeader className="pb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">{useCase.title}</CardTitle>
                    <p className="text-lg text-gray-600">{useCase.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{useCase.description}</p>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-6">Key Benefits</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="bg-gray-50 rounded-lg p-6 text-center">
                        <benefit.icon className="h-6 w-6 text-gray-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                        <div className="text-sm text-gray-600">{benefit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Frameworks */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Regulatory Frameworks</h4>
                  <div className="flex flex-wrap gap-3">
                    {useCase.frameworks.map((framework, frameworkIndex) => (
                      <Badge key={frameworkIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseScenarios;