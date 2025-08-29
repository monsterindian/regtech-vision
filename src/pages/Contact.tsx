import Header from "@/components/Header";
import DemoRequestForm from "@/components/DemoRequestForm";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  Calendar,
  Target,
  Award
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@gaigentic.ai",
      description: "Get in touch for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+31 6 20343034 / +91 9841206769",
      description: "Speak directly with our experts"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Amsterdam • Chennai",
      description: "Global offices, local expertise"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Speak with compliance and AI specialists"
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored recommendations for your needs"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book demos at your convenience"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Join 500+ satisfied institutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
                Get Started with
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Agentic AI Today
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Transform your compliance operations with our expert team. Schedule a personalized demo 
                and discover how agentic AI can revolutionize your financial institution.
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-400">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                    <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-blue-100 font-medium mb-1">{info.details}</p>
                    <p className="text-blue-200 text-sm">{info.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Gaigentic AI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join leading financial institutions who trust us with their compliance transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#0052CC] animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0052CC] to-[#00A3CC] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Request Your Personalized Demo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our agentic AI platform can transform your compliance operations. 
                Fill out the form below and our experts will contact you within 24 hours.
              </p>
            </div>
            
            <DemoRequestForm />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
