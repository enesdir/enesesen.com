'use client'

import type { ProjectType } from '@/features/ProjectSection/'
import { ProjectStack } from '@/features/ProjectSection/'

type ProjectsPageProps = {
	projects: ProjectType[]
}

export const ProjectsPage = ({ projects = [] }: ProjectsPageProps) => {
	return (
		<>
			<ProjectStack projects={projects} />
		</>
	)
}
