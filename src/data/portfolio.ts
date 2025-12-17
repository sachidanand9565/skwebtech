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
    title: 'E-Commerce Fashion Store',
    description: 'A modern e-commerce platform with advanced filtering, cart functionality, secure payment integration, and responsive design for a premium fashion brand.',
    image: '/images/portfolio/ecommerce-fashion.jpg',
    category: 'ecommerce',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Restaurant Management Dashboard',
    description: 'Complete restaurant management system with order tracking, inventory management, staff scheduling, and real-time analytics dashboard.',
    image: '/images/portfolio/restaurant-dashboard.jpg',
    category: 'dashboard',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Online Learning Platform',
    description: 'EdTech platform with video courses, live classes, progress tracking, quizzes, and certificate generation for students.',
    image: '/images/portfolio/edtech-platform.jpg',
    category: 'edtech',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'WebRTC'],
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Food Delivery Mobile App',
    description: 'Cross-platform mobile app for food ordering with real-time tracking, payment integration, and push notifications.',
    image: '/images/portfolio/food-delivery-app.jpg',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://example.com',
  },
  {
    id: '5',
    title: 'Real Estate Listing Website',
    description: 'Property listing platform with advanced search filters, map integration, virtual tours, and agent booking system.',
    image: '/images/portfolio/real-estate.jpg',
    category: 'web',
    technologies: ['Next.js', 'Tailwind CSS', 'Google Maps API', 'Prisma'],
    liveUrl: 'https://example.com',
  },
  {
    id: '6',
    title: 'Healthcare Appointment System',
    description: 'Doctor appointment booking system with video consultation, prescription management, and patient records.',
    image: '/images/portfolio/healthcare-app.jpg',
    category: 'web',
    technologies: ['React', 'Node.js', 'MySQL', 'Twilio'],
    liveUrl: 'https://example.com',
  },
  {
    id: '7',
    title: 'Gym Membership Platform',
    description: 'Fitness center management with membership plans, class scheduling, trainer booking, and payment processing.',
    image: '/images/portfolio/gym-platform.jpg',
    category: 'web',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://example.com',
  },
  {
    id: '8',
    title: 'Inventory Management System',
    description: 'Complete inventory tracking solution with barcode scanning, stock alerts, supplier management, and detailed reports.',
    image: '/images/portfolio/inventory-system.jpg',
    category: 'dashboard',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://example.com',
  },
  {
    id: '9',
    title: 'Multi-vendor Marketplace',
    description: 'E-commerce marketplace where multiple vendors can sell products with separate dashboards and commission system.',
    image: '/images/portfolio/marketplace.jpg',
    category: 'ecommerce',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay'],
    liveUrl: 'https://example.com',
  },
  {
    id: '10',
    title: 'Social Media App',
    description: 'Mobile social networking app with posts, stories, messaging, and live streaming features.',
    image: '/images/portfolio/social-app.jpg',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Node.js', 'AWS'],
    liveUrl: 'https://example.com',
  },
  {
    id: '11',
    title: 'School Management ERP',
    description: 'Complete school management system with student records, attendance, fees, exams, and parent portal.',
    image: '/images/portfolio/school-erp.jpg',
    category: 'edtech',
    technologies: ['React', 'Node.js', 'MySQL', 'Chart.js'],
    liveUrl: 'https://example.com',
  },
  {
    id: '12',
    title: 'Crypto Trading Dashboard',
    description: 'Real-time cryptocurrency trading platform with live charts, portfolio tracking, and automated trading bots.',
    image: '/images/portfolio/crypto-dashboard.jpg',
    category: 'dashboard',
    technologies: ['React', 'WebSocket', 'TradingView', 'Node.js'],
    liveUrl: 'https://example.com',
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
