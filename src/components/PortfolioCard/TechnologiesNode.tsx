import { Tag, HStack } from '@chakra-ui/react'

import { PortfolioType } from '@interfaces/PortfolioType'

type TechnologiesNodeProps = {
  technologies: PortfolioType['technologies']
}

export function TechnologiesNode({ technologies }: TechnologiesNodeProps) {
  return (
    <HStack spacing={4}>
      {technologies.map((technology: string, index: number) => (
        <Tag key={String(index)}>{technology}</Tag>
      ))}
    </HStack>
  )
}
