import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  CheckCircle, 
  Eye,
  Database
} from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      icon: Search,
      title: "Collect",
      description: "Understand user risk better by dynamically collecting a wide variety of passive, active, and behavioral signals while providing legitimate users best-in-class experiences and deterring fraudsters.",
      color: "#1a365d"
    },
    {
      icon: CheckCircle,
      title: "Verify and enrich",
      description: "Configure our extensive library of global verification methods and risk signals to verify any individual or business. You control enrichment logic and verification decisions — not a black box.",
      color: "#10b981"
    },
    {
      icon: Eye,
      title: "Understand and investigate",
      description: "Easily spot connections between users to proactively discover and block fraud rings, and streamline investigations with a hyper-customizable manual review hub.",
      color: "#1a365d"
    },
    {
      icon: Database,
      title: "Consolidate and streamline",
      description: "Centralize your identity data effortlessly within our platform, your source of truth and control center for automating processes and managing everything identity-related.",
      color: "#10b981"
    }
  ];

  return (
    <section className="py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">
            Orchestrate and automate identity across the entire life cycle
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div 
                    className="flex-shrink-0 p-3 rounded-lg"
                    style={{ backgroundColor: `${process.color}15` }}
                  >
                    <process.icon 
                      className="h-8 w-8" 
                      style={{ color: process.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-neutral-dark">
                      {process.title}
                    </h3>
                    <p className="text-neutral-dark/70 leading-relaxed">
                      {process.description}
                    </p>
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

export default ProcessSection;
