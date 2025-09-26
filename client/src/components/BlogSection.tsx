import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { detailedBlogPosts } from '@/data/detailedBlogPosts';
import { useLocation } from 'wouter';

const blogPosts = detailedBlogPosts.map(post => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  category: post.category,
  image: post.image,
  categoryColor: post.categoryColor
}));

export default function BlogSection() {
  const [location, navigate] = useLocation();
  return (
    <section id="blog" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-shark-navy mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest business terminology trends and Shark Tank episode breakdowns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer" data-testid={`blog-post-${post.id}`} onClick={() => navigate(`/blog/${post.id}`)}>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className={`${post.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm ml-3">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-shark-navy mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span>By {detailedBlogPosts.find(p => p.id === post.id)?.author || 'Shark Tank Lingo Team'}</span>
                  <span>•</span>
                  <span>{detailedBlogPosts.find(p => p.id === post.id)?.readTime || '5 min read'}</span>
                </div>
                <Button 
                  variant="ghost" 
                  className={`${post.categoryColor.split(' ')[1]} hover:${post.categoryColor.split(' ')[1]}/80 font-semibold text-sm p-0`}
                  data-testid={`read-more-${post.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${post.id}`);
                  }}
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="bg-white hover:bg-gray-50 text-shark-navy border-2 border-shark-navy px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
            data-testid="view-all-articles"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
