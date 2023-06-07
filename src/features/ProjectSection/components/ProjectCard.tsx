import { Box, chakra, Divider, Flex, Heading, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'

import { Technologies } from '@/components/Technologies/Technologies'

import { ProjectDate } from './ProjectDate'
import type { ProjectType } from '../types/ProjectType'
type ProjectCardProps = {
	project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Box
			as={chakra.section}
			w='full'
			p={4}
			bgColor='white'
			borderRadius='3xl'
			borderWidth='thin'
			_dark={{ borderColor: 'gray.700', bgColor: 'gray.800' }}
			borderColor='gray.100'
			boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);'
		>
			<Stack
				direction={['column', 'row']}
				divider={<StackDivider borderColor='gray.500' borderStyle='dashed' />}
			>
				<>
					<Box flex={1}>
						{/* <Icon as={icon} color='primary.light' _dark={{color:'primary:dark'}} fontSize="3xl" /> */}
						<Flex justify='space-between'>
							<Heading size={['xs', 'sm']} fontWeight='bold'>
								{project.title}
							</Heading>
							<Heading size={['xs', 'sm']} fontWeight='thin' alignItems='right'>
								{project.position}
							</Heading>
						</Flex>
						<VStack alignItems='left'>
							<Text>{project.description}</Text>
							<Divider borderColor='gray.500' />
							<Technologies technologies={project.technologies} />
						</VStack>
					</Box>
				</>
				<Box p={2}>
					<ProjectDate projectDate={project.projectDate} projectDuration={project.projectDuration} />
				</Box>
			</Stack>
		</Box>
	)
}
