/**
 * Site Configuration
 * Centralized configuration for the SK WebTech website
 */

export const siteConfig = {
  // Basic site info
  name: 'SK WebTech',
  tagline: 'Professional Web & IT Solutions',
  description:
    'SK WebTech delivers cutting-edge web development, e-commerce solutions, SEO optimization, and IT services to help your business grow online.',
  url: 'https://skwebtech.com',

  // Contact information
  contact: {
    email: 'hello@skwebtech.com',
    phone: '+1 (234) 567-890',
    phoneRaw: '+1234567890',
    whatsapp: '1234567890',
    address: {
      street: '123 Tech Street, Suite 456',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'USA',
    },
  },

  // Business hours
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },

  // Social media links
  social: {
    facebook: 'https://facebook.com/skwebtech',
    twitter: 'https://twitter.com/skwebtech',
    linkedin: 'https://linkedin.com/company/skwebtech',
    instagram: 'https://instagram.com/skwebtech',
    github: 'https://github.com/skwebtech',
  },

  // SEO defaults
  seo: {
    defaultTitle: 'SK WebTech - Professional Web & IT Solutions',
    titleTemplate: '%s | SK WebTech',
    defaultDescription:
      'Transform your business with professional web development, e-commerce, SEO, and IT solutions. Partner with SK WebTech for digital success.',
    keywords: [
      'web development',
      'IT services',
      'e-commerce solutions',
      'SEO optimization',
      'app development',
      'UI/UX design',
    ],
  },

  // Company stats
  stats: {
    yearsExperience: '10+',
    projectsCompleted: '500+',
    happyClients: '100+',
    teamMembers: '50+',
    countriesServed: '15+',
  },
} as const;

export type SiteConfig = typeof siteConfig;
