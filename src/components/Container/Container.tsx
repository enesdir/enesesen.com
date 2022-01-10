import { Box, Fade } from '@chakra-ui/react'

import { TRenderProps } from '@typings/commonPropTypes'

export function Container({ children }: TRenderProps): JSX.Element {
  return (
    <Box w="768px" maxW="100%" px={['16px', '32px']} pt={['24px', '0']} mx="auto" transition=".5s">
      <Fade in>{children}</Fade>
    </Box>
  )
}
