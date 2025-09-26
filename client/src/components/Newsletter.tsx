import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our weekly updates soon.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-shark-navy mb-4">
            Stay Sharp with Weekly Updates
          </h2>
          <p className="text-xl text-gray-600">
            Get new business terms, Shark Tank insights, and exclusive content delivered to your inbox.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:border-shark-blue transition-colors"
              data-testid="newsletter-email-input"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-shark-blue hover:bg-shark-teal text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap transition-colors"
              data-testid="newsletter-subscribe-button"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Join 10,000+ entrepreneurs. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
