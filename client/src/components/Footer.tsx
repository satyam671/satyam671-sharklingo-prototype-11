import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import sharkTankLogo from '@/assets/shark-tank-logo.png';

export default function Footer() {
  const [location, setLocation] = useLocation();
  
  const handleSectionNavigation = (sectionId: string) => {
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
    <footer className="bg-shark-navy text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <img 
                src={sharkTankLogo} 
                alt="Shark Tank" 
                className="h-6 w-auto"
                data-testid="footer-shark-tank-logo"
              />
              <h3 className="text-xl font-serif font-bold">
                <span className="text-shark-cyan">SHARK</span>
                <span className="text-white">TANK</span>{' '}
                <span className="text-shark-gold">Lingo</span>
              </h3>
            </Link>
            <p className="text-gray-300 mb-4">
              Demystifying business terminology for aspiring entrepreneurs and curious learners worldwide.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-shark-gold transition-colors" data-testid="footer-twitter">
                <Twitter size={20} />
              </button>
              <button className="text-gray-400 hover:text-shark-gold transition-colors" data-testid="footer-linkedin">
                <Linkedin size={20} />
              </button>
              <button className="text-gray-400 hover:text-shark-gold transition-colors" data-testid="footer-youtube">
                <Youtube size={20} />
              </button>
              <button className="text-gray-400 hover:text-shark-gold transition-colors" data-testid="footer-instagram">
                <Instagram size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleSectionNavigation('glossary')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-glossary"
                >
                  Business Glossary
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('quiz')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-quiz"
                >
                  Take Quiz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('blog')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-blog"
                >
                  Blog
                </button>
              </li>
              <li>
                <Link 
                  href="/glossary"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-collections"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 Shark Tank Lingo. All rights reserved. Made with ❤️ for entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  );
}
