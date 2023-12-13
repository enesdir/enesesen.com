import { siteConfig } from '@/constants/siteConfig'

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes = ['', '/portfolio', '/blog', '/projects', '/contact'].map((route) => {
		return {
			url: `${siteConfig.siteUrl}${route}`,
			lastModified: new Date().toISOString().split('T')[0],
			priority: route === '' ? 1 : 0.8,
		}
	})
	return [...staticRoutes]
}
