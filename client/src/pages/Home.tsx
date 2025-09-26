import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GlossarySection from '@/components/GlossarySection';
import ThemeCollections from '@/components/ThemeCollections';
import QuizSection from '@/components/QuizSection';
import BlogSection from '@/components/BlogSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import businessWallImage from '@assets/ChatGPT Image Aug 30, 2025, 06_23_35 PM_1756558427695.png';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle section scrolling when navigating from other pages
  useEffect(() => {
    const targetSection = sessionStorage.getItem('scrollToSection');
    if (targetSection) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        element?.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollToSection');
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Business Terms Wall Illustration */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 pt-[50px] pb-[50px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-shark-navy mb-4">
              Breaking Down the <span className="text-[#face00]">Business Wall</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every entrepreneur faces a wall of complex business terms. We're here to help you decode them, one term at a time.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <img 
              src={businessWallImage} 
              alt="Person looking at a wall filled with business term placards including EBITDA, Valuation, Equity, and other startup terminology" 
              className="w-full max-w-5xl h-auto rounded-xl shadow-2xl object-cover"
              data-testid="business-wall-illustration"
            />
          </div>
          
          <div className="text-center">
        
            <p className="text-gray-600 font-medium">
              Join thousands of learners who've already decoded the language of business
            </p>
          </div>
        </div>
      </section>
      {/* Featured Quote Section */}
      <section className="bg-white py-16 pt-[0px] pb-[0px]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-shark-navy mb-4">"Business mein clarity hi sabse badi currency hai!"</blockquote>
          <cite className="text-shark-blue font-semibold text-[16px]">-Vineeta Singh, CEO & Co-founder, Sugar Cosmetics</cite>
        </div>
      </section>
      <GlossarySection />
      <ThemeCollections />
      <QuizSection />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
