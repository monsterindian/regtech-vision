import { LucideIcon } from "lucide-react";

interface Stat {
  metric: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  columns?: 2 | 3 | 4 | 6;
  backgroundVariant?: 'white' | 'gray' | 'blue';
  size?: 'sm' | 'md' | 'lg';
}

const StatsSection = ({ 
  title, 
  subtitle, 
  stats, 
  columns = 4, 
  backgroundVariant = 'white',
  size = 'md'
}: StatsSectionProps) => {
  const bgClass = {
    white: 'bg-white',
    gray: 'bg-neutral-light',
    blue: 'bg-neutral-light'
  }[backgroundVariant];

  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  }[columns];

  const textSize = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  }[size];

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className={`grid ${gridClass} gap-8`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon && (
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto shadow-sm">
                  <stat.icon className="h-8 w-8 text-primary hover:text-secondary transition-colors" />
                </div>
              )}
              <div className={`${textSize} font-bold text-secondary bg-secondary text-white rounded-full px-4 py-1 inline-block mb-2`}>
                {stat.metric}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
