import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github,
  Building2,
  TrendingUp,
  Globe,
  Heart,
  Shield,
  Lightbulb,
  Target,
  Calendar
} from "lucide-react";

const About = () => {
  const companyValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering cutting-edge agentic AI solutions that transform how financial institutions approach compliance."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building secure, reliable, and transparent AI systems that financial institutions can depend on."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional results through rigorous engineering, comprehensive testing, and continuous improvement."
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "Maintaining open communication with clients, clear AI decision-making processes, and ethical business practices."
    }
  ];

  const leadership = [
    {
      name: "Dr. Sarah Chen",
      title: "CEO & Co-Founder",
      background: "Former VP of Compliance at Goldman Sachs with 15+ years in financial services. Led digital transformation initiatives across global markets.",
      education: "MBA Harvard Business School, MS Computer Science Stanford",
      expertise: ["Financial Compliance", "Digital Transformation", "Regulatory Strategy"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "CTO & Co-Founder", 
      background: "Former AI Research Director at Microsoft with 12+ years in machine learning and autonomous systems. Published 50+ papers in top-tier AI conferences.",
      education: "PhD Machine Learning MIT, MS Computer Science Carnegie Mellon",
      expertise: ["Machine Learning", "Multi-Agent Systems", "AI Architecture"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "James Thompson",
      title: "Chief Compliance Officer",
      background: "Former Chief Risk Officer at JPMorgan Chase with 20+ years in regulatory compliance across global jurisdictions.",
      education: "JD Columbia Law School, CPA, CAMS Certified",
      expertise: ["Regulatory Compliance", "Risk Management", "AML/KYC"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Priya Patel",
      title: "Chief Product Officer",
      background: "Former Head of AI Products at Palantir with expertise in enterprise AI deployment and product strategy.",
      education: "PhD Computer Science UC Berkeley, BS Engineering Stanford",
      expertise: ["Product Strategy", "Enterprise AI", "User Experience"],
      image: "/api/placeholder/150/150"
    }
  ];

  const advisors = [
    {
      name: "Robert Chen",
      title: "Former CEO, Standard Chartered Bank",
      expertise: "Global Banking Strategy"
    },
    {
      name: "Dr. Lisa Wang",
      title: "Former Chief Data Officer, JPMorgan",
      expertise: "Financial Data & Analytics"
    },
    {
      name: "David Kumar",
      title: "Former Partner, McKinsey & Company",
      expertise: "Financial Services Consulting"
    },
    {
      name: "Maria Santos",
      title: "Former Head of RegTech, HSBC",
      expertise: "Regulatory Technology"
    }
  ];

  const companyStats = [
    { metric: "2021", label: "Founded", description: "Started with a vision to automate compliance" },
    { metric: "$50M", label: "Series B Funding", description: "Led by Andreessen Horowitz" },
    { metric: "500+", label: "Financial Institutions", description: "Across 50+ countries worldwide" },
    { metric: "200+", label: "Team Members", description: "AI experts and compliance professionals" },
    { metric: "99.9%", label: "System Uptime", description: "Enterprise-grade reliability" },
    { metric: "75%", label: "Average Cost Savings", description: "For our clients within 12 months" }
  ];

  const testimonials = [
    {
      quote: "Gaigentic AI has transformed our compliance operations. The autonomous agents have reduced our KYC processing time by 85% while improving accuracy.",
      author: "Chief Compliance Officer",
      company: "Global Investment Bank",
      industry: "Investment Banking"
    },
    {
      quote: "The platform's ability to adapt to new regulations automatically has been game-changing for our multi-jurisdiction operations.",
      author: "Head of Regulatory Affairs", 
      company: "International Insurance Group",
      industry: "Insurance"
    },
    {
      quote: "Implementation was seamless, and the ROI was evident within the first quarter. Their team's expertise in both AI and compliance is unmatched.",
      author: "CTO",
      company: "Digital Lending Platform",
      industry: "Fintech"
    }
  ];

  const awards = [
    {
      title: "RegTech Company of the Year 2024",
      organization: "Financial Technology Awards",
      year: "2024"
    },
    {
      title: "Best AI Innovation in Financial Services",
      organization: "AI Excellence Awards",
      year: "2024"
    },
    {
      title: "Top 50 Fintech Companies to Watch",
      organization: "Forbes",
      year: "2023"
    },
    {
      title: "Compliance Technology Innovation Award",
      organization: "RegTech Analyst",
      year: "2023"
    }
  ];

  const partners = [
    {
      category: "Technology Partners",
      companies: ["Microsoft Azure", "AWS", "Google Cloud", "Snowflake", "Databricks", "Neo4j"]
    },
    {
      category: "Regulatory Partners", 
      companies: ["Thomson Reuters", "Refinitiv", "LexisNexis", "Compliance.ai", "RegTech Associates"]
    },
    {
      category: "System Integrators",
      companies: ["Deloitte", "PwC", "KPMG", "EY", "Accenture", "IBM Consulting"]
    }
  ];

  const investors = [
    "Andreessen Horowitz", "Sequoia Capital", "Goldman Sachs Principal Strategic Investments", 
    "JPMorgan Chase Strategic Investments", "Citi Ventures", "Wells Fargo Strategic Capital"
  ];



    const offices = [
    {
      city: "Amsterdam",
      address: "Zuiderpark 123, 1082 LM Amsterdam, Netherlands",
      phone: "+31 6 20343034",
      email: "amsterdam@gaigentic.ai"
    },
    {
      city: "Chennai",
      address: "IT Highway, Rajiv Gandhi Salai, Chennai 600113, India",
      phone: "+91 9841206769",
      email: "chennai@gaigentic.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28">
        {/* Enhanced Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0052CC] to-[#00A3CC]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
                Leading the Future of
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Financial Compliance
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                We're pioneering autonomous AI agents that transform how financial institutions 
                approach compliance, making regulatory adherence seamless, intelligent, and cost-effective.
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-fade-in-up delay-400">
                {companyStats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                    <div className="text-sm font-semibold text-blue-100 mb-1">{stat.label}</div>
                    <div className="text-xs text-blue-200">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Story & Values
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To transform financial compliance through autonomous AI agents that eliminate manual processes, 
                  reduce operational costs, and ensure perfect regulatory adherence across all BFSI operations.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A world where every financial institution operates with autonomous compliance systems that 
                  adapt in real-time to regulatory changes, enabling them to focus on serving customers 
                  while maintaining perfect regulatory adherence.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Our Values</h3>
                <div className="space-y-6">
                  {companyValues.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                World-class experts in AI, financial services, and regulatory compliance 
                leading the transformation of financial compliance operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {leadership.map((leader, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{leader.title}</p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.background}</p>
                        <div className="mb-3">
                          <p className="text-sm text-gray-500 mb-2">{leader.education}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Advisory Board */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Advisory Board</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advisors.map((advisor, index) => (
                  <Card key={index} className="bg-gray-50 shadow-sm border-0 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                      <h4 className="font-semibold text-foreground mb-1">{advisor.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{advisor.title}</p>
                      <p className="text-xs text-blue-600">{advisor.expertise}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">{testimonial.industry}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Awards & Recognition */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Awards & Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {awards.map((award, index) => (
                  <Card key={index} className="bg-white shadow-sm border-0 text-center">
                    <CardContent className="p-6">
                      <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-foreground mb-2">{award.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
                      <p className="text-xs text-blue-600">{award.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Investors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Partners & Investors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Backed by leading investors and partnered with industry leaders to deliver 
                world-class agentic AI solutions.
              </p>
            </div>

            {/* Partners */}
            <div className="mb-16">
              {partners.map((category, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-xl font-semibold text-center mb-6 text-foreground">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap justify-center items-center gap-8">
                    {category.companies.map((company, companyIndex) => (
                      <div key={companyIndex} className="text-gray-500 font-medium">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Investors */}
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Investors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {investors.map((investor, index) => (
                  <div key={index} className="text-gray-600 font-medium">
                    {investor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your compliance operations? Contact us to learn more 
                about our agentic AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {offices.map((office, index) => (
                <Card key={index} className="bg-gray-50 shadow-sm border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">{office.address}</p>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{office.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media & CTA */}
            <div className="text-center">
              <div className="flex justify-center space-x-6 mb-8">
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Schedule a Meeting
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;