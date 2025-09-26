export interface DetailedLearningPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  termCount: number;
  duration: string;
  gradient: string;
  iconColor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  targetAudience: string;
  detailedContent: {
    overview: string;
    objectives: string[];
    curriculum: {
      module: string;
      topics: string[];
      duration: string;
      keyTerms: string[];
    }[];
    realWorldApplications: string[];
    caseStudies: {
      title: string;
      company: string;
      challenge: string;
      solution: string;
      outcome: string;
    }[];
    practicalExercises: {
      title: string;
      description: string;
      expectedOutcome: string;
    }[];
    completion: {
      certificate: string;
      skills: string[];
      careerPaths: string[];
    };
  };
}

export const detailedLearningPaths: DetailedLearningPath[] = [
  {
    id: 'teen-essentials',
    title: 'Business Terms Every Teen Should Know',
    description: 'Essential business vocabulary for students and young entrepreneurs starting their journey.',
    icon: '🎓',
    termCount: 15,
    duration: '30 mins',
    gradient: 'from-blue-400 to-blue-600',
    iconColor: 'text-white',
    level: 'Beginner',
    targetAudience: 'Students (14-19 years), First-time entrepreneurs, College students',
    detailedContent: {
      overview: `
Designed specifically for Indian teenagers and young adults who are curious about business but intimidated by complex jargon. This learning path transforms confusing business terms into simple, relatable concepts using examples from popular Indian brands, social media platforms, and everyday scenarios.

Whether you're a Class 10 student thinking about starting a small business, a college freshman considering entrepreneurship, or a young adult trying to understand financial news, this course makes business language accessible and exciting.
      `,
      objectives: [
        'Understand 15 fundamental business terms that appear in 80% of business conversations',
        'Connect business concepts to familiar Indian brands and everyday experiences',
        'Build confidence to participate in business discussions and understand financial news',
        'Develop foundation knowledge for future entrepreneurial ventures',
        'Learn to identify business opportunities in daily life using proper terminology'
      ],
      curriculum: [
        {
          module: 'Money & Value Basics',
          topics: [
            'Revenue vs Profit (Why Zomato can have huge sales but still lose money)',
            'Valuation (How Instagram was worth ₹72,000 crores before making profit)',
            'Investment vs Expense (Why buying a laptop for your YouTube channel is investment)',
            'ROI - Return on Investment (Measuring if your tuition classes are worth the money)'
          ],
          duration: '10 minutes',
          keyTerms: ['Revenue', 'Profit', 'Valuation', 'Investment', 'ROI']
        },
        {
          module: 'Customer & Marketing Fundamentals',
          topics: [
            'Target Audience (Why Myntra ads are different from Amazon ads)',
            'Customer Acquisition (How Paytm got its first 1 crore users)',
            'Brand vs Product (Why people pay more for Nike than local shoes)',
            'Market Share (Understanding Jio vs Airtel competition)'
          ],
          duration: '8 minutes',
          keyTerms: ['Target Audience', 'Customer Acquisition', 'Brand', 'Market Share']
        },
        {
          module: 'Business Growth & Strategy',
          topics: [
            'Scalability (How one WhatsApp can serve 400 crore users)',
            'Competitive Advantage (Why Google remains #1 search engine)',
            'Partnerships (How PhonePe partnered with Flipkart to grow)',
            'Market Research (How Amul decides to launch new flavors)'
          ],
          duration: '8 minutes',
          keyTerms: ['Scalability', 'Competitive Advantage', 'Partnerships', 'Market Research']
        },
        {
          module: 'Modern Business Models',
          topics: [
            'Subscription Model (Netflix, Spotify, and why they work)',
            'E-commerce (Understanding how Amazon makes money)',
            'Platform Business (How Uber connects drivers and riders for profit)'
          ],
          duration: '4 minutes',
          keyTerms: ['Subscription Model', 'E-commerce', 'Platform Business']
        }
      ],
      realWorldApplications: [
        'Analyzing your favorite YouTuber\'s business model and revenue streams',
        'Understanding why some apps are free (Instagram) while others charge (Netflix)',
        'Evaluating local business opportunities using proper terminology',
        'Making informed decisions about college courses based on ROI thinking',
        'Understanding financial news and business articles in newspapers',
        'Participating confidently in family business discussions',
        'Evaluating part-time job opportunities vs. starting own small business'
      ],
      caseStudies: [
        {
          title: 'The Teenage Tea Seller Who Understood Target Audience',
          company: 'Chai Point (inspired by true story)',
          challenge: 'Prateek, a 17-year-old from Delhi, noticed that his school canteen tea was always crowded but the quality was poor. He wanted to start a better tea stall but didn\'t know where to begin.',
          solution: 'Using target audience analysis, Prateek identified that students wanted: (1) Quick service between classes, (2) Affordable prices (₹5-10 per cup), (3) Consistent taste, (4) Instagram-worthy presentation. He positioned his tea cart strategically outside the school gate and offered flavored teas with custom names.',
          outcome: 'Within 3 months, Prateek was earning ₹15,000 monthly profit. He understood that his target audience (students) had different needs than office workers, leading to his success. Today, he runs 3 tea carts near different schools.'
        },
        {
          title: 'How a College Student Used ROI Thinking',
          company: 'Personal Case Study - Shreya from Mumbai',
          challenge: 'Shreya had ₹30,000 saved from birthday money and part-time work. She was confused whether to spend it on an expensive design course (₹25,000) or start a small graphic design business.',
          solution: 'She applied ROI (Return on Investment) thinking: Course option - Cost: ₹25,000, Potential return: Better job paying ₹5,000 extra monthly. Business option - Cost: ₹20,000 (laptop + software), Potential return: ₹8,000 monthly from freelance clients.',
          outcome: 'She chose the business option. Within 6 months, she had recovered her investment and was earning ₹12,000 monthly. The ROI framework helped her make a logical decision instead of an emotional one.'
        },
        {
          title: 'The Instagram Page That Became a Brand',
          company: 'The Minimalist (skincare brand)',
          challenge: 'Two engineering students, Mohit and Rahul, started an Instagram page sharing skincare tips. They had 50,000 followers but no revenue.',
          solution: 'They understood the difference between having an audience and having customers. They learned about "customer acquisition cost" and "lifetime value." Instead of selling random products, they created their own skincare line targeting their specific audience - young Indians looking for affordable, science-based skincare.',
          outcome: 'Today, The Minimalist is worth over ₹100 crores. The founders credit their success to understanding basic business terms like target audience, customer acquisition, and brand building from their teenage years.'
        }
      ],
      practicalExercises: [
        {
          title: 'Your Favorite Brand Analysis',
          description: 'Pick any brand you love (Zomato, Nykaa, Boat, etc.) and identify: (1) Their target audience, (2) How they acquire customers, (3) Their competitive advantage, (4) Their revenue model. Use the terms you\'ve learned.',
          expectedOutcome: 'You\'ll understand how successful businesses think strategically and use proper business language to describe their strategies.'
        },
        {
          title: 'The School/College Business Idea',
          description: 'Identify one problem in your school or college. Design a solution using business thinking: (1) Define your target audience, (2) Calculate potential revenue, (3) Identify your competitive advantage, (4) Plan your customer acquisition strategy.',
          expectedOutcome: 'You\'ll apply business concepts to real situations and think like an entrepreneur.'
        },
        {
          title: 'Personal ROI Calculator',
          description: 'List 3 things you\'re considering spending money on (course, gadget, hobby equipment). Calculate the potential ROI for each and rank them.',
          expectedOutcome: 'You\'ll make more informed financial decisions using business thinking.'
        },
        {
          title: 'Business News Decoder',
          description: 'Read one business news article daily for a week. Identify and explain 5 business terms used in each article using simple language.',
          expectedOutcome: 'You\'ll become comfortable with business media and financial news.'
        }
      ],
      completion: {
        certificate: 'Teen Business Vocabulary Certified - Foundation Level',
        skills: [
          'Business terminology fluency',
          'Basic financial literacy',
          'Entrepreneurial thinking',
          'Strategic analysis of brands',
          'Business opportunity identification'
        ],
        careerPaths: [
          'Young Entrepreneur',
          'Business Development intern',
          'Marketing Assistant',
          'Sales Representative',
          'Business Analyst (entry-level)',
          'Startup Team Member',
          'E-commerce Specialist'
        ]
      }
    }
  },
  {
    id: 'dealbreakers',
    title: 'Top 10 Dealbreaker Terms',
    description: 'Terms that make or break deals in the tank - know these before you pitch!',
    icon: '⚡',
    termCount: 10,
    duration: '20 mins',
    gradient: 'from-green-400 to-emerald-500',
    iconColor: 'text-white',
    level: 'Intermediate',
    targetAudience: 'Aspiring entrepreneurs, Startup founders, Business pitch preparers',
    detailedContent: {
      overview: `
Based on analysis of 500+ Shark Tank India pitches, this intensive course focuses on the 10 business terms that most frequently determine whether entrepreneurs get funding or face rejection. These aren't just vocabulary words—they're the critical concepts that separate successful entrepreneurs from those who go home empty-handed.

Every term in this course has been the deciding factor in at least 10 major Shark Tank deals. Master these concepts, and you'll speak the language that sharks respect and respond to with investments.
      `,
      objectives: [
        'Master the 10 terms that appear in 90% of successful Shark Tank pitches',
        'Understand exactly what sharks are looking for when they ask about these concepts',
        'Learn to present these metrics in compelling ways that lead to investment',
        'Avoid the common mistakes that cause instant rejections',
        'Develop shark-level thinking about business fundamentals'
      ],
      curriculum: [
        {
          module: 'The Financial Dealbreakers',
          topics: [
            'Unit Economics (The #1 reason sharks say no)',
            'Customer Acquisition Cost vs Lifetime Value (The sustainability test)',
            'Burn Rate (How long will you survive?)',
            'Gross Margins (The profitability reality check)'
          ],
          duration: '8 minutes',
          keyTerms: ['Unit Economics', 'Customer Acquisition Cost', 'Lifetime Value', 'Burn Rate', 'Gross Margins']
        },
        {
          module: 'The Market Dealbreakers',
          topics: [
            'Total Addressable Market (Is this worth their time?)',
            'Product-Market Fit (Do people actually want this?)',
            'Competitive Moats (How will you survive competition?)'
          ],
          duration: '6 minutes',
          keyTerms: ['Total Addressable Market', 'Product-Market Fit', 'Competitive Moats']
        },
        {
          module: 'The Execution Dealbreakers',
          topics: [
            'Scalability (Can you grow without breaking?)',
            'Traction (Proof that your business works)',
            'Team Capability (Can you actually execute this?)'
          ],
          duration: '6 minutes',
          keyTerms: ['Scalability', 'Traction', 'Team Capability']
        }
      ],
      realWorldApplications: [
        'Preparing for investor pitches with confidence',
        'Conducting due diligence on your own business before seeking funding',
        'Identifying weaknesses in your business model before sharks do',
        'Understanding why some startups fail despite good ideas',
        'Evaluating other businesses and investment opportunities',
        'Speaking confidently with investors, banks, and business partners',
        'Making strategic decisions based on shark-level business thinking'
      ],
      caseStudies: [
        {
          title: 'The Unit Economics Disaster That Became a Success',
          company: 'Licious (Food delivery startup)',
          challenge: 'In early rounds, Licious was losing ₹45 on every order delivered. Investors were concerned about unit economics and sustainability.',
          solution: 'The founders focused obsessively on improving unit economics: (1) Negotiated better supplier rates, (2) Optimized delivery routes, (3) Increased average order values through bundling, (4) Improved inventory management to reduce waste.',
          outcome: 'Within 18 months, they achieved positive unit economics of +₹25 per order. This transformation led to successful Series D funding of $52 million. Today, Licious is valued at over $1 billion.'
        },
        {
          title: 'How Poor CAC Understanding Killed a Promising Startup',
          company: 'FoodPanda India (Food delivery - failure case study)',
          challenge: 'FoodPanda had strong brand recognition and good product but was spending ₹400 to acquire customers who ordered only once (₹250 average order value).',
          solution: 'Instead of fixing the underlying CAC problem, they raised more money to spend on marketing, thinking scale would solve the issue.',
          outcome: 'Despite raising over $300 million, FoodPanda India eventually shut down. Their CAC-to-LTV ratio was unsustainable, and they never achieved the repeat usage necessary for profitability.'
        },
        {
          title: 'The TAM Miscalculation That Almost Fooled Sharks',
          company: 'Confidential Shark Tank India pitch (Season 2)',
          challenge: 'A ed-tech startup claimed TAM of ₹50,000 crores by multiplying India\'s total student population by average education spending.',
          solution: 'Shark Aman Gupta challenged: "But your product only serves English-speaking, smartphone-owning students in urban areas. What\'s your real TAM?" The founder had to recalculate live.',
          outcome: 'The real TAM was ₹2,000 crores - still large but 25x smaller than claimed. The founder lost credibility and all sharks went out. Lesson: Be precise with your TAM calculations.'
        },
        {
          title: 'The Traction Story That Won Every Shark',
          company: 'Mamaearth (Personal care startup)',
          challenge: 'Competing in the crowded personal care market against established brands like Hindustan Unilever.',
          solution: 'Founders presented compelling traction metrics: (1) 100% month-over-month growth for 8 consecutive months, (2) 85% customer retention rate, (3) Expanding from 1 to 100+ SKUs based on customer demand, (4) Growing from online-only to 20,000+ retail stores.',
          outcome: 'Strong traction metrics led to multiple funding rounds. Mamaearth IPO\'d in 2023 at a valuation of ₹24,000 crores, making it one of India\'s most successful D2C success stories.'
        }
      ],
      practicalExercises: [
        {
          title: 'Your Business Health Checkup',
          description: 'If you have a business idea or existing business, calculate all 10 dealbreaker metrics. If you don\'t have a business, analyze a company you admire (like Nykaa or Boat) and estimate their metrics.',
          expectedOutcome: 'You\'ll understand which areas need improvement before approaching investors and how healthy businesses structure their operations.'
        },
        {
          title: 'The Shark Tank Simulator',
          description: 'Watch a Shark Tank episode and pause before sharks ask questions. Predict which dealbreaker terms they\'ll focus on and why. Compare your predictions with actual questions.',
          expectedOutcome: 'You\'ll develop shark-level intuition for identifying business strengths and weaknesses quickly.'
        },
        {
          title: 'Competitive Analysis Deep Dive',
          description: 'Pick 3 companies in the same industry. Research and compare their unit economics, CAC, scalability, and competitive moats. Predict which one will succeed long-term.',
          expectedOutcome: 'You\'ll understand how these terms play out in real competition and develop better business judgment.'
        },
        {
          title: 'The Dealbreaker Defense',
          description: 'For each of the 10 terms, write a 2-minute explanation of how you would present this metric if it was weak in your business. Practice turning weaknesses into improvement opportunities.',
          expectedOutcome: 'You\'ll be prepared to handle tough investor questions and present your business honestly but positively.'
        }
      ],
      completion: {
        certificate: 'Shark Tank Dealbreaker Terms Master',
        skills: [
          'Advanced business metrics analysis',
          'Investor-level business evaluation',
          'Strategic weakness identification',
          'Competitive analysis expertise',
          'Pitch preparation and defense'
        ],
        careerPaths: [
          'Startup Founder',
          'Business Analyst',
          'Investment Banking Analyst',
          'Venture Capital Associate',
          'Management Consultant',
          'Business Development Manager',
          'Strategic Planning Specialist'
        ]
      }
    }
  },
  {
    id: 'funding-essentials',
    title: 'Startup Funding Essentials',
    description: 'Master the language of investment and funding rounds like a pro.',
    icon: '🚀',
    termCount: 20,
    duration: '45 mins',
    gradient: 'from-purple-400 to-indigo-600',
    iconColor: 'text-white',
    level: 'Advanced',
    targetAudience: 'Startup founders, Investment professionals, Advanced entrepreneurs',
    detailedContent: {
      overview: `
The comprehensive guide to understanding startup funding from pre-seed to IPO. This advanced course covers the complex world of venture capital, angel investing, and growth financing using real examples from India's startup ecosystem.

Designed for serious entrepreneurs ready to raise capital, this course provides insider knowledge of how funding works, what investors look for, and how to navigate each stage of the funding journey successfully.
      `,
      objectives: [
        'Understand the complete startup funding lifecycle from idea to exit',
        'Master terms used in term sheets, investor presentations, and funding negotiations',
        'Learn valuation methods and how to defend your company\'s worth',
        'Understand different types of investors and their investment criteria',
        'Develop skills to successfully raise capital at each funding stage',
        'Navigate legal and regulatory aspects of startup funding in India'
      ],
      curriculum: [
        {
          module: 'Pre-Seed & Seed Funding Fundamentals',
          topics: [
            'Angel Investors vs VCs (Who to approach when)',
            'Seed Valuation Methods (How to value a company with no revenue)',
            'SAFE Notes vs Convertible Debt (Modern funding instruments)',
            'Friends & Family Rounds (Getting your first ₹10-50 lakhs)',
            'Incubators vs Accelerators (Y Combinator model in India)'
          ],
          duration: '12 minutes',
          keyTerms: ['Angel Investors', 'Seed Valuation', 'SAFE Notes', 'Convertible Debt', 'Incubators']
        },
        {
          module: 'Series A to Series C Mastery',
          topics: [
            'Series A Requirements (The ₹10 crore milestone)',
            'Lead Investors vs Follow-on Investors (Building your investor syndicate)',
            'Anti-dilution Provisions (Protecting investor interests)',
            'Liquidation Preferences (Who gets paid first)',
            'Board Composition (How control shifts with funding)',
            'Employee Stock Options (ESOP pools and talent retention)'
          ],
          duration: '15 minutes',
          keyTerms: ['Series A', 'Lead Investors', 'Anti-dilution', 'Liquidation Preferences', 'Board Composition', 'ESOP']
        },
        {
          module: 'Growth Stage & Exit Strategies',
          topics: [
            'Growth Capital vs Private Equity (Scale-up funding)',
            'Pre-IPO Rounds (Preparing for public markets)',
            'Strategic Investors (Corporate VCs and their agenda)',
            'Exit Strategies (IPO vs Acquisition)',
            'Secondary Markets (Startup stock trading)',
            'International Expansion Funding (Going global with Indian startups)'
          ],
          duration: '12 minutes',
          keyTerms: ['Growth Capital', 'Pre-IPO', 'Strategic Investors', 'Exit Strategies', 'Secondary Markets']
        },
        {
          module: 'Advanced Valuation & Deal Structures',
          topics: [
            'DCF for Startups (Discounted Cash Flow in high-growth companies)',
            'Revenue Multiples (How SaaS companies are valued)',
            'Down Rounds (When valuations decrease)',
            'Flat Rounds (Maintaining valuation)',
            'Drag-Along Rights (Forcing minority shareholders to sell)',
            'Tag-Along Rights (Minority shareholder protection)'
          ],
          duration: '6 minutes',
          keyTerms: ['DCF', 'Revenue Multiples', 'Down Rounds', 'Drag-Along Rights', 'Tag-Along Rights']
        }
      ],
      realWorldApplications: [
        'Preparing detailed funding strategies for your startup',
        'Evaluating term sheets and negotiating better deal terms',
        'Understanding how much dilution to accept at each funding stage',
        'Building relationships with the right investors for your industry',
        'Creating financial models that satisfy institutional investors',
        'Navigating regulatory requirements for foreign investment (FDI)',
        'Planning exit strategies and maximizing founder returns'
      ],
      caseStudies: [
        {
          title: 'Byju\'s Funding Journey: From Bootstrap to $22 Billion',
          company: 'Byju\'s (EdTech giant)',
          challenge: 'Byju Raveendran started with offline coaching classes in Bangalore. How did he navigate the funding ecosystem to build India\'s most valuable startup?',
          solution: 'Strategic funding progression: (1) Bootstrap phase (2011-2013): Self-funded with coaching revenue, (2) Seed round (2013): ₹35 crores from Aarin Capital, (3) Series A-F (2015-2021): Raised over $4 billion from global investors like General Atlantic, Sequoia, and Tiger Global, (4) Each round focused on different growth milestones: geographical expansion, product development, acquisitions.',
          outcome: 'Peak valuation of $22 billion made Byju\'s India\'s most valuable startup. The journey shows how understanding investor expectations at each stage enables successful capital raising.'
        },
        {
          title: 'The Zomato IPO: From Funding Rounds to Public Markets',
          company: 'Zomato (Food delivery platform)',
          challenge: 'Zomato raised private capital for 13 years before going public. How did they structure their funding to achieve a successful IPO?',
          solution: 'Methodical approach to public readiness: (1) Series A-H (2010-2021): Raised $2.1 billion across multiple rounds, (2) Built strong unit economics and path to profitability, (3) Expanded to 24 countries to show scalability, (4) Acquired competitors (Grofers/Blinkit) to create platform ecosystem, (5) Maintained diverse investor base including international funds.',
          outcome: 'July 2021 IPO raised ₹9,375 crores at ₹76 per share. Stock hit ₹169 on listing day. Demonstrated successful transition from venture-backed startup to public company.'
        },
        {
          title: 'OYO\'s Funding Rollercoaster: Valuations Up and Down',
          company: 'OYO (Hospitality platform)',
          challenge: 'OYO\'s valuation peaked at $10 billion but later faced down rounds during COVID-19. How do startups handle valuation volatility?',
          solution: 'Adaptive funding strategy: (1) Rapid growth phase (2015-2019): Raised $3+ billion at increasing valuations, (2) Crisis management (2020-2021): Accepted down rounds to survive pandemic, (3) Business model pivot: From asset-light aggregator to managed properties, (4) International expansion funded separately to reduce risk.',
          outcome: 'Despite valuation challenges, OYO survived COVID-19 and filed for IPO in 2021. Showed importance of maintaining adequate cash runway and investor relationships through difficult times.'
        },
        {
          title: 'Razorpay\'s Strategic Investor Journey',
          company: 'Razorpay (Fintech payments)',
          challenge: 'Building a fintech company requires regulatory expertise and banking partnerships. How did Razorpay choose strategic vs financial investors?',
          solution: 'Balanced investor strategy: (1) Early rounds: Financial investors (Sequoia, Y Combinator) for growth capital, (2) Later rounds: Added strategic investors like Mastercard for partnership opportunities, (3) Maintained founder control through careful equity management, (4) Used revenue-based financing for working capital needs.',
          outcome: 'Achieved $7.5 billion valuation by 2022. Strategic investors provided market access and credibility, while financial investors supported rapid scaling.'
        }
      ],
      practicalExercises: [
        {
          title: 'Create Your Funding Roadmap',
          description: 'Design a 5-year funding strategy for a startup idea: (1) Estimate funding needed at each stage, (2) Identify appropriate investor types, (3) Calculate dilution at each round, (4) Plan major milestones between rounds.',
          expectedOutcome: 'You\'ll understand the strategic timing and structuring of funding rounds to maximize company value and minimize dilution.'
        },
        {
          title: 'Term Sheet Analysis Workshop',
          description: 'Review real term sheets from Indian startups (available online) and identify: (1) Valuation terms, (2) Investor rights and protections, (3) Anti-dilution provisions, (4) Board composition changes, (5) Exit rights and preferences.',
          expectedOutcome: 'You\'ll develop skills to evaluate and negotiate term sheets effectively.'
        },
        {
          title: 'Investor Research Project',
          description: 'Research 5 Indian VCs or angel investors: (1) Their investment thesis, (2) Typical check sizes, (3) Portfolio companies, (4) Investment criteria, (5) Value-add beyond capital. Create target investor profiles.',
          expectedOutcome: 'You\'ll build a database of potential investors matched to your startup\'s needs and stage.'
        },
        {
          title: 'Valuation Model Building',
          description: 'Build a startup valuation model using: (1) Revenue multiples from comparable companies, (2) DCF analysis with growth assumptions, (3) Risk-adjusted returns. Test sensitivity to key assumptions.',
          expectedOutcome: 'You\'ll understand how investors value startups and can defend your company\'s valuation with data.'
        },
        {
          title: 'Due Diligence Preparation',
          description: 'Create a comprehensive due diligence folder including: (1) Financial statements and projections, (2) Legal documents and IP, (3) Market research and competitive analysis, (4) Team backgrounds and references, (5) Customer contracts and testimonials.',
          expectedOutcome: 'You\'ll be prepared for investor due diligence and can accelerate funding processes.'
        }
      ],
      completion: {
        certificate: 'Advanced Startup Funding Specialist',
        skills: [
          'Expert-level funding strategy development',
          'Term sheet negotiation and analysis',
          'Advanced startup valuation methods',
          'Investor relations and communications',
          'Legal and regulatory compliance',
          'Exit strategy planning',
          'International funding and expansion'
        ],
        careerPaths: [
          'Serial Entrepreneur',
          'Venture Capital Partner',
          'Investment Banking VP',
          'Corporate Development Director',
          'Startup CFO',
          'Business Development Head',
          'Strategic Partnerships Manager',
          'Angel Investor/Advisor'
        ]
      }
    }
  }
];