import styled from "styled-components";

export const StyledCard = styled.div`
  width: 295px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  background-color: #8b008b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  p {
    color: white;
    font-size: 1.5rem;
  }

  &:hover {
    border: 6px solid #eb92a3;
  }

  transition: border 0.3s ease-in-out;

  
`;
