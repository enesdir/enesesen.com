import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react'
import { FaAt, FaUserAlt } from 'react-icons/fa'

import { useContactForm } from '@/features/ContactSection/hooks/useContactForm'

export function Form() {
	const { onSubmit, onInputChange, isSubmitting, errorMessage } = useContactForm()
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Box as='form' onSubmit={onSubmit}>
			<Flex flexDir={['column', 'row']} my='16px'>
				<InputGroup mr={['0', '8px']} mb={['16px', '0']}>
					<InputLeftElement color={color}>
						<FaUserAlt />
					</InputLeftElement>
					<Input name='name' onChange={onInputChange} isRequired placeholder='Name' />
				</InputGroup>

				<InputGroup ml={['0', '8px']}>
					<InputLeftElement color={color}>
						<FaAt />
					</InputLeftElement>
					<Input name='email' onChange={onInputChange} isRequired placeholder='Email' />
				</InputGroup>
			</Flex>

			<Textarea name='message' onChange={onInputChange} isRequired rows={6} placeholder='Message' />

			<Input name='_gotcha' display='none' />

			<Flex flexDir={['column', 'column', 'row']} justify='space-between' align='center' mt='16px'>
				<Button
					type='submit'
					isLoading={isSubmitting}
					loadingText='Sending...'
					colorScheme='blue'
					minW='200px'
				>
					Send Message
				</Button>

				{!isSubmitting && errorMessage && (
					<Box as='span' color='red.500' mt={['16px', '16px', '0']}>
						* {errorMessage}
					</Box>
				)}
			</Flex>
		</Box>
	)
}
