import { useParams, Link } from 'wouter';
import { businessTerms, businessCategories } from '@/data/businessTerms';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TermCard from '@/components/TermCard';
import { useState } from 'react';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category;
  const [searchQuery, setSearchQuery] = useState('');
  
  const category = Object.values(businessCategories).find(cat => cat.slug === categorySlug);
  const categoryTerms = businessTerms.filter(term => term.category === categorySlug);

  // Filter terms based on search query
  const filteredTerms = categoryTerms.filter(term =>
    searchQuery.trim() === '' ||
    term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.simpleExplanation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The business category you're looking for doesn't exist.</p>
          <Link href="/glossary">
            <Button>Browse All Categories</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* SEO optimized header with structured data */}
      <article className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8">
          <div className="mb-6">
            <Link href="/glossary">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Categories
              </Button>
            </Link>
          </div>

          {/* Category Header */}
          <section className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${category.color} rounded-3xl mb-6 shadow-lg`}>
              <span className="text-4xl">{category.icon}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-shark-navy mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {category.description}
            </p>
            <Badge className="bg-shark-blue text-white px-4 py-2">
              {categoryTerms.length} Terms
            </Badge>
          </section>
        </header>

        {/* Search within category */}
        <section className="mb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${category.name.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shark-blue focus:border-transparent"
            />
          </div>
        </section>

        {/* Quick navigation anchors */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-shark-navy mb-4">Quick Jump to Terms</h2>
          <div className="flex flex-wrap gap-2">
            {filteredTerms.map(term => (
              <button
                key={term.id}
                onClick={() => document.getElementById(term.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:bg-shark-blue hover:text-white transition-colors"
              >
                {term.term}
              </button>
            ))}
          </div>
        </section>

        {/* Terms Grid */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-shark-navy mb-8">
            All {category.name} Terms
          </h2>
          
          {filteredTerms.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTerms.map(term => (
                <div key={term.id} id={term.id}>
                  <TermCard term={term} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No terms found matching your search.</p>
            </div>
          )}
        </section>

        {/* Related Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-shark-navy mb-8">
            Explore Related Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(businessCategories)
              .filter(cat => cat.slug !== categorySlug)
              .slice(0, 6)
              .map(relatedCategory => (
                <Link key={relatedCategory.slug} href={`/glossary/${relatedCategory.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${relatedCategory.color} rounded-lg mb-3`}>
                        <span className="text-xl">{relatedCategory.icon}</span>
                      </div>
                      <CardTitle className="text-lg">{relatedCategory.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{relatedCategory.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            }
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <Card className="bg-gradient-to-br from-shark-blue to-shark-teal text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Master Business Terms?</h3>
              <p className="text-lg mb-6">
                Test your knowledge with our interactive quiz and learn with real-world examples.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/quiz">
                  <Button variant="secondary" className="bg-white text-shark-blue hover:bg-gray-100">
                    Take Quiz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </article>

      <Footer />
    </div>
  );
}