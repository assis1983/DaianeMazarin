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
  }
`;

export const Frase = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #8b008b;
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  h4 {
    color: #8b008b;
    margin-top: 20px;
  }
`;

export const StyleDivImages = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 300px; 
  margin: 10px; 
  text-align: justify;

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const Images = styled.img`
  width: 100%;
  max-width: 300px; 
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    max-width: 100%; 
  }
`;
