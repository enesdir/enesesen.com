import { PageSeo } from '@/components/PageSeo';
import { SectionTitle } from '@/components/SectionTitle';
import { Hero } from '@/features/HeroSection/';
import { IntroStack } from '@/features/IntroSection/';
import { TechStack } from '@/features/TechStackSection/';

export function HomePage() {
  return (
    <>
      <PageSeo />
      <Hero />
      <IntroStack />
      <SectionTitle title="Tech Stack" />
      <TechStack />
    </>
  );
}

export default HomePage;
