import { Baseboard } from "./style";
import IconFace from "../../assets/facebook";
import IconInstagram from "../../assets/instagram";
import IconWhats from "../../assets/whats";

const MyFooter = () => {
  const linkInstagram = "https://www.instagram.com/daianemazarinestetica/";
  const linkFace =
    "https://www.facebook.com/daianemazarinestetica/?locale=pt_BR";
  const linkWhats = "https://api.whatsapp.com/send?phone=5518996832891";

  return (
    <>
      <Baseboard>
        <div className="TitleSobre">
          <h1>Sobre Nós</h1>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="LinkGit"
          />
        </div>
        <div className="TitleNav">
          <h1>Navegue</h1>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="LinkGit"
          />
        </div>
        <div className="TitleRedes">
          <h1>Redes Sociais</h1>

          <a href={linkFace} target="_blank">
            <IconFace />
          </a>
          <a href={linkInstagram} target="_blank">
            <IconInstagram />
          </a>
          <a href= { linkWhats } target="_blank">
            <IconWhats />
          </a>
        </div>
        <div className="TitleInfo">
          <h1>
            Horário de
            <br />
            Funcionamento
          </h1>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="LinkGit"
          />
        </div>
      </Baseboard>
      <p>&copy; {new Date().getFullYear()} Daiane Mazarin Estética Avançada</p>
    </>
  );
};

export default MyFooter;
