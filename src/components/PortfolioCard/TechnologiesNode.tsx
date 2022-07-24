import { HStack, Tag } from '@chakra-ui/react';

import { PortfolioType } from '@/interfaces/PortfolioType';

type TechnologiesNodeProps = {
  technologies: PortfolioType['technologies'];
};

export function TechnologiesNode({ technologies }: TechnologiesNodeProps) {
  return (
    <HStack spacing={[2, 6]} align="justify">
      {technologies.map((technology: string, index: number) => (
        <Tag key={String(index)} size={['sm', 'sm', 'md']}>
          {technology}
        </Tag>
      ))}
    </HStack>
  );
}
