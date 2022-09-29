import { SimpleGrid, Tag } from '@chakra-ui/react';

type TechnologiesNodeProps = {
  technologies: string[];
};

export function TechnologiesNode({ technologies }: TechnologiesNodeProps) {
  return (
    <SimpleGrid minChildWidth={20} spacing={4}>
      {technologies.map((technology: string, index: number) => (
        <Tag key={String(index)} size="lg">
          {technology}
        </Tag>
      ))}
    </SimpleGrid>
  );
}
