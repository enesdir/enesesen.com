import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://enesesen.com',
			lastModified: new Date(),
		},
		{
			url: 'https://enesesen.com/portfolio',
			lastModified: new Date(),
		},
		{
			url: 'https://enesesen.com/projects',
			lastModified: new Date(),
		},
		{
			url: 'https://enesesen.com/contact',
			lastModified: new Date(),
		},
	]
}
