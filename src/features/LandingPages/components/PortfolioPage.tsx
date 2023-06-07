'use client'
import { SectionTitle } from '@/components/SectionTitle'
import { PortfolioStack, PortfolioType } from '@/features/PortfolioSection/'

type PortfolioPageProps = {
	portfolio: PortfolioType[]
}

export const PortfolioPage = ({ portfolio = [] }: PortfolioPageProps) => {
	return (
		<>
			<SectionTitle title="Some Things I've Built" />
			<PortfolioStack portfolio={portfolio} />
		</>
	)
}
