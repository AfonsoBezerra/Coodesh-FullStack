import type { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global';
import FontStyles from '../components/fonts/FontStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <FontStyles >

        <Component {...pageProps} />

      </FontStyles>
    </>
  );
}

export default MyApp;