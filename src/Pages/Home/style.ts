import styled from "styled-components";

export const StyleQuestion = styled.div`
  color: #eb92a3;
  background-color: #e6e6fa;
  padding-top: 20px;
  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const StyledImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #e6e6fa;
  margin-bottom: 20px;
  gap: 2%;

  img {
    width: 20%;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 30%;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 45%;
    }
  }
`;

export const StyledImagePerfil = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const StyleContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 50px;
`;
