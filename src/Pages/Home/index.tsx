import { Container } from "react-bootstrap";
import MyBanner from "../../components/Banner";
import WhatsAppButton from "../../components/ButtonWhatss";
import MyCarousel from "../../components/Carousel";
import MyFooter from "../../components/Footer";
import Header from "../../components/Header";
import Treatments from "../../components/Treatments";
import { ExperienceTrat } from "../Trataments/style";
import { StyleButtonAvaliation } from "../../components/ButtonAvaliation/style";

function Home() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <MyBanner />
      <Treatments />
      <WhatsAppButton />
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
