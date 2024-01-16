import Header from "../../components/Header";
import MyFooter from "../../components/Footer";
import { Container, StyledAre, TextAre } from "../Aboute/style";
import {
  StyleBody,
  StyleFlexCards,
  StyleText,
  StyleTextCenter,
} from "../BodyEsthetic/style";
import IconCheckSquare from "../../assets/checksquare";
import Dots from "../../assets/dots";
import IconExcamation from "../../assets/exclamation";
import ButtonAvaliation from "../../components/ButtonAvaliation";
import { ExperienceTrat } from "../Trataments/style";
import Face from "../../Image/img-01.jpg";
import Button from "../../components/Button";
import Card from "../../components/CardTest";

const Facial = () => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };

  return (
    <>
      <Header />
      <StyledAre>
        <TextAre>Estética Facial</TextAre>
      </StyledAre>
      <Container>
        <StyleBody>
          <img src={Face} />
          <StyleText>
            <p className="title">
              Oferecemos uma ampla gama de tratamentos para ajudar a melhorar a
              aparência e a saúde de sua pele.
            </p>
            <p className="frase">
              Nossos profissionais altamente treinados trabalham com as últimas
              técnicas e tecnologias para garantir resultados eficazes e
              duradouros. Temos um tratamento personalizado que atenderá às suas
              necessidades específicas.
            </p>
            <p className="frase">
              Nós estamos ansiosos para ajudá-lo a alcançar seus objetivos de
              beleza e saúde da pele!
            </p>
            <Button
              text={"AGENDE SUA CONSULTA"}
              to={""}
              onClick={openWhatsApp}
            />
          </StyleText>
        </StyleBody>
        <StyleTextCenter>
          <h1>
            <span>Conheça Todos nossos</span> Tratamentos
          </h1>
        </StyleTextCenter>
        <StyleFlexCards>
        <Card
            popoverText={
              "Acúmulo de gordura sob a pele, resultando em ondulações. Tratamentos incluem dieta saudável, exercícios, massagens, cremes tópicos e procedimentos estéticos como radiofrequência e terapia a vácuo. Resultados podem variar."
            }
            Image={
              <>
                <IconCheckSquare />
                <Dots />
              </>
            }
            title={"Celulite"}
            text={"Celulite"}
          />
          <Card
            popoverText={
              "Acúmulo de gordura sob a pele, resultando em ondulações. Tratamentos incluem dieta saudável, exercícios, massagens, cremes tópicos e procedimentos estéticos como radiofrequência e terapia a vácuo. Resultados podem variar."
            }
            Image={
              <>
                <IconCheckSquare />
                <Dots />
              </>
            }
            title={"Celulite"}
            text={"Celulite"}
          />
          <Card
            popoverText={
              "Acúmulo de gordura sob a pele, resultando em ondulações. Tratamentos incluem dieta saudável, exercícios, massagens, cremes tópicos e procedimentos estéticos como radiofrequência e terapia a vácuo. Resultados podem variar."
            }
            Image={
              <>
                <IconCheckSquare />
                <Dots />
              </>
            }
            title={"Celulite"}
            text={"Celulite"}
          />
          <Card
            popoverText={
              "Acúmulo de gordura sob a pele, resultando em ondulações. Tratamentos incluem dieta saudável, exercícios, massagens, cremes tópicos e procedimentos estéticos como radiofrequência e terapia a vácuo. Resultados podem variar."
            }
            Image={
              <>
                <IconCheckSquare />
                <Dots />
              </>
            }
            title={"Celulite"}
            text={"Celulite"}
          />
        </StyleFlexCards>
        <StyleTextCenter>
          <h1>
            <span>Nossos</span> Procedimentos
          </h1>
        </StyleTextCenter>
        <StyleFlexCards>
        <Card
            title={"Herus Hifu"}
            text={"Herus Hifu"}
            Image={
              <>
                <IconExcamation />
                <Dots />
              </>
            }
            popoverText={
              "O HerusHifu é uma ferramenta de tratamento de pele não invasiva. Usa energia de ultrassom micro e macro focado de alta intensidade para estimular a produção de colágeno na pele. O aparelho é projetado para tratar a flacidez facial e corporal, bem como rugas, linhas finas e outras imperfeições da pele."
            }
          />
          <Card
            title={"Herus Hifu"}
            text={"Herus Hifu"}
            Image={
              <>
                <IconExcamation />
                <Dots />
              </>
            }
            popoverText={
              "O HerusHifu é uma ferramenta de tratamento de pele não invasiva. Usa energia de ultrassom micro e macro focado de alta intensidade para estimular a produção de colágeno na pele. O aparelho é projetado para tratar a flacidez facial e corporal, bem como rugas, linhas finas e outras imperfeições da pele."
            }
          />
          <Card
            title={"Herus Hifu"}
            text={"Herus Hifu"}
            Image={
              <>
                <IconExcamation />
                <Dots />
              </>
            }
            popoverText={
              "O HerusHifu é uma ferramenta de tratamento de pele não invasiva. Usa energia de ultrassom micro e macro focado de alta intensidade para estimular a produção de colágeno na pele. O aparelho é projetado para tratar a flacidez facial e corporal, bem como rugas, linhas finas e outras imperfeições da pele."
            }
          />
          <Card
            title={"Herus Hifu"}
            text={"Herus Hifu"}
            Image={
              <>
                <IconExcamation />
                <Dots />
              </>
            }
            popoverText={
              "O HerusHifu é uma ferramenta de tratamento de pele não invasiva. Usa energia de ultrassom micro e macro focado de alta intensidade para estimular a produção de colágeno na pele. O aparelho é projetado para tratar a flacidez facial e corporal, bem como rugas, linhas finas e outras imperfeições da pele."
            }
          />
        </StyleFlexCards>
        <ExperienceTrat>
          <h5>Clientes Felizes</h5>
          <h1>Gostou da sua Experiência Conosco?</h1>
          <p>
            Valorizamos a opinião dos nossos clientes e estamos sempre buscando
            melhorar os nossos serviços. Para deixar a sua avaliação, basta
            clicar no botão abaixo
          </p>
          <ButtonAvaliation text={"CLIQUE AQUI PARA AVALIAR"} to={"/contact"} />
        </ExperienceTrat>
      </Container>
      <MyFooter />
    </>
  );
};

export default Facial;
