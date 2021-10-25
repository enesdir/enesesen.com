import { Box } from '@chakra-ui/react'

import Container from '@components/Container'
import { TRenderProps } from '@typings/commonPropTypes'

function Content({ children }: TRenderProps): JSX.Element {
  return (
    <Box as="main" pt={['0', '72px']} pb={['80px', '0']}>
      <Container>{children}</Container>
    </Box>
  )
}
export default Content
