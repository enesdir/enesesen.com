import type { Metadata } from 'next'

import { ProjectsPage } from '@/features/LandingPages'
import type { ProjectType } from '@/features/ProjectSection'

import { getBaseUrl } from '@/utils/getBaseUrl'
async function getData() {
	const res = await fetch(`${getBaseUrl()}/api/projects`)
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
	title: 'Projects',
	description: 'Projects that i made',
}
export default async function Projects() {
	const data: ProjectType[] = await getData()

	return <ProjectsPage projects={data} />
}
