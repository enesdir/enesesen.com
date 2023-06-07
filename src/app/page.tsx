import type { Metadata } from 'next'

import { WebsiteRoot } from '@/features/LandingPages'

export const metadata: Metadata = {
	title: 'Document Management for Modern Validation Teams',
}

export default function WebsiteRootPage() {
	return <WebsiteRoot />
}
