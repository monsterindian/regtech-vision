import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  UserCheck, 
  CreditCard,
  Activity,
  Shield,
  ArrowRight
} from "lucide-react";

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: UserCheck,
      title: "KYC Automation",
      description: "Autonomous identity verification and onboarding across insurance operations with real-time compliance monitoring."
    },
    {
      icon: CreditCard,
      title: "Lending Compliance",
      description: "Intelligent loan underwriting and credit assessment with automated regulatory compliance checking."
    },
    {
      icon: Activity,
      title: "Transaction Monitoring",
      description: "Real-time suspicious activity detection with adaptive pattern recognition for emerging threats."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Continuous regulatory monitoring with automated policy alignment and predictive risk assessment."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Agentic AI Solutions for BFSI
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Deploy autonomous AI agents that revolutionize compliance operations across 
            insurance, lending, and banking with intelligent automation.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-8 md:space-y-0">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 space-y-4">
                <solution.icon className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-6">
                  <Link to="/solutions">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-20 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Autonomous</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;