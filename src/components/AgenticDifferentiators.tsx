import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, TrendingUp, Zap, Shield, Bot } from "lucide-react";

const AgenticDifferentiators = () => {
  const comparisonData = [
    {
      category: "Decision Making",
      traditional: "Rule-based, static responses",
      agentic: "Autonomous, context-aware decisions"
    },
    {
      category: "Learning Capability",
      traditional: "Manual updates required",
      agentic: "Continuous self-learning and adaptation"
    },
    {
      category: "Scalability",
      traditional: "Linear scaling with manual intervention",
      agentic: "Dynamic auto-scaling based on demand"
    },
    {
      category: "Compliance Updates",
      traditional: "Manual regulatory updates",
      agentic: "Automatic regulatory change detection"
    },
    {
      category: "Error Handling",
      traditional: "Stops on exceptions",
      agentic: "Self-healing and error recovery"
    }
  ];

  const differentiators = [
    {
      icon: Bot,
      title: "Autonomous Operation",
      description: "Agents operate independently without human intervention, making intelligent decisions based on real-time data and regulatory requirements."
    },
    {
      icon: Zap,
      title: "Adaptive Intelligence",
      description: "Machine learning algorithms continuously improve performance and adapt to new compliance patterns and regulatory changes."
    },
    {
      icon: Shield,
      title: "Proactive Compliance",
      description: "Predictive analytics identify potential compliance issues before they occur, enabling preventive action rather than reactive responses."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            What Makes Our Agentic AI Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike traditional AI and RPA solutions, our agentic AI operates autonomously, 
            learns continuously, and adapts to changing regulatory landscapes.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">
                Traditional AI/RPA vs Our Agentic AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 text-lg font-semibold text-foreground">Capability</th>
                      <th className="text-left py-4 px-6 text-lg font-semibold text-foreground">Traditional AI/RPA</th>
                      <th className="text-left py-4 px-6 text-lg font-semibold text-foreground">Our Agentic AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-6 font-semibold text-foreground">{item.category}</td>
                        <td className="py-4 px-6 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <X className="h-4 w-4 text-gray-400 flex-shrink-0" />
                            <span>{item.traditional}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span>{item.agentic}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Differentiators */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Key Differentiators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="bg-white shadow-sm border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future of Compliance */}
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            The Future of Compliance Automation
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join leading financial institutions in adopting autonomous AI agents that transform 
            compliance from a cost center into a competitive advantage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Institutions Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Compliance Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticDifferentiators;