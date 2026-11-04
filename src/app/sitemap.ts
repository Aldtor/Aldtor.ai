import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return [...siteConfig.navigation.map(item => item.href), '/legal/'].map(path => ({ url: `${siteConfig.url}${path}`, changeFrequency: 'monthly' as const, priority: path === '/' ? 1 : 0.7 })); }
