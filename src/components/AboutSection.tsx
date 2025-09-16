
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Globe, 
  Shield,
  Building2,
  TrendingUp,
  Clock,
  CheckCircle2
} from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: Building2, label: "Beta Partners", value: "3" },
    { icon: Globe, label: "Regions Targeted", value: "2" },
    { icon: Users, label: "Team Members", value: "4" },
    { icon: Shield, label: "Agent Infrastructure", value: "5" }
  ];

  const values = [
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Pushing the boundaries of compliance technology with cutting-edge AI and machine learning."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security and privacy protection for your most sensitive compliance data."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Streamlining compliance processes to save time and reduce operational costs significantly."
    },
    {
      icon: CheckCircle2,
      title: "Accuracy",
      description: "Delivering precise compliance outcomes with our 99.9% accuracy guarantee across all solutions."
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-neutral-dark">
            Security and privacy at our core
          </h2>
          <p className="text-lg text-neutral-dark/70">
            Trust is built on security and privacy. That's why we adhere to the
            highest industry standards, maintaining compliance and certifications to safeguard you
            and your customers.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-border/50 hover:border-accent/20 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-neutral-dark/60">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-dark">
                  {value.title}
                </h3>
                <p className="text-neutral-dark/60">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
