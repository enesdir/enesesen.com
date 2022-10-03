export type ProjectType = {
  title: string;
  shortDescription: string;
  description: string;
  slug: string;
  position: 'Full Stack Developer' | 'Front-End Developer' | 'Backend Developer';
  technologies: string[];
  projectDate: string;
  projectDuration: string;
  projectStatus: 'InProgress' | 'Completed';
  url: string;
  imageUrl: string;
};
