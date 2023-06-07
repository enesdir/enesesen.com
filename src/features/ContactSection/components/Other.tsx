import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { SiTwitter } from 'react-icons/si'

export function OtherContactMethods(): JSX.Element {
	const color = useColorModeValue('primary.light', 'primary.dark')
	return (
		<Box as='section' py='16px' textAlign='center'>
			<Box as='h2' fontSize='1.4em'>
				other ways to contact...
			</Box>

			<Flex justify='center' align='center' my='16px'>
				<Icon as={SiTwitter} color={color} boxSize={5} mr='8px' />
				@codenuru
			</Flex>
		</Box>
	)
}
