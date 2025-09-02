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
      description: "Autonomous identity verification and onboarding across insurance operations with real-time compliance monitoring.",
      color: "#1a365d",
      hoverShadow: "hover:shadow-primary/25",
      href: "/solutions/kyc-automation"
    },
    {
      icon: CreditCard,
      title: "Lending Compliance",
      description: "Intelligent loan underwriting and credit assessment with automated regulatory compliance checking.",
      color: "#10b981",
      hoverShadow: "hover:shadow-accent-green/25",
      href: "/solutions/lending-compliance"
    },
    {
      icon: Activity,
      title: "Transaction Monitoring",
      description: "Real-time suspicious activity detection with adaptive pattern recognition for emerging threats.",
      color: "#1a365d",
      hoverShadow: "hover:shadow-primary/25",
      href: "/solutions/transaction-monitoring"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Continuous regulatory monitoring with automated policy alignment and predictive risk assessment.",
      color: "#10b981",
      hoverShadow: "hover:shadow-accent-green/25",
      href: "/solutions/risk-management"
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">
            A solution for every scenario
          </h2>
          <p className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
            Design your ideal end-to-end compliance flow to convert more users, streamline operations, and combat fraud.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md hover:shadow-xl ${solution.hoverShadow} transition-all duration-300 p-6 space-y-4 border-l-4 hover:-translate-y-2 group`}
                style={{ borderLeftColor: solution.color }}
              >
                <solution.icon 
                  className="w-8 h-8 transition-colors duration-300 group-hover:scale-110" 
                  style={{ color: solution.color }}
                />
                <h3 className="text-xl font-semibold text-neutral-dark group-hover:text-neutral-dark/80 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-base text-neutral-dark/60 leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-6">
                  <Link to={solution.href}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 h-auto font-medium hover:underline transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: solution.color }}
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-16 bg-white relative overflow-hidden border-t border-neutral-light">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-green rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-neutral-dark mb-4">Proven Results Across the Industry</h3>
              <p className="text-neutral-dark/70 text-lg">Join hundreds of financial institutions transforming their compliance operations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  100%
                </div>
                <div className="text-neutral-dark font-semibold text-lg">Autonomous</div>
                <div className="text-neutral-dark/60 text-sm mt-1">Zero manual intervention</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-accent-green text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  24/7
                </div>
                <div className="text-neutral-dark font-semibold text-lg">Monitoring</div>
                <div className="text-neutral-dark/60 text-sm mt-1">Continuous surveillance</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  90%
                </div>
                <div className="text-neutral-dark font-semibold text-lg">Cost Reduction</div>
                <div className="text-neutral-dark/60 text-sm mt-1">Average savings achieved</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-accent-green text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  99.9%
                </div>
                <div className="text-neutral-dark font-semibold text-lg">Uptime SLA</div>
                <div className="text-neutral-dark/60 text-sm mt-1">Guaranteed availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;