/**
 * Blog Page
 * Lists all blog posts with featured posts section
 */

import { Metadata } from 'next';
import BlogContent from '@/components/sections/BlogContent';
import CTASection from '@/components/common/CTASection';
import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/data/blog';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Blog - Insights & Resources',
  description:
    'Explore the SK WebTech blog for insights on web development, SEO, e-commerce, app development, and digital marketing strategies to grow your business.',
  keywords: [
    'web development blog',
    'SEO tips',
    'e-commerce insights',
    'digital marketing blog',
    'tech articles',
    'business growth strategies',
  ],
  openGraph: {
    title: 'Blog | SK WebTech',
    description:
      'Insights, tips, and resources on web development, SEO, and digital marketing.',
    type: 'website',
    url: 'https://skwebtech.com/blog',
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Blog Content with filtering */}
      <BlogContent
        allPosts={allPosts}
        featuredPosts={featuredPosts}
        categories={categories}
      />

      {/* CTA Section */}
      <CTASection
        title="Need Help with Your Project?"
        subtitle="Our team of experts is ready to help you achieve your digital goals."
        primaryCTA={{ text: 'Get Free Consultation', href: '/contact' }}
      />
    </>
  );
}
