import React from 'react';

import { PageSeo } from '@/components/PageSeo';
import { SectionTitle } from '@/components/SectionTitle';
import { ProjectStack } from '@/features/ProjectSection/';

function ProjectsPage() {
  return (
    <>
      <PageSeo templateTitle="Projects" description="Projects that i made" />
      <SectionTitle title="Working in Progress" />
      <ProjectStack />
    </>
  );
}

export default ProjectsPage;
