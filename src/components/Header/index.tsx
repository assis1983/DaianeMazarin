import { HeaderContainer, Nav, NavLink } from "./style";
import ButtonMenu from "../ButtonHeader";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to={"/about"}>SOBRE</NavLink>
        <NavLink to={""}>TRATAMENTOS</NavLink>
        <NavLink to={""}>DEPOIMENTOS</NavLink>
        <NavLink to={""}>AGENDAMENTO</NavLink>
        <NavLink to={""}>PROMOÇÕES</NavLink>
        <NavLink to={""}>GALERIA</NavLink>
        <NavLink to={""}>FALE CONOSCO</NavLink>
        <ButtonMenu />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
