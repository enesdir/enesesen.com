import { env } from '@/env.mjs'

export const siteConfig = {
	siteUrl: env.NEXT_PUBLIC_BASE_URL,
	seoTitle: 'Enes ESEN',
	seoDescription:
		'Enes ESEN is a software developer eager to learn, share, and teach web development along with turning ideas into applications',
	og: {
		twitterCreator: '@codenuru',
		images: [
			{
				url: 'https://res.cloudinary.com/enesesen/image/upload/v1658665747/banners/enesesen-banner_zf1tct.png',
			},
		],
	},
	manifest: {
		id: 'com.enesesen',
		name: 'enesesen',
	},
}
