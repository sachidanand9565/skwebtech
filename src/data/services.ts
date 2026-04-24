import { LucideIcon } from 'lucide-react';
import { Globe, ShoppingCart, Search, Smartphone, Palette, Settings, MessageSquare, TrendingUp } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  color: string;
  href: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies. From landing pages to complex web applications, we deliver solutions that drive results.',
    shortDesc: 'Fast, secure, conversion-optimized websites',
    icon: Globe,
    features: [
      'Custom responsive design',
      'Performance optimization',
      'API integrations',
      'Security implementation',
      'CMS development',
      'Progressive Web Apps',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind'],
    color: 'from-blue-500 to-blue-600',
    href: '/services#web-development',
  },
  {
    id: 'whatsapp-business',
    title: 'WhatsApp Business Solutions',
    description: 'Scale your customer communication with WhatsApp Business API, chatbots, automation, and mass messaging. Connect with customers instantly across 100+ countries.',
    shortDesc: 'API integration, chatbots & automation',
    icon: MessageSquare,
    features: [
      'WhatsApp Business API setup',
      'AI-powered chatbots',
      'Broadcast messaging',
      'Customer support automation',
      'CRM integration',
      'Analytics & reporting',
    ],
    technologies: ['WhatsApp API', 'Twilio', 'Node.js', 'OpenAI', 'Dialogflow'],
    color: 'from-green-500 to-green-700',
    href: '/services#whatsapp-business',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description: 'Complete online stores with payment gateways, inventory, and order management. Drive sales with optimized shopping experiences.',
    shortDesc: 'Scalable online stores that convert',
    icon: ShoppingCart,
    features: [
      'Multi-vendor marketplaces',
      'Payment gateway integration',
      'Inventory management',
      'Order fulfillment systems',
      'Abandoned cart recovery',
      'SEO-optimized product pages',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
    color: 'from-emerald-500 to-emerald-600',
    href: '/services#ecommerce',
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    description: 'Rank higher on Google and drive organic traffic. Comprehensive SEO with content strategy, technical optimization, and performance tracking.',
    shortDesc: 'Organic growth through proven SEO strategies',
    icon: TrendingUp,
    features: [
      'Technical SEO audits',
      'Keyword research & strategy',
      'Content optimization',
      'Link building campaigns',
      'Local SEO optimization',
      'Google Analytics setup',
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    color: 'from-purple-500 to-purple-600',
    href: '/services#seo',
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS/Android. From concept to app store launch with full backend integration.',
    shortDesc: 'Native & cross-platform mobile apps',
    icon: Smartphone,
    features: [
      'iOS & Android development',
      'Cross-platform solutions',
      'Push notifications',
      'Backend API development',
      'App Store optimization',
      'Analytics integration',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    color: 'from-orange-500 to-orange-600',
    href: '/services#app-development',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'User-centered design that converts. Research, prototyping, and pixel-perfect interfaces for web and mobile.',
    shortDesc: 'Beautiful, intuitive user experiences',
    icon: Palette,
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Usability testing',
      'Motion design',
      'Accessibility compliance',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer'],
    color: 'from-pink-500 to-pink-600',
    href: '/services#uiux',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: '24/7 monitoring, security updates, performance optimization, and dedicated support to keep your digital assets running smoothly.',
    shortDesc: 'Reliable 24/7 support & maintenance',
    icon: Settings,
    features: [
      'Performance monitoring',
      'Security patches',
      'Regular backups',
      'Content updates',
      'Uptime guarantees',
      'Priority support',
    ],
    technologies: ['AWS', 'Cloudflare', 'Docker', 'New Relic'],
    color: 'from-gray-500 to-gray-700',
    href: '/services#maintenance',
  },
];

// Home page preview services (top 6)
export const previewServices = services.slice(0, 6);

