import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0 auto;
    width: 360px;
    height: 720px;
  }
`;

export default GlobalStyle;