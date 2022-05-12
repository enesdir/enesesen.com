import React from 'react'

import { PageSeo } from '@components/PageSeo'
import { Project } from '@components/Project'
import { SectionTitle } from '@components/SectionTitle'

function ProjectsPage() {
  return (
    <>
      <PageSeo title="Projects" description="Projects that i made" url="https://enesesen.com/projects" />
      <Project>
        <SectionTitle title="Working in Progress" />
        <Project.ProjectStack />
      </Project>
    </>
  )
}

export default ProjectsPage
