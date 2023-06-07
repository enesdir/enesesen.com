import { NextResponse } from 'next/server'

import projectsData from '~/data/projects.json'

// eslint-disable-next-line unused-imports/no-unused-vars
export async function GET(request: Request) {
	return NextResponse.json(projectsData, { status: 200 })
}
