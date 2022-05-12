import { Box, Icon, useColorModeValue } from '@chakra-ui/react'

import { IntroTileProps } from '@interfaces/introTile'

export function IntroTile({ title, icon, desc }: IntroTileProps) {
  const tileBorderColor = useColorModeValue('gray.100', 'gray.700')
  const tileColor = useColorModeValue('primary.light', 'primary.dark')
  const tileBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box
      w={['100%', '32%']}
      p="3% 2.5%"
      my={['8px', '0']}
      bgColor={tileBgColor}
      borderRadius="12px"
      borderWidth="2px"
      borderColor={tileBorderColor}
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);"
      textAlign="center"
    >
      <Icon as={icon} color={tileColor} fontSize="4xl" />
      <Box as="h3" fontWeight="bold" fontStyle="italic" py="8px">
        {title}
      </Box>
      <Box as="p">{desc}</Box>
    </Box>
  )
}
