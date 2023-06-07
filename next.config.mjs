import configureBundleAnalyzer from '@next/bundle-analyzer'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful for
 * Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

const withBundleAnalyzer = configureBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} nextConfig */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors when true.
		ignoreDuringBuilds: false,
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	images: {
		deviceSizes: [320, 480, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
		domains: ['res.cloudinary.com'],
	},
	swcMinify: true,
	reactStrictMode: true,
	poweredByHeader: false,
	experimental: {
		appDir: true,
	},
	async headers() {
		return [
			{
				source: '/favicon/:all*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, immutable, max-age=31536000',
					},
				],
			},
			{
				source: '/images/:all*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, immutable, max-age=31536000',
					},
				],
			},
		]
	},
}

const configExport = () => {
	const plugins = [withBundleAnalyzer]
	return plugins.reduce((acc, next) => next(acc), nextConfig)
}

export default configExport
