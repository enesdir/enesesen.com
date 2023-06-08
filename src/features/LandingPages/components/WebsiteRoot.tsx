'use client'

import { SectionTitle } from '@/components/SectionTitle'
import { Hero } from '@/features/HeroSection/'
import { IntroStack } from '@/features/IntroSection/'
import { TechStack } from '@/features/TechStackSection/'

export const WebsiteRoot = () => {
	return (
		<>
			<Hero />
			<IntroStack />
			<SectionTitle title='Tech Stack' />
			<TechStack />
		</>
	)
}
