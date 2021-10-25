export interface IProject {
  title: string
  name: string
  description: string
  url: string
  demoUrl: string
  technologies: string[]
  homepageUrl: string
  forkCount: number
  stargazers: {
    totalCount: number
  }
  primaryLanguage: {
    name: string
  }
  diskUsage: number
}
