import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Platform", href: "/platform" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Generate breadcrumbs based on current path
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) return null;

    const breadcrumbs = [
      { name: 'Home', href: '/' }
    ];

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ name, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  const isActivePath = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                Gaigentic AI
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    isActivePath(item.href)
                      ? 'text-primary'
                      : 'text-neutral-dark/60 hover:text-neutral-dark'
                  }`}
                >
                  {item.name}
                  {isActivePath(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button removed as requested */}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-light/50 transition-all duration-200 p-2"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu 
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                      isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                      isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                    }`} 
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg mx-2 ${
                    isActivePath(item.href)
                      ? 'text-primary bg-neutral-light'
                      : 'text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-light/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {isActivePath(item.href) && (
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    )}
                  </div>
                </Link>
              ))}
              {/* Mobile CTA removed by request */}
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 1 && (
        <div className="fixed top-16 w-full bg-neutral-light border-b border-neutral-light z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center py-3 text-sm">
              <nav className="flex items-center space-x-2">
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.href} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="h-4 w-4 text-neutral-dark/40 mx-2" />
                    )}
                    {index === 0 ? (
                      <Link
                        to={crumb.href}
                        className="flex items-center text-neutral-dark/60 hover:text-primary transition-colors"
                      >
                        <Home className="h-4 w-4 mr-1" />
                        {crumb.name}
                      </Link>
                    ) : index === breadcrumbs.length - 1 ? (
                      <span className="text-neutral-dark font-medium">{crumb.name}</span>
                    ) : (
                      <Link
                        to={crumb.href}
                        className="text-neutral-dark/60 hover:text-primary transition-colors"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;