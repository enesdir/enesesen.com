import PageSeo from '@components/PageSeo'
import { HEAD_TITLE } from '@constants/seo'
import { TRenderProps } from '@typings/commonPropTypes'

import { Intro } from './Intro'
import { TechStack } from './TechStack'

export function About({ children }: TRenderProps) {
  return (
    <>
      <PageSeo
        title={`${HEAD_TITLE} | Home`}
        description="Enes Esen is a full-stack software developer eager to learn & share web development along with turning ideas into applications."
        url="https://enesesen.com"
      />
      {children}
    </>
  )
}
About.Intro = Intro
About.TechStack = TechStack
