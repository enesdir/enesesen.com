import { Flex, Heading } from '@chakra-ui/react'

import TechStackIcon from '@components/TechStackIcon'
import { TechStackIconType } from '@interfaces/techStackIconItem'
import { TRenderProps } from '@typings/commonPropTypes'

interface TechStackSectionProps extends TRenderProps {
  title: string
  stackitems: TechStackIconType[]
}
function TechStackSection({ title, stackitems }: TechStackSectionProps): JSX.Element {
  return (
    <Flex as="section" flexDir={['column', 'row']} py={['8px', '24px']}>
      <Heading
        as="h3"
        size="lg"
        minW="164px"
        fontWeight="normal"
        pb={['16px', '16px', '0']}
        textAlign={['center', 'center', 'start']}
        fontStyle="italic"
      >
        {title}
      </Heading>
      <Flex w="100%" wrap="wrap" align="center" justify="space-evenly">
        {stackitems.map((stackitem, index) => (
          <TechStackIcon key={String(index)} icon={stackitem.icon} iconName={stackitem.iconName} />
        ))}
      </Flex>
    </Flex>
  )
}
export default TechStackSection
