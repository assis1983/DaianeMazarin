import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledAre = styled.div`
  background-color: #e6e6fa;
`;

export const TextAre = styled.div`
  font-size: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  color: #8b008b;
`;

export const StyleTextAbout = styled.div`
  display: flex;
  gap: 20px;
  text-align: justify;
  font-size: 1.2rem;
  span {
    &:first-child {
      color: #8b008b; 
    }
 
`;

export const StyleDesck = styled.img`
  width: 50%;
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  cursor: pointer;
  
`;

export const Highlight = styled.img`
  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const EnlargedImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-around;
  height: 550px;
  background-color: #e6e6fa;
  .check {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3%;
    width: 30%;
    height: 80%;
    background-color: #8b008b;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border: 2px solid #00bcd4;
    }
    p {
      max-width: 350px;
      color: white;
      text-align: justify;
      margin-top: 40px;
      font-size: 1.1rem;
    }
    .Icon {
      margin-top: 30px;
    }
  }

`;
