import React from 'react'

import { PageTitle } from '@components/PageTitle'
import { Project } from '@components/Project'

function ProjectsPage() {
  return (
    <Project>
      <h1 style={{ display: 'none' }}>Enes ESEN</h1>
      <PageTitle title="Working in Progress" />
      <Project.ProjectStack />
    </Project>
  )
}

export default ProjectsPage
