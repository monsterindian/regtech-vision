interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundVariant?: 'white' | 'gray';
  children?: React.ReactNode;
}

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundVariant = 'white',
  children 
}: PageHeroProps) => {
  const bgClass = backgroundVariant === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children && (
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
