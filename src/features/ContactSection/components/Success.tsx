import Link from 'next/link'
import { Box, Button, Heading } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'

import { Container } from '@/components/Container'

export const ContactSuccess = () => {
	return (
		<Container>
			<Box textAlign='center'>
				<Heading py='16px'>Success!</Heading>
				<Box as='p' py='8px'>
					Your submission was sent successfully.
				</Box>
				<Box as='p' py='8px'>
					For messages and inquiries, look for me to get back to you within 24 hours.
				</Box>
			</Box>

			<Link href='/'>
				<Button display='flex' colorScheme='blue' mt='24px' mb='32px' mx='auto'>
					<FaHome />
					<Box as='span' pl='6px'>
						Navigate To Homepage
					</Box>
				</Button>
			</Link>
		</Container>
	)
}
