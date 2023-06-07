import {
	SiAmazonaws,
	SiBulma,
	SiCss3,
	SiDjango,
	SiEslint,
	SiGit,
	SiGnubash,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMui,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiSass,
	SiServerless,
	SiTailwindcss,
	SiTypescript,
	SiWordpress,
	SiYarn,
} from 'react-icons/si'

import type { TechStackSection } from '../types/techStackSection'

export const techStackItems: TechStackSection[] = [
	{
		title: 'Front-End',
		stackItems: [
			{
				icon: SiReact,
				iconName: 'React',
			},
			{
				icon: SiNextdotjs,
				iconName: 'Next.js',
				iconColor: '#fff',
			},
			{
				icon: SiTypescript,
				iconName: 'TypeScript',
			},
			{
				icon: SiJavascript,
				iconName: 'JavaScript',
			},
			{
				icon: SiHtml5,
				iconName: 'HTML 5',
			},
			{
				icon: SiCss3,
				iconName: 'CSS 3',
			},
			{
				icon: SiMui,
				iconName: 'Material-UI',
				iconColor: '#007FFF',
			},
			{
				icon: SiBulma,
				iconName: 'Bulma CSS',
			},
			{
				icon: SiTailwindcss,
				iconName: 'Tailwind CSS',
			},
			{
				icon: SiSass,
				iconName: 'SASS (CSS)',
			},
		],
	},
	{
		title: 'Back-End',
		stackItems: [
			{
				icon: SiNodedotjs,
				iconName: 'Node.js',
			},
			{
				icon: SiTypescript,
				iconName: 'TypeScript',
			},
			{
				icon: SiGraphql,
				iconName: 'GraphQL',
			},
			{
				icon: SiPython,
				iconName: 'Python',
			},
			{
				icon: SiDjango,
				iconName: 'Django',
			},
			{
				icon: SiWordpress,
				iconName: 'Wordpress',
			},
			{
				icon: SiAmazonaws,
				iconName: 'Amazon Web Services',
			},
			{
				icon: SiPostgresql,
				iconName: 'PostgreSQL',
			},
			{
				icon: SiMongodb,
				iconName: 'MongoDB Atlas',
			},
			{
				icon: SiServerless,
				iconName: 'Serverless Framework',
			},
		],
	},
	{
		title: 'Tools',
		stackItems: [
			{
				icon: SiGit,
				iconName: 'Git',
			},
			{
				icon: SiGnubash,
				iconName: 'Bash',
			},
			{
				icon: SiYarn,
				iconName: 'Yarn Package Manager',
			},
			{
				icon: SiEslint,
				iconName: 'Eslint',
			},
		],
	},
]
