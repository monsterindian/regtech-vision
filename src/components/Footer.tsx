
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  MapPin,
  FileText,
  Shield,
  Users,
  HelpCircle
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Identity & Onboarding", href: "#" },
        { name: "Risk Management", href: "#" },
        { name: "Financial Crime Prevention", href: "#" },
        { name: "Regulatory Reporting", href: "#" },
        { name: "ESG & Sustainability", href: "#" },
        { name: "Customer Intelligence", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Whitepapers", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Support Center", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "News & Press", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Security", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              ComplianceAI
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transform your compliance operations with AI-powered automation. 
              Reduce costs, prevent crimes, and achieve regulatory excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
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
                <span>New York, NY • London, UK</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
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
          © 2024 ComplianceAI. All rights reserved. | Transforming Compliance with AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
