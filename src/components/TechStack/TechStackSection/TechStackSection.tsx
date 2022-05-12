import { chakra, Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'

import { TechStackIcon } from '@components/TechStack/TechStackIcon'
import { TechStackIconType } from '@interfaces/techStackIconItem'
import { TRenderProps } from '@typings/commonPropTypes'

interface TechStackSectionProps extends TRenderProps {
  title: string
  stackitems: TechStackIconType[]
}
export function TechStackSection({ title, stackitems }: TechStackSectionProps): JSX.Element {
  const tileBgColor = useColorModeValue('white', 'gray.800')
  return (
    <Box
      as={chakra.section}
      w="full"
      p="3% 0.5%"
      my={['8px', '0']}
      bgColor={tileBgColor}
      borderRadius="12px"
      borderWidth="2px"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);"
      textAlign="center"
    >
      <Heading as="h3" fontSize="lg" fontWeight="bold" pt="16px" pb="8px" fontStyle="italic">
        {title}
      </Heading>
      <Flex wrap="wrap">
        {stackitems.map((stackitem, index) => (
          <TechStackIcon key={String(index)} icon={stackitem.icon} iconName={stackitem.iconName} />
        ))}
      </Flex>
    </Box>
  )
}
