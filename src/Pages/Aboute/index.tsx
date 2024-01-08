import Header from "../../components/Header";
import {
  StyledAre,
  TextAre,
  StyleTextAbout,
  StyleDesck,
  Container,
  Images,
} from "./style";
import Desck from "../../Image/dm-27.jpg";
import Sala from "../../Image/sala.jpg"
import Recep from "../../Image/recep.jpg"
import Equipamento from "../../Image/aparelho.jpg"
import Button from "../../components/Button";

const About = () => {
  return (
    <>
      <Header />
      <StyledAre>
        <TextAre>Quem Somos</TextAre>
      </StyledAre>
      <Container>
        <StyleTextAbout>
          <p>
            A <span>CLÍNICA DAIANE MAZARIN ESTÉTICA AVANÇADA</span> iniciou as
            atividades em 2009, em sua primeira sede localizada no Lago Sul, com
            a ideia de unir estética e nutrição, às melhores tecnologias
            estética do mundo, com protocolos personalizados para cada cliente.
            Hoje contamos com 3 unidades em Brasilia e temos planos de expansão
            em breve. O nosso objetivo é oferecer o melhor tratamento após uma
            anamnese completa, aliando serviços médicos, nutricionais e
            estéticos. Damos muito valor ao bem estar e satisfação de cada
            cliente e por isso acompanhamos o seu resultado do início ao fim,
            além de prezarmos por um bom atendimento desde o primeiro contato.
            Nossa equipe conta com mais de 35 profissionais qualificados e 25
            salas de atendimento. Tudo isso para oferecer os melhores resultados
            e um acompanhamento eficaz, com qualidade e equipamentos de última
            geração. Agende a sua avaliação. Será um enorme prazer lhe atender
            também!!
          </p>
          <StyleDesck src={Desck} />
        </StyleTextAbout>
        <p>AGENDE JÁ SUA AVALIAÇÃO!</p>
        <Button text={"AGENDE SUA CONSULTA"} />
        <Images>
          <img src={Sala} />
          <img src={Recep} />
          <img src={Equipamento} />
        </Images>
      </Container>
    </>
  );
};

export default About;
