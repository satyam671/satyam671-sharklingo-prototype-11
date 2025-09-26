import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-shark-navy mb-6">
            Get in <span className="text-shark-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about business terms? Want to suggest new content? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <MessageSquare className="h-6 w-6 text-shark-blue" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    data-testid="contact-name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    data-testid="contact-email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    required
                    data-testid="contact-subject"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your question or suggestion..."
                    rows={5}
                    required
                    data-testid="contact-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-shark-blue hover:bg-shark-teal text-white"
                  data-testid="contact-submit"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-shark-blue to-shark-teal text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-100">hello@sharktanklingo.com</p>
                      <p className="text-gray-100 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-100">+91 89895 30341</p>
                      <p className="text-gray-100 text-sm">Monday - Friday, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-100">Mumbai, India</p>
                      <p className="text-gray-100 text-sm">Supporting entrepreneurs across India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-shark-navy">Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">How can I suggest new terms?</h3>
                    <p className="text-gray-600 text-sm">
                      Send us an email with the business term you'd like us to explain, and we'll add it to our content roadmap.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Can I contribute content?</h3>
                    <p className="text-gray-600 text-sm">
                      We welcome contributions from business experts and entrepreneurs. Contact us to discuss collaboration opportunities.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Partnership inquiries?</h3>
                    <p className="text-gray-600 text-sm">
                      For business partnerships, sponsorships, or educational collaborations, please reach out via email.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}