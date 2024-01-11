import Header from "../../components/Header";
import MyFooter from "../../components/Footer";
import Treatments from "../../components/Treatments";
import { Container, Information } from "../Aboute/style";
import IconCheck from "../../assets/check";
import IconSquare from "../../assets/square";
import IconPeople from "../../assets/people";
import { ExperienceTrat, StyleTop } from "./style";
import { StyleButtonAvaliation } from "../../components/ButtonAvaliation/style";

const Tratamentos = () => {
  return (
    <>
      <Header />
      <StyleTop>
        <Treatments />
      </StyleTop>
      <Information>
        <div className="check">
          <div className="Icon">
            <IconCheck />
          </div>
          <p>6 anos de experiência</p>
          <p>
            Com 06 anos de dedicação ao setor de estética, nosso estabelecimento
            é reconhecido como um dos mais experientes e competentes da região.
          </p>
        </div>
        <div className="check">
          <div className="Icon">
            <IconSquare />
          </div>
          <p>Melhores e mais modernas tecnologias</p>
          <p>
            Para garantir os melhores resultados em nossos tratamentos,
            investimos constantemente em tecnologias avançadas e de alta
            qualidade.
          </p>
        </div>
        <div className="check">
          <div className="Icon">
            <IconPeople />
          </div>
          <p>Clientes Satisfeitos</p>
          <p>
            A satisfação dos nossos clientes é a nossa prioridade. Por isso,
            trabalhamos com dedicação e profissionalismo para garantir
            resultados eficazes.
          </p>
        </div>
      </Information>
      <Container>
        <ExperienceTrat>
          <h5>Clientes Felizes</h5>
          <h1>Gostou da sua Experiência Conosco?</h1>
          <p>
            Valorizamos a opinião dos nossos clientes e estamos sempre buscando
            melhorar os nossos serviços. Para deixar a sua avaliação, basta
            clicar no botão abaixo
          </p>
          <StyleButtonAvaliation>
            CLIQUE AQUI PARA AVALIAR
          </StyleButtonAvaliation>
        </ExperienceTrat>
      </Container>
      <MyFooter />
    </>
  );
};

export default Tratamentos;
