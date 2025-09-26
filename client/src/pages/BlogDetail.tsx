import { useRoute } from 'wouter';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { detailedBlogPosts } from '@/data/detailedBlogPosts';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { renderBlogContent } from '@/utils/formatting';

export default function BlogDetail() {
  const [match, params] = useRoute('/blog/:id');
  const blogPost = detailedBlogPosts.find(post => post.id === params?.id);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h2>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-shark-navy to-shark-blue text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="mb-4">
            <Badge className={`${blogPost.categoryColor} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
              {blogPost.category}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {blogPost.title}
          </h1>
          
          <p className="text-xl text-white/90 mb-6">
            {blogPost.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              {blogPost.author}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {blogPost.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {blogPost.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <img 
          src={blogPost.image} 
          alt={blogPost.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg -mt-8 relative z-10"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {renderBlogContent(blogPost.content)}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button className="bg-shark-navy hover:bg-shark-blue text-white px-8 py-3 rounded-full">
              Explore More Articles
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}