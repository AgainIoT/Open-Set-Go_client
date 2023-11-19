import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { COLOR } from '../styles/theme';
import GlobalStyle from '@/styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={COLOR}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
