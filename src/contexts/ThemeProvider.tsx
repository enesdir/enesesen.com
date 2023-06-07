'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

import theme from '@/styles/'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</CacheProvider>
	)
}
