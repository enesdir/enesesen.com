import configureBundleAnalyzer from '@next/bundle-analyzer'

/** Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful for Docker builds. */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

const withBundleAnalyzer = configureBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

// TODO: find better rule for script-src
// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  font-src 'self' https: data:;
  form-action 'self';
  frame-ancestors 'self';
  frame-src 'self' calendly.com;
  manifest-src 'self';
  object-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' https: 'unsafe-inline';
  img-src * blob: data:;
  connect-src *;
  worker-src 'self' blob:;
  upgrade-insecure-requests
`
const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
	{
		key: 'Cross-Origin-Opener-Policy',
		value: 'same-origin',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
	{
		key: 'Cross-Origin-Resource-Policy',
		value: 'same-origin',
	},
	// https://web.dev/origin-agent-cluster/
	{
		key: 'Origin-Agent-Cluster',
		value: '?1',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	// Opt-out of Google FLoC: https://amifloced.org/
	{
		key: 'Permissions-Policy',
		value: 'self',
	},
]

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
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
		deviceSizes: [320, 480, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	swcMinify: true,
	reactStrictMode: true,
	poweredByHeader: false,
	experimental: {
		typedRoutes: true,
		outputFileTracingExcludes: {
			'/*': ['./public/favicon/**/*.png'],
			'/**/*': ['./public/favicon/**/*.png'],
			'*': [
				'node_modules/@swc/core-linux-x64-gnu',
				'node_modules/@swc/core-linux-x64-musl',
				'node_modules/@esbuild/linux-x64',
			],
		},
	},

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
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
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Permissions-Policy',
						value: 'interest-cohort=()',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
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
