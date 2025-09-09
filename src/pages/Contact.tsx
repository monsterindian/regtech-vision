// Header is rendered globally from App.tsx
import DemoRequestForm from "@/components/DemoRequestForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { sendContactFormEmail, ContactFormData } from "@/lib/email";
import { useState } from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  Calendar,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2
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
  description: "Trusted by early adopters"
    }
  ];

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendContactFormEmail(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="pt-28">
        
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm">
                    📞 Contact Us
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                  Ready to Transform Your
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Compliance Operations?</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                  Be among the first to experience our AI-powered compliance platform. <strong>Schedule a personalized demo</strong> to explore how we can help you achieve regulatory excellence.
                </p>

                {/* Trust Indicators with Animation */}
                <div className="grid grid-cols-3 gap-8 animate-fade-in-up delay-800">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      15min
                    </div>
                    <p className="text-sm text-gray-600">Response Time</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      99.9%
                    </div>
                    <p className="text-sm text-gray-600">Uptime</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form */}
              <div className="relative animate-fade-in-up delay-1000">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Get Started Today</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us about your compliance needs..."
                      />
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-50 border border-green-200' 
                          : 'bg-red-50 border border-red-200'
                      }`}>
                        {submitStatus.type === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                        <p className={`text-sm ${
                          submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {submitStatus.message}
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      By submitting this form, you agree to our{" "}
                      <Link to="/privacy-policy" className="text-purple-600 hover:text-purple-700 font-medium">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Contact;
