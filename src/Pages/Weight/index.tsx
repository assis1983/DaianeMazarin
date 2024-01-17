import MyFooter from "../../components/Footer";
import Header from "../../components/Header";
import { Container, StyledAre, TextAre } from "../Aboute/style";
import Emagrecimento from "../../Image/service-03.jpg";
import Dots from "../../assets/dots";
import ButtonAvaliation from "../../components/ButtonAvaliation";
import {
  StyleBody,
  StyleText,
  StyleTextCenter,
  StyleFlexCards,
} from "../BodyEsthetic/style";
import { ExperienceTrat } from "../Trataments/style";
import Button from "../../components/Button";
import Card from "../../components/Card";
import IconExcamation from "../../assets/exclamation";

const Weight = () => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };
  return (
    <>
      <Header />
      <StyledAre>
        <TextAre>Emagrecimento</TextAre>
      </StyledAre>
      <Container>
        <StyleBody>
          <img src={Emagrecimento} />
          <StyleText>
            <p className="title">Mais saúde e mais qualidade de vida</p>
            <p className="frase">
              Nossa equipe de nutricionistas altamente qualificados está pronta
              para ajudá-lo a alcançar seus objetivos de saúde, sejam eles perda
              de peso, ganho de massa muscular, controle de doenças crônicas ou
              simplesmente melhora da sua qualidade de vida.
            </p>
            <p className="frase">
              Oferecemos suporte continuado para garantir que você mantenha seu
              progresso e alcance seus objetivos de forma sustentável.
            </p>
            <p className="frase">
              Não importa o seu objetivo, nós estamos aqui para ajudá-lo. Entre
              em contato conosco para agendar uma consulta
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

export default Weight;
