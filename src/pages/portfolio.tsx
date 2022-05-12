import React from 'react'

import { PageSeo } from '@components/PageSeo'
import { Portfolio } from '@components/Portfolio'
import { SectionTitle } from '@components/SectionTitle'
import { PortfolioType } from '@interfaces/PortfolioType'
import portfolioData from 'public/data/portfolio.json'
interface PortfolioPageProps {
  portfolio: PortfolioType[]
}

function PortfolioPage({ portfolio = [] }: PortfolioPageProps) {
  return (
    <>
      <PageSeo title="Portfolio" description="Projects that i made" url="https://enesesen.com/portfolio" />
      <Portfolio>
        <SectionTitle title="Some Things I've Built" />
        <Portfolio.PortfolioStack portfolio={portfolio} />
      </Portfolio>
    </>
  )
}
export async function getStaticProps() {
  const portfolio = portfolioData
  return {
    props: {
      portfolio,
    },
  }
}

export default PortfolioPage
