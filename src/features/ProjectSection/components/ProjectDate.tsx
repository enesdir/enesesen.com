import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

import type { ProjectType } from '../types/ProjectType';

type ProjectDateProps = {
  projectDate: ProjectType['projectDate'];
  projectDuration: ProjectType['projectDuration'];
};

export function ProjectDate({ projectDate, projectDuration }: ProjectDateProps) {
  const iconColor = useColorModeValue('gray.600', 'gray.400');
  return (
    <Flex h="full" direction={['row', 'column']} justify="space-between" letterSpacing={2}>
      <Flex alignItems="center" direction={['column', 'row']} gap={2}>
        <Icon as={FaRegCalendarAlt} fontSize={['2xl', '3xl']} color={iconColor} />

        <Box fontSize={['xs', 'sm']} textAlign={['center', 'left']} lineHeight={1.2}>
          <Text color="gray.500">DATE</Text>
          <Text>{projectDate}</Text>
        </Box>
      </Flex>
      <Flex alignItems="center" gap={2} direction={['column', 'row']}>
        <Icon as={FaRegClock} fontSize={['2xl', '3xl']} color={iconColor} />

        <Box fontSize={['xs', 'sm']} textAlign={['center', 'left']} lineHeight={1.2}>
          <Text color="gray.500">DURATION</Text>
          <Text>{projectDuration}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
