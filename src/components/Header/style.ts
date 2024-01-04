import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: #A9A9A9; 
  padding: 15px 0;
  text-align: center;
  height: 4rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #A9A9A9;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Dosis';
  border-right: 1px solid #ccc; 
  padding-right: 25px;  
  transition: color 0.3s ease;

  &:hover {
    color: #00a8cc; 
  }
`;