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
  /** Long-form unique SEO article shown on the page (markdown, {city} placeholders) */
  contentTemplate: string;
  /**
   * City-specific markdown section appended to the article on city pages.
   * Supports {city}, {state}, {citySlug}, {cityIntro}, {industries}, {areas}
   * placeholders — combined with per-city data (locationContent.ts) this makes
   * every service×city page genuinely unique.
   */
  cityContentTemplate?: string;
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
    contentTemplate: `Your website is usually the first meeting a customer has with your business. Someone in {city} hears your name, searches on Google, and decides within a few seconds whether you look worth calling. That decision happens before you ever speak to them. Our job is to make sure it goes in your favour.

## A Website Development Company in {city} That Builds for Results

SK WebTech has been building websites for more than ten years. In that time we have shipped everything from single-page sites for local clinics to full-scale web applications handling thousands of users a day. The lesson we keep re-learning: a website only earns its cost when it is fast, easy to find, and clear about what you want the visitor to do next.

That is why we never start with a template. Every project begins with questions about your business in {city} — who your customers are, what they search for, what makes them pick you over the shop two lanes away. The design and code follow from those answers, not the other way around.

## What We Build

- **Business websites** for clinics, CA firms, coaching institutes, salons, real estate agents and manufacturers who need a professional presence that brings enquiries
- **Custom web applications** — booking systems, dashboards, portals and internal tools built on Next.js and Node.js
- **Landing pages** for Google and Meta ad campaigns, designed around one goal: conversions
- **Website redesigns** for businesses whose current site looks fine but produces nothing

## Why Speed and SEO Are Built In, Not Added Later

Google's own data shows that more than half of mobile visitors leave a page that takes over three seconds to load. Most template websites in India fail that test badly. Ours don't. We build on Next.js with server-side rendering, compress every image, and test Core Web Vitals before launch — so your {city} customers get a site that opens instantly even on a patchy 4G connection.

The same thinking applies to SEO. Clean heading structure, proper meta tags, schema markup and a sitemap are part of the build itself. When your site goes live, Google can read it properly from day one.

## What Does a Website Cost in {city}?

Honest answer: it depends on what you need, but here is the range we work in. A clean five-page business website starts around ₹15,000. Professional sites with custom design, blog and enquiry management typically land between ₹30,000 and ₹80,000. Custom web applications start at ₹1,00,000 and go up with complexity. You get a fixed written quote before we start — no surprise additions halfway through.

## How the Project Runs

Week one is discovery and design: we share layouts and you react to something concrete instead of imagining it. Then development, with a staging link you can open anytime to watch progress. Before launch we test on real phones, run speed checks and walk you through the admin panel so your team can update content without calling a developer for every small change.

After launch you are not left alone either. Every project includes support, and most of our {city} clients stay with us on maintenance plans because it is cheaper than firefighting problems later.

If you have been putting off your website — or tolerating one that embarrasses you — talk to us. The consultation is free, and you will leave it with a clear plan and an honest price, whether or not you hire us.`,
    cityContentTemplate: `## Web Development for {city} Businesses

{cityIntro}

For businesses in sectors like {industries}, the website has quietly become the first salesperson. Customers in {city} compare options online before they visit or call, and the competitor who shows up first — and looks credible — wins the enquiry. We build websites that put {city} businesses in that winning position: fast to load on any connection, easy to find on Google, and structured to turn visitors into phone calls and orders.

We work with clients across {city}, including businesses around {areas}. Our process is fully remote-friendly — requirement discussions on calls and WhatsApp, designs shared as clickable links, and a live staging site you can open from anywhere in {state} to watch your project take shape.

Many of our {city} clients pair a new website with [SEO services](/services/seo-services-in-{citySlug}) to rank for local searches, and [website maintenance](/services/website-maintenance-in-{citySlug}) to keep it fast and secure — all handled by the same team that built the site, so nothing falls between vendors.`,
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
    contentTemplate: `Retail in {city} has changed. Customers who once walked into your shop now check whether you deliver, compare your price on Amazon, and expect to pay by UPI at eleven at night. An online store stopped being optional a while ago — the only real question is whether yours works well enough to compete.

## An E-Commerce Website That Actually Sells

Anyone can put products on a webpage. Getting a visitor to add an item to the cart, trust you with payment, and come back next month is a different job entirely. That is the job we do.

SK WebTech builds online stores for {city} businesses on Shopify, WooCommerce and fully custom stacks. Which one you need depends on your catalogue, margins and plans — and we will tell you honestly if the cheaper option is the right one. A ten-product boutique does not need a ₹3,00,000 custom build, and a marketplace with two hundred sellers should not be forced into a Shopify theme.

## Built for How India Actually Buys

Most e-commerce advice online is written for American stores. Indian e-commerce has its own rules, and we build for them:

- **UPI, cards, wallets and net banking** through Razorpay, PayU or Cashfree — plus cash on delivery, because COD still drives a big share of orders outside metro cities
- **Shipping integrations** with Shiprocket and Delhivery so orders flow to couriers automatically, with tracking updates sent to the customer on WhatsApp
- **GST-ready invoicing** and reports your accountant will not complain about
- **WhatsApp order alerts and abandoned-cart nudges**, which recover far more sales in India than email ever does

## Product Pages That Rank on Google

Every store we ship has SEO-optimised product pages: clean URLs, structured data for Google Shopping, fast image loading, and category pages written to match what people in {city} actually search for. Paid ads bring your first customers; search brings the profitable ones after that.

## What an Online Store Costs

A ready-platform store on Shopify or WooCommerce, set up properly with payments, shipping and a trained team, starts around ₹25,000. Custom-designed stores with specific business logic usually run ₹75,000 to ₹2,50,000. Multi-vendor marketplaces start higher. Every quote is fixed and itemised — you will know exactly what you are paying for.

## After the Launch

The launch is the easy part. The months after — festival sale traffic, a payment gateway acting up at midnight, a courier API changing without notice — are where most store owners get stuck. Our support plans cover monitoring, updates and quick fixes, so you spend your time on products and marketing instead of technical firefighting.

If you are planning your first store in {city}, or your current one leaks sales at checkout, get in touch. We will review your situation on a free call and give you a straight recommendation, even if that recommendation is "you don't need us yet."`,
    cityContentTemplate: `## Selling Online from {city}

{cityIntro}

That local strength is exactly what e-commerce multiplies. Businesses dealing in {industries} no longer need to depend only on walk-in customers or wholesale buyers — a properly built online store takes {city}'s products to customers across India and beyond. We have watched sellers start with a small catalogue and grow into hundreds of orders a month, because payments, shipping and GST were handled correctly from day one.

Whether your business operates around {areas} or anywhere else in {city}, the entire setup happens remotely: store build, payment gateway activation, courier integration and training for your team, with progress you can review at every step.

Store owners in {city} get the best returns by combining their store with [SEO](/services/seo-services-in-{citySlug}) so product pages rank on Google, and [WhatsApp automation](/services/whatsapp-business-in-{citySlug}) for order alerts and abandoned-cart recovery — the two highest-ROI add-ons we know of in Indian e-commerce.`,
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
    contentTemplate: `When someone in {city} needs what you sell, they do not open a directory or ask around the market. They type it into Google. The businesses on the first page get the call; everyone else gets nothing. SEO is simply the work of making sure you are in the first group — and doing it takes more than adding keywords to a page.

## What Our SEO Service in {city} Actually Involves

Plenty of agencies sell SEO as a mysterious monthly retainer. You pay, receive a confusing report, and rankings never quite move. We work differently: every task we do is listed, explained and reported, and you can question any line of it.

A typical engagement includes:

- **A technical audit first** — crawl errors, slow pages, broken links, indexing problems. There is no point building links to a site Google struggles to read.
- **Keyword research based on buyer intent.** Ranking for "what is web design" brings students; ranking for "web design company in {city}" brings customers. We chase the second kind.
- **On-page work** — titles, headings, internal links and content rewritten so every important page targets one clear search intent
- **Local SEO** — your Google Business Profile optimised, a reviews strategy, citations in Indian directories, and map-pack rankings for "near me" searches
- **Content and links** — genuinely useful articles that earn rankings, and outreach for backlinks from real websites, never bought link farms

## The Honest Part: How Long It Takes

Anyone promising you page one in thirty days is either lying or about to use techniques that will get your site penalised. Real SEO compounds: most of our {city} clients see movement in three to four months and meaningful business results — calls, enquiries, walk-ins — inside six to twelve. What you get from us in the meantime is a monthly report showing exactly what was done, what moved, and what is planned next. No jargon, no hiding.

## Why Local Businesses Choose Us

We are a web development company first, which matters more than it sounds. Half of SEO problems are technical — speed, rendering, crawlability — and agencies that cannot touch code end up sending you a list of problems to forward to your developer. We just fix them.

It also means your SEO and your website never fight each other. When a landing page needs restructuring or a new city page needs building, it happens in days, not in a queue between two vendors blaming each other.

## SEO Pricing in {city}

Local SEO packages start at ₹8,000 per month — right for a clinic, showroom, restaurant or firm targeting customers within {city}. Competitive national campaigns run ₹25,000 to ₹50,000+ monthly depending on the industry. Before any of that, we do a free audit of your site and current rankings, so the plan we quote is based on your actual situation rather than a standard menu.

Search traffic is the cheapest customer acquisition channel you will ever have — but only after the groundwork is done. The sooner it starts, the sooner it compounds. Send us your website and we will show you, specifically, what is holding it back.`,
    cityContentTemplate: `## Ranking on Google in {city}: The Local Picture

{cityIntro}

Every one of those businesses is competing for the same first page of Google. When customers search for anything related to {industries} in {city}, the map pack and the top three organic results take almost all the clicks — everything below that is invisible. Our job is to get you into that visible group: a fully optimised Google Business Profile, landing pages tuned for searches from areas like {areas}, citations in the directories that matter in India, and content written around what {city} customers actually type.

Because we [build websites ourselves](/services/web-development-in-{citySlug}), technical fixes never sit in another vendor's queue. Slow pages, broken links and crawl errors get fixed by the same team running your campaign — one reason our {city} clients typically see movement faster than businesses juggling separate SEO and web agencies.

If your website itself is holding rankings back, we will tell you honestly whether a tune-up or a [rebuild](/services/web-development-in-{citySlug}) is the cheaper path to page one.`,
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
    contentTemplate: `Every serious app you use — the one you order food from, pay through, book tickets with — started as somebody's rough idea. The distance between an idea and an app people actually keep on their phone is design, engineering and a hundred small decisions. That distance is what we cover.

## Mobile App Developers in {city} for iOS and Android

SK WebTech builds mobile apps for startups and established businesses in {city} — customer-facing apps, delivery and booking platforms, internal tools for field teams, and apps that extend an existing website into something customers keep in their pocket.

We work across native (Swift for iOS, Kotlin for Android) and cross-platform (React Native and Flutter). And here is advice that surprises many founders: most apps do not need native development. A cross-platform build shares one codebase across both stores, costs roughly 40% less, and ships faster — with performance that ordinary users cannot tell apart from native. We recommend native only when a project truly demands it: heavy animation, intensive background processing, deep hardware work. You get that recommendation before you spend anything.

## From Idea to the Play Store

**Scoping and wireframes.** We map every screen and flow before code begins. Changing your mind on paper costs nothing; changing it in month three costs plenty.

**Design.** Real UI designs in Figma you can tap through on your own phone — so what you approve is what gets built.

**Development in sprints.** A working build lands on your phone every two weeks. You watch the app grow instead of waiting months for a big reveal.

**Backend and APIs.** Most apps are half server: accounts, payments, notifications, admin panels. We build that too, on Node.js with Firebase or AWS, sized to grow from a hundred users to a hundred thousand without a rewrite.

**Launch.** App Store and Play Store submission, store listings, screenshots and compliance handled. Rejections are annoying; we know the review rules well enough to avoid most of them.

## What an App Costs in {city}

A focused single-purpose app starts around ₹50,000. Most business apps — login, payments, notifications, admin dashboard — land between ₹1,50,000 and ₹8,00,000 depending on scope. It is a real investment, which is exactly why we scope in writing first: you will know the number before committing, and phased launches (a lean version one now, features later) often make the budget work far better.

## After Launch

Apps are not websites; they live in an ecosystem that keeps shifting under them. OS updates land every year, libraries deprecate, and users update their phones whether your app is ready or not. Our maintenance plans keep apps updated, monitored and crash-free — and most of our {city} clients treat that as part of the cost of running an app, because it is.

If you have an app idea and no technical background, that is fine — most of our clients started exactly there. Bring the idea; we will bring the questions. The first consultation is free and you will leave with a realistic sense of scope, cost and timeline.`,
    cityContentTemplate: `## Building Apps for the {city} Market

{cityIntro}

Sectors like {industries} increasingly serve their customers through mobile — bookings, orders, payments and loyalty all live on the phone now. An app puts your {city} business on the customer's home screen, instead of hoping they remember your name the next time they search.

We build for clients across {city}, from businesses around {areas} to startups anywhere in {state}, with the entire process running remotely: requirement calls, Figma design reviews you can tap through on your own phone, a fresh test build every fortnight, and Play Store / App Store launch handled end to end.

Most apps also need a backend, an admin panel and often a companion website — which our [web development team](/services/web-development-in-{citySlug}) builds alongside the app so everything ships together. And if you are still validating the idea, ask us honestly whether a mobile-first website or PWA can test demand in {city} before you commit an app-sized budget.`,
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
    contentTemplate: `Two businesses can offer the same service at the same price, and one will convert twice as many visitors — purely because of design. Not prettier design; clearer design. Where the eye lands first, how obvious the next step is, whether a form feels like thirty seconds or ten minutes. That is what UI/UX work actually decides.

## A UI/UX Design Team in {city} That Designs for Outcomes

SK WebTech designs interfaces for websites, web applications and mobile apps. Some clients come to us before development, wanting the product designed properly from the start. Others come after — with an app people download and abandon, or a website that gets traffic and no enquiries — and need a diagnosis before a redesign.

Either way, the process starts with users, not colours. Who is using this? On what device, in what mood, with how much patience? A cab booking screen for daily commuters and an insurance form for first-time buyers need entirely different design decisions. Skipping that thinking is why so many good-looking products fail quietly.

## What the Work Includes

- **User research and personas** — understanding your actual users in {city} and beyond, not an imaginary average customer
- **Information architecture** — organising content so people find things where they instinctively look
- **Wireframes and clickable prototypes** in Figma, tested before a line of code exists
- **Visual design** — typography, colour and component systems that fit your brand and stay consistent across every screen
- **Design systems** — a reusable component library so your product looks coherent even after two years of new features
- **Usability testing** — watching real users attempt real tasks, which is humbling and worth every minute
- **Accessibility** — WCAG-compliant contrast, sizing and structure, because a design that excludes users is a broken design

## Why Fixing Design Early Is So Much Cheaper

A flaw caught in a Figma prototype takes an hour to fix. The same flaw caught after development takes days of rework, and caught after launch it costs lost customers plus the rework. This is the entire economic case for design: it is the cheapest stage of the project to make mistakes in. Teams in {city} that treat design as decoration end up paying for it in engineering.

## Design Pricing

A landing page or small app design starts around ₹20,000. Full product design — research, flows, high-fidelity screens and a design system — typically runs ₹60,000 to ₹2,00,000+ depending on the number of screens and depth of research. Deliverables are developer-ready: organised Figma files, specs and assets that any competent team, ours or yours, can build from directly.

If your product looks fine but underperforms, the problem is usually invisible to whoever built it. A fresh audit finds it fast. Send us the link — the first review call is free, and it is usually an eye-opener.`,
    cityContentTemplate: `## Designing for {city} Audiences

{cityIntro}

Good design starts with knowing exactly who will use the product. The customers of {industries} bring very different expectations, patience levels and devices — and an interface designed for a metro SaaS user can thoroughly confuse a first-time buyer browsing on a budget Android phone over patchy 4G. We design for your real audience in {city}: clear visual hierarchy, familiar patterns, screens that load fast, and Hindi or regional language support where it genuinely helps conversion.

We have collaborated with businesses around {areas} and across {city} entirely remotely — Figma links that open on any phone, feedback rounds over WhatsApp, and clickable prototypes your own customers can test before a single line of code is written.

Once the design is approved, our [development team](/services/web-development-in-{citySlug}) can build it pixel-perfect, or we hand over developer-ready files to your existing team. Either way, nothing gets lost between design and build.`,
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
    contentTemplate: `Check the notifications on any customer's phone. Emails sit unread for days; WhatsApp messages get opened within minutes. For businesses in {city}, that gap is the whole story — the channel your customers actually read is also the one most businesses still manage manually, one chat at a time, from one phone. The WhatsApp Business API fixes that.

## What the WhatsApp Business API Lets You Do

The free WhatsApp Business app works while you are small. The API is what it grows into: your entire team answering from one shared inbox, chatbots handling routine questions at 2 a.m., broadcast campaigns going to thousands of opted-in customers with personalisation — all from your official, verified business number.

SK WebTech handles the whole setup for businesses in {city}: Meta business verification, API onboarding, green-tick application, and the platform where everything runs. We operate our own WhatsApp business platform, so you are not renting a patchwork of third-party tools — the dashboard, chatbot builder, campaign manager and analytics come from the same team that set you up.

## Where It Pays for Itself

- **Order updates and reminders** — confirmations, delivery tracking, payment reminders and appointment nudges, sent automatically. No-shows drop noticeably when reminders arrive on WhatsApp instead of SMS.
- **Chatbots for repetitive questions** — price, timing, location, availability. The bot answers what it can, around the clock, and hands the rest to your team with full context.
- **Campaigns that get read** — WhatsApp broadcasts see open rates near 98%, which no email campaign gets close to. Festival offers, restock alerts and follow-ups actually land.
- **Abandoned cart recovery** for online stores — a well-timed WhatsApp nudge recovers carts that email never will
- **CRM integration** — conversations synced with HubSpot, Zoho or your own system, so sales and support see one customer history

## Staying Compliant With Meta's Rules

Meta has firm rules on templates, opt-ins and messaging categories, and breaking them gets numbers restricted or banned — usually at the worst possible moment. We set up your flows compliant from the first day: proper opt-in capture, approved templates, correct message categories. Growth is pointless if the number carrying your business gets blocked.

## Getting Started in {city}

Setup — from verification through go-live — typically takes three to seven working days. Costs have two parts: a one-time setup and platform configuration, plus Meta's per-conversation charges, which vary by message type. On a free demo call we will map your actual use case — support, marketing, or both — and give you a clear number for what it will cost and what it replaces.

If your team is drowning in WhatsApp chats, or your offers keep dying in ignored email inboxes, this is the infrastructure that fixes both. Book the demo; bring your toughest support question and we will show you a bot answering it.`,
    cityContentTemplate: `## WhatsApp Automation in {city}

{cityIntro}

In a market like this, speed of response decides who gets the customer. Businesses in {industries} field the same questions all day — price, availability, timings, delivery — and whoever answers first usually wins the sale. A WhatsApp chatbot answers instantly, at midnight or in the middle of the festival rush, and hands over to your team only when a human is genuinely needed.

We have configured WhatsApp automation for businesses operating around {areas} and across {city}, all remotely: Meta verification, chatbot flows in Hindi and English, broadcast campaigns and CRM sync — typically live within a week.

If you sell products, pairing WhatsApp with an [online store](/services/ecommerce-development-in-{citySlug}) closes the loop completely: the store takes orders while WhatsApp confirms them, shares tracking, and recovers abandoned carts automatically. And if you don't have a proper website yet, our [web development team](/services/web-development-in-{citySlug}) can set up the full stack together.`,
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
    contentTemplate: `Websites do not fail loudly. They slip — a plugin update missed, a certificate expired, a contact form silently failing for three weeks before someone mentions it. By the time an owner notices, the damage has usually been running quietly for a while: lost enquiries, a Google ranking sliding, sometimes a hacked page serving spam to customers. Maintenance is the unglamorous work that prevents all of it.

## What Website Maintenance Covers

Our maintenance service in {city} is a standing arrangement: we watch your website so you do not have to think about it.

- **Uptime monitoring, 24/7** — if your site goes down at 3 a.m., we usually know before you do, and often before your visitors do
- **Security patches** — WordPress core, plugins, themes and server software updated on schedule; outdated plugins remain the single most common way Indian business sites get hacked
- **Daily encrypted backups** with 30-day retention — the difference between a bad morning and a catastrophe is a working backup
- **Speed and Core Web Vitals checks** — sites slow down gradually as content piles up; we keep yours in Google's good books
- **Content updates** — new offers, price changes, staff photos, festival banners, done within a day instead of waiting weeks for a freelancer to reply
- **SSL management, bug fixes and a monthly report** listing everything done, in plain language

## Who Actually Needs This

Honestly? Any business whose website brings enquiries. If your site is a brochure you have not touched in three years and it brings nothing, maintenance will not change that — a redesign might, and that is a different conversation. But if customers find you through Google, if the contact form matters, if downtime during a busy season would hurt — then someone has to own the technical upkeep, and it should probably not be you at midnight before a launch.

We also take over websites we did not build. That happens more often than you would think — a developer who vanished, an agency that stopped replying. We audit what exists, document it properly, secure the access, and take it from there. No judgement about the state of the code; we have seen everything.

## What It Costs in {city}

Basic plans — monitoring, updates, backups, SSL — start at ₹3,000 per month. Plans that include content updates and priority same-day support start at ₹8,000. Compare that with the cost of one emergency: a hacked site cleaned professionally runs ₹10,000–₹25,000, plus days of downtime, plus the ranking penalty Google applies to compromised sites. Prevention is simply the cheaper product.

Tell us what your website runs on and we will do a free health check — speed, security basics, backup status — and tell you honestly whether it needs attention or is doing fine.`,
    cityContentTemplate: `## Keeping {city} Websites Healthy

{cityIntro}

Most of those businesses invested in a website at some point — and many of those sites are now running outdated plugins, expired SSL certificates, or contact forms that quietly stopped delivering enquiries months ago. In sectors like {industries}, where customers check you online before calling, a broken or hacked website costs real business long before anyone notices it.

We maintain websites for clients around {areas} and across {city}, entirely remotely. Monitoring, backups, security updates and fixes happen behind the scenes, and a plain-language monthly report tells you exactly what was done — no jargon, no invisible charges.

If your site is too old to be worth patching, we will say so honestly: sometimes a [rebuild](/services/web-development-in-{citySlug}) costs barely more than a year of firefighting, and pairing it with maintenance from day one keeps it permanently fast and secure. A free health check will tell you which side of that line your website is on.`,
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
