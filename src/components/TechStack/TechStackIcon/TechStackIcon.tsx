import { Box, Icon, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'

import { TechStackIconType } from '@interfaces/techStackIconItem'

export function TechStackIcon({ size, icon, iconName }: TechStackIconType): JSX.Element {
  const color = useColorModeValue('primary.light', 'primary.dark')
  const iconSize = size || '2em'
  return (
    <Tooltip label={iconName} placement="bottom" aria-label={iconName}>
      <Box as="span" w="33%">
        <Icon as={icon} color={color} fontSize={iconSize} _hover={{ color: 'primary.hover' }} aria-label={iconName} />
        <Text>{iconName}</Text>
      </Box>
    </Tooltip>
  )
}
