// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Poppins', sans-serif;
//     margin: 0 auto;
//   }

//   @media screen and (max-width: 768px) {
//     body {
//       font-size: 14px;
//     }
//   }
// `;

// export default GlobalStyle;


import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0 auto;
    font-size: 16px; /* Tamanho de fonte padrão para telas maiores */
  }

  @media screen and (max-width: 1200px) {
    body {
      font-size: 14px; /* Reduz o tamanho de fonte para telas médias */
    }
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 12px; /* Reduz ainda mais o tamanho de fonte para telas menores */
    }
  }

  @media screen and (max-width: 480px) {
    body {
      font-size: 10px; /* Adapta o tamanho de fonte para dispositivos móveis */
    }
  }

  /* Adicione mais regras de mídia conforme necessário para outros tamanhos de tela */
`;

export default GlobalStyle;
