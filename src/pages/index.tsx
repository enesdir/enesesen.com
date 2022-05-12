import { Fade } from '@chakra-ui/react'

import Hero from '@components/Hero/Hero'
import { IntroStack } from '@components/IntroStack/IntroStack'
import { PageSeo } from '@components/PageSeo'
import { SectionTitle } from '@components/SectionTitle'
import { TechStack } from '@components/TechStack/TechStack'

export function HomePage() {
  return (
    <>
      <PageSeo
        title="Home"
        description="Enes Esen is a full-stack software developer eager to learn & share web development along with turning ideas into applications."
        url="https://enesesen.com"
      />
      <Fade in transition={{ enter: { duration: 1.2 } }}>
        <Hero />
        <IntroStack />
        <SectionTitle title="Tech Stack" />
        <TechStack />
      </Fade>
    </>
  )
}

export default HomePage
