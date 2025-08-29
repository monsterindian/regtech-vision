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
      color: "#10B981",
      hoverShadow: "hover:shadow-green-500/25",
      href: "/solutions/kyc-automation"
    },
    {
      icon: CreditCard,
      title: "Lending Compliance",
      description: "Intelligent loan underwriting and credit assessment with automated regulatory compliance checking.",
      color: "#3B82F6",
      hoverShadow: "hover:shadow-blue-500/25",
      href: "/solutions/lending-compliance"
    },
    {
      icon: Activity,
      title: "Transaction Monitoring",
      description: "Real-time suspicious activity detection with adaptive pattern recognition for emerging threats.",
      color: "#F59E0B",
      hoverShadow: "hover:shadow-amber-500/25",
      href: "/solutions/transaction-monitoring"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Continuous regulatory monitoring with automated policy alignment and predictive risk assessment.",
      color: "#8B5CF6",
      hoverShadow: "hover:shadow-purple-500/25",
      href: "/solutions/risk-management"
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Agentic AI Solutions for BFSI
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Deploy autonomous AI agents that revolutionize compliance operations across 
            insurance, lending, and banking with intelligent automation.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md hover:shadow-xl ${solution.hoverShadow} transition-all duration-300 p-6 space-y-4 border-l-4 hover:-translate-y-2 animate-fade-in-up group`}
                style={{ borderLeftColor: solution.color, animationDelay: `${index * 100}ms` }}
              >
                <solution.icon 
                  className="w-8 h-8 transition-colors duration-300 group-hover:scale-110" 
                  style={{ color: solution.color }}
                />
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
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
        <div className="mt-20 py-16 bg-[#1E293B] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF7A00] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FF7A00] rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Proven Results Across the Industry</h3>
              <p className="text-blue-200 text-lg">Join hundreds of financial institutions transforming their compliance operations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <div className="text-4xl font-bold bg-[#FF7A00] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  100%
                </div>
                <div className="text-white font-semibold text-lg">Autonomous</div>
                <div className="text-blue-200 text-sm mt-1">Zero manual intervention</div>
              </div>
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-bold bg-[#FF7A00] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  24/7
                </div>
                <div className="text-white font-semibold text-lg">Monitoring</div>
                <div className="text-blue-200 text-sm mt-1">Continuous surveillance</div>
              </div>
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold bg-[#FF7A00] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  90%
                </div>
                <div className="text-white font-semibold text-lg">Cost Reduction</div>
                <div className="text-blue-200 text-sm mt-1">Average savings achieved</div>
              </div>
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl font-bold bg-[#FF7A00] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  99.9%
                </div>
                <div className="text-white font-semibold text-lg">Uptime SLA</div>
                <div className="text-blue-200 text-sm mt-1">Guaranteed availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;