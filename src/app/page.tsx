import type { Metadata } from 'next'

import { WebsiteRoot } from '@/features/LandingPages'

export const metadata: Metadata = {
	title: 'Enes ESEN',
}

export default function WebsiteRootPage() {
	return <WebsiteRoot />
}
