import { PageSeo } from '@/components/PageSeo';
import { ProjectStack } from '@/features/ProjectSection/';
import type { ProjectType } from '@/features/ProjectSection/types/ProjectType';

import projectsData from '~/data/projects.json';

type ProjectsPageProps = {
  projects: ProjectType[];
};

function ProjectsPage({ projects = [] }: ProjectsPageProps) {
  return (
    <>
      <PageSeo templateTitle="Projects" description="Projects that i made" />
      <ProjectStack projects={projects} />
    </>
  );
}
export async function getStaticProps() {
  const projects = projectsData;
  return {
    props: {
      projects,
    },
  };
}
export default ProjectsPage;
