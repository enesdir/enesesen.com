'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, cookieStorageManager } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

import theme from '@/styles/'

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
