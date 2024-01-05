import styled from "styled-components";

export const Baseboard = styled.div`
  display: flex;
  justify-content: space-around;
  height: 15rem;
  background-color: #e6e6fa;

  .TitleSobre,
  .TitleNav,
  .TitleInfo {
    display: flex;
    flex-direction: column;
    color: #8b008b;
    margin: 0;
    padding: 0;
    h1 {
      font-size: 1.5rem;
      margin-top: 10px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    p {
      font-size: 1rem;
      &:hover {
        color: #00a8cc;
      }
    }
  }

  .TitleRedes {
    color: #8b008b;
    h1 {
      font-size: 1.5rem;
      margin-top: 10px;
    }
    a {
      text-decoration: none;
      color: inherit;
      margin-right: 20px;
    }
    p {
    }
  }

  .address {
    margin-top: 15px;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  background-color: #e6e6fa;
  color: #8b008b;
`;
