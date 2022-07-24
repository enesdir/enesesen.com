import React from 'react';

import { PageSeo } from '@/components/PageSeo';
import { SectionTitle } from '@/components/SectionTitle';
import { PortfolioStack, PortfolioType } from '@/features/PortfolioSection/';

import portfolioData from '~/data/portfolio.json';

type PortfolioPageProps = {
  portfolio: PortfolioType[];
};

function PortfolioPage({ portfolio = [] }: PortfolioPageProps) {
  return (
    <>
      <PageSeo templateTitle="Portfolio" description="Projects that i made" />
      <SectionTitle title="Some Things I've Built" />
      <PortfolioStack portfolio={portfolio} />
    </>
  );
}
export async function getStaticProps() {
  const portfolio = portfolioData;
  return {
    props: {
      portfolio,
    },
  };
}

export default PortfolioPage;
