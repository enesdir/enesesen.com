export type PortfolioType = {
	title: string
	name: string
	description: string
	url: string
	demoUrl: string
	imageUrl: string
	technologies: string[]
	homepageUrl: string
	forkCount: number
	stargazers: {
		totalCount: number
	}
	primaryLanguage: {
		name: string
	}
	diskUsage: number
}
