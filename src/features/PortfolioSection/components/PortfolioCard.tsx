import Image from 'next/image'
import { AspectRatio, Text, useColorMode, VStack } from '@chakra-ui/react'

import { MotionBox } from '@/components/MotionBox/MotionBox'
import { Technologies } from '@/components/Technologies/Technologies'
import { PortfolioType } from '../types/PortfolioType'
import { CardHeader } from './CardHeader'

type PortfolioCardProps = {
	portfolio: PortfolioType
}

export const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
	const { colorMode } = useColorMode()
	const cardBgColor = { light: 'white', dark: 'gray.900' }
	const cardColor = { light: 'gray.900', dark: 'white' }

	return (
		<MotionBox
			bg={cardBgColor[colorMode]}
			color={cardColor[colorMode]}
			borderRadius='2xl'
			p={4}
			borderWidth='1px'
			minH={34}
			w='full'
			border='1px solid'
			borderColor='grey.300'
			boxShadow='dark-sm'
			position='relative'
			whileHover={{ scale: 1.06 }}
		>
			<CardHeader portfolio={portfolio} />
			{portfolio.imageUrl && (
				<AspectRatio
					ratio={14 / 16}
					position='relative'
					shadow='lg'
					overflow='hidden'
					rounded='lg'
					display='block'
					mb='1em'
				>
					<Image src={portfolio.imageUrl} alt={`${portfolio.name} image`} fill />
				</AspectRatio>
			)}
			<VStack alignItems='stretch'>
				<Text fontWeight='medium' noOfLines={1}>
					{portfolio.description}
				</Text>
				<Technologies technologies={portfolio.technologies} />
			</VStack>
		</MotionBox>
	)
}
