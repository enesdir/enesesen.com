import { PortfolioPage } from '@/features/LandingPages'
import { getBaseUrl } from '@/utils/getBaseUrl'

import type { PortfolioType } from '@/features/PortfolioSection'
import type { Metadata } from 'next'

async function getData() {
	const res = await fetch(`${getBaseUrl()}/api/portfolio`)
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Some Works that i made',
}
export default async function Portfolio() {
	const data: PortfolioType[] = await getData()

	return <PortfolioPage portfolio={data} />
}
