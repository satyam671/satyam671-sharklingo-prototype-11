import { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Lightbulb, Target, Gamepad2, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { businessTerms } from '@/data/businessTerms';
import { BusinessTerm } from '@/types';
import CompactTermCard from './CompactTermCard';
import { useLocation } from 'wouter';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Filter terms based on search query
  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return businessTerms
      .filter(term =>
        term.term.toLowerCase().includes(query) ||
        term.simpleExplanation.toLowerCase().includes(query) ||
        term.businessDefinition.toLowerCase().includes(query)
      )
      .slice(0, 3); // Show top 3 results to fit term cards
  }, [searchQuery]);
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.trim().length > 0);
  };
  
  const [, setLocation] = useLocation();

  return (
    <section className="gradient-hero py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Business Terms, <span className="text-shark-gold">Simply Explained</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            Decode the language of entrepreneurship with real-world examples from Shark Tank pitches and beyond
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12" ref={searchRef}>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search business terms... (e.g. 'valuation', 'equity')"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => {
                if (searchQuery.trim()) {
                  setShowResults(true);
                }
              }}
              className="w-full px-6 py-4 text-lg rounded-full border-0 shadow-2xl focus:ring-4 focus:ring-shark-gold/30 pl-14"
              data-testid="hero-search-input"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            
            {/* Search Results Dropdown */}
            {showResults && filteredTerms.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-50 rounded-2xl shadow-2xl border-0 overflow-hidden z-50 max-h-[80vh] overflow-y-auto">
                <div className="p-4 bg-white border-b">
                  <p className="text-sm font-medium text-gray-600">
                    Found {filteredTerms.length} result{filteredTerms.length === 1 ? '' : 's'}
                  </p>
                </div>
                <div className="p-3 space-y-3">
                  {filteredTerms.map((term) => (
                    <CompactTermCard 
                      key={term.id} 
                      term={term} 
                      onSelect={() => setShowResults(false)}
                    />
                  ))}
                </div>
                {searchQuery.trim() && filteredTerms.length === 3 && (
                  <div className="p-4 text-center bg-white border-t">
                    <button 
                      onClick={() => {
                        setShowResults(false);
                        setLocation('/glossary');
                      }}
                      className="text-shark-blue hover:text-shark-teal font-medium text-sm"
                    >
                      View all results in glossary →
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* No Results Message */}
            {showResults && searchQuery.trim() && filteredTerms.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border-0 p-6 z-50">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">No terms found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-400">Try searching for terms like "valuation", "equity", or "revenue"</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Cards Preview */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/15 backdrop-blur-sm border-0 card-hover shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Simple Explanations</h3>
              <p className="text-gray-200">Complex business terms broken down into everyday language</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/15 backdrop-blur-sm border-0 card-hover shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real Examples</h3>
              <p className="text-gray-200">Learn from actual Shark Tank pitches and real-world scenarios</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/15 backdrop-blur-sm border-0 card-hover shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Gamepad2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Learning</h3>
              <p className="text-gray-200">Test your knowledge with fun quizzes and gamified challenges</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
