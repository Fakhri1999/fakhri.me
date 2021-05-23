import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import Fonts from '../theme/fonts';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
