import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'An entrepreneur asks for ₹50 lakhs for 10% of their company. What is their company valuation?',
    options: ['₹50 lakhs', '₹5 crores', '₹5 lakhs', '₹50 crores'],
    correctAnswer: 1,
    explanation: 'If 10% = ₹50 lakhs, then 100% = ₹50 lakhs × 10 = ₹5 crores',
    hint: 'If 10% = ₹50 lakhs, then 100% = ?',
    relatedTerm: 'valuation'
  },
  {
    id: 'q2',
    question: 'What does CAC stand for in business terms?',
    options: ['Customer Acquisition Cost', 'Company Asset Capital', 'Customer Annual Contract', 'Cash Account Capital'],
    correctAnswer: 0,
    explanation: 'CAC stands for Customer Acquisition Cost - the total cost to acquire a new customer.',
    hint: 'Think about what it costs to get new customers.',
    relatedTerm: 'customer-acquisition-cost'
  },
  {
    id: 'q3',
    question: 'Which of these is the best example of a scalable business model?',
    options: ['Personal coaching', 'Software as a Service (SaaS)', 'Custom tailoring', 'Home cleaning service'],
    correctAnswer: 1,
    explanation: 'SaaS can serve millions of users with minimal additional costs per user, making it highly scalable.',
    hint: 'Think about which business can serve more customers without proportionally increasing costs.',
    relatedTerm: 'scalability'
  },
  {
    id: 'q4',
    question: 'If your burn rate is ₹5 lakhs per month and you have ₹20 lakhs in the bank, how long will your money last?',
    options: ['2 months', '4 months', '6 months', '8 months'],
    correctAnswer: 1,
    explanation: '₹20 lakhs ÷ ₹5 lakhs per month = 4 months runway',
    hint: 'Divide total money by monthly spending.',
    relatedTerm: 'burn-rate'
  },
  {
    id: 'q5',
    question: 'What is equity in simple terms?',
    options: ['The money you owe', 'Your monthly profit', 'Ownership share in a company', 'Total revenue'],
    correctAnswer: 2,
    explanation: 'Equity represents ownership percentage in a company - like owning a slice of a pizza.',
    hint: 'Think about ownership and having a "piece" of something.',
    relatedTerm: 'equity'
  },
  {
    id: 'q6',
    question: 'Zomato spent ₹200 to acquire a customer who orders ₹300 worth of food monthly. If 60% of customers continue ordering monthly, what is the 6-month CLV?',
    options: ['₹1,080', '₹1,800', '₹900', '₹1,200'],
    correctAnswer: 0,
    explanation: 'Month 1: ₹300, Month 2: ₹300×0.6=₹180, continuing this pattern for 6 months = ₹1,080',
    hint: 'Calculate cumulative revenue considering 60% retention each month.',
    relatedTerm: 'customer-lifetime-value'
  },
  {
    id: 'q7',
    question: 'In Shark Tank India, what does "pre-money valuation" mean?',
    options: ['Valuation before any investment', 'Valuation after investment', 'Money needed pre-launch', 'Revenue before costs'],
    correctAnswer: 0,
    explanation: 'Pre-money valuation is what the company is worth before receiving new investment.',
    hint: 'Think about "before" the money comes in.',
    relatedTerm: 'pre-money-valuation'
  },
  {
    id: 'q8',
    question: 'Flipkart started as an online bookstore but expanded to everything. This strategy is called:',
    options: ['Vertical Integration', 'Horizontal Expansion', 'Market Penetration', 'Product Differentiation'],
    correctAnswer: 1,
    explanation: 'Horizontal expansion means adding new products/services to serve the same customer base.',
    hint: 'They expanded across different product categories.',
    relatedTerm: 'horizontal-expansion'
  },
  {
    id: 'q9',
    question: 'What is the main difference between revenue and profit?',
    options: ['Revenue is monthly, profit is yearly', 'Revenue is total income, profit is what remains after costs', 'Revenue includes taxes, profit doesn\'t', 'They are the same thing'],
    correctAnswer: 1,
    explanation: 'Revenue is total money coming in, profit is what\'s left after subtracting all expenses.',
    hint: 'One is before expenses, one is after.',
    relatedTerm: 'revenue-vs-profit'
  },
  {
    id: 'q10',
    question: 'A startup has a 40% gross margin. If they sell ₹100 worth of products, how much profit do they make?',
    options: ['₹40', '₹60', '₹100', '₹140'],
    correctAnswer: 0,
    explanation: 'Gross margin of 40% means 40% of revenue remains after direct costs: ₹100 × 0.40 = ₹40',
    hint: 'Gross margin percentage × Revenue = Gross profit',
    relatedTerm: 'gross-margin'
  },
  {
    id: 'q11',
    question: 'Paytm\'s strategy during demonetization was to capture market share by offering cashbacks. This is an example of:',
    options: ['Premium Pricing', 'Penetration Pricing', 'Skimming Strategy', 'Cost Leadership'],
    correctAnswer: 1,
    explanation: 'Penetration pricing means setting low prices (or offering incentives) to quickly gain market share.',
    hint: 'They wanted to "penetrate" the market quickly.',
    relatedTerm: 'penetration-pricing'
  },
  {
    id: 'q12',
    question: 'What does "bootstrapped" mean for a startup?',
    options: ['Using only founder\'s money', 'Getting government funding', 'Taking bank loans', 'Going public early'],
    correctAnswer: 0,
    explanation: 'Bootstrapped means self-funded using personal savings and revenue, without external investors.',
    hint: 'Like pulling yourself up by your own bootstraps.',
    relatedTerm: 'bootstrapped'
  },
  {
    id: 'q13',
    question: 'If a SaaS company has 1000 users paying ₹500/month and loses 5% users monthly, what is their monthly churn rate?',
    options: ['5%', '10%', '50%', '500%'],
    correctAnswer: 0,
    explanation: 'Churn rate is the percentage of customers who stop using the service: 5% in this case.',
    hint: 'The question directly states the percentage lost.',
    relatedTerm: 'churn-rate'
  },
  {
    id: 'q14',
    question: 'Reliance Jio offered free data and calls for months. What was their likely main goal?',
    options: ['Immediate profit', 'Market share capture', 'Cost reduction', 'Brand awareness'],
    correctAnswer: 1,
    explanation: 'Jio used penetration pricing to quickly capture massive market share from established players.',
    hint: 'They weren\'t making money initially, so what were they gaining?',
    relatedTerm: 'market-share'
  },
  {
    id: 'q15',
    question: 'What is a "unicorn" in startup terminology?',
    options: ['A mythical business idea', 'A startup valued at $1 billion+', 'A company with one founder', 'A perfect product'],
    correctAnswer: 1,
    explanation: 'A unicorn is a privately-held startup company valued at over $1 billion.',
    hint: 'Think about rarity and high value.',
    relatedTerm: 'unicorn'
  },
  {
    id: 'q16',
    question: 'Amazon India operates at thin margins but focuses on volume. This strategy is called:',
    options: ['Premium Strategy', 'Niche Strategy', 'Volume Strategy', 'Differentiation Strategy'],
    correctAnswer: 2,
    explanation: 'Volume strategy focuses on selling large quantities at low margins rather than high margins on few sales.',
    hint: 'High volume, low margin per unit.',
    relatedTerm: 'volume-strategy'
  },
  {
    id: 'q17',
    question: 'What does "pivot" mean in startup language?',
    options: ['Rotate the office furniture', 'Change business model/direction', 'Hire new employees', 'Increase marketing spend'],
    correctAnswer: 1,
    explanation: 'Pivoting means changing your business model, target market, or product direction based on learnings.',
    hint: 'Like changing direction while keeping some momentum.',
    relatedTerm: 'pivot'
  },
  {
    id: 'q18',
    question: 'A company spends ₹10 lakhs on marketing and acquires 500 customers. What is their CAC?',
    options: ['₹2,000', '₹500', '₹20,000', '₹50,000'],
    correctAnswer: 0,
    explanation: 'CAC = Total acquisition cost ÷ Number of customers = ₹10,00,000 ÷ 500 = ₹2,000',
    hint: 'Divide total marketing spend by customers acquired.',
    relatedTerm: 'customer-acquisition-cost'
  },
  {
    id: 'q19',
    question: 'Swiggy charges restaurants a commission and customers a delivery fee. This is which type of business model?',
    options: ['B2B only', 'B2C only', 'Marketplace/Platform', 'Subscription'],
    correctAnswer: 2,
    explanation: 'Marketplace models earn by facilitating transactions between multiple parties (restaurants and customers).',
    hint: 'They connect two sides and take a cut.',
    relatedTerm: 'marketplace-model'
  },
  {
    id: 'q20',
    question: 'What is "product-market fit"?',
    options: ['When your product fits in the market', 'When customers love and regularly use your product', 'When you have no competitors', 'When you make profit'],
    correctAnswer: 1,
    explanation: 'Product-market fit means customers find your product so valuable they regularly use it and recommend it.',
    hint: 'It\'s about customer love and retention.',
    relatedTerm: 'product-market-fit'
  },
  {
    id: 'q21',
    question: 'Tesla initially targeted luxury car buyers before mass market. This approach is called:',
    options: ['Market Skimming', 'Market Penetration', 'Market Development', 'Market Diversification'],
    correctAnswer: 0,
    explanation: 'Market skimming starts with high prices for early adopters, then gradually lowers prices.',
    hint: 'Start at the top and work your way down.',
    relatedTerm: 'market-skimming'
  },
  {
    id: 'q22',
    question: 'In Indian context, what does "jugaad innovation" typically mean?',
    options: ['Expensive R&D', 'Frugal and creative solutions', 'Copying competitors', 'Government grants'],
    correctAnswer: 1,
    explanation: 'Jugaad innovation means creating clever, low-cost solutions with limited resources.',
    hint: 'Making the most with the least.',
    relatedTerm: 'frugal-innovation'
  },
  {
    id: 'q23',
    question: 'If a business has ₹50 lakh revenue and ₹30 lakh costs, what is the profit margin?',
    options: ['40%', '60%', '30%', '20%'],
    correctAnswer: 0,
    explanation: 'Profit = ₹50L - ₹30L = ₹20L. Profit margin = (₹20L ÷ ₹50L) × 100 = 40%',
    hint: 'Profit divided by revenue, multiplied by 100.',
    relatedTerm: 'profit-margin'
  },
  {
    id: 'q24',
    question: 'What is the primary advantage of recurring revenue over one-time sales?',
    options: ['Higher immediate profits', 'Predictable cash flow', 'Less customer service', 'Lower costs'],
    correctAnswer: 1,
    explanation: 'Recurring revenue provides predictable, steady cash flow that enables better planning and valuation.',
    hint: 'Think about consistency and predictability.',
    relatedTerm: 'recurring-revenue'
  },
  {
    id: 'q25',
    question: 'Zomato went from food discovery to food delivery to groceries. This growth strategy is:',
    options: ['Market Penetration', 'Product Development', 'Market Development', 'Diversification'],
    correctAnswer: 1,
    explanation: 'Product development means creating new products/services for existing customers.',
    hint: 'Same customers, new products/services.',
    relatedTerm: 'product-development'
  },
  {
    id: 'q26',
    question: 'What does "freemium" model mean?',
    options: ['Everything is free', 'Free basic version, paid premium features', 'Premium only', 'Free for students only'],
    correctAnswer: 1,
    explanation: 'Freemium offers basic features free to attract users, then charges for premium features.',
    hint: 'Combination of "free" and "premium".',
    relatedTerm: 'freemium'
  },
  {
    id: 'q27',
    question: 'A startup raises ₹5 crores for 20% equity. What is the post-money valuation?',
    options: ['₹5 crores', '₹20 crores', '₹25 crores', '₹30 crores'],
    correctAnswer: 2,
    explanation: 'Post-money = Pre-money + Investment. If 20% = ₹5Cr, then 100% = ₹25Cr (post-money).',
    hint: 'Add the investment to the pre-money valuation.',
    relatedTerm: 'post-money-valuation'
  },
  {
    id: 'q28',
    question: 'Why do sharks often ask about "unit economics"?',
    options: ['To confuse entrepreneurs', 'To check if each sale is profitable', 'To discuss accounting', 'To talk about units sold'],
    correctAnswer: 1,
    explanation: 'Unit economics shows if you make or lose money on each individual sale/customer.',
    hint: 'Profit or loss per individual unit/customer.',
    relatedTerm: 'unit-economics'
  },
  {
    id: 'q29',
    question: 'Ola initially focused only on taxi aggregation, then added Ola Money, Ola Foods. This is:',
    options: ['Horizontal Integration', 'Vertical Integration', 'Backward Integration', 'Market Penetration'],
    correctAnswer: 0,
    explanation: 'Horizontal integration means expanding into related but different business areas.',
    hint: 'Expanding sideways into related services.',
    relatedTerm: 'horizontal-integration'
  },
  {
    id: 'q30',
    question: 'What is the main purpose of a "minimum viable product" (MVP)?',
    options: ['To make maximum profit', 'To test core assumptions with minimal effort', 'To compete with established players', 'To raise funding'],
    correctAnswer: 1,
    explanation: 'MVP tests your core business hypothesis with minimum resources before full development.',
    hint: 'Test your idea quickly and cheaply.',
    relatedTerm: 'mvp'
  },
  {
    id: 'q31',
    question: 'Byju\'s offers free content initially, then converts users to paid subscriptions. What is this strategy?',
    options: ['Bait and Switch', 'Lead Generation', 'Freemium', 'Loss Leader'],
    correctAnswer: 2,
    explanation: 'Freemium provides free value upfront to demonstrate quality, then offers premium features.',
    hint: 'Free to try, pay for more features.',
    relatedTerm: 'freemium'
  },
  {
    id: 'q32',
    question: 'What does "B2B2C" business model mean?',
    options: ['Business to Business to Customer', 'Back to Back to Customer', 'Business twice Business Customer', 'Buy to Build to Customer'],
    correctAnswer: 0,
    explanation: 'B2B2C sells to businesses who then sell to consumers - like a supplier selling through retailers.',
    hint: 'Business → Business → Customer chain.',
    relatedTerm: 'b2b2c'
  },
  {
    id: 'q33',
    question: 'If a company\'s TAM is ₹1000 crores and they realistically can capture 2%, what is their revenue potential?',
    options: ['₹20 crores', '₹200 crores', '₹2 crores', '₹50 crores'],
    correctAnswer: 0,
    explanation: 'TAM × Market share = ₹1000 crores × 2% = ₹20 crores',
    hint: '2% of ₹1000 crores',
    relatedTerm: 'total-addressable-market'
  },
  {
    id: 'q34',
    question: 'Razorpay charges a percentage of each transaction processed. This is which revenue model?',
    options: ['Subscription', 'Commission/Transaction fee', 'Advertising', 'Licensing'],
    correctAnswer: 1,
    explanation: 'Transaction fee model earns a percentage or fixed amount per transaction processed.',
    hint: 'They earn from each payment processed.',
    relatedTerm: 'transaction-fee-model'
  },
  {
    id: 'q35',
    question: 'What is "churn rate" in subscription businesses?',
    options: ['Rate of new customer acquisition', 'Rate of customers leaving/canceling', 'Rate of revenue growth', 'Rate of profit increase'],
    correctAnswer: 1,
    explanation: 'Churn rate measures the percentage of customers who stop using your service in a given period.',
    hint: 'How many customers are leaving?',
    relatedTerm: 'churn-rate'
  },
  {
    id: 'q36',
    question: 'PhonePe started within Flipkart, then became independent. This is an example of:',
    options: ['Acquisition', 'Merger', 'Spin-off', 'Joint Venture'],
    correctAnswer: 2,
    explanation: 'A spin-off is when a company creates an independent company from an existing division.',
    hint: 'Breaking off from the parent company.',
    relatedTerm: 'spin-off'
  },
  {
    id: 'q37',
    question: 'Why is "network effect" powerful for platforms like Facebook or WhatsApp?',
    options: ['More users = higher costs', 'More users = more valuable for each user', 'More users = more complexity', 'More users = more competition'],
    correctAnswer: 1,
    explanation: 'Network effects make the product more valuable as more people use it (more friends to connect with).',
    hint: 'The value increases with more users.',
    relatedTerm: 'network-effect'
  },
  {
    id: 'q38',
    question: 'A startup is "cash flow positive" when:',
    options: ['They have investors', 'Money coming in > Money going out', 'They have bank loans', 'Revenue > ₹1 crore'],
    correctAnswer: 1,
    explanation: 'Cash flow positive means more money flows into the business than flows out each period.',
    hint: 'More money in than out.',
    relatedTerm: 'cash-flow-positive'
  },
  {
    id: 'q39',
    question: 'Nykaa started online, then opened physical stores. This omnichannel approach helps with:',
    options: ['Reducing costs', 'Better customer experience', 'Avoiding competition', 'Faster delivery only'],
    correctAnswer: 1,
    explanation: 'Omnichannel provides customers multiple ways to interact with the brand for better experience.',
    hint: 'Multiple channels for better customer experience.',
    relatedTerm: 'omnichannel'
  },
  {
    id: 'q40',
    question: 'What does "bootstrapped to profitability" mean?',
    options: ['Used external funding to grow', 'Achieved profitability without external funding', 'Took bank loans', 'Went public'],
    correctAnswer: 1,
    explanation: 'Bootstrapped to profitability means reaching profitability using only internal funds, no external investors.',
    hint: 'Self-funded path to making money.',
    relatedTerm: 'bootstrapped'
  },
  {
    id: 'q41',
    question: 'Zerodha disrupted traditional brokers by offering zero brokerage. What type of innovation is this?',
    options: ['Product Innovation', 'Process Innovation', 'Business Model Innovation', 'Technology Innovation'],
    correctAnswer: 2,
    explanation: 'Business model innovation changes how value is created, delivered, or monetized.',
    hint: 'They changed how brokers make money.',
    relatedTerm: 'business-model-innovation'
  },
  {
    id: 'q42',
    question: 'In the context of Shark Tank, what does "skin in the game" mean?',
    options: ['Physical appearance matters', 'Founder has personal investment/risk', 'Wearing expensive clothes', 'Having tattoos'],
    correctAnswer: 1,
    explanation: 'Skin in the game means the founder has significant personal investment (money, time, career) at risk.',
    hint: 'Personal stake and risk in the outcome.',
    relatedTerm: 'skin-in-the-game'
  },
  {
    id: 'q43',
    question: 'What is "runway" in startup terminology?',
    options: ['Airport location', 'How long money will last at current burn rate', 'Revenue growth rate', 'Product development time'],
    correctAnswer: 1,
    explanation: 'Runway is how many months/years the company can operate with current cash at current spending rate.',
    hint: 'How long can you fly before landing?',
    relatedTerm: 'runway'
  },
  {
    id: 'q44',
    question: 'Bharti Airtel partnered with Netflix for bundled offerings. This strategy is called:',
    options: ['Acquisition', 'Partnership/Alliance', 'Merger', 'Licensing'],
    correctAnswer: 1,
    explanation: 'Strategic partnerships combine complementary strengths without ownership changes.',
    hint: 'Working together while remaining separate companies.',
    relatedTerm: 'strategic-partnership'
  },
  {
    id: 'q45',
    question: 'What is the key difference between angel investors and venture capitalists?',
    options: ['Angels invest more money', 'VCs are individuals, angels are firms', 'Angels are individuals, VCs are firms with pooled money', 'No difference'],
    correctAnswer: 2,
    explanation: 'Angel investors are wealthy individuals; VCs are firms that manage pooled money from institutions.',
    hint: 'Individual wealth vs. pooled institutional money.',
    relatedTerm: 'angel-vs-vc'
  }
];
