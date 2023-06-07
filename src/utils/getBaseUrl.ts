import { env } from '@/env.mjs'
export const getBaseUrl: () => string = () => {
	if (env.NODE_ENV === 'development') {
		return `http://${env.NEXT_PUBLIC_VERCEL_URL}`
	}

	return `https://${env.NEXT_PUBLIC_VERCEL_URL}`
}
