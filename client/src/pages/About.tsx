import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-shark-navy mb-6">
            About <span className="text-shark-gold">Shark Tank Lingo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demystifying business terminology for aspiring entrepreneurs and curious learners worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <Target className="h-6 w-6 text-shark-blue" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To make complex business terminology accessible to everyone by providing simple, 
                clear explanations backed by real-world examples from Shark Tank India and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <Heart className="h-6 w-6 text-shark-blue" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To become the go-to resource for entrepreneurs and business enthusiasts to 
                understand startup terminology without the jargon, fostering a more inclusive business ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-shark-blue to-shark-teal text-white mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real Examples</h3>
                <p className="text-gray-100">
                  Learn from actual Shark Tank India pitches and real-world business scenarios
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Simple Language</h3>
                <p className="text-gray-100">
                  Complex terms explained in everyday language that anyone can understand
                </p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-gray-100">
                  Engage with quizzes and interactive content to test your knowledge
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-shark-navy text-center">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shark Tank Lingo was born from a simple observation: business terminology often creates 
              barriers instead of building bridges. While watching Shark Tank India, we noticed how 
              many viewers struggled to understand the business concepts being discussed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We realized there was a need for a platform that could translate complex business jargon 
              into simple, relatable language. Our goal is to democratize business knowledge and make 
              entrepreneurship more accessible to everyone, regardless of their educational background.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, Shark Tank Lingo serves thousands of aspiring entrepreneurs, students, and curious 
              learners who want to understand the language of business without getting lost in complicated terminology.
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}