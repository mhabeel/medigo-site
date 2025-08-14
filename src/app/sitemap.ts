// app/sitemap.ts
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://your-domain.com/', lastModified: new Date() },
    { url: 'https://your-domain.com/#services', lastModified: new Date() },
    { url: 'https://your-domain.com/#contact', lastModified: new Date() },
  ];
}
