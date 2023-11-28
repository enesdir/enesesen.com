import { Box } from '@chakra-ui/react'

import { SectionTitle } from '@/components/SectionTitle'
import { Projects } from './Projects'

import type { ProjectType } from '../types/ProjectType'

type ProjectStackProps = {
	projects: ProjectType[]
}
export const ProjectStack = ({ projects }: ProjectStackProps) => {
	const inProgressProjects = projects.filter((project: ProjectType) => project.projectStatus === 'InProgress')
	const completedProjects = projects.filter((project: ProjectType) => project.projectStatus === 'Completed')
	// const projectsNode = () => {
	// 	if (!projects.length) {
	// 		return (
	// 			<VStack mx='auto' textAlign='center'>
	// 				<Image src='/images/no-items.svg' alt='No projects found!' width='240px' height='240px' />
	// 				<Text>No projects found!</Text>
	// 			</VStack>
	// 		)
	// 	}

	// 	return (
	// 		<>
	// 			<Stack spacing={4}>
	// 				{projects.map((project: ProjectType, index: number) => (
	// 					<ProjectCard project={project} key={index} />
	// 				))}
	// 			</Stack>
	// 		</>
	// 	)
	// }
	return (
		<Box>
			<SectionTitle title='Ongoing Projects' />
			<Projects projects={inProgressProjects} />
			<SectionTitle title='Successfully Completed Projects' />
			<Projects projects={completedProjects} />
		</Box>
	)
}
