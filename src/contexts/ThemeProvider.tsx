import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { ReactNode } from 'react';

import customTheme from '@/styles/customTheme';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ChakraProvider resetCSS colorModeManager={localStorageManager} theme={customTheme}>
      {children}
    </ChakraProvider>
  );
}
