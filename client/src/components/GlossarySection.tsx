import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { businessTerms, businessCategories } from '@/data/businessTerms';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function GlossarySection() {
  const totalTerms = businessTerms.length;
  const categories = Object.values(businessCategories);
  const [location, setLocation] = useLocation();
  
  const scrollToQuiz = () => {
    if (location === '/') {
      // Already on home page, just scroll
      const element = document.getElementById('quiz');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page and then scroll to quiz
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById('quiz');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Get term count for each category
  const getCategoryTermCount = (categorySlug: string) => {
    return businessTerms.filter(term => term.category === categorySlug).length;
  };

  return (
    <section id="glossary" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 pt-[50px] pb-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-shark-navy mb-4">
            Master the Language of Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Explore our comprehensive collection of {totalTerms}+ business terms organized across {categories.length} categories, 
            with real-world examples and Shark Tank insights to boost your entrepreneurial vocabulary.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge className="bg-shark-blue text-white px-4 py-2 text-lg">
              {totalTerms}+ Terms
            </Badge>
            <Badge className="bg-shark-gold text-shark-navy px-4 py-2 text-lg">
              {categories.length} Categories
            </Badge>
          </div>
        </div>

        {/* Featured Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.slice(0, 6).map(category => {
            const termCount = getCategoryTermCount(category.slug);
            return (
              <Link key={category.slug} href={`/glossary/${category.slug}`}>
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl mb-3 shadow-lg`}>
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-bold text-shark-navy">
                        {category.name}
                      </CardTitle>
                      <Badge variant="outline" className="ml-2">
                        {termCount}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-shark-blue font-medium">
                      <span>Explore {termCount} terms</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Popular Terms Preview */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-shark-navy mb-6 text-center">
            Popular Business Terms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessTerms.slice(0, 8).map(term => (
              <Link key={term.id} href={`/term/${term.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{term.icon}</span>
                      <div>
                        <h4 className="font-semibold text-shark-navy">{term.term}</h4>
                        <p className="text-sm text-gray-600 capitalize">{term.difficulty}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Actions */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/glossary">
              <Button 
                className="bg-shark-blue hover:bg-shark-teal text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg pl-[32px] pr-[32px] pt-[20px] pb-[20px]"
                data-testid="explore-all-terms"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Browse All {totalTerms}+ Terms
              </Button>
            </Link>
            <Button 
              onClick={scrollToQuiz}
              variant="outline"
              className="border-shark-blue text-shark-blue hover:bg-shark-blue hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors pt-[20px] pb-[20px]"
              data-testid="test-knowledge-btn"
            >
              Test Your Knowledge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
