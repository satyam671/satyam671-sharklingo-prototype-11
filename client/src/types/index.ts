export interface CaseStudy {
  introductionContext: string;
  sharkTankPitchReference: {
    pitchDescription: string;
    startupDetails: string;
  };
  applicationAnalysis: {
    howTermWasApplied: string;
    founderPerspective: string;
    sharkPerspective: string;
  };
  outcomeInsights: {
    whatHappened: string;
    impactOnFounder: string;
    dealOutcome: string;
  };
  actionableTakeaways: {
    practicalLessons: string[];
    mistakesToAvoid: string[];
  };
}

export interface BusinessTerm {
  id: string;
  term: string;
  category: 'investor-vc-lingo' | 'startup-metrics' | 'deal-structures' | 'valuation-funding' | 
           'pitch-strategy' | 'product-operations' | 'roles-titles' | 'legal-compliance' | 
           'marketing-growth' | 'market-business-models' | 'financial-metrics' | 'business-accounting';
  icon: string;
  businessDefinition: string;
  simpleExplanation: string;
  sharkTankExample: string;
  sharkName: string;
  realWorldExample: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  relatedTerms?: string[];
  metaTitle?: string;
  metaDescription?: string;
  caseStudy?: CaseStudy;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint: string;
  relatedTerm?: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  isComplete: boolean;
  showResults: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export interface ThemeCollection {
  id: string;
  title: string;
  description: string;
  emoji: string;
  termCount: number;
  duration: string;
  color: string;
  terms: string[];
}
