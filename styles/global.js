import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Rubik', sans-serif;
    background-color: ${({ theme }) => theme.mainBg};
    // Deixa branco no começo
    color: ${({ theme }) => theme.text};

    width: 1000px;

    @media screen and (max-width: 1024px) {
      width: 700px;
    }
    @media screen and (max-width: 800px) {
      width: 600px;
    }
    @media screen and (max-width: 600px) {
      width: 90vw;
    }
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;