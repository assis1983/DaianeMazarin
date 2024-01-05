import styled from "styled-components";

export const StyledDivButton = styled.div`
  margin-left: 50px;
`;

export const StyledButtonMenu = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: none;
  color: #8B008B;
  background-color: #e6e6fa;
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    color: #00a8cc;
    transform: scale(1.1);
  }
`;
