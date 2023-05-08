import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  variants: {
    link: () => ({
      borderColor: 'red.700',
      _dark: { borderColor: 'red.300' },
    }),
  },
};
