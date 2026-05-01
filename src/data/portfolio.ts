/**
 * Portfolio Data
 * All projects showcased on the portfolio page
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce type Service Provider Website',
    description: 'A modern e-commerce platform with advanced filtering, cart functionality, secure payment integration, and responsive design for a premium Service brand.',
    image: '/images/portfolio/rocare.png',
    category: 'ecommerce',
    technologies: ['Next.js', 'Tailwind CSS', 'AWS', 'Mysqli'],
    liveUrl: 'https://www.rocareindia.com/',
    featured: true,
  },
  {
    id: '2',
    title: 'Affiliate marketing website with dashboard',
    description: 'Affiliate marketing website with dashboard.',
    image: '/images/portfolio/profitway.png',
    category: 'dashboard',
    technologies: ['React', 'Node.js', 'Mysql', 'Vercel'],
    liveUrl: 'https://www.profitways.in/',
    featured: true,
  },
  {
    id: '3',
    title: 'AI Automation Tool for Content Creation and SEO Optimization with GMB Management',
    description: 'Built a full-stack AI-powered platform that automates blog writing, meta tag generation, and keyword-rich content creation. Integrated Google My Business (GMB) management to schedule posts, respond to reviews, and track local SEO performance - all from a single dashboard. Reduced content production time by 80% for agencies and small businesses..',
    image: '/images/portfolio/limbuai.png',
    category: 'edtech',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'AWS'],
    liveUrl: 'https://www.limbu.ai/',
    featured: true,
  },
  
];

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'ecommerce', name: 'E-Commerce' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'dashboard', name: 'Dashboards' },
  { id: 'edtech', name: 'EdTech' },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}
