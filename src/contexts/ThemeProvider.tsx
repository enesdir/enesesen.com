import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import { ReactNode } from 'react'

import customTheme from '@styles/customTheme'

interface ThemeProviderProps {
  cookies?: string
  children: ReactNode
}

export function ThemeProvider({ children, cookies }: ThemeProviderProps) {
  return (
    <ChakraProvider
      resetCSS
      colorModeManager={cookies ? cookieStorageManager(cookies) : localStorageManager}
      theme={customTheme}
    >
      {children}
    </ChakraProvider>
  )
}
export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>

export function getServerSideProps({ req }: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
