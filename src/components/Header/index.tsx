import { HeaderContainer, Nav, NavLink } from "./style";
import ButtonMenu from "../ButtonHeader";
import Logo from "../../Image/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <div>
          <Link to={"/"} className="Link">
            <img src={Logo} />
          </Link>
        </div>
        <NavLink to={"/"}>INÍCIO</NavLink>
        <NavLink to={"/about"}>SOBRE</NavLink>
        <NavLink to={"/tratamentos"}>TRATAMENTOS</NavLink>
        <NavLink to={"/team"}>EQUIPE</NavLink>
        <NavLink to={""}>AGENDAMENTO</NavLink>
        <NavLink to={""}>PROMOÇÕES</NavLink>
        <NavLink to={"/contact"}>CONTATO</NavLink>
        <ButtonMenu />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
