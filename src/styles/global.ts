import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Segoe UI", "Open Sans", sans-serif;
  }

  html, body, #__next {
    height: 100%
  }//uso em uma etapa expecifica, pagina.
`
export default GlobalStyles
