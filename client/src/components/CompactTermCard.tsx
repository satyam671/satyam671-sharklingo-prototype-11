import { BusinessTerm } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, PieChart, DollarSign, Users, Rocket, Target, Building, Scale, BarChart3, FlaskConical, ShoppingCart, Calculator, Heart, Truck, Code, UserPlus, FolderKanban } from 'lucide-react';
import { useLocation } from 'wouter';

const categoryIcons = {
  'investor-vc-lingo': Building,
  'startup-metrics': BarChart3,
  'deal-structures': Target,
  'valuation-funding': DollarSign,
  'pitch-strategy': PieChart,
  'product-tech': Code,
  'roles-titles': Users,
  'legal-compliance': Scale,
  'marketing-growth': TrendingUp,
  'testing-feedback': FlaskConical,
  'market-business-models': ShoppingCart,
  'financial-accounting': Calculator,
  'startup-culture': Heart,
  'operations-supply': Truck,
  'product-development': Rocket,
  'customer-growth': UserPlus,
  'funding-investment': FolderKanban
};

const categoryBadgeColors = {
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

interface CompactTermCardProps {
  term: BusinessTerm;
  onSelect?: () => void;
}

export default function CompactTermCard({ term, onSelect }: CompactTermCardProps) {
  const IconComponent = categoryIcons[term.category] || DollarSign;
  const badgeColorClass = categoryBadgeColors[term.category] || 'bg-gray-500 text-white';
  const [, setLocation] = useLocation();

  const handleClick = () => {
    onSelect?.();
    setLocation(`/term/${term.id}`);
  };

  return (
    <Card 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 overflow-hidden cursor-pointer" 
      data-testid={`compact-term-card-${term.id}`}
      onClick={handleClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`${categoryBadgeColors[term.category] || 'bg-gray-500'} rounded-lg p-2`}>
              <IconComponent size={16} className="text-white" />
            </div>
            <h3 className="text-lg font-serif font-bold text-shark-navy">{term.term}</h3>
          </div>
          <Badge className={`${badgeColorClass} px-2 py-1 rounded-full text-xs font-medium capitalize`}>
            {term.category}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{term.simpleExplanation}</p>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border-l-2 border-shark-gold">
          <p className="text-gray-700 text-xs italic line-clamp-1">"{term.sharkTankExample}"</p>
          <p className="text-xs font-medium text-shark-blue mt-1">- {term.sharkName}</p>
        </div>
      </CardContent>
    </Card>
  );
}