import React from 'react'

import { PageTitle } from '@components/PageTitle'
import { Portfolio } from '@components/Portfolio'
import { IPortfolio } from '@interfaces/githubProject'
import portfolioData from 'public/data/portfolio.json'

interface PortfolioProps {
  portfolio: IPortfolio[]
}

function PortfolioPage({ portfolio = [] }: PortfolioProps) {
  return (
    <Portfolio>
      <h1 style={{ display: 'none' }}>Enes ESEN</h1>
      <PageTitle title="Some Things I've Built" />
      <Portfolio.PortfolioStack portfolio={portfolio} />
    </Portfolio>
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
