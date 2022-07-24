import { Box, chakra, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

import type { TRenderProps } from '@/types/commonPropTypes';

import TechStackIcon from './TechStackIcon';
import type { TechStackIconType } from '../types/techStackIconItem';

type TechStackSectionProps = TRenderProps & {
  title: string;
  stackitems: TechStackIconType[];
};

const TechStackSection = ({ title, stackitems }: TechStackSectionProps) => {
  const tileBgColor = useColorModeValue('white', 'gray.800');
  return (
    <Box
      as={chakra.section}
      w="full"
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
      <SimpleGrid columns={3} gap={6}>
        {stackitems.map((stackitem, index) => (
          <TechStackIcon key={String(index)} icon={stackitem.icon} iconName={stackitem.iconName} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechStackSection;
