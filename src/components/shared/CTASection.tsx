import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";

interface CTAButton {
  text: string;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
}

interface CTABenefit {
  text: string;
  icon?: LucideIcon;
}

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttons: CTAButton[];
  benefits?: CTABenefit[];
  backgroundVariant?: 'white' | 'gray' | 'blue';
  size?: 'sm' | 'md' | 'lg';
}

const CTASection = ({ 
  title, 
  subtitle, 
  buttons, 
  benefits,
  backgroundVariant = 'blue',
  size = 'md'
}: CTASectionProps) => {
  const bgClass = {
    white: 'bg-white',
    gray: 'bg-neutral-light',
    blue: 'bg-neutral-light'
  }[backgroundVariant];

  const paddingClass = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  }[size];

  const titleSize = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl'
  }[size];

  return (
    <section className={`${paddingClass} ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className={`${titleSize} font-bold mb-6 text-foreground`}>
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {buttons.map((button, index) => {
              const ButtonIcon = button.icon || ArrowRight;
              const isPrimary = button.variant !== 'secondary';
              
              return (
                <Button 
                  key={index}
                  size="lg" 
                  className={`px-8 py-4 text-lg ${
                    isPrimary 
                      ? 'bg-primary hover:bg-secondary text-white' 
                      : 'border border-gray-300 hover:border-gray-400 text-gray-700 bg-white'
                  }`}
                  onClick={button.onClick}
                >
                  {button.text}
                  <ButtonIcon className="ml-2 h-5 w-5" />
                </Button>
              );
            })}
          </div>

          {benefits && benefits.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon || CheckCircle;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <BenefitIcon className="h-4 w-4 text-primary" />
                    <span>{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
