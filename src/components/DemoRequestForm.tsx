import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    organizationType: "",
    primaryUseCase: "",
    complianceChallenges: "",
    regulatoryFrameworks: [],
    transactionVolume: "",
    message: ""
  });

  const companyRoles = [
    "Chief Compliance Officer",
    "Compliance Manager", 
    "Risk Officer",
    "Chief Risk Officer",
    "CTO/Technology Leader",
    "Procurement Manager",
    "Other"
  ];

  const organizationTypes = [
    "Bank",
    "Insurance", 
    "Lending",
    "Fintech",
    "Other"
  ];

  const primaryUseCases = [
    "KYC Automation",
    "Fraud Detection",
    "Transaction Monitoring", 
    "Risk Management",
    "Regulatory Compliance"
  ];

  const regulatoryFrameworkOptions = [
    "AML", "KYC", "GDPR", "Basel III", "SOX", "PCI-DSS", "FFIEC", "SEBI", "Other"
  ];

  const transactionVolumes = [
    "< 1,000/day",
    "1,000 - 10,000/day",
    "10,000 - 100,000/day", 
    "100,000 - 1M/day",
    "> 1M/day"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFrameworkChange = (framework: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      regulatoryFrameworks: checked 
        ? [...prev.regulatoryFrameworks, framework]
        : prev.regulatoryFrameworks.filter(f => f !== framework)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
  };

  const demoBenefits = [
    "Live demonstration of agentic AI agents in action",
    "Customized use case scenarios for your industry",
    "ROI analysis and implementation roadmap",
    "Technical architecture review and integration planning"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Request Your Agentic AI Demo
              </h2>
              <p className="text-xl text-gray-600">
                See how autonomous AI agents can transform your compliance operations. 
                Get a personalized demonstration tailored to your specific BFSI use cases.
              </p>
            </div>

            <Card className="bg-white shadow-sm border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Demo Request Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Business Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="role" className="text-sm font-medium text-gray-700">Role</Label>
                      <Select onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {companyRoles.map((role) => (
                            <SelectItem key={role} value={role}>{role}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* BFSI Specific Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organizationType" className="text-sm font-medium text-gray-700">Organization Type</Label>
                      <Select onValueChange={(value) => handleInputChange("organizationType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          {organizationTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="primaryUseCase" className="text-sm font-medium text-gray-700">Primary Use Case</Label>
                      <Select onValueChange={(value) => handleInputChange("primaryUseCase", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select primary use case" />
                        </SelectTrigger>
                        <SelectContent>
                          {primaryUseCases.map((useCase) => (
                            <SelectItem key={useCase} value={useCase}>{useCase}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="transactionVolume" className="text-sm font-medium text-gray-700">Transaction Volume</Label>
                    <Select onValueChange={(value) => handleInputChange("transactionVolume", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select transaction volume" />
                      </SelectTrigger>
                      <SelectContent>
                        {transactionVolumes.map((volume) => (
                          <SelectItem key={volume} value={volume}>{volume}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">Regulatory Frameworks</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {regulatoryFrameworkOptions.map((framework) => (
                        <div key={framework} className="flex items-center space-x-2">
                          <Checkbox
                            id={framework}
                            checked={formData.regulatoryFrameworks.includes(framework)}
                            onCheckedChange={(checked) => handleFrameworkChange(framework, checked as boolean)}
                          />
                          <Label htmlFor={framework} className="text-sm text-gray-600">{framework}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="complianceChallenges" className="text-sm font-medium text-gray-700">Current Compliance Challenges</Label>
                    <Textarea
                      id="complianceChallenges"
                      value={formData.complianceChallenges}
                      onChange={(e) => handleInputChange("complianceChallenges", e.target.value)}
                      placeholder="Describe your current compliance challenges and pain points..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Request Agentic AI Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div>
            <Card className="bg-white shadow-sm border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demoBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Trusted by Leading Financial Institutions
              </h3>
              <p className="text-gray-600 mb-4">
                Join 500+ financial institutions worldwide that have transformed their 
                compliance operations with our agentic AI platform.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600">Compliance Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestForm;