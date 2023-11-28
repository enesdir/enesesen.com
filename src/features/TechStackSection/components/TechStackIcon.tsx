import { Box, Icon, Text, useColorModeValue } from '@chakra-ui/react'

import type { TechStackIconType } from '../types/techStackIconItem'

export const TechStackIcon = ({ size, icon, iconName }: TechStackIconType) => {
	const color = useColorModeValue('primary.light', 'primary.dark')
	const iconSize = size || '2em'
	return (
		<Box>
			<Icon as={icon} color={color} boxSize={iconSize} _hover={{ color: 'primary.hover' }} aria-label={iconName} />
			<Text fontSize={11}>{iconName}</Text>
		</Box>
	)
}
