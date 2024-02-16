import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  padding: 15px;
  text-align: center;
  height: 4rem;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 100%;
    max-width: 230px;
    margin-top: -5px;
  }

  div {
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 10px;
    }

    div {
      margin-top: 10px;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Dosis";
  transition: color 0.3s ease;
  padding: 10px;

  &:hover {
    color: #6a006a;
  }

  @media screen and (max-width: 768px) {
    margin: 5px 0;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0;
  }
`;
