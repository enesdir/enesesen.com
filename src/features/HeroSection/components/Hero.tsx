import Image from 'next/image'
import { Box, Flex, Heading, keyframes, useColorModeValue } from '@chakra-ui/react'

import { MotionBox } from '@/components/MotionBox/MotionBox'
import futuristicImage from '~/public/images/futuristic.svg'

export const Hero = () => {
	const color = useColorModeValue('primary.light', 'primary.dark')
	const animationKeyframes = keyframes`
  0%  { top: 2px; }
  20% { top: -40px; }
  40% { top: -80px; }
  60% { top: -120px; }
  80% { top: -160px; }
`
	const animation = `${animationKeyframes} 12s ease-in-out infinite`
	return (
		<Flex flexDir={['column', 'row']} align='center' justify='space-around' mt={['0', '24px']} mb='24px'>
			<Flex height={['auto', '240px']} my={['32px', '0']} flexDir='column' justify='center'>
				<Heading as='h1' fontSize='5xl'>
					Enes Esen
				</Heading>
				<Heading as='h2' fontSize='2xl' color={color} mx={['auto', '0']}>
					<Box as='span' float='left' h='40px' mr='6px'>
						Software
					</Box>
					<Box as='span' float='left' overflow='hidden' pos='relative' h='40px'>
						<MotionBox
							as='span'
							display='inline-block'
							pos='relative'
							whiteSpace='nowrap'
							top={0}
							left={0}
							animation={animation}
						>
							<Box h='40px'>Developer</Box>
							<Box h='40px'>Enthusiast</Box>
							<Box h='40px'>Consultant</Box>
						</MotionBox>
					</Box>
				</Heading>
			</Flex>
			<Box width='240px' height='240px' position='relative'>
				<Image src={futuristicImage} alt='Futuristic Software Developer Illustration' priority />
			</Box>
		</Flex>
	)
}
