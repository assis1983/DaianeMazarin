import { Container } from "react-bootstrap";
import MyBanner from "../../components/Banner";
import WhatsAppButton from "../../components/ButtonWhatss";
import MyCarousel from "../../components/Carousel";
import MyFooter from "../../components/Footer";
import Header from "../../components/Header";
import Treatments from "../../components/Treatments";
import { ExperienceTrat } from "../Trataments/style";
import { StyleQuestion, StyledImages } from "./style";
import Acne from "../../Image/TRATAMENTO_ACNE.png";
import Reduction from "../../Image/REDU_O_DE.png";
import Rejuv from "../../Image/REJUVENESCIMENTO.png";
import Celult from "../../Image/CELULITE.png";
import ButtonAvaliation from "../../components/ButtonAvaliation";

function Home() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <MyBanner />
      <Treatments />
      <WhatsAppButton />
      <StyleQuestion>
        <Container>
          <p>Qual o seu objetivo?</p>
        </Container>
        <StyledImages>
          <img src={Acne} />
          <img src={Reduction} />
          <img src={Rejuv} />
          <img src={Celult} />
        </StyledImages>
      </StyleQuestion>

      <Container>
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
}

export default Home;
