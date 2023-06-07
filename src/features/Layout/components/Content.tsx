'use client'

import { Box } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

import { Container } from '@/components/Container'

export const Content = ({ children }: PropsWithChildren) => {
	return (
		<Box as='main' pt={['0', '72px']} pb={['80px', '0']}>
			<Container>{children}</Container>
		</Box>
	)
}
