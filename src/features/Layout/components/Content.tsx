'use client'

import { Box } from '@chakra-ui/react'

import { Container } from '@/components/Container'

import type { PropsWithChildren } from 'react'

export const Content = ({ children }: PropsWithChildren) => {
	return (
		<Box as='main' pt={['0', '72px']} pb={['80px', '0']}>
			<Container>{children}</Container>
		</Box>
	)
}
