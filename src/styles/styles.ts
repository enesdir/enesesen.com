import type { DeepPartial, Theme } from '@chakra-ui/react';

export const styles: DeepPartial<Theme['styles']> = {
  global: () => ({
    html: {
      bg: 'gray.700',
    },
    body: {
      color: 'gray.700',
      bg: 'gray.50',
      _dark: {
        color: 'whiteAlpha.900',
        bg: 'gray.900',
      },

      WebkitTapHighlightColor: 'transparent',
    },
  }),
};
