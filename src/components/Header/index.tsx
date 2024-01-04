import { HeaderContainer, Nav, NavLink } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="#sobre">SOBRE</NavLink>
        <NavLink href="#servicos">SERVIÇOS</NavLink>
        <NavLink href="#depoimentos">DEPOIMENTOS</NavLink>
        <NavLink href="#agendamento">AGENDAMENTO</NavLink>
        <NavLink href="#promocoes">PROMOÇÕES</NavLink>
        <NavLink href="#galeria">GALERIA</NavLink>
        <NavLink href="#contato">CONTATO</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
