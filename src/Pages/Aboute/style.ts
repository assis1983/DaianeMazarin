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
  gap: 100px;
  text-align: justify;
  font-size: 1.2rem;
  span {
    &:first-child {
      color: #8b008b; 
    }
 
`;

export const StyleDesck = styled.img`
  height: 350px;
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

export const Experience = styled.div`
  display: flex;
  .text {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    .anos {
      color: #86162d;
      font-size: 1.5rem;
      font-weight: bold;
    }
    h1 {
      font-size: 3rem;
    }

    .tecn {
      font-size: 1.2rem;
      color: #696969;
      margin-top: 2rem;
    }
    .satisfaction {
      font-size: 1rem;
      color: #696969;
    }

    h5 {
      font-size: 2rem;
      margin-top: 3rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6fa;
  color: #8b008b;
  height: 80rem;
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
