import { NextResponse } from 'next/server'

import portfolioData from '~/data/portfolio.json'

// eslint-disable-next-line unused-imports/no-unused-vars
export async function GET(request: Request) {
	return NextResponse.json(portfolioData, { status: 200 })
}
