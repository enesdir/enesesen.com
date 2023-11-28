import { Box } from '@chakra-ui/react'

import { SectionTitle } from '@/components/SectionTitle'

export function AboutSection() {
	return (
		<>
			<SectionTitle title="Hello I'm Enes Esen" />
			<Box as='p' pt='8px' pb='16px'>
				I&apos;m am a passionate and self-motivated software developer eager to turn ideas into applications. My
				ambitions include staying on the leading edge of web development focusing primarily on building elegant,
				responsive, and performant user interfaces & experiences while using serverless cloud technologies to grow my
				full-stack development skills. I always look to meet new like-minded dev friends or find new learning
				opportunities & projects to rapidly continue improving as a developer.
			</Box>
		</>
	)
}
