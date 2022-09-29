import { Fade } from '@chakra-ui/react';

import { PageSeo } from '@/components/PageSeo';
import { SectionTitle } from '@/components/SectionTitle';
import { Hero } from '@/features/HeroSection/';
import { IntroStack } from '@/features/IntroSection/';
import { TechStack } from '@/features/TechStackSection/';

export function HomePage() {
  return (
    <>
      <PageSeo />
      <Fade in transition={{ enter: { duration: 1.2 } }}>
        <Hero />
        <IntroStack />
        <SectionTitle title="Tech Stack" />
        <TechStack />
      </Fade>
    </>
  );
}

export default HomePage;
