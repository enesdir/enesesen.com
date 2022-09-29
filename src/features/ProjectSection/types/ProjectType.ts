export type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  projectDate: string;
  projectDuration: string;
  projectStatus: 'InProgress' | 'Completed';
  url: string;
  imageUrl: string;
};
