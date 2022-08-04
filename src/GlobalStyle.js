import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  h3,h4 {
    font-weight: bold;
  }
`

export default GlobalStyle;