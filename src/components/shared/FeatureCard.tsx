import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  tags?: string[];
  link?: {
    text: string;
    href: string;
  };
  metrics?: {
    value: string;
    label: string;
  }[];
}

interface FeatureCardProps {
  feature: Feature;
  variant?: 'default' | 'detailed' | 'compact' | 'highlight';
  layout?: 'vertical' | 'horizontal';
}

const FeatureCard = ({ 
  feature, 
  variant = 'default', 
  layout = 'vertical' 
}: FeatureCardProps) => {
  const isCompact = variant === 'compact';
  const isDetailed = variant === 'detailed';
  const isHighlight = variant === 'highlight';
  const isHorizontal = layout === 'horizontal';

  const cardClass = `bg-white shadow-sm border-0 ${
    isHighlight ? 'border-l-4 border-l-blue-600' : ''
  } ${isHorizontal ? 'flex-row' : ''}`;

  return (
    <Card className={cardClass}>
      <CardHeader className={isCompact ? 'pb-4' : 'pb-6'}>
        <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} ${isHorizontal ? 'items-center space-x-4' : 'items-start'}`}>
          <div className={`${isCompact ? 'w-10 h-10' : 'w-12 h-12'} bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 ${isHorizontal ? '' : 'mb-4'}`}>
            <feature.icon className={`${isCompact ? 'h-5 w-5' : 'h-6 w-6'} text-gray-600`} />
          </div>
          
          <div className="flex-1">
            <CardTitle className={`${isCompact ? 'text-lg' : 'text-xl'} font-semibold ${isHorizontal ? 'mb-2' : 'mb-3'}`}>
              {feature.title}
            </CardTitle>
            
            {feature.tags && !isCompact && (
              <div className="flex flex-wrap gap-2 mb-3">
                {feature.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className={isCompact ? 'pt-0' : ''}>
        <p className={`text-gray-600 ${isCompact ? 'text-sm' : 'text-base'} leading-relaxed mb-4`}>
          {feature.description}
        </p>

        {feature.benefits && isDetailed && (
          <div className="mb-6">
            <h4 className="font-medium text-foreground mb-3">Key Benefits:</h4>
            <ul className="space-y-2">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {feature.metrics && isDetailed && (
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              {feature.metrics.map((metric, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {feature.link && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
          >
            {feature.link.text}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  variant?: 'default' | 'detailed' | 'compact' | 'highlight';
  layout?: 'grid' | 'list';
  columns?: 1 | 2 | 3 | 4;
  backgroundVariant?: 'white' | 'gray';
}

const FeaturesSection = ({ 
  title, 
  subtitle, 
  features, 
  variant = 'default',
  layout = 'grid',
  columns = 3,
  backgroundVariant = 'white'
}: FeaturesSectionProps) => {
  const bgClass = backgroundVariant === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  const gridClass = layout === 'list' ? 'space-y-6' : {
    1: 'grid-cols-1',
    2: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
  }[columns];

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

        <div className={gridClass}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              variant={variant}
              layout={layout === 'list' ? 'horizontal' : 'vertical'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureCard, FeaturesSection };
export default FeatureCard;
