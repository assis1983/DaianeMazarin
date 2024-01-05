import styled from "styled-components";

export const StyleButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #8b008b;
  background-color: #e6e6fa;
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    color: #00a8cc;
    transform: scale(1.1);
  }
`;
