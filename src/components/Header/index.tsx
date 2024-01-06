import { HeaderContainer, Nav, NavLink } from "./style";
import ButtonMenu from "../ButtonHeader";


const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="#sobre">SOBRE</NavLink>
        <NavLink href="#servicos">TRATAMENTOS</NavLink>
        <NavLink href="#depoimentos">DEPOIMENTOS</NavLink>
        <NavLink href="#agendamento">AGENDAMENTO</NavLink>
        <NavLink href="#promocoes">PROMOÇÕES</NavLink>
        <NavLink href="#galeria">GALERIA</NavLink>
        <NavLink href="#contato">FALE CONOSCO</NavLink>
        <ButtonMenu />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
