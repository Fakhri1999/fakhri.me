import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Fonts from '../theme/fonts';
import theme from '../theme';
import * as ga from '../lib/ga';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>M Fakhri Imaduddin</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          property='og:title'
          content='M Fakhri Imaduddin'
          key='meta-title'
        />
        <meta
          property='og:description'
          content='M Fakhri Imaduddin Personal Web'
          key='meta-description'
        />
        <meta property='og:image' content='/images/profile.png' />
        <meta property='og:locale' content='id_ID' key='meta-locale' />
        <meta
          property='og:locale:alternate'
          content='en_US'
          key='meta-locale-alt'
        />
      </Head>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;