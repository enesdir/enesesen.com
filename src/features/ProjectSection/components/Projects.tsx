import { Box, Image, Stack, Text, VStack } from '@chakra-ui/react'

import { ProjectCard } from './ProjectCard'

import type { ProjectType } from '../types/ProjectType'

type ProjectsProps = {
	projects: ProjectType[]
}
export function Projects({ projects }: ProjectsProps) {
	if (!projects.length) {
		return (
			<VStack mx='auto' textAlign='center'>
				<Image src='/images/no-items.svg' alt='No projects found!' width='240px' height='240px' />
				<Text>No projects found!</Text>
			</VStack>
		)
	}

	return (
		<Box>
			<Stack spacing={4}>
				{projects.map((project: ProjectType, index: number) => (
					<ProjectCard project={project} key={index} />
				))}
			</Stack>
		</Box>
	)
}
