import portfolioData from 'public/data/portfolio.json';
import React from 'react';

import { PageSeo } from '@/components/PageSeo';
import { Portfolio } from '@/components/Portfolio';
import { SectionTitle } from '@/components/SectionTitle';

import type { PortfolioType } from '@/interfaces/PortfolioType';

type PortfolioPageProps = {
  portfolio: PortfolioType[];
};

function PortfolioPage({ portfolio = [] }: PortfolioPageProps) {
  return (
    <>
      <PageSeo templateTitle="Portfolio" description="Projects that i made" />
      <Portfolio>
        <SectionTitle title="Some Things I've Built" />
        <Portfolio.PortfolioStack portfolio={portfolio} />
      </Portfolio>
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
