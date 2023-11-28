import { Figtree } from 'next/font/google'

import { ThemeProvider } from '@/contexts/ThemeProvider'
import { Layout } from '@/features/Layout'
import { DEFAULT_SEO } from './constants'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

export const figTree = Figtree({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-figtree',
	fallback: ['system-ui', 'sans-serif'],
})

export const dynamic = 'force-dynamic'

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#F7FAFC' },
		{ media: '(prefers-color-scheme: dark)', color: '#171923' },
	],
}

export const metadata: Metadata = {
	title: {
		template: `%s | ${DEFAULT_SEO.title}`,
		default: DEFAULT_SEO.title,
	},
	description: DEFAULT_SEO.description,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://enesesen.com',
		siteName: 'Enes Esen',
		images: DEFAULT_SEO.images,
	},
	twitter: {
		card: 'summary_large_image',
		title: DEFAULT_SEO.title,
		description: DEFAULT_SEO.description,
		creator: '@codenuru',
		images: DEFAULT_SEO.images,
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
