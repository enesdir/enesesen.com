import { NextResponse } from 'next/server'

import projectsData from '~/data/projects.json'

// eslint-disable-next-line unused-imports/no-unused-vars
export async function GET(request: Request) {
	// Given an incoming request...
	const newHeaders = new Headers(request.headers)
	// Add a new header
	newHeaders.set('Cache-Control', 's-maxage=86400')
	return NextResponse.json(projectsData, { status: 200, headers: newHeaders })
}
