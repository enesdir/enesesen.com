import { Box, chakra, Flex, Icon, useColorModeValue } from '@chakra-ui/react'

import { IntroTileType } from '../types/introTile'

const IntroTile = ({ title, icon, desc }: IntroTileType) => {
	const tileBorderColor = useColorModeValue('gray.100', 'gray.700')
	const tileColor = useColorModeValue('primary.light', 'primary.dark')
	const tileBgColor = useColorModeValue('white', 'gray.800')

	return (
		<Box
			as={chakra.section}
			w='full'
			px={2}
			py={4}
			bgColor={tileBgColor}
			borderRadius='3xl'
			borderWidth='medium'
			borderColor={tileBorderColor}
			boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);'
			textAlign='center'
		>
			<Flex minWidth='max-content' justifyContent='center' alignItems='center' gap='2'>
				<Icon as={icon} color={tileColor} fontSize='3xl' />
				<Box as='h3' fontWeight='bold' fontStyle='italic' py='2'>
					{title}
				</Box>
			</Flex>
			<Box as='p'>{desc}</Box>
		</Box>
	)
}

export default IntroTile
