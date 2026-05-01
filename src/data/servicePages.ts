export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePageTemplate {
  id: string;
  slug: string;
  title: string;
  color: string;
  textColor: string;
  metaTitleTemplate: string;
  metaDescriptionTemplate: string;
  keywordsTemplate: string[];
  h1Template: string;
  introTemplate: string;
  subIntroTemplate: string;
  features: ServiceFeature[];
  technologies: string[];
  benefits: { title: string; desc: string; icon: string }[];
  faqsTemplate: ServiceFAQ[];
}

export const servicePageTemplates: ServicePageTemplate[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-600',
    metaTitleTemplate: 'Web Development in {city} | SK WebTech',
    metaDescriptionTemplate:
      'Looking for professional web development in {city}? SK WebTech builds fast, SEO-ready custom websites & web apps using Next.js, React & Node.js. Get a free quote!',
    keywordsTemplate: [
      'web development in {city}',
      'website development company {city}',
      'web design {city}',
      'custom website development {city}',
      'Next.js developer {city}',
      'React developer {city}',
      'affordable web development {city}',
      'professional web developer {city}',
    ],
    h1Template: 'Professional Web Development in {city}',
    introTemplate:
      'SK WebTech provides top-rated web development services in {city}. We build fast, scalable, and conversion-optimized websites and web applications for startups, SMEs, and enterprises.',
    subIntroTemplate:
      'From a simple landing page to a complex enterprise portal, our team in {city} delivers pixel-perfect, SEO-friendly websites that grow your business. Every project is built with modern technology and best practices.',
    features: [
      { title: 'Custom Website Design', desc: 'Pixel-perfect, brand-aligned designs built from scratch - no templates' },
      { title: 'Next.js & React Development', desc: 'Blazing-fast web apps with server-side rendering and modern frameworks' },
      { title: 'SEO-Ready Architecture', desc: 'Built to rank on Google from day one with clean code and proper structure' },
      { title: 'Mobile-First Responsive', desc: 'Flawless experience on all devices, screens, and browsers' },
      { title: 'CMS Integration', desc: 'Manage your content easily with WordPress, Strapi, or headless CMS' },
      { title: 'API & Third-Party Integrations', desc: 'Connect payment gateways, CRMs, analytics, and 100+ third-party tools' },
      { title: 'Performance Optimization', desc: 'Core Web Vitals optimized for speed, LCP, and user experience' },
      { title: 'Security & SSL', desc: 'Enterprise-grade security with HTTPS, input validation, and regular audits' },
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'WordPress', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
    benefits: [
      { title: 'Faster Load Times', desc: 'Our websites load in under 2 seconds, reducing bounce rate and improving SEO', icon: '⚡' },
      { title: 'Higher Conversions', desc: 'Conversion-optimized layouts with clear CTAs that turn visitors into customers', icon: '📈' },
      { title: 'Google-Ready', desc: 'Every site we build follows Google\'s Core Web Vitals and SEO guidelines', icon: '🔍' },
      { title: 'Ongoing Support', desc: '24/7 technical support and maintenance after launch', icon: '🛡️' },
    ],
    faqsTemplate: [
      {
        q: 'How much does web development cost in {city}?',
        a: 'Web development costs in {city} depend on complexity. A basic business website starts at ₹15,000, a professional website at ₹30,000–₹80,000, and a custom web application at ₹1,00,000+. Contact us for a free detailed quote.',
      },
      {
        q: 'How long does it take to build a website?',
        a: 'A standard business website takes 2–4 weeks. Complex web applications may take 6–12 weeks. We provide a clear timeline after understanding your requirements.',
      },
      {
        q: 'Do you provide website maintenance after launch?',
        a: 'Yes, we offer ongoing maintenance plans including security updates, performance monitoring, content updates, and priority support for businesses in {city} and across India.',
      },
      {
        q: 'Will my website rank on Google?',
        a: 'All our websites are built with on-page SEO best practices - fast loading speed, clean code, proper meta tags, structured data, and mobile responsiveness. We also offer dedicated SEO services to improve your rankings in {city}.',
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Absolutely! We offer complete website redesign services in {city}. We analyze your current site, identify issues, and rebuild it with a modern design that converts better and performs faster.',
      },
    ],
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    color: 'from-emerald-600 to-green-600',
    textColor: 'text-emerald-600',
    metaTitleTemplate: 'E-Commerce Development in {city} | SK WebTech',
    metaDescriptionTemplate:
      'Launch your online store in {city} with SK WebTech. We build high-converting e-commerce websites with secure payments, inventory management & seamless UX. Free consultation!',
    keywordsTemplate: [
      'ecommerce development in {city}',
      'online store development {city}',
      'Shopify developer {city}',
      'WooCommerce development {city}',
      'e-commerce website {city}',
      'online shopping website development {city}',
      'ecommerce solution {city}',
    ],
    h1Template: 'E-Commerce Development in {city} - Launch Your Online Store',
    introTemplate:
      'SK WebTech builds high-converting e-commerce stores for businesses in {city}. From Shopify and WooCommerce to fully custom solutions, we create online stores that sell.',
    subIntroTemplate:
      'Our {city} e-commerce team delivers feature-rich platforms with secure payment gateways, smart inventory management, and shopping experiences that turn visitors into repeat customers.',
    features: [
      { title: 'Custom E-Commerce Design', desc: 'Brand-aligned store designs built for maximum conversions' },
      { title: 'Payment Gateway Integration', desc: 'Razorpay, Stripe, PayPal, UPI, and all major payment options' },
      { title: 'Inventory Management', desc: 'Real-time stock tracking, low-stock alerts, and bulk management' },
      { title: 'Multi-Vendor Marketplace', desc: 'Build Amazon-style platforms with multiple seller support' },
      { title: 'Order & Shipping Management', desc: 'Automated order processing with Shiprocket, Delhivery integration' },
      { title: 'Product SEO', desc: 'SEO-optimized product pages with structured data for Google Shopping' },
      { title: 'Abandoned Cart Recovery', desc: 'Automated emails and WhatsApp messages to recover lost sales' },
      { title: 'Mobile Shopping App', desc: 'Native iOS & Android apps for your e-commerce store' },
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Next.js', 'Stripe', 'Razorpay', 'Firebase', 'AWS'],
    benefits: [
      { title: 'Higher Sales', desc: 'Conversion-optimized layouts and UX that turn visitors into buyers', icon: '💰' },
      { title: 'Secure Payments', desc: 'PCI-DSS compliant payment processing with multiple gateway options', icon: '🔒' },
      { title: 'Scalable Platform', desc: 'Built to handle thousands of products and high traffic volumes', icon: '📦' },
      { title: 'Mobile Commerce', desc: 'Mobile-first design with PWA support for app-like experience', icon: '📱' },
    ],
    faqsTemplate: [
      {
        q: 'How much does e-commerce website development cost in {city}?',
        a: 'E-commerce development in {city} starts at ₹25,000 for a basic Shopify/WooCommerce store. Custom e-commerce platforms range from ₹75,000 to ₹5,00,000+ based on features. Contact us for a free estimate.',
      },
      {
        q: 'Which platform is best for e-commerce - Shopify or custom development?',
        a: 'Shopify is great for quick launches with standard features. Custom development is better for unique business logic, marketplace features, or deep integrations. Our {city} team helps you choose the right fit.',
      },
      {
        q: 'Can you integrate Indian payment gateways like Razorpay and UPI?',
        a: 'Yes! We integrate all major Indian payment gateways including Razorpay, PayU, CCAvenue, Paytm, and UPI for businesses in {city} and across India.',
      },
      {
        q: 'Do you provide support after the e-commerce site is launched?',
        a: 'Yes, we offer comprehensive post-launch support including order management assistance, product updates, performance monitoring, and 24/7 technical support.',
      },
    ],
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'SEO Services',
    color: 'from-purple-600 to-violet-600',
    textColor: 'text-purple-600',
    metaTitleTemplate: 'SEO Services in {city} | SK WebTech - Rank #1 on Google',
    metaDescriptionTemplate:
      'Boost your Google rankings with professional SEO services in {city}. SK WebTech provides technical SEO, local SEO, content strategy & link building. Get a free audit!',
    keywordsTemplate: [
      'SEO services in {city}',
      'SEO company {city}',
      'search engine optimization {city}',
      'local SEO {city}',
      'Google ranking {city}',
      'digital marketing agency {city}',
      'SEO expert {city}',
      'affordable SEO {city}',
    ],
    h1Template: 'SEO Services in {city} - Rank #1 on Google',
    introTemplate:
      'SK WebTech delivers result-driven SEO services in {city} that improve your Google rankings, drive organic traffic, and generate quality leads for your business.',
    subIntroTemplate:
      'Our {city} SEO specialists use proven white-hat strategies to help you dominate search results for your target keywords and outrank your competitors consistently.',
    features: [
      { title: 'Technical SEO Audit', desc: 'Deep-dive audit of site speed, crawlability, indexing, and technical issues' },
      { title: 'Keyword Research & Strategy', desc: 'Data-driven keyword targeting based on search volume, intent, and competition' },
      { title: 'On-Page Optimization', desc: 'Title tags, meta descriptions, headings, internal linking, and content optimization' },
      { title: 'Local SEO', desc: 'Google My Business optimization, local citations, and map pack rankings' },
      { title: 'Link Building', desc: 'High-authority backlink acquisition through white-hat outreach strategies' },
      { title: 'Content Strategy', desc: 'SEO-focused blog posts, landing pages, and content calendar execution' },
      { title: 'Core Web Vitals', desc: 'Speed optimization for LCP, FID, and CLS - Google ranking factors' },
      { title: 'Monthly Reporting', desc: 'Transparent reports on rankings, traffic, conversions, and ROI' },
    ],
    technologies: ['Google Search Console', 'Google Analytics 4', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Moz', 'SurferSEO'],
    benefits: [
      { title: 'Organic Traffic Growth', desc: 'Consistent month-over-month increase in qualified organic visitors', icon: '📈' },
      { title: 'Local Dominance', desc: 'Rank in the top 3 Google Map Pack results for your {city} keywords', icon: '📍' },
      { title: 'ROI-Focused', desc: 'We target keywords that bring buyers, not just traffic', icon: '💡' },
      { title: 'Transparent Reporting', desc: 'Monthly reports with clear metrics - no jargon, just results', icon: '📊' },
    ],
    faqsTemplate: [
      {
        q: 'How much do SEO services cost in {city}?',
        a: 'SEO packages in {city} start at ₹8,000/month for local SEO and go up to ₹50,000+/month for competitive national campaigns. We offer a free audit to recommend the right plan for your business.',
      },
      {
        q: 'How long does SEO take to show results?',
        a: 'SEO is a long-term strategy. Most businesses in {city} see initial improvements in 3–4 months, with significant results in 6–12 months. We track and report progress monthly so you always know what\'s happening.',
      },
      {
        q: 'Do you provide local SEO for businesses in {city}?',
        a: 'Yes! Local SEO is our specialty. We optimize your Google My Business profile, build local citations, and target "{service} in {city}" type keywords to get you found by customers near you.',
      },
      {
        q: 'Will you provide monthly reports?',
        a: 'Absolutely. Every month you receive a detailed report covering keyword rankings, organic traffic, backlinks acquired, technical fixes, and upcoming action items.',
      },
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-600',
    metaTitleTemplate: 'Mobile App Development in {city} | SK WebTech',
    metaDescriptionTemplate:
      'Top mobile app development company in {city}. SK WebTech builds native iOS & Android apps and cross-platform solutions with React Native & Flutter. Free consultation!',
    keywordsTemplate: [
      'mobile app development in {city}',
      'app development company {city}',
      'Android app development {city}',
      'iOS app development {city}',
      'React Native developer {city}',
      'Flutter developer {city}',
      'cross-platform app development {city}',
    ],
    h1Template: 'Mobile App Development in {city} - iOS & Android',
    introTemplate:
      'SK WebTech is a leading mobile app development company in {city}, building powerful iOS and Android applications for startups, enterprises, and everything in between.',
    subIntroTemplate:
      'Our {city} app development team transforms your idea into a feature-rich, user-friendly mobile application - from concept and design to app store launch and beyond.',
    features: [
      { title: 'Native iOS Development', desc: 'Swift-powered iOS apps with exceptional performance and Apple design guidelines' },
      { title: 'Native Android Development', desc: 'Kotlin-based Android apps with Material Design and Google Play compliance' },
      { title: 'Cross-Platform Apps', desc: 'Single codebase for iOS & Android with React Native or Flutter - 60% cost savings' },
      { title: 'UI/UX for Mobile', desc: 'Intuitive mobile interfaces with smooth animations and user-first design' },
      { title: 'Backend & API Development', desc: 'Scalable REST/GraphQL APIs and cloud infrastructure for your app' },
      { title: 'Push Notifications', desc: 'Targeted push notifications to boost user engagement and retention' },
      { title: 'App Store Optimization', desc: 'ASO strategy to rank higher on App Store and Google Play' },
      { title: 'Analytics Integration', desc: 'Firebase, Mixpanel, and custom analytics to track user behavior' },
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'AWS', 'Google Cloud'],
    benefits: [
      { title: 'Cost-Effective', desc: 'Cross-platform development saves up to 60% compared to building two separate apps', icon: '💰' },
      { title: 'Faster Time to Market', desc: 'Agile development process with regular demos and quick iterations', icon: '🚀' },
      { title: 'App Store Ready', desc: 'We handle the entire submission process for App Store and Google Play', icon: '📱' },
      { title: 'Scalable Architecture', desc: 'Backend built to scale from 100 to 1,000,000 users seamlessly', icon: '⚡' },
    ],
    faqsTemplate: [
      {
        q: 'How much does mobile app development cost in {city}?',
        a: 'Mobile app development in {city} starts at ₹50,000 for a basic app. A feature-rich app typically costs ₹1,50,000–₹8,00,000 depending on complexity, platforms, and backend requirements. Contact us for a free estimate.',
      },
      {
        q: 'How long does it take to develop a mobile app?',
        a: 'A simple app takes 2–3 months. A complex app with custom backend can take 4–8 months. We follow agile methodology with bi-weekly sprints so you see progress at every stage.',
      },
      {
        q: 'Should I build a native app or a cross-platform app?',
        a: 'If budget is a concern, React Native or Flutter (cross-platform) gives 80% of native performance at 60% of the cost. Our {city} team helps you make the right choice based on your specific needs.',
      },
      {
        q: 'Do you help with App Store and Google Play submission?',
        a: 'Yes, we handle the complete app store submission process including screenshots, descriptions, compliance requirements, and initial review support for both App Store and Google Play.',
      },
    ],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-600',
    metaTitleTemplate: 'UI/UX Design Services in {city} | SK WebTech',
    metaDescriptionTemplate:
      'Award-winning UI/UX design services in {city}. SK WebTech creates intuitive, beautiful interfaces that convert. Figma prototypes, user research & design systems. Free consultation!',
    keywordsTemplate: [
      'UI UX design in {city}',
      'UX design agency {city}',
      'UI design company {city}',
      'Figma designer {city}',
      'product design {city}',
      'app design {city}',
      'web design {city}',
      'user experience design {city}',
    ],
    h1Template: 'UI/UX Design Services in {city} - Beautiful Interfaces That Convert',
    introTemplate:
      'SK WebTech delivers user-centered UI/UX design services in {city} that create memorable digital experiences, improve usability, and drive conversions for web and mobile products.',
    subIntroTemplate:
      'Our {city} design team combines research, strategy, and visual craft to create interfaces that your users love - and that achieve your business goals.',
    features: [
      { title: 'User Research & Personas', desc: 'In-depth research to understand your users\' needs, pain points, and behavior' },
      { title: 'Information Architecture', desc: 'Logical content structure and navigation that users intuitively understand' },
      { title: 'Wireframing & Prototyping', desc: 'Interactive Figma prototypes to test and validate ideas before development' },
      { title: 'Visual Design', desc: 'Beautiful, brand-consistent UI with typography, color, and component systems' },
      { title: 'Design System Creation', desc: 'Scalable component libraries that speed up future development' },
      { title: 'Usability Testing', desc: 'User testing sessions to identify and fix UX issues before launch' },
      { title: 'Motion Design', desc: 'Micro-interactions and animations that make interfaces feel alive' },
      { title: 'Accessibility (WCAG)', desc: 'Inclusive design that works for all users, meeting WCAG 2.1 standards' },
    ],
    technologies: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Maze', 'Hotjar', 'Lottie'],
    benefits: [
      { title: 'Higher Conversions', desc: 'Well-designed UX can increase conversion rates by up to 400%', icon: '📈' },
      { title: 'Reduced Dev Cost', desc: 'Catching UX issues in design is 100x cheaper than fixing them post-launch', icon: '💡' },
      { title: 'User Retention', desc: 'Great UX keeps users coming back - lowering churn and increasing LTV', icon: '❤️' },
      { title: 'Brand Credibility', desc: 'Professional design builds trust and makes a lasting first impression', icon: '✨' },
    ],
    faqsTemplate: [
      {
        q: 'How much does UI/UX design cost in {city}?',
        a: 'UI/UX design projects in {city} start at ₹20,000 for a basic app design and go up to ₹2,00,000+ for enterprise design systems. We offer hourly and project-based pricing. Contact us for a free estimate.',
      },
      {
        q: 'What deliverables will I receive?',
        a: 'You receive user research findings, wireframes, high-fidelity Figma designs, interactive prototypes, a design system/style guide, and developer handoff specifications.',
      },
      {
        q: 'Do you conduct user testing?',
        a: 'Yes! We run usability tests with real users to validate designs before development begins. This saves significant rework cost and ensures your product works for your actual audience.',
      },
      {
        q: 'Can you design for both web and mobile?',
        a: 'Absolutely. Our {city} design team creates responsive web designs and native mobile app designs (iOS and Android) following platform-specific design guidelines.',
      },
    ],
  },
  {
    id: 'whatsapp-business',
    slug: 'whatsapp-business',
    title: 'WhatsApp Business Solutions',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-600',
    metaTitleTemplate: 'WhatsApp Business Solutions in {city} | SK WebTech',
    metaDescriptionTemplate:
      'Automate customer communication in {city} with WhatsApp Business API. SK WebTech sets up chatbots, bulk messaging, campaigns & CRM integration. Free demo available!',
    keywordsTemplate: [
      'WhatsApp Business API {city}',
      'WhatsApp marketing {city}',
      'WhatsApp chatbot {city}',
      'WhatsApp automation {city}',
      'bulk WhatsApp messaging {city}',
      'WhatsApp Business solution {city}',
      'WhatsApp CRM integration {city}',
    ],
    h1Template: 'WhatsApp Business Solutions in {city} - Automate & Scale Customer Communication',
    introTemplate:
      'SK WebTech provides complete WhatsApp Business API solutions in {city} that help you automate customer support, run marketing campaigns, and scale communication to thousands of customers instantly.',
    subIntroTemplate:
      'Join hundreds of businesses in {city} that use our WhatsApp platform to reduce support costs, improve response times, and run targeted campaigns with 98% open rates.',
    features: [
      { title: 'WhatsApp Business API Setup', desc: 'Official Meta-approved API setup with verified green tick for your brand' },
      { title: 'AI-Powered Chatbots', desc: 'Intelligent chatbots that handle FAQs, orders, and lead qualification 24/7' },
      { title: 'Broadcast Messaging', desc: 'Send bulk messages to segmented customer lists with personalization' },
      { title: 'Campaign Management', desc: 'Plan, schedule, and track WhatsApp marketing campaigns with analytics' },
      { title: 'CRM Integration', desc: 'Connect with HubSpot, Zoho, Salesforce, or custom CRM systems' },
      { title: 'Customer Support Automation', desc: 'Auto-replies, ticket routing, and agent handoff workflows' },
      { title: 'Multi-Agent Inbox', desc: 'Team inbox for managing high volumes of customer conversations' },
      { title: 'Analytics & Reports', desc: 'Message delivery, open rates, click rates, and conversion tracking' },
    ],
    technologies: ['WhatsApp Business API', 'Meta Cloud API', 'Node.js', 'OpenAI', 'Twilio', 'Dialogflow', 'Firebase'],
    benefits: [
      { title: '98% Open Rate', desc: 'WhatsApp messages have 5x higher open rates than email campaigns', icon: '📬' },
      { title: '24/7 Automation', desc: 'Handle unlimited customer queries automatically without human agents', icon: '🤖' },
      { title: 'Cost Reduction', desc: 'Cut customer support costs by up to 70% with smart automation', icon: '💰' },
      { title: 'Instant Delivery', desc: 'Reach customers instantly across India and 180+ countries', icon: '🌍' },
    ],
    faqsTemplate: [
      {
        q: 'How do I get WhatsApp Business API for my business in {city}?',
        a: 'We handle the complete Meta Business verification and WhatsApp Business API onboarding process for your {city} business. The setup typically takes 3–7 business days. Contact us to get started.',
      },
      {
        q: 'What is the difference between WhatsApp Business App and WhatsApp Business API?',
        a: 'The WhatsApp Business App is for small businesses with manual communication. The API is for medium-to-large businesses that need automation, bulk messaging, chatbots, and CRM integration - which is what we provide.',
      },
      {
        q: 'Can I send bulk promotional messages on WhatsApp?',
        a: 'Yes, with the official WhatsApp Business API you can send approved template messages to opted-in customers. Our platform makes it easy to manage campaigns and stay compliant with Meta\'s policies.',
      },
      {
        q: 'Do you also provide a WhatsApp messaging platform/dashboard?',
        a: 'Yes! We have our own WhatsApp Business Platform at wa.skwebtech.in where you can connect your WhatsApp Business account and manage all campaigns, chatbots, contacts, and analytics from one dashboard.',
      },
    ],
  },
  {
    id: 'website-maintenance',
    slug: 'website-maintenance',
    title: 'Website Maintenance & Support',
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-600',
    metaTitleTemplate: 'Website Maintenance Services in {city} | SK WebTech',
    metaDescriptionTemplate:
      'Reliable website maintenance & support in {city}. SK WebTech provides 24/7 monitoring, security updates, performance optimization & content management. Get started today!',
    keywordsTemplate: [
      'website maintenance in {city}',
      'website support {city}',
      'web hosting support {city}',
      'website management {city}',
      'WordPress maintenance {city}',
      'website security {city}',
      'website monitoring {city}',
    ],
    h1Template: 'Website Maintenance & Support in {city} - 24/7 Peace of Mind',
    introTemplate:
      'SK WebTech provides comprehensive website maintenance and support services in {city}, keeping your digital assets secure, fast, and always online.',
    subIntroTemplate:
      'Focus on your business while our {city} team handles all technical aspects - from security patches and speed optimization to content updates and emergency fixes.',
    features: [
      { title: '24/7 Uptime Monitoring', desc: 'Real-time monitoring with instant alerts and rapid response to downtime' },
      { title: 'Security Updates & Patching', desc: 'Regular CMS, plugin, and server security updates to prevent vulnerabilities' },
      { title: 'Performance Optimization', desc: 'Monthly speed audits and optimizations to keep Core Web Vitals green' },
      { title: 'Automated Daily Backups', desc: 'Daily encrypted backups with 30-day retention and one-click restore' },
      { title: 'Content Updates', desc: 'Text, image, and page updates with 24-hour turnaround' },
      { title: 'SSL Certificate Management', desc: 'SSL renewal and configuration to keep your site secure and trusted' },
      { title: 'Bug Fixes & Troubleshooting', desc: 'Priority resolution for technical issues and broken functionality' },
      { title: 'Monthly Reports', desc: 'Detailed reports on uptime, performance, security, and completed tasks' },
    ],
    technologies: ['AWS', 'Cloudflare', 'WordPress', 'cPanel', 'Docker', 'New Relic', 'Pingdom', 'Sucuri'],
    benefits: [
      { title: '99.9% Uptime', desc: 'Proactive monitoring ensures your website stays live around the clock', icon: '🟢' },
      { title: 'Security First', desc: 'Regular security scans and patches protect your site and customer data', icon: '🔒' },
      { title: 'Always Fast', desc: 'Monthly performance tuning keeps your site loading in under 2 seconds', icon: '⚡' },
      { title: 'No Tech Stress', desc: 'Focus on business growth while we handle all the technical details', icon: '😌' },
    ],
    faqsTemplate: [
      {
        q: 'How much does website maintenance cost in {city}?',
        a: 'Website maintenance packages in {city} start at ₹3,000/month for basic monitoring and security updates. Comprehensive plans with content updates and priority support start at ₹8,000/month.',
      },
      {
        q: 'What is included in your maintenance plan?',
        a: 'Our maintenance plans include 24/7 uptime monitoring, security updates, automated backups, performance optimization, content updates (based on plan), SSL management, and monthly reporting.',
      },
      {
        q: 'How quickly do you respond to website emergencies?',
        a: 'Critical issues like website downtime receive a response within 1 hour, 24/7. Standard issues are addressed within 4–8 business hours depending on your plan.',
      },
      {
        q: 'Do you maintain websites you did not build?',
        a: 'Yes! We maintain websites built by any developer or agency. Our team audits your existing website, documents the setup, and takes over maintenance from day one.',
      },
    ],
  },
];

export function getServiceTemplate(serviceSlug: string): ServicePageTemplate | undefined {
  return servicePageTemplates.find((s) => s.slug === serviceSlug);
}

export function parseServiceLocationSlug(fullSlug: string): { serviceSlug: string; locationSlug: string } | null {
  const inIndex = fullSlug.lastIndexOf('-in-');
  if (inIndex === -1) return null;
  return {
    serviceSlug: fullSlug.substring(0, inIndex),
    locationSlug: fullSlug.substring(inIndex + 4),
  };
}

export function getAllServiceLocationSlugs(): string[] {
  const slugs: string[] = [];
  for (const service of servicePageTemplates) {
    slugs.push(service.slug);
  }
  return slugs;
}
