import { useRoute, useLocation } from 'wouter';
import { ArrowLeft, GraduationCap, Clock, Users, Target, BookOpen, Trophy, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { detailedLearningPaths } from '@/data/detailedLearningPaths';
import { Link } from 'wouter';

export default function LearningPathDetail() {
  const [match, params] = useRoute('/learning-path/:id');
  const [location, navigate] = useLocation();
  const learningPath = detailedLearningPaths.find(path => path.id === params?.id);

  if (!learningPath) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning path not found</h2>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const levelColor = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${learningPath.gradient} text-white py-12`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="text-6xl">{learningPath.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={levelColor[learningPath.level]}>
                  {learningPath.level}
                </Badge>
                <span className="text-white/80 text-sm">
                  {learningPath.termCount} terms • {learningPath.duration}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {learningPath.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                {learningPath.description}
              </p>
              
              <div className="flex items-center text-sm text-white/80">
                <Users className="mr-1 h-4 w-4" />
                Target Audience: {learningPath.targetAudience.split(',')[0]}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Course Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {learningPath.detailedContent.overview}
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Learning Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {learningPath.detailedContent.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-shark-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Real-World Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Real-World Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {learningPath.detailedContent.realWorldApplications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-shark-blue mr-2">•</span>
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Curriculum */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Course Curriculum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {learningPath.detailedContent.curriculum.map((module, index) => (
                <div key={index} className="border-l-4 border-shark-blue pl-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Module {index + 1}: {module.module}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      {module.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-gray-700">
                        <span className="text-shark-blue mr-2">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {module.keyTerms.map((term, termIndex) => (
                      <Badge key={termIndex} variant="secondary" className="text-xs">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Case Studies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              Case Studies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {learningPath.detailedContent.caseStudies.map((caseStudy, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-shark-blue font-medium mb-3">
                    Company: {caseStudy.company}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Solution:</h4>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Outcome:</h4>
                      <p className="text-gray-700">{caseStudy.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Completion Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5" />
              Upon Completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Certificate</h3>
                <p className="text-gray-700 text-sm">
                  {learningPath.detailedContent.completion.certificate}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Skills Gained</h3>
                <ul className="space-y-1">
                  {learningPath.detailedContent.completion.skills.map((skill, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="text-shark-blue mr-1">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Career Paths</h3>
                <ul className="space-y-1">
                  {learningPath.detailedContent.completion.careerPaths.map((path, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="text-shark-blue mr-1">•</span>
                      {path}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button className={`bg-gradient-to-r ${learningPath.gradient} text-white px-8 py-3 rounded-full text-lg font-semibold mb-4`}>
            Learning Path Coming Soon
          </Button>
          <div className="text-sm text-gray-600">
            <Button 
              variant="ghost"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const element = document.getElementById('learning-paths');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Explore More Learning Paths
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}