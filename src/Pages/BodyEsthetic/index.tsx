import Header from "../../components/Header";
import MyFooter from "../../components/Footer";
import { Container, StyledAre, TextAre } from "../Aboute/style";
import { StyleBody, StyleText, StyleTextCenter } from "./style";
import Body from "../../Image/service-01.jpg";
import Button from "../../components/Button";
import Cards from "../../components/Cards";

const BodyEsthetic = () => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };
  return (
    <div>
      <Header />
      <StyledAre>
        <TextAre>Estética Corporal</TextAre>
      </StyledAre>
      <Container>
        <StyleBody>
          <img src={Body} />
          <StyleText>
            <p className="title">
              Você está buscando um corpo mais saudável e atraente, mas não sabe
              por onde começar?
            </p>
            <p className="frase">
              Aqui, você encontrará tratamentos especializados e altamente
              eficazes para transformar seu corpo e aumentar sua autoestima.
            </p>
            <p className="frase">
              Nossos profissionais altamente capacitados utilizam técnicas
              inovadoras e tecnologias avançadas para garantir resultados
              incríveis.
            </p>
            <Button
              text={"AGENDE SUA CONSULTA"}
              to={""}
              onClick={openWhatsApp}
            />
          </StyleText>
        </StyleBody>
        <StyleTextCenter>
          <h1>Conheça Todos nossos Tratamentos</h1>
        </StyleTextCenter>
        <Cards />
      </Container>
      <MyFooter />
    </div>
  );
};

export default BodyEsthetic;
