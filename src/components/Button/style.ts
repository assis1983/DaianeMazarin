import styled from "styled-components";

export const StyleButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #8b008b;
  background-color: #8b008b;
  transition: transform 0.3s ease;
  color: white;
  &:hover {
    background-color: #6a006a;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) {
    width: 250px;
    height: 60px;
  }
`;
