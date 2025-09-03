import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle, 
  Globe, 
  Award, 
  Lock,
  FileCheck,
  Users,
  Clock
} from "lucide-react";

const ComplianceExcellence = () => {
  const complianceStats = [
    { icon: CheckCircle, metric: "100%", label: "Audit Success Rate" },
    { icon: Clock, metric: "24/7", label: "Compliance Monitoring" },
    { icon: Users, metric: "500+", label: "Certified Institutions" },
    { icon: Globe, metric: "50+", label: "Regulatory Frameworks" }
  ];

  const frameworks = [
    { name: "AML", region: "Global", color: "bg-blue-100 text-blue-700" },
    { name: "KYC", region: "Global", color: "bg-blue-100 text-blue-700" },
    { name: "GDPR", region: "EU", color: "bg-green-100 text-green-700" },
    { name: "Basel III", region: "Global", color: "bg-blue-100 text-blue-700" },
    { name: "SOX", region: "US", color: "bg-red-100 text-red-700" },
    { name: "PCI-DSS", region: "Global", color: "bg-blue-100 text-blue-700" },
    { name: "FFIEC", region: "US", color: "bg-red-100 text-red-700" },
    { name: "SEBI", region: "India", color: "bg-orange-100 text-orange-700" },
    { name: "IAIS", region: "Global", color: "bg-blue-100 text-blue-700" },
    { name: "Solvency II", region: "EU", color: "bg-green-100 text-green-700" },
    { name: "FCRA", region: "US", color: "bg-red-100 text-red-700" },
    { name: "BSA", region: "US", color: "bg-red-100 text-red-700" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Automated Compliance Monitoring",
      description: "Real-time monitoring of all transactions and activities against regulatory requirements with instant alerts and reporting."
    },
    {
      icon: FileCheck,
      title: "Audit Trail Management",
      description: "Comprehensive audit trails with immutable records, automated documentation, and regulatory reporting capabilities."
    },
    {
      icon: Lock,
      title: "Data Privacy & Security",
      description: "End-to-end encryption, data anonymization, and privacy-by-design architecture ensuring complete data protection."
    },
    {
      icon: Award,
      title: "Regulatory Updates",
      description: "Automatic updates to compliance rules and regulations with seamless integration and zero-downtime deployments."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Built for Regulatory Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed from the ground up to meet the most stringent regulatory 
            requirements across global financial markets and compliance frameworks.
          </p>
        </div>

        {/* Compliance Statistics */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {complianceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Frameworks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Supported Regulatory Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((framework, index) => (
              <Badge key={index} className={`${framework.color} border-0 px-4 py-2`}>
                {framework.name} ({framework.region})
              </Badge>
            ))}
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Enterprise Compliance Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-sm border-0">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security & Compliance Commitment */}
        <div className="bg-white rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Security & Compliance Commitment
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Building security and compliance into our platform from day one
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security-First Design</h4>
              <p className="text-gray-600 text-sm">Every feature is built with security and privacy as foundational principles.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Regulatory Ready</h4>
              <p className="text-gray-600 text-sm">Designed to meet current and future compliance requirements as we scale.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Led by compliance and security experts with deep financial industry experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceExcellence;