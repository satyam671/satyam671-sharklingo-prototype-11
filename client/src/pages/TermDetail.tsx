import { useParams, Link } from 'wouter';
import { businessTerms, businessCategories } from '@/data/businessTerms';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, PieChart, DollarSign, Users, Rocket, BookOpen, Target, Lightbulb, Home } from 'lucide-react';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { renderFormattedText } from '@/utils/formatting';

const categoryIcons = {
  'investor-vc-lingo': TrendingUp,
  'startup-metrics': PieChart,
  'deal-structures': DollarSign,
  'valuation-funding': TrendingUp,
  'pitch-strategy': Target,
  'product-tech': Rocket,
  'roles-titles': Users,
  'legal-compliance': BookOpen,
  'marketing-growth': Users,
  'testing-feedback': Target,
  'market-business-models': PieChart,
  'financial-accounting': DollarSign,
  'startup-culture': Rocket,
  'operations-supply': Rocket,
  'product-development': Rocket,
  'customer-growth': Users,
  'funding-investment': TrendingUp
};


export default function TermDetail() {
  const params = useParams();
  const termId = params.id;
  
  const term = businessTerms.find(t => t.id === termId);

  if (!term) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Term Not Found</h1>
          <p className="text-gray-600 mb-8">The business term you're looking for doesn't exist.</p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = categoryIcons[term.category] || DollarSign;
  const category = businessCategories[term.category];
  const gradientClass = category?.color || 'from-gray-400 to-gray-600';

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term.term,
    "description": term.businessDefinition,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": category?.name || "Business Terms",
      "description": category?.description || "Business terminology for entrepreneurs"
    },
    "url": `${window.location.origin}/term/${term.id}`,
    "about": {
      "@type": "Thing",
      "name": "Business and Entrepreneurship"
    },
    "example": term.realWorldExample,
    "additionalType": "https://schema.org/BusinessFunction"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <div className="flex gap-2">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/glossary">
              <Button variant="ghost" className="mb-4">
                <BookOpen className="mr-2 h-4 w-4" />
                All Categories
              </Button>
            </Link>
            {category && (
              <Link href={`/glossary/${category.slug}`}>
                <Button variant="ghost" className="mb-4" data-testid="back-to-category">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Main Term Header */}
        <article className="mb-8">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className={`bg-gradient-to-br ${gradientClass} rounded-2xl p-6 shadow-lg`}>
                <IconComponent size={40} className="text-white" />
              </div>
              <div className="flex gap-2">
                {category && (
                  <Link href={`/glossary/${category.slug}`}>
                    <Badge className={`bg-gradient-to-r ${gradientClass} text-white px-4 py-2 hover:opacity-90 cursor-pointer`}>
                      {category.name}
                    </Badge>
                  </Link>
                )}
                <Badge variant="outline" className="px-4 py-2 capitalize">
                  {term.difficulty}
                </Badge>
              </div>
            </div>
            
            <h1 className="text-4xl font-serif font-bold text-shark-navy mb-4">{term.term}</h1>
            
            <p className="text-lg text-gray-600">Master this essential business concept</p>
            </CardContent>
          </Card>
        </article>

        {/* Definitions */}
        <section className="grid gap-6 mb-8" aria-labelledby="definitions-heading">
          <h2 id="definitions-heading" className="sr-only">Definitions</h2>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-shark-navy">
                <BookOpen className="h-5 w-5" />
                Business Definition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base leading-relaxed">{term.businessDefinition}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-shark-navy">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                In Simple Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderFormattedText(term.simpleExplanation)}
            </CardContent>
          </Card>
        </section>

        {/* Shark Tank Example */}
        <section aria-labelledby="shark-tank-example">
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-shark-gold shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-shark-navy">
              🦈 <span>Shark Tank Example</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-gray-800 text-base italic leading-relaxed mb-4">
              "{term.sharkTankExample}"
            </blockquote>
            <p className="text-shark-blue font-semibold">- {term.sharkName}</p>
          </CardContent>
        </Card>
        </section>

        {/* Real World Example */}
        <section aria-labelledby="real-world-example">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-shark-navy">
              🌍 <span>Real World Application</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderFormattedText(term.realWorldExample)}
          </CardContent>
        </Card>
        </section>

        {/* Case Study Section */}
        <Card className="bg-white shadow-xl border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-shark-navy">
              <Target className="h-5 w-5" />
              Case Study: {term.term} in Shark Tank India
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Introduction to Context */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-shark-navy mb-3 text-lg">Introduction to Context</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  {term.caseStudy?.introductionContext || getCaseStudyScenario(term)}
                </p>
              </div>

              {/* Real Shark Tank Pitch Reference */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-shark-navy mb-3 text-lg flex items-center">
                  🦈 Real Shark Tank Pitch Reference
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong>Pitch:</strong> {term.caseStudy?.sharkTankPitchReference?.pitchDescription || "During a memorable pitch on Shark Tank India, entrepreneurs demonstrated this term's critical importance in business negotiations."}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong>Startup Details:</strong> {term.caseStudy?.sharkTankPitchReference?.startupDetails || "The startup's situation perfectly illustrated how understanding this term can make or break investment discussions."}
                  </p>
                </div>
              </div>

              {/* How the Term Was Applied */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-shark-navy mb-3 text-lg">How the Term Was Applied</h4>
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {term.caseStudy?.applicationAnalysis?.howTermWasApplied || "The term played a crucial role in shaping the negotiation dynamics and investment decision-making process."}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium text-green-700 mb-2">👥 Founder's Perspective</h5>
                      <p className="text-gray-600 text-base">
                        {term.caseStudy?.applicationAnalysis?.founderPerspective || "The founders utilized this concept to strengthen their position and demonstrate business acumen."}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium text-blue-700 mb-2">🦈 Shark's Perspective</h5>
                      <p className="text-gray-600 text-base">
                        {term.caseStudy?.applicationAnalysis?.sharkPerspective || "The sharks evaluated this aspect carefully as part of their investment decision criteria."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome & Insights */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-shark-navy mb-3 text-lg">Outcome & Insights</h4>
                <div className="space-y-3">
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong>What Happened:</strong> {term.caseStudy?.outcomeInsights?.whatHappened || "The discussion around this term significantly influenced the final negotiation outcome."}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong>Impact on Founder:</strong> {term.caseStudy?.outcomeInsights?.impactOnFounder || "This term either strengthened or weakened the founder's negotiating position."}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong>Deal Outcome:</strong> {term.caseStudy?.outcomeInsights?.dealOutcome || "The final deal structure reflected the importance of understanding this business concept."}
                  </p>
                </div>
              </div>

              {/* Actionable Takeaways */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-shark-navy mb-3 text-lg">📝 Actionable Takeaways</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-700 mb-3">✅ Practical Lessons</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {(term.caseStudy?.actionableTakeaways?.practicalLessons || getPracticalTips(term)).map((lesson, index) => (
                        <li key={index} className="text-base leading-relaxed">{lesson}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-3">❌ Mistakes to Avoid</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {(term.caseStudy?.actionableTakeaways?.mistakesToAvoid || [
                        `Don't overlook the importance of ${term.term.toLowerCase()} in business discussions`,
                        "Avoid making decisions without fully understanding the implications",
                        "Don't negotiate without proper preparation and research"
                      ]).map((mistake, index) => (
                        <li key={index} className="text-base leading-relaxed">{mistake}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Terms */}
        <section aria-labelledby="related-terms">
          <Card className="bg-white shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-shark-navy">Related Terms You Should Know</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getRelatedTerms(term).map((relatedTerm) => (
                <Link key={relatedTerm.id} href={`/term/${relatedTerm.id}`} replace>
                  <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-shark-navy">{relatedTerm.term}</h4>
                    <p className="text-base text-gray-600 mt-1">{relatedTerm.simpleExplanation.substring(0, 80)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
        </section>

        <div className="text-center">
          <Link href="/glossary">
            <Button className="bg-shark-blue hover:bg-shark-teal text-white px-8 py-3" data-testid="explore-more-terms">
              Explore More Terms
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Helper functions for case studies
function getCaseStudyScenario(term: { id: string; term: string }): string {
  const scenarios: { [key: string]: string } = {
    'valuation': "A food delivery startup is seeking ₹2 crores for 10% equity. The sharks need to determine if the company is actually worth ₹20 crores. They look at monthly revenue (₹50 lakhs), growth rate (25% month-over-month), and market size to make their decision.",
    'equity': "Two friends start a tech company. Friend A invests ₹10 lakhs and works full-time, while Friend B invests ₹5 lakhs and works part-time. They need to decide how to split equity fairly between them.",
    'revenue-model': "A subscription box company is struggling with customer retention. They're considering switching from a monthly subscription model to a pay-per-order model to reduce churn.",
    'customer-acquisition-cost': "An e-commerce fashion brand spends ₹15 lakhs on digital marketing monthly and acquires 3,000 new customers. Their CAC is ₹500, but their average order value is only ₹800.",
    'scalability': "A home food delivery service operates successfully in one city with 50 orders per day. Now they want to expand to 10 cities and handle 5,000 orders daily.",
    'burn-rate': "A fintech startup raised ₹5 crores six months ago. They're spending ₹80 lakhs monthly on salaries, office rent, and marketing with only ₹2 crores left in the bank."
  };
  return scenarios[term.id] || `A practical scenario involving ${term.term} that demonstrates its real-world application in business decision-making.`;
}

function getCaseStudyInsights(term: { id: string; term: string }): string[] {
  const insights: { [key: string]: string[] } = {
    'valuation': [
      "Revenue multiples vary by industry - tech companies often trade at 10-20x revenue",
      "Growth rate is more important than current revenue for valuation",
      "Market size and total addressable market significantly impact valuation"
    ],
    'equity': [
      "Equity splits should reflect both financial and non-financial contributions",
      "Vesting schedules protect the company if founders leave early",
      "Future funding rounds will dilute existing equity percentages"
    ],
    'revenue-model': [
      "Subscription models provide predictable recurring revenue",
      "Different models work better for different customer segments",
      "Hybrid models can maximize revenue from various user types"
    ]
  };
  return insights[term.id] || [
    `Understanding ${term.term} is crucial for business success`,
    "Real-world application requires careful consideration of context",
    "Regular monitoring and adjustment of strategies is important"
  ];
}

function getPracticalTips(term: { id: string; term: string }): string[] {
  const tips: { [key: string]: string[] } = {
    'valuation': [
      "Research comparable companies in your industry for benchmarking",
      "Focus on growth metrics, not just revenue numbers",
      "Be prepared to justify your valuation with concrete data"
    ],
    'equity': [
      "Document all equity agreements clearly from the beginning",
      "Consider using equity management software to track ownership",
      "Plan for future funding rounds and potential dilution"
    ],
    'revenue-model': [
      "Test different pricing models with small customer segments first",
      "Monitor customer lifetime value across different models",
      "Be ready to pivot your model based on market feedback"
    ]
  };
  return tips[term.id] || [
    `Apply ${term.term} principles gradually in your business`,
    "Start with small experiments before full implementation",
    "Seek advice from experienced entrepreneurs or mentors"
  ];
}

function getRelatedTerms(term: { id: string; category: string; relatedTerms?: string[] }): typeof businessTerms {
  // First try to get terms from relatedTerms array if specified
  if (term.relatedTerms && term.relatedTerms.length > 0) {
    const related = businessTerms.filter(t => term.relatedTerms!.includes(t.id));
    if (related.length > 0) {
      return related.slice(0, 4);
    }
  }
  
  // Fallback to terms from the same category, excluding the current term
  return businessTerms
    .filter(t => t.category === term.category && t.id !== term.id)
    .slice(0, 4);
}