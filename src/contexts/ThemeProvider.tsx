'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, cookieStorageManager } from '@chakra-ui/react'

import theme from '@/styles/'

import type { PropsWithChildren } from 'react'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<>
			<ColorModeScript type='cookie' nonce='testing' />
			<CacheProvider>
				<ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
					{children}
				</ChakraProvider>
			</CacheProvider>
		</>
	)
}
