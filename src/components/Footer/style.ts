import styled from "styled-components";

export const Baseboard = styled.div`
  display: flex;
  justify-content: space-around;
  height: 15rem;
  background-color: #e6e6fa;
  color: #8b008b;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .TitleInfo,
  .TitleNav,
  .TitleRedes,
  .address {
    display: flex;
    flex-direction: column;
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

  .TitleNav p {
    font-size: 1rem;
  }

  .TitleRedes a {
    margin-right: 20px;
  }

  .address h1 {
    color: #8b008b;
  }

  .icon {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .link {
    display: flex;
    gap: 5px;
    text-decoration: none;
    color: inherit;
  }
`;

export const Rede = styled.div`
  display: flex;
  flex-direction: column;
  color: #8b008b;

  .phone {
    margin-top: 20px;
    display: flex;
    algn-items: center;
  }
`;

export const Copyright = styled.div`
  height: 60px;
  text-align: center;
  background-color: #e6e6fa;
  color: #8b008b;

  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
    width: 100%;
  }
`;
