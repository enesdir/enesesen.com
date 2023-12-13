import { siteConfig } from '@/constants/siteConfig'

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/api/',
		},
		sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
		host: siteConfig.siteUrl,
	}
}
