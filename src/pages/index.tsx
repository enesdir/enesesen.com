import { Fade } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { PageSeo } from '@/components/PageSeo';
import { SectionTitle } from '@/components/SectionTitle';
import { Hero } from '@/features/HeroSection/';
import { IntroStack } from '@/features/IntroSection/';

const TechStack = dynamic(() => import('../features/TechStackSection/components/TechStack'), {
  suspense: true,
});

export function HomePage() {
  return (
    <>
      <PageSeo />
      <Fade in transition={{ enter: { duration: 1.2 } }}>
        <Hero />
        <IntroStack />
        <SectionTitle title="Tech Stack" />
        <Suspense fallback="Loading">
          <TechStack />
        </Suspense>
      </Fade>
    </>
  );
}

export default HomePage;
