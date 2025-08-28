import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Video, 
  Code, 
  BookOpen, 
  Users, 
  Calendar,
  ExternalLink,
  Play,
  MessageCircle,
  HelpCircle,
  Bookmark,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

const Resources = () => {
  const whitepapers = [
    {
      title: "The Future of Agentic AI in Financial Services",
      description: "Comprehensive analysis of how autonomous AI agents are transforming BFSI compliance operations.",
      type: "Whitepaper",
      pages: "24 pages",
      downloadUrl: "#",
      category: "AI Strategy"
    },
    {
      title: "Regulatory Compliance in the Age of AI",
      description: "Navigate complex regulatory landscapes with AI-powered compliance solutions across global markets.",
      type: "Guide",
      pages: "18 pages", 
      downloadUrl: "#",
      category: "Compliance"
    },
    {
      title: "BFSI Benchmark Report 2024",
      description: "Industry benchmarks for compliance costs, processing times, and automation adoption rates.",
      type: "Report",
      pages: "32 pages",
      downloadUrl: "#",
      category: "Industry Insights"
    },
    {
      title: "Multi-Agent Architecture for Enterprise AI",
      description: "Technical deep-dive into designing and implementing multi-agent systems for financial compliance.",
      type: "Technical Paper",
      pages: "28 pages",
      downloadUrl: "#",
      category: "Architecture"
    }
  ];

  const caseStudies = [
    {
      title: "Global Bank Reduces KYC Processing Time by 85%",
      client: "Top 10 Global Investment Bank",
      industry: "Investment Banking",
      challenge: "Manual KYC processes causing customer onboarding delays and compliance risks",
      solution: "Deployed autonomous KYC agents with real-time document verification",
      results: ["85% faster processing", "60% cost reduction", "99.2% accuracy rate"],
      downloadUrl: "#",
      readTime: "8 min read"
    },
    {
      title: "Insurance Giant Automates Claims Fraud Detection",
      client: "Leading Life Insurance Provider",
      industry: "Insurance",
      challenge: "High false positive rates in fraud detection overwhelming investigation teams",
      solution: "Implemented intelligent fraud detection with adaptive machine learning",
      results: ["90% false positive reduction", "95% fraud detection accuracy", "75% faster investigations"],
      downloadUrl: "#",
      readTime: "6 min read"
    },
    {
      title: "Fintech Scales Lending Operations 10x",
      client: "Digital Lending Platform",
      industry: "Fintech",
      challenge: "Manual underwriting processes limiting loan origination capacity",
      solution: "Automated lending compliance with multi-jurisdiction risk assessment",
      results: ["10x loan processing capacity", "45% lower default rates", "100% regulatory compliance"],
      downloadUrl: "#",
      readTime: "7 min read"
    }
  ];

  const developerResources = [
    {
      title: "API Documentation",
      description: "Complete REST API reference with interactive examples and authentication guides.",
      type: "Documentation",
      icon: Code,
      link: "#",
      tags: ["REST API", "Authentication", "Examples"]
    },
    {
      title: "Python SDK",
      description: "Official Python SDK with comprehensive examples for rapid integration.",
      type: "SDK",
      icon: Download,
      link: "#",
      tags: ["Python", "SDK", "Integration"]
    },
    {
      title: "Integration Playbook",
      description: "Step-by-step guide for integrating agentic AI into existing compliance workflows.",
      type: "Guide",
      icon: BookOpen,
      link: "#",
      tags: ["Integration", "Workflow", "Best Practices"]
    },
    {
      title: "Sample Applications",
      description: "Ready-to-run sample applications demonstrating key compliance use cases.",
      type: "Code Samples",
      icon: Code,
      link: "#",
      tags: ["Samples", "Use Cases", "Demo"]
    },
    {
      title: "Webhook Examples",
      description: "Real-time event handling examples for compliance alerts and notifications.",
      type: "Examples",
      icon: Zap,
      link: "#",
      tags: ["Webhooks", "Real-time", "Events"]
    },
    {
      title: "GraphQL Schema",
      description: "Complete GraphQL schema documentation with query examples and best practices.",
      type: "Schema",
      icon: FileText,
      link: "#",
      tags: ["GraphQL", "Schema", "Queries"]
    }
  ];

  const learningResources = [
    {
      title: "Agentic AI Fundamentals",
      type: "Webinar Series",
      duration: "45 min each",
      episodes: 4,
      description: "Master the fundamentals of agentic AI and its applications in financial compliance.",
      instructor: "Dr. Sarah Chen, Chief AI Officer",
      registrationUrl: "#",
      tags: ["Fundamentals", "AI Strategy", "Compliance"]
    },
    {
      title: "Regulatory Compliance Best Practices",
      type: "Training Course",
      duration: "2 hours",
      episodes: 1,
      description: "Comprehensive training on modern compliance practices and regulatory requirements.",
      instructor: "James Thompson, Chief Compliance Officer",
      registrationUrl: "#",
      tags: ["Compliance", "Regulations", "Best Practices"]
    },
    {
      title: "Implementation Workshop",
      type: "Live Workshop",
      duration: "3 hours",
      episodes: 1,
      description: "Hands-on workshop for implementing agentic AI in your compliance infrastructure.",
      instructor: "Technical Solutions Team",
      registrationUrl: "#",
      tags: ["Implementation", "Hands-on", "Workshop"]
    }
  ];

  const supportResources = [
    {
      title: "Getting Started Guide",
      description: "Complete onboarding guide from initial setup to first compliance automation.",
      icon: BookOpen,
      link: "#",
      category: "Implementation"
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues and solutions for deployment and integration challenges.",
      icon: HelpCircle,
      link: "#",
      category: "Support"
    },
    {
      title: "Community Forum",
      description: "Connect with other users, share experiences, and get peer support.",
      icon: MessageCircle,
      link: "#",
      category: "Community"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks and advanced configurations.",
      icon: Video,
      link: "#",
      category: "Learning"
    },
    {
      title: "System Status",
      description: "Real-time system status, maintenance schedules, and incident reports.",
      icon: TrendingUp,
      link: "#",
      category: "Status"
    },
    {
      title: "Security Guidelines",
      description: "Best practices for secure deployment and data protection compliance.",
      icon: Shield,
      link: "#",
      category: "Security"
    }
  ];

  const blogPosts = [
    {
      title: "The Evolution of KYC: From Manual to Autonomous",
      excerpt: "Explore how KYC processes have evolved and what the future holds for autonomous identity verification.",
      author: "Dr. Michael Rodriguez",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Industry Insights",
      link: "#"
    },
    {
      title: "Regulatory Technology Trends in 2024",
      excerpt: "Key regulatory technology trends shaping the BFSI landscape and compliance strategies.",
      author: "Sarah Chen",
      date: "March 10, 2024", 
      readTime: "7 min read",
      category: "Regulatory Updates",
      link: "#"
    },
    {
      title: "Building Trust in AI-Powered Compliance",
      excerpt: "How to build stakeholder confidence in AI-driven compliance solutions through transparency and explainability.",
      author: "James Thompson",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "AI Ethics",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Resources & Insights
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive resources to help you understand, implement, and optimize 
                agentic AI for financial compliance. From technical documentation to 
                industry insights and best practices.
              </p>
            </div>

            {/* Quick Access */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <FileText className="h-5 w-5" />
                <span className="text-sm">Whitepapers</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <Code className="h-5 w-5" />
                <span className="text-sm">API Docs</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <Video className="h-5 w-5" />
                <span className="text-sm">Webinars</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">Support</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Knowledge Hub */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Knowledge Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth research, analysis, and insights on agentic AI, compliance regulations, 
                and industry benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitepapers.map((paper, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {paper.category}
                      </Badge>
                      <div className="text-sm text-gray-500">{paper.pages}</div>
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2">{paper.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{paper.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <FileText className="h-4 w-4" />
                        <span>{paper.type}</span>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Case Studies & Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world implementations and measurable results from leading 
                financial institutions across the globe.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {study.industry}
                          </Badge>
                          <span className="text-sm text-gray-500">{study.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground">{study.title}</h3>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        <p className="text-gray-600 mb-6">{study.solution}</p>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Full Case Study
                        </Button>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Key Results</h4>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-sm text-gray-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Developer Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything developers need to integrate agentic AI into existing systems. 
                APIs, SDKs, code samples, and comprehensive documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developerResources.map((resource, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                        <resource.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{resource.title}</CardTitle>
                        <div className="text-sm text-gray-500">{resource.type}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Center */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Learning Center
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Educational content, training programs, and expert-led sessions to help 
                you master agentic AI and compliance best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {learningResources.map((resource, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        {resource.type}
                      </Badge>
                      <div className="text-sm text-gray-500">{resource.duration}</div>
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2">{resource.title}</CardTitle>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      Instructor: {resource.instructor}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Blog Posts */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Latest Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="bg-gray-50 shadow-sm border-0">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-3 text-xs">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg font-semibold mb-2">{post.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Support Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get the help you need with comprehensive documentation, community support, 
                and expert assistance for successful implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportResources.map((resource, index) => (
                <Card key={index} className="bg-white shadow-sm border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                        <resource.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{resource.title}</h3>
                        <div className="text-xs text-gray-500">{resource.category}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Need Personalized Support?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to help you navigate implementation, 
                answer technical questions, and ensure your success with agentic AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Contact Support Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  Schedule Expert Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;