import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, AlertCircle, CheckCircle, Users, Shield, AlertTriangle } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white pt-28">
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Scale className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of Gaigentic AI's services and platform. By using our services, you agree to these terms.
          </p>
          <Badge variant="outline" className="mt-4">Effective: September 2025</Badge>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By accessing and using Gaigentic AI's services, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Service Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Gaigentic AI provides autonomous AI agent technology for financial compliance and regulatory operations,
                including but not limited to:
              </p>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• KYC (Know Your Customer) automation</li>
                <li>• Transaction monitoring and AML compliance</li>
                <li>• Lending compliance and risk assessment</li>
                <li>• Regulatory reporting and compliance management</li>
                <li>• AI-powered fraud detection and prevention</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Account Security</h4>
                  <p className="text-gray-600">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities
                    that occur under your account. You must immediately notify us of any unauthorized use.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lawful Use</h4>
                  <p className="text-gray-600">
                    You agree to use our services only for lawful purposes and in compliance with all applicable laws,
                    regulations, and our acceptable use policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Accuracy</h4>
                  <p className="text-gray-600">
                    You are responsible for the accuracy and completeness of data provided to our services.
                    We are not liable for issues arising from inaccurate or incomplete data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-orange-600" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of our services are owned by Gaigentic AI and are protected by
                international copyright, trademark, and other intellectual property laws.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to use our
                  services in accordance with these terms. This license does not include any resale or commercial use
                  of our services or their contents.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-yellow-600" />
                Service Availability & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Uptime Commitment</h4>
                <p className="text-gray-600">
                  We strive to maintain 99.9% uptime for our services but do not guarantee uninterrupted access.
                  We reserve the right to perform maintenance that may temporarily disrupt service availability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Support Services</h4>
                <p className="text-gray-600">
                  Technical support is provided during business hours. Emergency support for critical issues is available 24/7.
                  Response times vary based on support tier and issue severity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Claims and metrics</h4>
                <p className="text-gray-600">
                  Any percentages, accuracy rates, performance metrics, or other quantitative claims published by Gaigentic AI
                  are based on controlled datasets and testing conditions used during development. These figures are provided
                  for informational purposes and do not constitute a guarantee or warranty of future results; actual performance
                  may vary in production depending on factors such as data quality, data volume, configuration, integration,
                  and the operating environment.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                In no event shall Gaigentic AI be liable for any indirect, incidental, special, consequential, or punitive
                damages arising out of or relating to your use of our services.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> Our total liability shall not exceed the amount paid by you for the services
                  during the twelve (12) months preceding the claim.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-gray-600" />
                Termination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• Your access to the services will be immediately terminated</li>
                <li>• We will delete your data within 30 days unless legally required to retain it</li>
                <li>• Outstanding payments for services rendered will remain due</li>
                <li>• Certain provisions will survive termination (data protection, liability, etc.)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Questions About Terms?</h3>
                <p className="text-blue-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-blue-800">
                  <p><strong>Email:</strong> info@gaigentic.ai</p>
                  <p><strong>Phone:</strong> +31 6 20343034</p>
                  <p><strong>Address:</strong> Gustav Mahlerplein 2, 1082MA Amsterdam, Netherlands</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
