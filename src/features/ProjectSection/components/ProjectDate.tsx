import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

import type { ProjectType } from '../types/ProjectType';

type ProjectDateProps = {
  projectDate: ProjectType['projectDate'];
  projectDuration: ProjectType['projectDuration'];
};

export function ProjectDate({ projectDate, projectDuration }: ProjectDateProps) {
  return (
    <Flex h="full" pl={1} direction="column" justify="space-between" gap={2}>
      <Flex alignItems="center" direction={['column', 'row']} gap={2}>
        <Icon as={FaRegCalendarAlt} fontSize="2xl" />
        <Flex>
          <Box fontSize={['sm', 'md']} textAlign={['center', 'left']}>
            <Text color="gray.500">DATE</Text>
            <Text>{projectDate}</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex alignItems="center" gap={2} direction={['column', 'row']}>
        <Icon as={FaRegClock} fontSize="2xl" />
        <Flex>
          <Box fontSize={['sm', 'md']} textAlign={['center', 'left']}>
            <Text color="gray.500">DURATION</Text>
            <Text>{projectDuration}</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
