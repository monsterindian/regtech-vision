
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserCheck, 
  Shield, 
  AlertTriangle, 
  FileText, 
  Leaf, 
  Users,
  Brain,
  Zap,
  Globe,
  BarChart3,
  Lock,
  Target
} from "lucide-react";

const SolutionsOverview = () => {
  const solutionCategories = [
    {
      icon: UserCheck,
      title: "Identity & Onboarding",
      description: "Digital identity verification with biometric authentication and cross-border validation",
      badge: "Core",
      color: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Risk Management",
      description: "Credit risk scoring, market risk analysis, and operational risk assessment with explainable AI",
      badge: "Advanced",
      color: "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Shield,
      title: "Financial Crime Prevention",
      description: "Real-time transaction monitoring, fraud detection, and sanctions screening",
      badge: "Critical",
      color: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400"
    },
    {
      icon: FileText,
      title: "Regulatory Reporting",
      description: "CCAR, CECL, MiFID II, EMIR automation with 100% accuracy guarantee",
      badge: "Essential",
      color: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400"
    },
    {
      icon: Leaf,
      title: "ESG & Sustainability",
      description: "Green taxonomy classification, carbon footprint calculation, and climate stress testing",
      badge: "Innovation",
      color: "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "AI-powered segmentation, personalized recommendations, and churn prediction",
      badge: "Growth",
      color: "bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400"
    }
  ];

  const features = [
    { icon: Brain, text: "Explainable AI algorithms" },
    { icon: Zap, text: "Real-time processing" },
    { icon: Globe, text: "Global regulatory coverage" },
    { icon: Lock, text: "Enterprise-grade security" },
    { icon: Target, text: "99.9% accuracy guarantee" },
    { icon: AlertTriangle, text: "Proactive risk detection" }
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            Comprehensive Compliance Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From identity verification to regulatory reporting, our AI-powered platform 
            covers the entire compliance lifecycle with unprecedented accuracy and efficiency.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutionCategories.map((solution, index) => (
            <Card 
              key={index} 
              className="compliance-card group cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${solution.color}`}>
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {solution.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Platform Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
