import { createGlobalStyle } from "styled-components"
import colors from "utils/colors"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    font-size: 12px;

  }
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  body {
    background: ${colors.ui_100};
    color: ${colors.ui_900};
    font-family: "Spectral", serif;
    font-size: 2rem;
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5 ,h6 {
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5 ,h6, p, ul, li {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 6rem;
    font-weight: 800;
  }
  h2 {
    font-size: 4rem;
    font-weight: 400;
  }
  h3 {
    font-size: 3rem;
    font-weight:600;
  }
  h4 {
    font-size: 2rem;
    font-weight: 600;
  }
  h5 {
    font-size: 2rem;
  }
  .small {
    font-size: 1.334rem;
  }
`
