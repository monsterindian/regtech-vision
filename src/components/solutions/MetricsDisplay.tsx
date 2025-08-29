import { BarChart3 } from "lucide-react";

interface Metric {
  value: string;
  label: string;
  description: string;
}

interface MetricsDisplayProps {
  title: string;
  subtitle: string;
  metrics: Metric[];
  accentColor: string;
}

const MetricsDisplay = ({ title, subtitle, metrics, accentColor }: MetricsDisplayProps) => {
  return (
    <section className="py-20 bg-[#1E293B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: accentColor }}></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: accentColor }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="h-8 w-8 mr-3" style={{ color: accentColor }} />
              <h2 className="text-4xl font-bold text-white">
                {title}
              </h2>
            </div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  <span className="text-2xl font-bold text-white">
                    {metric.value}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {metric.label}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsDisplay;
