import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import { light } from "../styles/themes/light";
import Layout from "../src/components/Layout";
import { ModalProvider } from "styled-react-modal";

function MyApp({ Component, pageProps }) {
  const theme = light;
  return (
    <>
      <Head>
        <title>Notes app</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
