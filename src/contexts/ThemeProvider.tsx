import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';

import customTheme from '@/styles/customTheme';

export interface ThemeProviderProps {
  children: ReactNode;
  cookies?: string;
}

export const ThemeProvider = ({ children, cookies }: ThemeProviderProps) => {
  return (
    <ChakraProvider
      colorModeManager={typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager}
      theme={customTheme}
    >
      {children}
    </ChakraProvider>
  );
};

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>;
export function getServerSideProps({ req }: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
