import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { Box, Input, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { PortfolioCard } from '@/features/PortfolioSection/components/PortfolioCard'
import { PortfolioType } from '../types/PortfolioType'
import noItems from '~/public/images/no-items.svg'

type PortfolioProps = {
	portfolio: PortfolioType[]
}

export const PortfolioStack = ({ portfolio = [] }: PortfolioProps) => {
	const [searchQuery, setSearchQuery] = useState('')
	const sortedPortfolio = portfolio.filter((work: PortfolioType) =>
		work.title.toLowerCase().includes(searchQuery.toLowerCase())
	)
	const searchNode = () => (
		<Box pt={4} w='full'>
			<Input
				bg='white'
				color='gray.900'
				_dark={{ bg: 'gray.900', color: 'white' }}
				value={searchQuery}
				onChange={(e: FormEvent<HTMLInputElement>) => setSearchQuery(e.currentTarget.value)}
				placeholder='Search for an project'
				w='full'
			/>
		</Box>
	)
	const footerNode = () => (
		<Link size='lg' variant='outline' target='_blank' href='https://github.com/enesdir'>
			More on GitHub
		</Link>
	)
	const projectsNode = () => {
		if (!sortedPortfolio.length) {
			return (
				<VStack mx='auto' textAlign='center'>
					<Box width='240px' height='240px'>
						<Image src={noItems} alt='No projects found!' />
					</Box>
					<Text>No projects found!</Text>
				</VStack>
			)
		}

		return (
			<>
				<SimpleGrid columns={[1, 2]} gap={8}>
					{sortedPortfolio.map((work: PortfolioType, index: number) => (
						<PortfolioCard portfolio={work} key={index} />
					))}
				</SimpleGrid>
				{footerNode()}
			</>
		)
	}

	return (
		<VStack spacing={8}>
			{searchNode()}
			{projectsNode()}
		</VStack>
	)
}
