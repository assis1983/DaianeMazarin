import styled from "styled-components";

export const StyleBody = styled.div`
  display: flex;
  background-color: #e6e6fa;
  .title {
    text-align: justify;
    margin-left: 60px;
    margin-right: 20px;
    font-size: 35px;
    font-weight: bold;
    line-height: 1.2em;
    color: #8b008b;
  }
  .frase {
    text-align: justify;
    margin-left: 60px;
    margin-right: 20px;
    font-size: 1.2rem;
    line-height: 1.5em;
    color: #8b008b;
  }
`;

export const StyleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyleTextCenter = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 150px;
  color: #8b008b;
`;
