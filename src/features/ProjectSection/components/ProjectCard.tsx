import { Box, chakra, Divider, Flex, Grid, GridItem, useColorModeValue, VStack } from '@chakra-ui/react';

import { TechnologiesNode } from '@/features/PortfolioSection/components/TechnologiesNode';

import { ProjectDate } from './ProjectDate';
import type { ProjectType } from '../types/ProjectType';
type ProjectCardProps = {
  project: ProjectType;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const tileBorderColor = useColorModeValue('gray.100', 'gray.700');
  const tileColor = useColorModeValue('primary.light', 'primary.dark');
  const tileBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      as={chakra.section}
      w="full"
      py={4}
      bgColor={tileBgColor}
      borderRadius="3xl"
      borderWidth="thin"
      borderColor={tileBorderColor}
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);"
    >
      <Grid gridTemplateColumns="repeat(6, 1fr)">
        <GridItem colSpan={5} p={1}>
          <Box>
            <Flex minWidth="max-content" justifyContent="center" alignItems="center" gap="2">
              {/* <Icon as={icon} color={tileColor} fontSize="3xl" /> */}
              <Box as="h3" fontWeight="bold" fontStyle="italic" py="2">
                {project.title}
              </Box>
            </Flex>

            <VStack alignItems="left" px={2}>
              <Box as="p">{project.description}</Box>
              <Divider borderColor="gray.500" my={3} />
              <TechnologiesNode technologies={project.technologies} />
            </VStack>
          </Box>
        </GridItem>
        <GridItem p={2} borderLeft="1px dashed" borderColor="black">
          <ProjectDate projectDate={project.projectDate} projectDuration={project.projectDuration} />
        </GridItem>
      </Grid>
    </Box>
  );
};
