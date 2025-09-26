import { Link } from 'wouter';
import { businessCategories, businessTerms } from '@/data/businessTerms';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, TrendingUp, Users, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GlossaryHome() {
  const totalTerms = businessTerms.length;
  const categories = Object.values(businessCategories);

  // Get term count for each category
  const getCategoryTermCount = (categorySlug: string) => {
    return businessTerms.filter(term => term.category === categorySlug).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-shark-blue to-shark-teal rounded-3xl mb-6 shadow-lg">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-shark-navy mb-6">
              Business Terms Glossary
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master the language of entrepreneurship with our comprehensive collection of {totalTerms}+ business terms, 
              organized by category with real-world examples and Shark Tank insights.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Badge className="bg-shark-blue text-white px-4 py-2 text-lg">
                {totalTerms} Terms
              </Badge>
              <Badge className="bg-shark-gold text-shark-navy px-4 py-2 text-lg">
                {categories.length} Categories
              </Badge>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="mx-auto h-12 w-12 text-shark-blue mb-4" />
                <h3 className="text-2xl font-bold text-shark-navy mb-2">{totalTerms}+</h3>
                <p className="text-gray-600">Business Terms</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="mx-auto h-12 w-12 text-shark-green mb-4" />
                <h3 className="text-2xl font-bold text-shark-navy mb-2">{categories.length}</h3>
                <p className="text-gray-600">Categories</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="mx-auto h-12 w-12 text-shark-gold mb-4" />
                <h3 className="text-2xl font-bold text-shark-navy mb-2">100%</h3>
                <p className="text-gray-600">Real Examples</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-shark-navy mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600">
              Choose a category to dive deep into specific business terminology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => {
              const termCount = getCategoryTermCount(category.slug);
              return (
                <Link key={category.slug} href={`/glossary/${category.slug}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <CardHeader>
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-4 shadow-lg`}>
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-bold text-shark-navy">
                          {category.name}
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">
                          {termCount}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full border-shark-blue text-shark-blue hover:bg-shark-blue hover:text-white"
                      >
                        Explore {termCount} Terms →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Popular Terms Preview */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-shark-navy mb-4">
              Popular Terms
            </h2>
            <p className="text-lg text-gray-600">
              Most searched business terms by entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessTerms.slice(0, 8).map(term => (
              <Link key={term.id} href={`/term/${term.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{term.icon}</span>
                      <div>
                        <h3 className="font-semibold text-shark-navy">{term.term}</h3>
                        <p className="text-sm text-gray-600">{term.difficulty}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <Card className="bg-gradient-to-br from-shark-blue to-shark-teal text-white">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h3>
              <p className="text-lg mb-6">
                Take our interactive quiz with real business scenarios and case studies.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/quiz">
                  <Button variant="secondary" className="bg-white text-shark-blue hover:bg-gray-100">
                    Take Business Quiz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}