
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
    companySize: "",
    challenges: [],
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

  const companySizes = [
    "1-50 employees",
    "51-200 employees", 
    "201-1,000 employees",
    "1,001-5,000 employees",
    "5,000+ employees"
  ];

  const complianceChallenges = [
    { id: "reporting", label: "Regulatory Reporting" },
    { id: "monitoring", label: "Transaction Monitoring" },
    { id: "kyc", label: "KYC/AML Compliance" },
    { id: "risk", label: "Risk Management" },
    { id: "esg", label: "ESG & Sustainability" },
    { id: "fraud", label: "Fraud Prevention" },
    { id: "automation", label: "Process Automation" },
    { id: "costs", label: "Compliance Costs" }
  ];

  const handleChallengeChange = (challengeId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, challengeId]
        : prev.challenges.filter(id => id !== challengeId)
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
              See ComplianceAI in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Request a personalized demo tailored to your compliance challenges. 
              Our experts will show you how to transform your compliance operations.
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
                      <span>Customized demo based on your needs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Live AI agent demonstrations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>ROI calculation for your institution</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Q&A with compliance experts</span>
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

                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Compliance Challenges */}
                    <div className="space-y-3">
                      <Label>Primary Compliance Challenges (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {complianceChallenges.map((challenge) => (
                          <div key={challenge.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={challenge.id}
                              onCheckedChange={(checked) => handleChallengeChange(challenge.id, checked as boolean)}
                            />
                            <Label htmlFor={challenge.id} className="text-sm font-normal">
                              {challenge.label}
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
                        placeholder="Tell us more about your compliance needs..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                      Request Demo
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
