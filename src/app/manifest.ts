import { MetadataRoute } from 'next'

import { siteConfig } from '../constants/siteConfig'

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: siteConfig.manifest.id,
		name: siteConfig.manifest.name,
		short_name: siteConfig.seoTitle,
		description: siteConfig.seoDescription,
		lang: 'en-US',
		dir: 'ltr',
		start_url: '/',
		scope: '/',
		display: 'standalone',
		orientation: 'landscape',
		theme_color: '#ffffff',
		background_color: '#ffffff',
		prefer_related_applications: false,
		// display_override: ['fullscreen', 'minimal-ui'],
		icons: [
			{
				src: `${siteConfig.siteUrl}/favicon/favicon-16x16.png`,
				sizes: '16x16',
				type: 'image/png',
			},
			{
				src: `${siteConfig.siteUrl}/favicon/favicon-32x32.png`,
				sizes: '32x32',
				type: 'image/png',
			},
			{
				src: `${siteConfig.siteUrl}/favicon/android-chrome-192x192.png`,
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: `${siteConfig.siteUrl}/favicon/android-chrome-512x512.png`,
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: `${siteConfig.siteUrl}/favicon/maskable_icon_x192.png`,
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable',
			},
		],
	}
}
