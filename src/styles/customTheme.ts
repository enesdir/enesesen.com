import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const body = `Jost,${defaultTheme.fonts.body}`;
const heading = `Jost,${defaultTheme.fonts.heading}`;
const mono = `Cousine,${defaultTheme.fonts.mono}`;

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.900')(props),
      },
    }),
  },
  // components: {},
  breakpoints,
  colors: {
    primary: {
      light: '#3182ce',
      dark: '#90cdf4',
      hover: '#ff5757',
    },
  },
  components: {
    Link: {
      variants: {
        link: (props) => ({
          borderColor: mode('red.700', 'red.300')(props),
        }),
      },
    },
  },
  fonts: {
    body,
    heading,
    mono,
  },
});

export default theme;
