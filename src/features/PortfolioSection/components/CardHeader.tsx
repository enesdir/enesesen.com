import { Box, chakra, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react'
import { IoMdOpen } from 'react-icons/io'
import { SiGit } from 'react-icons/si'

import { PortfolioType } from '../types/PortfolioType'

type CardHeaderProps = {
	portfolio: Pick<PortfolioType, 'title' | 'url' | 'demoUrl'>
}

export const CardHeader = ({ portfolio }: CardHeaderProps) => {
	return (
		<Flex justifyContent='space-between' mb={2}>
			<Text color='slate.lighter' fontSize='xl' fontWeight='bold'>
				{portfolio.title}
			</Text>
			<Box>
				<Tooltip label='Open Repository Link' shouldWrapChildren>
					<IconButton
						as={chakra.a}
						href={portfolio.url}
						target='_blank'
						variant='link'
						aria-label='Open Repository link'
						icon={<SiGit size={30} />}
					/>
				</Tooltip>
				<Tooltip label='Open Website' shouldWrapChildren>
					<IconButton
						as={chakra.a}
						href={portfolio.demoUrl}
						target='_blank'
						variant='link'
						aria-label='Open Live Demo'
						icon={<IoMdOpen size={30} />}
					/>
				</Tooltip>
			</Box>
		</Flex>
	)
}
