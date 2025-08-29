import { ShieldCheck, FileCheck, Globe, Lock } from "lucide-react";

interface ComplianceFramework {
  name: string;
  description: string;
  requirements: string[];
}

interface ComplianceFrameworksProps {
  title: string;
  frameworks: ComplianceFramework[];
  accentColor: string;
}

const ComplianceFrameworks = ({ title, frameworks, accentColor }: ComplianceFrameworksProps) => {
  const getIcon = (index: number) => {
    const icons = [ShieldCheck, FileCheck, Globe, Lock];
    return icons[index % icons.length];
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 mr-3" style={{ color: accentColor }} />
              <h2 className="text-4xl font-bold text-gray-900">
                {title}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built-in compliance with global regulatory standards and frameworks
            </p>
          </div>

          {/* Frameworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => {
              const IconComponent = getIcon(index);
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 hover:-translate-y-1 animate-fade-in-up"
                  style={{ 
                    borderLeftColor: accentColor,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {framework.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {framework.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                          Key Requirements:
                        </h4>
                        <ul className="space-y-1">
                          {framework.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                              <div 
                                className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                                style={{ backgroundColor: accentColor }}
                              ></div>
                              <span className="text-gray-600">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default ComplianceFrameworks;
