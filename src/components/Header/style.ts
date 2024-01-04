import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #939; 
  color: #fff; 
  padding: 15px 0;
  text-align: center;
  height: 3.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1rem;
  font-family: 'Dosis';
  transition: color 0.3s ease;

  &:hover {
    color: #00a8cc; 
  }
`;