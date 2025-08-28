import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  industry?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
}

const TestimonialCard = ({ testimonial, variant = 'default' }: TestimonialCardProps) => {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  return (
    <Card className={`bg-white shadow-sm border-0 ${isFeatured ? 'border-l-4 border-l-primary' : ''}`}>
      <CardContent className={`${isCompact ? 'p-6' : 'p-8'}`}>
        {!isCompact && (
          <Quote className="h-8 w-8 text-primary mb-4 opacity-60" />
        )}
        
        <blockquote className={`text-gray-600 ${isCompact ? 'text-sm' : 'text-base'} ${isFeatured ? 'text-lg' : ''} leading-relaxed mb-6 italic`}>
          "{testimonial.quote}"
        </blockquote>
        
        <div className="flex items-start space-x-4">
          {testimonial.avatar && !isCompact && (
            <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
          )}
          
          <div className="flex-1">
            <div className="font-semibold text-foreground">
              {testimonial.author}
            </div>
            <div className={`text-gray-600 ${isCompact ? 'text-xs' : 'text-sm'} mb-2`}>
              {testimonial.title}
            </div>
            <div className={`text-gray-500 ${isCompact ? 'text-xs' : 'text-sm'} mb-2`}>
              {testimonial.company}
            </div>
            
            {testimonial.industry && (
              <Badge variant="secondary" className="text-xs">
                {testimonial.industry}
              </Badge>
            )}
            
            {testimonial.rating && !isCompact && (
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: 'grid' | 'carousel' | 'featured';
  backgroundVariant?: 'white' | 'gray';
}

const TestimonialsSection = ({ 
  title, 
  subtitle, 
  testimonials, 
  variant = 'grid',
  backgroundVariant = 'gray'
}: TestimonialsSectionProps) => {
  const bgClass = backgroundVariant === 'gray' ? 'bg-neutral-light' : 'bg-white';

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

        {variant === 'featured' && testimonials.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <TestimonialCard testimonial={testimonials[0]} variant="featured" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                variant={variant === 'carousel' ? 'compact' : 'default'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { TestimonialCard, TestimonialsSection };
export default TestimonialCard;
