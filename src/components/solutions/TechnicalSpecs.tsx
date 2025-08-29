import { Settings, Code, Database, Shield } from "lucide-react";

interface TechnicalSpec {
  category: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
}

interface TechnicalSpecsProps {
  title: string;
  specs: TechnicalSpec[];
  accentColor: string;
}

const TechnicalSpecs = ({ title, specs, accentColor }: TechnicalSpecsProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Settings className="h-8 w-8 mr-3" style={{ color: accentColor }} />
              <h2 className="text-4xl font-bold text-gray-900">
                {title}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade technology stack built for scale and security
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {spec.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div 
                          className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                          style={{ backgroundColor: accentColor }}
                        ></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
