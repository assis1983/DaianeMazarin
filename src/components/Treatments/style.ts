import styled from "styled-components";

export const StyleTreatments = styled.div`
    text-align: center;
    font-size: 2.5rem;
    color: #eb92a3;
    font-weight: bold;
    span {
        &:first-child {
          color: #8b008b; 
        }
    
`;

export const Frase = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #8b008b;
`;

export const ContainerImages = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  h4 {
    color: #8b008b;
    margin-top: 20px;
  }
  p {
    text-align: justify;
    color: #8b008b;
  }
  .text {
    max-width: 320px;
  }
`;

export const StyleDivImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Images = styled.img`
  width: 20rem;
`;
