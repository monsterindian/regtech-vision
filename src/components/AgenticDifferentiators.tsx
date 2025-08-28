import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Brain, 
  Eye, 
  Shield, 
  Network, 
  Target,
  CheckCircle,
  X,
  ArrowRight,
  Zap,
  RefreshCw,
  Users,
  FileText,
  Layers
} from "lucide-react";

const AgenticDifferentiators = () => {
  const comparisonData = [
    {
      category: "Decision Making",
      traditional: {
        title: "Rule-based, rigid",
        description: "Fixed rules and predefined workflows",
        icon: X,
        color: "text-red-500"
      },
      agentic: {
        title: "Autonomous reasoning and adaptation",
        description: "Dynamic decision-making based on context and goals",
        icon: CheckCircle,
        color: "text-green-500"
      }
    },
    {
      category: "Threat Detection",
      traditional: {
        title: "Reactive monitoring",
        description: "Responds to known patterns after incidents occur",
        icon: X,
        color: "text-red-500"
      },
      agentic: {
        title: "Proactive threat detection",
        description: "Anticipates and prevents threats before they materialize",
        icon: CheckCircle,
        color: "text-green-500"
      }
    },
    {
      category: "Human Oversight",
      traditional: {
        title: "Manual oversight required",
        description: "Constant human intervention for complex decisions",
        icon: X,
        color: "text-red-500"
      },
      agentic: {
        title: "Self-governing with human-in-the-loop",
        description: "Autonomous operation with strategic human guidance",
        icon: CheckCircle,
        color: "text-green-500"
      }
    },
    {
      category: "Risk Assessment",
      traditional: {
        title: "Static risk models",
        description: "Fixed algorithms that require manual updates",
        icon: X,
        color: "text-red-500"
      },
      agentic: {
        title: "Dynamic, learning risk assessment",
        description: "Continuously evolving models that adapt to new patterns",
        icon: CheckCircle,
        color: "text-green-500"
      }
    },
    {
      category: "System Integration",
      traditional: {
        title: "Siloed systems",
        description: "Isolated tools with limited cross-system communication",
        icon: X,
        color: "text-red-500"
      },
      agentic: {
        title: "Coordinated multi-agent workflows",
        description: "Seamless collaboration between specialized agents",
        icon: CheckCircle,
        color: "text-green-500"
      }
    },
    {
      category: "Alert Management",
      traditional: {
        title: "High false positives",
        description: "90%+ false alerts requiring manual investigation",
        icon: X,
        color: "text-red-500"
      },
      agentic: {
        title: "Contextual understanding, fewer alerts",
        description: "80% reduction in false positives through intelligent analysis",
        icon: CheckCircle,
        color: "text-green-500"
      }
    }
  ];

  const keyDifferentiators = [
    {
      icon: Target,
      title: "Goal-oriented Autonomous Behavior",
      description: "AI agents understand objectives and work independently to achieve compliance goals without constant supervision",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Brain,
      title: "Multi-step Reasoning and Decision-making",
      description: "Complex logical reasoning chains that consider multiple factors and regulatory requirements simultaneously",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: RefreshCw,
      title: "Self-improving Through Continuous Learning",
      description: "Machine learning models that evolve and improve performance based on new data and outcomes",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: FileText,
      title: "Explainable AI for Regulatory Transparency",
      description: "Full audit trails and decision explanations that satisfy regulatory requirements and compliance audits",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      icon: Layers,
      title: "Seamless Integration with Existing Systems",
      description: "API-first architecture that connects with core banking, CRM, and regulatory systems without disruption",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            Why <span className="text-gradient">Agentic AI</span> Beats Traditional Automation
          </h2>
          <p className="text-lg text-muted-foreground">
            See the fundamental differences that make our agentic AI solutions superior to 
            traditional rule-based systems and robotic process automation.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-muted/30 border-b border-border">
              <div className="p-6 border-r border-border lg:border-r-0">
                <h3 className="text-lg font-semibold text-center text-muted-foreground">Capability</h3>
              </div>
              <div className="p-6 border-r border-border">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-muted-foreground">Traditional AI/RPA</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center space-x-2">
                  <Bot className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-accent">Our Agentic AI</h3>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 border-b border-border last:border-b-0">
                {/* Category */}
                <div className="p-6 bg-muted/10 border-r border-border lg:border-r-0 flex items-center">
                  <h4 className="font-semibold text-foreground">{row.category}</h4>
                </div>

                {/* Traditional AI */}
                <div className="p-6 border-r border-border">
                  <div className="flex items-start space-x-3">
                    <row.traditional.icon className={`w-5 h-5 mt-0.5 ${row.traditional.color} flex-shrink-0`} />
                    <div>
                      <h5 className="font-medium text-foreground mb-1">{row.traditional.title}</h5>
                      <p className="text-sm text-muted-foreground">{row.traditional.description}</p>
                    </div>
                  </div>
                </div>

                {/* Agentic AI */}
                <div className="p-6 bg-accent/5">
                  <div className="flex items-start space-x-3">
                    <row.agentic.icon className={`w-5 h-5 mt-0.5 ${row.agentic.color} flex-shrink-0`} />
                    <div>
                      <h5 className="font-medium text-foreground mb-1">{row.agentic.title}</h5>
                      <p className="text-sm text-muted-foreground">{row.agentic.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              <span className="text-gradient">Key Differentiators</span> That Set Us Apart
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our agentic AI goes beyond automation to deliver intelligent, autonomous compliance solutions 
              that think, learn, and adapt like human experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {keyDifferentiators.map((differentiator, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-accent/30 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${differentiator.bgColor} flex items-center justify-center mb-4`}>
                    <differentiator.icon className={`w-6 h-6 ${differentiator.color}`} />
                  </div>
                  <CardTitle className="text-lg">{differentiator.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{differentiator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  The Future of <span className="text-gradient">Compliance Automation</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  While traditional systems require constant maintenance and human oversight, 
                  our agentic AI operates autonomously, learns continuously, and delivers 
                  superior results with minimal intervention.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-background">Autonomous Operation</Badge>
                  <Badge variant="outline" className="bg-background">Continuous Learning</Badge>
                  <Badge variant="outline" className="bg-background">Regulatory Compliant</Badge>
                  <Badge variant="outline" className="bg-background">Enterprise Ready</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">80% Reduction</h4>
                    <p className="text-sm text-muted-foreground">in false positive alerts</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Real-time Processing</h4>
                    <p className="text-sm text-muted-foreground">Millisecond response times</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Self-Learning</h4>
                    <p className="text-sm text-muted-foreground">Continuous model improvement</p>
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

export default AgenticDifferentiators;
