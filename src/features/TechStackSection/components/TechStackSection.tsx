import { Box, chakra, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import type { TRenderProps } from '@/types/commonPropTypes'

import TechStackIcon from './TechStackIcon'
import type { TechStackIconType } from '../types/techStackIconItem'

type TechStackSectionProps = TRenderProps & {
	title: string
	stackitems: TechStackIconType[]
}

const TechStackSection = ({ title, stackitems }: TechStackSectionProps) => {
	const tileBgColor = useColorModeValue('white', 'gray.800')
	return (
		<Box
			as={chakra.section}
			w='full'
			bgColor={tileBgColor}
			px={2}
			py={4}
			borderRadius='3xl'
			borderWidth='medium'
			boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);'
			textAlign='center'
		>
			<Heading as='h3' fontSize='lg' fontWeight='bold' pb={3} fontStyle='italic'>
				{title}
			</Heading>
			<SimpleGrid columns={3} gap={3}>
				{stackitems.map((stackItem, index) => (
					<TechStackIcon key={String(index)} icon={stackItem.icon} iconName={stackItem.iconName} />
				))}
			</SimpleGrid>
		</Box>
	)
}

export default TechStackSection
