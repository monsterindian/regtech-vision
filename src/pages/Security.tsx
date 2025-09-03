import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle, Database } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-white pt-28">
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Security Overview</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Security is at the core of everything we do. Learn about our comprehensive security measures and certifications.
          </p>
          <Badge variant="outline" className="mt-4">Last updated: September 2025</Badge>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* Security Philosophy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Our Security Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                At Gaigentic AI, security is not an afterthought—it's fundamental to our platform architecture.
                We implement a defense-in-depth strategy that protects your data at every layer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-blue-900">Zero Trust</h4>
                  <p className="text-blue-700 text-sm">Never trust, always verify</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Key className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-900">Encryption</h4>
                  <p className="text-green-700 text-sm">End-to-end data protection</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-purple-900">Transparency</h4>
                  <p className="text-purple-700 text-sm">Open security practices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="h-5 w-5 mr-2 text-green-600" />
                Infrastructure Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h4>
                <p className="text-gray-600">
                  Our platform runs on industry-leading cloud providers with enterprise-grade security controls,
                  including network segmentation, automated patching, and continuous monitoring.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Multi-Cloud Deployment</h4>
                <p className="text-gray-600">
                  We deploy across multiple cloud providers to ensure high availability and disaster recovery.
                  Data is automatically replicated across regions for maximum resilience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Container Security</h4>
                <p className="text-gray-600">
                  All applications run in secure containers with image scanning, runtime protection,
                  and automated vulnerability management.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-purple-600" />
                Data Protection & Encryption
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">At Rest Encryption</h4>
                  <p className="text-gray-600">
                    All data stored in our databases and file systems is encrypted using AES-256 encryption
                    with regularly rotated encryption keys.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">In Transit Encryption</h4>
                  <p className="text-gray-600">
                    All data transmission uses TLS 1.3 encryption with perfect forward secrecy
                    and certificate pinning for maximum security.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Management</h4>
                  <p className="text-gray-600">
                    Encryption keys are managed through Hardware Security Modules (HSMs)
                    with automated rotation and secure backup procedures.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Residency</h4>
                  <p className="text-gray-600">
                    You control where your data is stored. We support multiple geographic regions
                    to comply with local data residency requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Access Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2 text-orange-600" />
                Access Control & Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Multi-Factor Authentication (MFA)</h4>
                  <p className="text-gray-600">
                    All user accounts require MFA using industry-standard protocols like TOTP, WebAuthn,
                    or hardware security keys for enhanced account protection.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Role-Based Access Control (RBAC)</h4>
                  <p className="text-gray-600">
                    Granular permissions ensure users only access the data and functions necessary
                    for their role, following the principle of least privilege.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Session Management</h4>
                  <p className="text-gray-600">
                    Secure session handling with automatic timeouts, concurrent session limits,
                    and comprehensive audit logging of all access events.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Monitoring */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-blue-600" />
                Security Monitoring & Incident Response
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Security Monitoring</h4>
                <p className="text-gray-600">
                  Our Security Operations Center (SOC) provides round-the-clock monitoring of all systems,
                  networks, and applications for security threats and anomalies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Threat Detection</h4>
                <p className="text-gray-600">
                  Advanced threat detection using AI-powered analysis of logs, network traffic,
                  and user behavior to identify and respond to security incidents.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Incident Response</h4>
                <p className="text-gray-600">
                  Structured incident response procedures ensure rapid containment, investigation,
                  and recovery from security incidents with full transparency to affected customers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Compliance & Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Compliance & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                We maintain industry-leading security certifications and undergo regular independent audits:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Badge className="bg-blue-100 text-blue-800 mb-2">In Progress</Badge>
                  <h5 className="font-semibold text-gray-900">ISO 27001</h5>
                  <p className="text-gray-600 text-sm">Information Security</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Badge className="bg-green-100 text-green-800 mb-2">Compliant</Badge>
                  <h5 className="font-semibold text-gray-900">GDPR</h5>
                  <p className="text-gray-600 text-sm">Data Protection</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Badge className="bg-purple-100 text-purple-800 mb-2">Planned</Badge>
                  <h5 className="font-semibold text-gray-900">SOC 2</h5>
                  <p className="text-gray-600 text-sm">Trust Services</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Badge className="bg-orange-100 text-orange-800 mb-2">Completed</Badge>
                  <h5 className="font-semibold text-gray-900">Security Audit</h5>
                  <p className="text-gray-600 text-sm">Annual Assessment</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Contact */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-900">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Report Security Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-800 mb-4">
                If you discover a security vulnerability or have concerns about our security practices,
                please contact us immediately:
              </p>
              <div className="space-y-2 text-red-700">
                <p><strong>Security Team:</strong> info@gaigentic.ai</p>
                <p><strong>Emergency:</strong> +31 6 20343034 (24/7)</p>
                <p><strong>PGP Key:</strong> Available upon request</p>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Bug Bounty:</strong> We offer rewards for responsible disclosure of security vulnerabilities.
                  Please review our responsible disclosure policy before reporting.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Security;
