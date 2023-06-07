const APP_NAME = 'enesesen-website'
type Favicons = {
	rel: string
	href: string
	sizes?: string
	type?: string
}

const favicons: Array<Favicons> = [
	{
		rel: 'apple-touch-icon',
		type: 'image/png',
		sizes: '180x180',
		href: '/favicon/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicon/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: '/favicon/favicon-16x16.png',
	},
	{
		rel: 'shortcut icon',
		href: '/favicon/favicon.ico',
	},
	{
		rel: 'manifest',
		href: '/favicon/site.webmanifest',
	},
]

export const Meta = () => {
	return (
		<>
			<meta name='application-name' content={APP_NAME} />
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='default' />
			<meta name='apple-mobile-web-app-title' content={APP_NAME} />
			<meta name='format-detection' content='telephone=no' />
			<meta name='mobile-web-app-capable' content='yes' />
			<meta name='msapplication-TileColor' content='#ffffff' />
			<meta name='theme-color' content='#FFFFFF' />
			{/* Favicons */}
			{favicons.map((linkProps) => (
				<link key={linkProps.href} {...linkProps} />
			))}
		</>
	)
}
