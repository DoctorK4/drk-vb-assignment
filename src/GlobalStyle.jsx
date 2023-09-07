import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    /* background-color: white; */
  }
  
  body {
    background-color: aqua;
    width: 360px;
    height: 720px;
  }
`;

export default GlobalStyle;