import { HeaderContainer, Nav, NavLink } from "./style";
import ButtonMenu from "../ButtonHeader";
import Logo from "../../Image/logo.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
      <img src= {Logo} />

        <NavLink to={"/"}>INÍCIO</NavLink>
        <NavLink to={"/about"}>SOBRE</NavLink>
        <NavLink to={"/tratamentos"}>TRATAMENTOS</NavLink>
        <NavLink to={""}>DEPOIMENTOS</NavLink>
        <NavLink to={""}>AGENDAMENTO</NavLink>
        <NavLink to={""}>PROMOÇÕES</NavLink>
        <NavLink to={""}>FALE CONOSCO</NavLink>
        <ButtonMenu />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
