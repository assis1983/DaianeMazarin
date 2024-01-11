import { Container } from "react-bootstrap";
import MyBanner from "../../components/Banner";
import WhatsAppButton from "../../components/ButtonWhatss";
import MyCarousel from "../../components/Carousel";
import MyFooter from "../../components/Footer";
import Header from "../../components/Header";
import Treatments from "../../components/Treatments";
import { ExperienceTrat } from "../Trataments/style";
import { StyleButtonAvaliation } from "../../components/ButtonAvaliation/style";
import { StyleQuestion, StyledImages } from "./style";
import Acne from "../../Image/TRATAMENTO_ACNE.png";
import Reduction from "../../Image/REDU_O_DE.png";
import Rejuv from "../../Image/REJUVENESCIMENTO.png";
import Celult from "../../Image/CELULITE.png";

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
          <StyleButtonAvaliation>
            CLIQUE AQUI PARA AVALIAR
          </StyleButtonAvaliation>
        </ExperienceTrat>
      </Container>
      <MyFooter />
    </div>
  );
}

export default Home;
