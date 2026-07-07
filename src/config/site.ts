/**
 * Site Configuration
 * Centralized configuration for the SK WebTech website
 */

export const siteConfig = {
  // Basic site info
  name: 'SK WebTech',
  tagline: 'Professional Web & IT Solutions',
  description:
    'SK WebTech, led by experienced digital strategist Sachidanand Kushwaha, delivers cutting-edge web development, e-commerce solutions, SEO optimization, and IT services to help your business grow online.',
  url: 'https://www.skwebtech.in',

  // Contact information
  contact: {
    email: 'info@skwebtech.in',
    phone: '+91 9654603750',
    phoneRaw: '9654603750',
    whatsapp: '919654603750',
    address: {
      street: 'Remote services available worldwide',
      city: 'India',
      state: '',
      zip: '',
      country: 'Worldwide',
    },
  },

  // Business hours
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },

  // Social media links (company accounts)
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61591755982616',
    twitter: 'https://x.com/Sachida38689078',
    linkedin: 'https://www.linkedin.com/in/sk-webtech-40a86441b',
    instagram: 'https://www.instagram.com/skwebtech',
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
    projectsCompleted: '80+',
    happyClients: '100+',
    teamMembers: '50+',
    countriesServed: '15+',
  },
} as const;

export type SiteConfig = typeof siteConfig;
