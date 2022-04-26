import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  input, button, body {
    font-family: ${({ theme }) => theme.font.family}, sans-serif;
    letter-spacing: 1px;
  }

  body {
    background: ${({ theme }) => theme.color.lightBackground};
  }

  :root {
    font-size: 60%;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
