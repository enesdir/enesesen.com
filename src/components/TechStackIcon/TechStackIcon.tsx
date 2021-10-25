import { Box, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react'

import { TechStackIconType } from '@interfaces/techStackIconItem'

function TechStackIcon({ size, icon, iconName }: TechStackIconType): JSX.Element {
  const color = useColorModeValue('primary.light', 'primary.dark')
  const iconSize = size || '2em'
  return (
    <Tooltip label={iconName} placement="bottom" aria-label={iconName}>
      <Box as="span">
        <Icon as={icon} color={color} fontSize={iconSize} _hover={{ color: 'primary.hover' }} />
      </Box>
    </Tooltip>
  )
}
export default TechStackIcon
