import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
