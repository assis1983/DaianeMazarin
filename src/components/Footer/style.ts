import styled from "styled-components";

export const Baseboard = styled.div`
  display: flex;
  justify-content: space-around;
  height: 20rem;
  background-color: #d8bfd8;

  .TitleSobre,
  .TitleNav,
  .TitleInfo {
    display: flex;
    flex-direction: column;
    color: #8b008b;
    margin: 0;
    padding: 0;
    h1 {
      font-size: 1.2rem;
      margin-top: 10px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .TitleRedes {
    color: #8b008b;
    h1 {
      font-size: 1.2rem;
      margin-top: 10px;
    }
    a {
      text-decoration: none;
      color: inherit;
      margin-right: 20px;
    }
  }
`;
