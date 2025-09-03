import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileText, AlertTriangle, CheckCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-28">
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy and data security are fundamental to our mission. This policy outlines how we protect and handle your information.
          </p>
          <Badge variant="outline" className="mt-4">Last updated: September 2025</Badge>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-blue-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                <p className="text-gray-600">
                  We collect information you provide directly to us, such as when you create an account, use our services,
                  or contact us for support. This may include your name, email address, phone number, and company information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Usage Data</h4>
                <p className="text-gray-600">
                  We automatically collect certain information about your use of our services, including IP addresses,
                  browser types, access times, pages viewed, and the referring website.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Compliance Data</h4>
                <p className="text-gray-600">
                  For our RegTech services, we may process compliance-related data as necessary to provide our services,
                  always in accordance with applicable privacy laws and regulations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Send technical notices, updates, and support messages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Respond to your comments, questions, and requests</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Comply with legal obligations and enforce our terms</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-purple-600" />
                Data Security & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Encryption</h5>
                  <p className="text-blue-700 text-sm">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">Access Controls</h5>
                  <p className="text-green-700 text-sm">Strict access controls and regular security audits ensure data protection.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Compliance</h5>
                  <p className="text-purple-700 text-sm">Regular compliance audits and certifications maintain security standards.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">Monitoring</h5>
                  <p className="text-orange-700 text-sm">Continuous monitoring and threat detection protect against unauthorized access.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                Information Sharing & Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Service Providers:</strong> Trusted third-party service providers who assist in operating our services</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li>• <strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Questions About Privacy?</h3>
                <p className="text-blue-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
