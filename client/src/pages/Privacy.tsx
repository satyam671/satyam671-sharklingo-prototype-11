import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-shark-navy mb-6">
            Privacy <span className="text-shark-gold">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <Shield className="h-6 w-6 text-shark-blue" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Usage Data</h3>
                <p className="text-gray-700">
                  We collect information about how you interact with our website, including pages visited, 
                  time spent on pages, and navigation patterns. This helps us improve our content and user experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Device Information</h3>
                <p className="text-gray-700">
                  We may collect information about your device, including IP address, browser type, 
                  operating system, and device identifiers for analytics purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <Eye className="h-6 w-6 text-shark-blue" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-shark-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>To provide and maintain our educational content and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-shark-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>To analyze usage patterns and improve our website functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-shark-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>To personalize your learning experience and content recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-shark-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>To ensure the security and proper functioning of our services</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <Lock className="h-6 w-6 text-shark-blue" />
                Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cookies and Tracking</h3>
                <p className="text-gray-700">
                  We use cookies and similar tracking technologies to enhance your browsing experience 
                  and analyze website traffic. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <UserCheck className="h-6 w-6 text-shark-blue" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate personal information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Object to the processing of your personal information</li>
                <li>• Request data portability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-shark-blue to-shark-teal text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-100">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us through our Contact page or email us at privacy@sharktanklingo.com
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}