import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import sharkTankLogo from '@/assets/shark-tank-logo.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other pages, store target section and navigate to home
      sessionStorage.setItem('scrollToSection', sectionId);
      setLocation('/');
    }
  };

  return (
    <nav className="gradient-hero shadow-md relative z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img 
                src={sharkTankLogo} 
                alt="Shark Tank" 
                className="h-8 w-auto logo-glow"
                data-testid="shark-tank-logo"
              />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold">
                <span className="text-shark-cyan">SHARK</span>
                <span className="text-white">TANK</span>{' '}
                <span className="text-shark-gold">Lingo</span>
              </h1>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {location !== '/' && (
              <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
            )}
            <button 
              onClick={() => handleSectionNavigation('glossary')}
              className="text-gray-200 hover:text-white transition-colors"
              data-testid="nav-glossary"
            >
              Glossary
            </button>
            <button 
              onClick={() => handleSectionNavigation('quiz')}
              className="text-gray-200 hover:text-white transition-colors"
              data-testid="nav-quiz"
            >
              Quiz
            </button>
            <button 
              onClick={() => handleSectionNavigation('blog')}
              className="text-gray-200 hover:text-white transition-colors"
              data-testid="nav-blog"
            >
              Blog
            </button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
              className="text-gray-200 hover:text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-shark-navy/95 backdrop-blur-sm shadow-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-4 bg-[#00000073]">
              {location !== '/' && (
                <Link 
                  href="/" 
                  className="block text-gray-200 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <button 
                onClick={() => handleSectionNavigation('glossary')}
                className="block w-full text-gray-200 hover:text-white transition-colors py-2 text-center font-semibold"
                data-testid="mobile-nav-glossary"
              >
                Glossary
              </button>
              <button 
                onClick={() => handleSectionNavigation('quiz')}
                className="block w-full text-gray-200 hover:text-white transition-colors py-2 text-center font-semibold"
                data-testid="mobile-nav-quiz"
              >
                Quiz
              </button>
              <button 
                onClick={() => handleSectionNavigation('blog')}
                className="block w-full text-gray-200 hover:text-white transition-colors py-2 text-center font-semibold"
                data-testid="mobile-nav-blog"
              >
                Blog
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}