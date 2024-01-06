import { Baseboard, Copyright } from "./style";
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
          <p>
            A Clínica Daiane Mazarin Estética Avançada fundada em 2013, oferece soluções de
            estética e nutrição unindo tecnologia e qualidade para atender às
            necessidades de cada paciente, com equipe altamente capacitada e
            equipamentos de última geração.
          </p>
        </div>
        <div className="TitleNav">
          <h1>Navegue</h1>
          <a href="#">
            <p>Inicio</p>
          </a>
          <a href="">
            <p>Quem Somos</p>
          </a>
          <a href="">
            <p>Serviços</p>
          </a>
          <a href="">
            <p>Contatos</p>
          </a>
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
          <a href={linkWhats} target="_blank">
            <IconWhats />
          </a>
          <div className="address">
            <p>Alameda Navarro de Andrade, 831</p>
            <p>Centro - Adamantina/SP</p>
            <p>CEP: 17800-000</p>
          </div>
        </div>
        <div className="TitleInfo">
          <h1>
            Horário de
            <br />
            Funcionamento
          </h1>
          <p>Seg - Sex: 08h - 20H</p>
          <p>Sábado: 08h - 12h</p>
        </div>
      </Baseboard>
      <Copyright>
        &copy; {new Date().getFullYear()} Daiane Mazarin Estética Avançada
      </Copyright>
    </>
  );
};

export default MyFooter;
