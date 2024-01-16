import Header from "../../components/Header";
import MyFooter from "../../components/Footer";
import { Container, StyledAre, TextAre } from "../Aboute/style";
import { StyleBody, StyleText, StyleTextCenter } from "./style";
import Body from "../../Image/service-01.jpg";
import Button from "../../components/Button";
import { StyleFlexCards } from "./style";
import { ExperienceTrat } from "../Trataments/style";
import ButtonAvaliation from "../../components/ButtonAvaliation";
import Card from "../../components/CardTest";
import IconCheckSquare from "../../assets/checksquare";
import Dots from "../../assets/dots";
import IconExcamation from "../../assets/exclamation";

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
              "Linhas visíveis na pele causadas pelo estiramento excessivo. Tratamentos incluem cremes tópicos, laser, microagulhamento, peelings ou terapia com luz. Resultados variam."
            }
            Image={
              <>
                <IconCheckSquare />
                <Dots />
              </>
            }
            title={"Estrias"}
            text={"Estrias"}
          />
          <Card
            popoverText={
              "A depilação é um procedimento estético que visa a remoção dos pelos indesejados do corpo. Existem diferentes métodos de depilação, como a depilação com cera quente ou fria, lâminas, cremes depilatórios, depilação a laser, entre outros. Cada método possui suas vantagens e desvantagens em termos de eficácia, duração dos resultados e desconforto durante o processo. "
            }
            Image={
              <>
                <IconCheckSquare />
                <Dots />
              </>
            }
            title={"Depilação"}
            text={"Depilação"}
          />
          <Card
            popoverText={
              "Acúmulo de gordura em áreas específicas do corpo. Tratamentos incluem exercícios cardiovasculares, treinamento de força, dieta equilibrada, criolipólise, tratamentos a laser, ultrassom focado, lipossucção ou tratamentos injetáveis."
            }
            Image={
              <>
                <IconCheckSquare />
                <Dots />
              </>
            }
            title={"Gordura Localizada"}
            text={"Gordura Localizada"}
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
    </div>
  );
};

export default BodyEsthetic;
