import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    -webkit-transition: opacity 400ms;
    -moz-transition: opacity 400ms;
    transition: opacity 400ms;
    -webkit-font-smoothing: antialiased;
    background:  ${({ theme }) => `linear-gradient(15deg, ${theme.backgroundGradient1}, ${theme.backgroundGradient2})`};
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    margin: 0 auto;
    text-rendering: optimizeLegibility;
  }

  html{
    scroll-behavior: smooth;
  }

  #root{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    height: 100vh;
    margin: 0 auto;
  }
`;

