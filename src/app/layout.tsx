import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import '@/styles/global.css'

import { ThemeProvider } from '@/contexts/ThemeProvider'

import { Layout } from '@/features/Layout'
export const dynamic = 'force-dynamic'

const title = 'Enes ESEN'
const description =
	'Enes ESEN is a software developer eager to learn, share, and teach web development along with turning ideas into applications'
const images = [
	{
		url: 'https://res.cloudinary.com/enesesen/image/upload/v1658665747/banners/enesesen-banner_zf1tct.png',
	},
]

export const metadata: Metadata = {
	title: {
		template: '%s | Enes ESEN',
		default: 'Enes ESEN',
	},
	description,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://enesesen.com',
		siteName: 'Enes Esen',
		images,
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@codenuru',
		images,
	},
	icons: {
		icon: {
			url: '/favicon/favicon-32x32.png',
			sizes: '32x32',
		},
		apple: '/favicon/apple-icon.png',
		shortcut: '/favicon/favicon.ico',
		other: [
			{
				rel: 'icon',
				url: '/favicon/favicon-16x16.png',
				sizes: '16x16',
			},
		],
	},
	manifest: '/favicon/site.webmanifest',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'cyan' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],

	metadataBase: new URL('https://enesesen.com'),
}
export default async function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en' dir='ltr'>
			<head />
			<body>
				<ThemeProvider>
					<Layout>{children}</Layout>
				</ThemeProvider>
			</body>
		</html>
	)
}
