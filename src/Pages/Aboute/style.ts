import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  .color-agenda {
    color: #eb92a3;
    font-weight: bold;
  }
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
  margin-top: 80px;
`;

export const StyleTextAbout = styled.div`
  display: flex;
  gap: 100px;
  text-align: justify;
  font-size: 1.2rem;
  p {
    color: #8b008b; 

  }
  span {
    &:first-child {
      color: #eb92a3;
      font-weight: bold;
    }
 
`;

export const StyleDesck = styled.img`
  height: 350px;
  border-radius: 20px;
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
  border-radius: 5px;
  width: 25rem;
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
    border-radius: 20px;
    border: 2px solid transparent;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border: 4px solid #eb92a3;
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

export const Experience = styled.div`
  display: flex;
  background-color: #e6e6fa;
  border-radius: 20px;
  img {
    border-radius: 20px;
  }
  .text {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    .anos {
      color: #eb92a3;
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 2rem;
    }
    h1 {
      font-size: 3rem;
      color: #8b008b;
    }

    .tecn {
      font-size: 1.2rem;
      color: #8b008b;
      margin-top: 2rem;
    }
    .satisfaction {
      font-size: 1rem;
      color: #8b008b;
    }

    h5 {
      font-size: 2rem;
      margin-top: 3rem;
      color: #8b008b;
    }
    
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6fa;
  color: #8b008b;
  height: 65rem;
  margin-bottom: 20px;
  h2 {
    font-size: 187.5%;
    line-height: 1.25;
    margin-top: 50px;
  }
  p {
    max-width: 800px;
    margin-top: 20px;
  }
  .testimony {
    font-style: italic;
    text-align: justify;
    font-size: 1.2rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 5px solid #eb92a3;
  margin-bottom: 10px;
  max-width: 800px;
  margin-top: 50px;
`;

export const NameClient = styled.div`
  margin-right: 400px;
  color: #333;
`;
