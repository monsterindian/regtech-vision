import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Upload, Scan, UserCheck, FileCheck, ArrowRight, Clock, Target, DollarSign, Shield, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const KYCAutomation = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  const demoSteps = [
    {
      icon: Upload,
      title: "Document Upload",
      description: "Customer uploads government ID via mobile or web interface",
      duration: 500,
      status: "AI processes 180+ ID types from 200+ countries"
    },
    {
      icon: Scan,
      title: "Real-time Analysis",
      description: "OCR extraction and fraud detection algorithms activate",
      duration: 800,
      status: "99.8% accuracy in document authenticity verification"
    },
    {
      icon: UserCheck,
      title: "Biometric Matching",
      description: "Facial recognition and liveness detection verify identity",
      duration: 300,
      status: "Advanced anti-spoofing technology prevents fraud"
    },
    {
      icon: FileCheck,
      title: "Compliance Check",
      description: "Global database screening and regulatory compliance",
      duration: 400,
      status: "50+ database sources checked simultaneously"
    }
  ];

  const challenges = [
    "Manual document verification takes 3-5 business days, leading to 40% customer abandonment",
    "High operational costs with teams of analysts reviewing documents around the clock",
    "Inconsistent verification standards across different regions and compliance officers",
    "Difficulty detecting sophisticated document fraud and identity theft attempts",
    "Regulatory compliance gaps due to human error and outdated verification processes"
  ];

  const technicalCapabilities = [
    {
      category: "Document Processing",
      features: [
        "Advanced OCR with 180+ document types support",
        "Real-time fraud detection algorithms",
        "Multi-language document processing",
        "Automated data extraction and validation"
      ]
    },
    {
      category: "Biometric Verification",
      features: [
        "3D facial recognition technology",
        "Liveness detection and anti-spoofing",
        "Voice pattern analysis (optional)",
        "Behavioral biometrics monitoring"
      ]
    },
    {
      category: "Data Integration",
      features: [
        "Real-time API connections to 50+ databases",
        "Global sanctions and watchlist screening",
        "PEP and adverse media monitoring",
        "Credit bureau and financial data access"
      ]
    },
    {
      category: "Security & Privacy",
      features: [
        "End-to-end encryption (AES-256)",
        "Zero-knowledge architecture",
        "GDPR-compliant data handling",
        "SOC 2 Type II certified infrastructure"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "KYC", description: "Customer identification program (CIP), Customer due diligence (CDD), Enhanced due diligence (EDD), Ongoing monitoring" },
    { name: "AML", description: "Sanctions screening, PEP monitoring, Suspicious activity detection, Transaction pattern analysis" },
    { name: "GDPR", description: "Data minimization, Right to be forgotten, Consent management, Data breach notification" },
    { name: "CDD", description: "Risk-based profiling, Beneficial ownership ID, Source of funds verification, Relationship monitoring" }
  ];

  const runDemo = () => {
    setIsDemo(true);
    setDemoStep(0);

    demoSteps.forEach((step, index) => {
      setTimeout(() => {
        setDemoStep(index + 1);
        if (index === demoSteps.length - 1) {
          setTimeout(() => {
            setIsDemo(false);
            setDemoStep(0);
          }, 2000);
        }
      }, demoSteps.slice(0, index + 1).reduce((acc, curr) => acc + curr.duration, 1000));
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-600 border-blue-200">
                🤖 Autonomous KYC Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Autonomous KYC &
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Identity Verification</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Deploy AI agents that transform customer onboarding with instant, accurate identity verification while maintaining the highest compliance standards.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Faster Processing</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">99.2%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">60%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Live KYC Verification</h3>
                    <div className="flex space-x-2">
                      <div className={`w-3 h-3 rounded-full ${isDemo ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Demo Steps */}
                  <div className="space-y-4">
                    {demoSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-4 rounded-lg border-2 transition-all duration-500 ${
                          demoStep > index
                            ? 'border-green-200 bg-green-50'
                            : demoStep === index + 1 && isDemo
                            ? 'border-blue-200 bg-blue-50 animate-pulse'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                          demoStep > index
                            ? 'bg-green-500 text-white'
                            : demoStep === index + 1 && isDemo
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {demoStep > index ? (
                            <CheckCircle size={20} />
                          ) : (
                            <step.icon size={20} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                          <div className="text-xs text-blue-600 font-medium mt-1">{step.status}</div>
                        </div>
                        {demoStep > index && (
                          <div className="text-xs text-green-600 font-semibold">
                            ✓ Completed in {step.duration}ms
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Demo Progress */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Verification Progress</span>
                      <span>{Math.round((demoStep / demoSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(demoStep / demoSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    {demoStep === demoSteps.length && (
                      <div className="mt-4 text-center">
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          ✓ Verification Complete - 2.1 seconds total
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The KYC Challenge</h2>
            <p className="text-xl text-gray-600">Traditional approaches are failing to meet modern compliance demands</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cost of Inaction */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Cost of Inaction</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                  <p className="text-gray-700">Customer abandonment due to slow onboarding</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">5 days</div>
                  <p className="text-gray-700">Average verification time for complex cases</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$150</div>
                  <p className="text-gray-700">Cost per manual KYC verification</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade technology stack built for scale and security</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{capability.category}</h3>
                  <div className="space-y-4">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Regulatory Compliance</h2>
            <p className="text-xl text-gray-600">Built-in compliance with global regulatory standards and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{framework.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your KYC Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading financial institutions who have revolutionized their customer onboarding with our autonomous KYC agents.
          </p>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <CheckCircle className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">30-day implementation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">99.9% uptime SLA</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Target className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Seamless integration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <FileCheck className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Compliance reporting</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Scalable architecture</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl mr-4"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl"
            >
              Schedule Demo
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default KYCAutomation;
