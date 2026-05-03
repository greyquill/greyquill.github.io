import type { MetadataRoute } from 'next';

const SITE_URL = 'https://greyquill.io';

type Entry = {
  path: string;
  changeFrequency: 'monthly' | 'weekly' | 'yearly';
  priority: number;
};

const ROUTES: Entry[] = [
  { path: '/',                          changeFrequency: 'monthly', priority: 1.0 },
  { path: '/platform',                  changeFrequency: 'monthly', priority: 0.9 },
  { path: '/products',                  changeFrequency: 'monthly', priority: 0.85 },
  { path: '/products/clarity-ai',       changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/gqdata',           changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/agents',           changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/gst-copilot',      changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services',                  changeFrequency: 'monthly', priority: 0.85 },
  { path: '/industries',                changeFrequency: 'monthly', priority: 0.85 },
  { path: '/industries/bfsi',           changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/telecom',        changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/retail',         changeFrequency: 'monthly', priority: 0.8 },
  { path: '/partnerships',              changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about-us',                  changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news',                      changeFrequency: 'weekly',  priority: 0.6 },
  { path: '/contact',                   changeFrequency: 'yearly',  priority: 0.6 },
  { path: '/support',                   changeFrequency: 'yearly',  priority: 0.5 },
  { path: '/policies',                  changeFrequency: 'yearly',  priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
