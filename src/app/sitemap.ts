import { MetadataRoute } from 'next';
import { getAllPosts } from '@/data/blog';
import { servicePageTemplates } from '@/data/servicePages';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skwebtech.in';

  const staticPages = ['', '/services', '/portfolio', '/about', '/contact', '/blog'];
  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }));

  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const serviceLocationRoutes: MetadataRoute.Sitemap = [];
  for (const service of servicePageTemplates) {
    for (const location of locations) {
      serviceLocationRoutes.push({
        url: `${baseUrl}/services/${service.slug}-in-${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  return [...staticRoutes, ...blogRoutes, ...serviceLocationRoutes];
}
