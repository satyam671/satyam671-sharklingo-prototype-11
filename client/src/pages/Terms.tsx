import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-shark-navy mb-6">
            Terms of <span className="text-shark-gold">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our service.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <FileText className="h-6 w-6 text-shark-blue" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Shark Tank Lingo, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <Users className="h-6 w-6 text-shark-blue" />
                Use License
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Permission is granted to temporarily access the materials on Shark Tank Lingo for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <AlertTriangle className="h-6 w-6 text-shark-blue" />
                Content Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                The materials on Shark Tank Lingo are provided on an 'as is' basis. Shark Tank Lingo 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other 
                violation of rights.
              </p>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Educational Purpose</h3>
                <p className="text-gray-700">
                  All content is provided for educational purposes only. Business examples and case studies 
                  are simplified for learning and may not reflect complete real-world complexities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-shark-navy">
                <Scale className="h-6 w-6 text-shark-blue" />
                Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                In no event shall Shark Tank Lingo or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on the website, even if 
                authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">User Responsibility</h3>
                <p className="text-gray-700">
                  Users are responsible for their own business decisions and should always consult 
                  with qualified professionals before making important business or investment decisions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-shark-navy">Revisions and Errata</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on Shark Tank Lingo could include technical, typographical, or 
                photographic errors. We do not warrant that any of the materials are accurate, complete, 
                or current. We may make changes to the materials at any time without notice. We do not 
                commit to updating the materials.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-shark-blue to-shark-teal text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-100">
                If you have any questions about these Terms of Service, please contact us through 
                our Contact page or email us at legal@sharktanklingo.com
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}