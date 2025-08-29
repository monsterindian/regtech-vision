import { CheckCircle, Zap } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SolutionDetailsProps {
  title: string;
  description: string;
  features: Feature[];
  accentColor: string;
}

const SolutionDetails = ({ title, description, features, accentColor }: SolutionDetailsProps) => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 mr-3" style={{ color: accentColor }} />
              <h2 className="text-4xl font-bold text-gray-900">
                {title}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon || CheckCircle;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 hover:-translate-y-1 animate-fade-in-up group"
                  style={{ 
                    borderLeftColor: accentColor,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <IconComponent 
                        className="w-6 h-6" 
                        style={{ color: accentColor }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDetails;
