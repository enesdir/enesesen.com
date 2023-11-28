'use client'

import { ProjectStack } from '@/features/ProjectSection/'

import type { ProjectType } from '@/features/ProjectSection/'

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
