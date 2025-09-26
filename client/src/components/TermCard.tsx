import { BusinessTerm } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, PieChart, DollarSign, Users, Rocket, Flame } from 'lucide-react';
import { Link } from 'wouter';

const categoryIcons: { [key: string]: any } = {
  'investor-vc-lingo': TrendingUp,
  'startup-metrics': PieChart,
  'deal-structures': DollarSign,
  'valuation-funding': TrendingUp,
  'pitch-strategy': Flame,
  'product-tech': Rocket,
  'roles-titles': Users,
  'legal-compliance': Users,
  'marketing-growth': Users,
  'testing-feedback': Flame,
  'market-business-models': PieChart,
  'financial-accounting': DollarSign,
  'startup-culture': Rocket,
  'operations-supply': Rocket,
  'product-development': Rocket,
  'customer-growth': Users,
  'funding-investment': TrendingUp
};

const categoryColors: { [key: string]: string } = {
  'investor-vc-lingo': 'bg-gradient-to-br from-blue-400 to-blue-600 text-white',
  'startup-metrics': 'bg-gradient-to-br from-green-400 to-emerald-500 text-white',
  'deal-structures': 'bg-gradient-to-br from-purple-400 to-indigo-600 text-white',
  'valuation-funding': 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white',
  'pitch-strategy': 'bg-gradient-to-br from-red-400 to-pink-500 text-white',
  'product-tech': 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white',
  'roles-titles': 'bg-gradient-to-br from-teal-400 to-cyan-500 text-white',
  'legal-compliance': 'bg-gradient-to-br from-gray-400 to-gray-600 text-white',
  'marketing-growth': 'bg-gradient-to-br from-pink-400 to-rose-500 text-white',
  'testing-feedback': 'bg-gradient-to-br from-indigo-400 to-purple-500 text-white',
  'market-business-models': 'bg-gradient-to-br from-emerald-400 to-green-500 text-white',
  'financial-accounting': 'bg-gradient-to-br from-amber-400 to-yellow-500 text-white',
  'startup-culture': 'bg-gradient-to-br from-violet-400 to-purple-500 text-white',
  'operations-supply': 'bg-gradient-to-br from-stone-400 to-gray-500 text-white',
  'product-development': 'bg-gradient-to-br from-orange-400 to-red-500 text-white',
  'customer-growth': 'bg-gradient-to-br from-lime-400 to-green-500 text-white',
  'funding-investment': 'bg-gradient-to-br from-sky-400 to-blue-500 text-white'
};

const categoryBadgeColors: { [key: string]: string } = {
  'investor-vc-lingo': 'bg-blue-500 text-white',
  'startup-metrics': 'bg-green-500 text-white',
  'deal-structures': 'bg-purple-500 text-white',
  'valuation-funding': 'bg-yellow-500 text-white',
  'pitch-strategy': 'bg-red-500 text-white',
  'product-tech': 'bg-cyan-500 text-white',
  'roles-titles': 'bg-teal-500 text-white',
  'legal-compliance': 'bg-gray-500 text-white',
  'marketing-growth': 'bg-pink-500 text-white',
  'testing-feedback': 'bg-indigo-500 text-white',
  'market-business-models': 'bg-orange-500 text-white',
  'financial-accounting': 'bg-emerald-500 text-white',
  'startup-culture': 'bg-rose-500 text-white',
  'operations-supply': 'bg-slate-500 text-white',
  'product-development': 'bg-violet-500 text-white',
  'customer-growth': 'bg-lime-500 text-white',
  'funding-investment': 'bg-amber-500 text-white'
};

interface TermCardProps {
  term: BusinessTerm;
}

export default function TermCard({ term }: TermCardProps) {
  const IconComponent = categoryIcons[term.category] || DollarSign;
  const categoryColorClass = categoryColors[term.category] || 'bg-gradient-to-br from-gray-400 to-gray-600 text-white';
  const badgeColorClass = categoryBadgeColors[term.category] || 'bg-gray-500 text-white';

  return (
    <Card className="bg-white rounded-2xl shadow-xl card-hover border-0 overflow-hidden" data-testid={`term-card-${term.id}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`${categoryColorClass} rounded-2xl p-4 shadow-lg transform transition-transform hover:scale-110`}>
            <IconComponent size={28} />
          </div>
          <Badge className={`${badgeColorClass} px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-md`}>
            {term.category}
          </Badge>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-shark-navy mb-3">{term.term}</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Business Definition:</h4>
            <p className="text-gray-600">{term.businessDefinition}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">In Simple Terms:</h4>
            <p className="text-gray-600 line-clamp-3">{term.simpleExplanation}</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-xl border-l-4 border-shark-gold shadow-md">
            <h4 className="font-semibold text-shark-navy mb-2 flex items-center">
              🦈 <span className="ml-2">Shark Tank Example:</span>
            </h4>
            <p className="text-gray-700 text-sm mb-2 italic">"{term.sharkTankExample}"</p>
            <p className="text-xs font-medium text-shark-blue">- {term.sharkName}</p>
          </div>

          {term.realWorldExample && (
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-xl border-l-4 border-shark-cyan shadow-md">
              <h4 className="font-semibold text-shark-navy mb-2 flex items-center">
                🌍 <span className="ml-2">Real World Example:</span>
              </h4>
              <p className="text-gray-700 text-sm line-clamp-2">{term.realWorldExample}</p>
            </div>
          )}
        </div>
        
        <Link href={`/term/${term.id}`}>
          <Button 
            variant="ghost" 
            className="mt-4 text-shark-blue hover:text-shark-teal font-semibold text-sm p-0"
            data-testid={`learn-more-${term.id}`}
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
