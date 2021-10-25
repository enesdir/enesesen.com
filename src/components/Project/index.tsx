import PageSeo from '@components/PageSeo'
import { HEAD_TITLE } from '@constants/seo'
import { TRenderProps } from '@typings/commonPropTypes'

import ProjectStack from './ProjectStack'

export function Project({ children }: TRenderProps) {
  return (
    <>
      <PageSeo title={`${HEAD_TITLE} | Projects`} description="Projects that i made" url="https://enesesen.com" />

      {children}
    </>
  )
}

Project.ProjectStack = ProjectStack
