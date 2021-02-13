import Head from 'next/head'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { light } from '../styles/themes/light';
import Layout from '../src/components/Layout';


function MyApp({ Component, pageProps }) {
  const theme = light;
  return (
    <>
      <Head>
        <title>Notes app</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp
