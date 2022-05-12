import { PageSeo } from '@components/PageSeo'
import { HEAD_TITLE } from '@constants/seo'
import { TRenderProps } from '@typings/commonPropTypes'

import ProjectStack from './ProjectStack'

export function Project({ children }: TRenderProps) {
  return <>{children}</>
}

Project.ProjectStack = ProjectStack
