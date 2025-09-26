import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, GraduationCap, DollarSign, Rocket } from 'lucide-react';
import { detailedLearningPaths } from '@/data/detailedLearningPaths';
import { useLocation } from 'wouter';

const iconMap = {
  '🎓': GraduationCap,
  '⚡': DollarSign,
  '🚀': Rocket
};

const collections = detailedLearningPaths.map(path => ({
  id: path.id,
  title: path.title,
  description: path.description,
  icon: iconMap[path.icon as keyof typeof iconMap] || GraduationCap,
  termCount: path.termCount,
  duration: path.duration,
  gradient: path.gradient,
  iconColor: path.iconColor
}));

export default function ThemeCollections() {
  const [location, navigate] = useLocation();
  return (
    <section id="learning-paths" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-shark-navy mb-4">
            Curated Learning Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey with specially curated collections designed for different learning goals and experience levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map(collection => {
            const IconComponent = collection.icon;
            
            return (
              <Card key={collection.id} className={`bg-gradient-to-br ${collection.gradient} border-0 card-hover cursor-pointer`} data-testid={`collection-${collection.id}`} onClick={() => navigate(`/learning-path/${collection.id}`)}>
                <CardContent className="p-6">
                  <IconComponent className={`${collection.iconColor} mb-4`} size={48} />
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">{collection.description}</p>
                  <div className="flex items-center gap-2 text-xs text-white/70 mb-4">
                    <span>Level: {detailedLearningPaths.find(p => p.id === collection.id)?.level || 'Beginner'}</span>
                    <span>•</span>
                    <span>{detailedLearningPaths.find(p => p.id === collection.id)?.targetAudience?.split(',')[0] || 'All levels'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">
                      {collection.termCount} terms • {collection.duration}
                    </span>
                    <ArrowRight className="text-white" size={16} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
