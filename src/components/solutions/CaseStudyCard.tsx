import { Quote, Building2, TrendingUp, Zap } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  accentColor: string;
}

const CaseStudyCard = ({ 
  title, 
  company, 
  industry, 
  challenge, 
  solution, 
  results, 
  accentColor 
}: CaseStudyCardProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600">
              Real-world success story from our client
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up delay-200">
            {/* Company Info */}
            <div className="flex items-center mb-8">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: `${accentColor}20` }}
              >
                <Building2 className="w-8 h-8" style={{ color: accentColor }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{company}</h3>
                <p className="text-gray-600 font-medium">{industry}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenge & Solution */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Quote className="w-5 h-5 mr-2 text-red-500" />
                    The Challenge
                  </h4>
                  <p className="text-gray-700 leading-relaxed bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    {challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" style={{ color: accentColor }} />
                    Our Solution
                  </h4>
                  <p className="text-gray-700 leading-relaxed p-4 rounded-lg border-l-4" style={{ 
                    backgroundColor: `${accentColor}10`, 
                    borderLeftColor: accentColor 
                  }}>
                    {solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Results Achieved
                </h4>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-gray-700 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCard;
