import { AlertTriangle } from "lucide-react";

interface ProblemStatementProps {
  title: string;
  problems: string[];
  stats?: Array<{ value: string; label: string }>;
}

const ProblemStatement = ({ title, problems, stats }: ProblemStatementProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">
                {title}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional approaches are failing to meet modern compliance demands
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problems List */}
            <div className="animate-fade-in-up delay-200">
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            {stats && (
              <div className="animate-fade-in-up delay-400">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    The Cost of Inaction
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
