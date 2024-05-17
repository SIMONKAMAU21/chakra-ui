import { extendTheme } from '@chakra-ui/react';

const Customtheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      },
    }),
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
    primary: {
      light: 'rgba(0, 0, 124, 1)',
      dark: 'gray.800',
    },
    accent: {
      light: 'orange.400',
      dark: 'teal.500',
    },
  },
});

export default Customtheme;
