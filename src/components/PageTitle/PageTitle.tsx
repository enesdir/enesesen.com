import { Flex, Heading } from '@chakra-ui/react'

import { TRenderProps } from '@typings/commonPropTypes'

interface PageTitleProps extends TRenderProps {
  title: string
}
function PageTitle({ title, children }: PageTitleProps): JSX.Element {
  return (
    <Flex justify="space-between" py="8px" borderBottomWidth="2px">
      <Heading size="lg" fontWeight="normal">
        {title}
      </Heading>
      {children}
    </Flex>
  )
}
export default PageTitle
