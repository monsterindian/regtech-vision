import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "KYC Automation", href: "/solutions" },
        { name: "Lending Compliance", href: "/solutions" }, 
        { name: "Transaction Monitoring", href: "/solutions" },
        { name: "Risk Management", href: "/solutions" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/resources" },
        { name: "API Reference", href: "/resources" },
        { name: "Case Studies", href: "/resources" },
        { name: "Security", href: "/resources" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Gaigentic AI</h3>
            <p className="text-sm text-neutral-dark/70 mb-6 leading-relaxed">
              Autonomous AI agents for financial compliance excellence. 
              Transforming BFSI operations with intelligent automation.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-dark/70">
                <Mail className="h-4 w-4" />
                <span>info@gaigentic.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-dark/70">
                <Phone className="h-4 w-4" />
                <span>+31 6 20343034 / +91 9841206769</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-dark/70">
                <MapPin className="h-4 w-4" />
                <span>Amsterdam • Chennai</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.href} className="text-sm text-neutral-dark/70 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-dark/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-dark/70">
              © 2025 Gaigentic AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-neutral-dark/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-dark/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-neutral-dark/70 hover:text-primary transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;