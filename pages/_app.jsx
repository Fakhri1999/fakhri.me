import { ChakraProvider } from '@chakra-ui/react';
import { GoogleFonts } from 'next-google-fonts';

import '../styles/globals.css';
import Fonts from '../theme/fonts';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <GoogleFonts
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap'
        rel='stylesheet'
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
  // return <Component {...pageProps} />;
}

export default MyApp;
