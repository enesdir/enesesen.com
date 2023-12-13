import { Figtree } from 'next/font/google'

import { siteConfig } from '@/constants/siteConfig'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { Layout } from '@/features/Layout'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

const figTree = Figtree({
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
		template: `%s | ${siteConfig.seoTitle}`,
		default: siteConfig.seoTitle,
	},
	description: siteConfig.seoDescription,
	robots: {
		follow: true,
		index: true,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.siteUrl,
		title: siteConfig.seoTitle,
		description: siteConfig.seoDescription,
		siteName: siteConfig.seoTitle,
		images: siteConfig.og.images,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.seoTitle,
		description: siteConfig.seoDescription,
		creator: siteConfig.og.twitterCreator,
		images: siteConfig.og.images,
		site: siteConfig.siteUrl,
	},
	icons: {
		icon: { url: `${siteConfig.siteUrl}/favicon/favicon-16x16.png`, type: 'image/png', sizes: '16x16' },
		apple: { url: `${siteConfig.siteUrl}/favicon/apple-icon.png`, type: 'image/png', sizes: '180x180' },
		shortcut: { url: `${siteConfig.siteUrl}/favicon/favicon.ico`, type: 'image/x-icon', sizes: '48x48' },
		other: [
			{
				url: `${siteConfig.siteUrl}/favicon/favicon-32x32.png`,
				type: 'image/png',
				sizes: '32x32',
			},
		],
	},
	metadataBase: new URL(siteConfig.siteUrl),
}
export default async function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en' dir='ltr'>
			<head />
			<body className={figTree.variable}>
				<ThemeProvider>
					<Layout>{children}</Layout>
				</ThemeProvider>
			</body>
		</html>
	)
}
