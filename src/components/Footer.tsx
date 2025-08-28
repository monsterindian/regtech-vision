
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  MapPin,
  FileText,
  Shield,
  Users,
  HelpCircle,
  CheckCircle,
  Award,
  Lock,
  Clock,
  MessageCircle,
  Headphones,
  Settings,
  Eye
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Agentic AI Solutions",
      links: [
        { name: "KYC Automation", href: "#solutions" },
        { name: "Fraud Detection", href: "#solutions" },
        { name: "Transaction Monitoring", href: "#solutions" },
        { name: "Risk Management", href: "#solutions" },
        { name: "Regulatory Compliance", href: "#solutions" }
      ]
    },
    {
      title: "BFSI Resources",
      links: [
        { name: "Compliance Documentation", href: "#" },
        { name: "Regulatory Case Studies", href: "#" },
        { name: "API Integration Guide", href: "#" },
        { name: "Compliance Webinars", href: "#" },
        { name: "Regulatory Updates", href: "#" }
      ]
    }
  ];

  const complianceContacts = [
    {
      title: "Compliance Consultation",
      description: "Expert guidance on regulatory requirements",
      icon: MessageCircle,
      contact: "compliance@complianceai.com"
    },
    {
      title: "Regulatory Advisory",
      description: "Strategic compliance planning and implementation",
      icon: Shield,
      contact: "regulatory@complianceai.com"
    },
    {
      title: "Technical Integration Support",
      description: "API integration and technical assistance",
      icon: Settings,
      contact: "support@complianceai.com"
    },
    {
      title: "24/7 Agentic AI Monitoring",
      description: "Continuous platform monitoring and alerts",
      icon: Eye,
      contact: "+1 (555) AI-WATCH"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", type: "Security" },
    { name: "ISO 27001", type: "Security" },
    { name: "PCI-DSS Level 1", type: "Payment" },
    { name: "GDPR Compliant", type: "Privacy" },
    { name: "FedRAMP Ready", type: "Government" }
  ];

  const partnerships = [
    { name: "AWS Partner", type: "Cloud" },
    { name: "Microsoft Azure", type: "Cloud" },
    { name: "Snowflake", type: "Data" },
    { name: "Databricks", type: "AI/ML" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-2">
              ComplianceAI
            </div>
            <p className="text-accent font-semibold mb-4">
              Autonomous AI for Financial Compliance Excellence
            </p>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Deploy intelligent AI agents that revolutionize compliance operations across 
              insurance, lending, and banking with autonomous decision-making and continuous monitoring.
            </p>
            
            {/* General Contact Info */}
            <div className="space-y-2 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@complianceai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY • London, UK • Singapore</span>
              </div>
            </div>

            {/* Compliance-Specific Contacts */}
            <div className="space-y-3">
              <h4 className="font-semibold text-accent mb-3">Specialized Support</h4>
              {complianceContacts.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-primary-foreground/5 rounded-lg">
                  <contact.icon className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">{contact.title}</div>
                    <div className="text-xs text-primary-foreground/70 mb-1">{contact.description}</div>
                    <div className="text-xs text-accent">{contact.contact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-accent">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications and Partnerships */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h4 className="font-semibold mb-4 text-accent flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Security & Compliance Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                    {cert.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Technology Partnerships */}
            <div>
              <h4 className="font-semibold mb-4 text-accent flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Technology Partnerships
              </h4>
              <div className="flex flex-wrap gap-2">
                {partnerships.map((partner, index) => (
                  <Badge key={index} variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                    {partner.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Security
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/60 mt-8">
          © 2024 ComplianceAI. All rights reserved. | Autonomous AI for Financial Compliance Excellence
        </div>
      </div>
    </footer>
  );
};

export default Footer;
