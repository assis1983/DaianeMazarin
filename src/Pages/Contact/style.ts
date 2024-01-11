import styled from "styled-components";

export const StyleTitle = styled.div`
    color: #8b008b;
    text-align: center;
    margin-top: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #8b008b;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: border-radius 0.1s ease;
  margin-bottom: 50px;
  &:hover {
    border-radius: 20px;
  }

  input {
    margin-bottom: 50px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #8b008b;
    background-color: #F5F5F5;
    &:focus {
      outline-color: #6a006a; 
      border-color: #6a006a;
    }
  }

  .message {
    border: 1px solid #8b008b;
    height: 5rem;
  }

  .button {
    padding: 10px;
    background-color: #8b008b;
    font-size: 20px;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 7rem;
    height: 3rem;
    margin: 0 auto;
    &:hover {
      background-color: #6a006a;
    }
  }
`;
