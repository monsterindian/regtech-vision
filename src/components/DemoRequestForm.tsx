
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ArrowRight, Calendar, Users, Building2 } from "lucide-react";

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
    { id: "basel3", label: "Basel III" },
    { id: "gdpr", label: "GDPR" },
    { id: "pcidss", label: "PCI-DSS" },
    { id: "aml", label: "AML/CFT" },
    { id: "sox", label: "SOX" },
    { id: "ffiec", label: "FFIEC" },
    { id: "sebi", label: "SEBI" },
    { id: "coso", label: "COSO" }
  ];

  const transactionVolumes = [
    "<10K daily",
    "10K-100K daily",
    "100K-1M daily", 
    ">1M daily"
  ];

  const handleFrameworkChange = (frameworkId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      regulatoryFrameworks: checked 
        ? [...prev.regulatoryFrameworks, frameworkId]
        : prev.regulatoryFrameworks.filter(id => id !== frameworkId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-foreground">
              Request <span className="text-gradient">Agentic AI Demo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our AI agents can transform your compliance operations in 30 minutes. 
              Get a personalized demonstration tailored to your specific BFSI use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Demo Benefits */}
            <div className="space-y-6">
              <Card className="border-accent/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <CardTitle className="text-lg">What to Expect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Live agentic AI demonstrations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>BFSI use case scenarios</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Regulatory compliance walkthrough</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>ROI analysis for your organization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Trusted By</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>500+ Financial Institutions</p>
                    <p>Leading Banks & Credit Unions</p>
                    <p>Fintech & Neobanks</p>
                    <p>Regulatory Bodies</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Demo Request Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-accent" />
                    <span>Request Your Demo</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role *</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            {companyRoles.map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* BFSI Specific Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="organizationType">Organization Type *</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, organizationType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select organization type" />
                          </SelectTrigger>
                          <SelectContent>
                            {organizationTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="primaryUseCase">Primary Use Case *</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, primaryUseCase: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select primary use case" />
                          </SelectTrigger>
                          <SelectContent>
                            {primaryUseCases.map((useCase) => (
                              <SelectItem key={useCase} value={useCase}>
                                {useCase}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transactionVolume">Transaction Volume *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, transactionVolume: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select daily transaction volume" />
                        </SelectTrigger>
                        <SelectContent>
                          {transactionVolumes.map((volume) => (
                            <SelectItem key={volume} value={volume}>
                              {volume}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Current Compliance Challenges */}
                    <div className="space-y-2">
                      <Label htmlFor="complianceChallenges">Current Compliance Challenges</Label>
                      <Textarea
                        id="complianceChallenges"
                        placeholder="Describe your current compliance challenges and pain points..."
                        value={formData.complianceChallenges}
                        onChange={(e) => setFormData(prev => ({ ...prev, complianceChallenges: e.target.value }))}
                        rows={3}
                      />
                    </div>

                    {/* Regulatory Frameworks */}
                    <div className="space-y-3">
                      <Label>Regulatory Frameworks (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {regulatoryFrameworkOptions.map((framework) => (
                          <div key={framework.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={framework.id}
                              onCheckedChange={(checked) => handleFrameworkChange(framework.id, checked as boolean)}
                            />
                            <Label htmlFor={framework.id} className="text-sm font-normal">
                              {framework.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your specific requirements or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                      Request Agentic AI Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestForm;
