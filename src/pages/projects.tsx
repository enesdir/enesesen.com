import React from 'react'

import PageTitle from '@components/PageTitle'
import { Project } from '@components/Project'
import { IProject } from '@interfaces/githubProject'
import projectsData from 'public/data/projects.json'

interface ProjectsProps {
  projects: IProject[]
}

function ProjectsPage({ projects = [] }: ProjectsProps) {
  return (
    <Project>
      <h1 style={{ display: 'none' }}>Enes ESEN</h1>

      <PageTitle title="Some Things I've Built" />

      <Project.ProjectStack projects={projects} />
    </Project>
  )
}
export async function getStaticProps() {
  const projects = projectsData

  return {
    props: {
      projects,
    },
  }
}

export default ProjectsPage
