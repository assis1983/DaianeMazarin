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
  flex-direction: column;
  gap: 2%;
  text-align: justify;
  font-size: 1rem;
  p {
    color: #8b008b;
  }
  span {
    &:first-child {
      color: #eb92a3;
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }

  @media only screen and (min-width: 1024px) {
    gap: 100px;
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

  @media screen and (max-width: 800px) {
    flex-direction: column; 
    align-items: center; 
    margin-top: 3rem; 
    gap: 1rem;
  }
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
  flex-wrap: wrap; 
  justify-content: space-around;
  min-height: 450px; 
  background-color: #e6e6fa;

  .check {
    width: calc(30% - 20px); 
    margin: 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
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

  @media screen and (max-width: 768px) {
    justify-content: center; 
    .check {
      width: calc(100% - 40px); 
    }
  }
`;


export const Experience = styled.div`
  display: flex;
  background-color: #e6e6fa;
  border-radius: 20px;

  img {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    .anos {
      color: #eb92a3;
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1rem;
    }

    h1 {
      font-size: 1.8rem;
      color: #8b008b;
      margin-top: 1rem;
    }

    .tecn {
      font-size: 1rem;
      color: #8b008b;
      margin-top: 1rem;
    }

    .satisfaction {
      font-size: 1rem;
      color: #8b008b;
      margin-bottom: 8rem;
    }

    h5 {
      font-size: 1.5rem;
      margin-top: 2rem;
      color: #8b008b;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 1rem;
    }

    .text {
      margin-left: 0;
      .anos,
      h1,
      .tecn,
      .satisfaction,
      h5 {
        text-align: center;
      }
    }
  }
`;


export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6fa;
  color: #8b008b;
  padding: 20px; 
  margin-bottom: 20px;

  h2 {
    font-size: 3rem; 
    margin-top: 2rem; 
    text-align: center; 
  }

  p {
    max-width: 90%; 
    margin-top: 1rem; 
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    height: auto; 
    padding: 10px; 
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
  margin-right: 5vw; 
  color: #333;

  @media screen and (max-width: 768px) {
    margin-right: 0; 
    margin-bottom: 10px; 
  }
`;
