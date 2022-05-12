import { Flex, Heading } from '@chakra-ui/react'

import { TRenderProps } from '@typings/commonPropTypes'

interface SectionTitleProps extends TRenderProps {
  title: string
}
export function SectionTitle({ title, children }: SectionTitleProps): JSX.Element {
  return (
    <Flex justify="space-between" my="1em" borderBottomWidth="2px">
      <Heading size="lg" fontWeight="normal">
        {title}
      </Heading>
      {children}
    </Flex>
  )
}
