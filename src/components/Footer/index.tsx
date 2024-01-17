import { Baseboard, Copyright, Rede } from "./style";
import IconFace from "../../assets/facebook";
import IconInstagram from "../../assets/instagram";
import IconWhats from "../../assets/whats";
import { Link } from "react-router-dom";
import IconMap from "../../assets/local";
import IconHome from "../../assets/home";
import IconPhone from "../../assets/phone";

const MyFooter = () => {
  const linkInstagram = "https://www.instagram.com/daianemazarinestetica/";
  const linkFace =
    "https://www.facebook.com/daianemazarinestetica/?locale=pt_BR";
  const linkWhats = "https://api.whatsapp.com/send?phone=5518996832891";

  const openMap =
    "https://www.google.com.br/maps/place/Daiane+Mazarin+Est%C3%A9tica+Avan%C3%A7ada/@-21.683331,-51.0724633,809m/data=!3m1!1e3!4m6!3m5!1s0x9496a3970c1fa99f:0xac1ee74e43087712!8m2!3d-21.6835606!4d-51.0741371!16s%2Fg%2F11fk8zqtw9?entry=ttu";

  return (
    <>
      <Baseboard>
        <div className="TitleNav">
          <h1>Navegue</h1>
          <Link to={"/"}>
            <p>Inicio</p>
          </Link>
          <Link to={"/about"}>
            <p>Quem Somos</p>
          </Link>
          <a href="">
            <p>Serviços</p>
          </a>
          <Link to={"/contact"}>
            <p>Contatos</p>
          </Link>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="LinkGit"
          />
        </div>
        <Rede>
          <div className="TitleRedes">
            <h1>Redes Sociais</h1>

            <a href={linkFace} target="_blank">
              <IconFace />
            </a>
            <a href={linkInstagram} target="_blank">
              <IconInstagram />
            </a>
            <a href={linkWhats} target="_blank">
              <IconWhats />
            </a>
          </div>
          <p className="phone">
            <IconPhone />
            (18)99797-4147
          </p>
        </Rede>

        <div className="TitleInfo">
          <h1>
            Horário de
            <br />
            Funcionamento
          </h1>
          <p>Seg - Sex: 08h - 20H</p>
          <p>Sábado: 08h - 12h</p>
        </div>
        <div className="address">
          <h1>Mapa de Localização</h1>
          <a href={openMap} target="_blank" className="link">
            <IconMap />
            <p>Clique Aqui</p>
          </a>
          <p className="icon">
            <IconHome />
            Alameda Navarro de Andrade, 831
          </p>
          <p>Centro - Adamantina/SP</p>
          <p>CEP: 17800-000</p>
        </div>
      </Baseboard>
      <Copyright>
        &copy; {new Date().getFullYear()} Daiane Mazarin Estética Avançada
      </Copyright>
    </>
  );
};

export default MyFooter;
