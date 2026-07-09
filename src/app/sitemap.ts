import { MetadataRoute } from 'next';
import { getAllPosts, getServicePageTemplates, getLocations } from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.skwebtech.in';

  const staticPages = ['', '/services', '/portfolio', '/about', '/contact', '/blog', '/privacy-policy', '/terms-and-conditions', '/refund-policy'];
  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }));

  const posts = await getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const templates = await getServicePageTemplates();
  const locations = await getLocations();
  const serviceLocationRoutes: MetadataRoute.Sitemap = [];

  for (const service of templates) {
    if (service.slug === 'whatsapp-business') continue; // TEMP-WA-DISABLED
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
