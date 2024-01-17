import { Container } from "react-bootstrap";
import WhatsAppButton from "../../components/ButtonWhatss";
import MyCarousel from "../../components/Carousel";
import MyFooter from "../../components/Footer";
import Header from "../../components/Header";
import Treatments from "../../components/Treatments";
import { ExperienceTrat } from "../Trataments/style";
import { StyleContainer, StyleQuestion, StyledImagePerfil, StyledImages } from "./style";
import Acne from "../../Image/TRATAMENTO_ACNE.png";
import Reduction from "../../Image/REDU_O_DE.png";
import Rejuv from "../../Image/REJUVENESCIMENTO.png";
import Celult from "../../Image/CELULITE.png";
import ButtonAvaliation from "../../components/ButtonAvaliation";
import { Experience } from "../Aboute/style";
import Perfil from "../../Image/perfil.png";
import Button from "../../components/Button";

function Home() {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };
  return (
    <div>
      <Header />
      <MyCarousel />
      <Container>
        <StyleContainer>
          <Experience>
            <StyledImagePerfil className="perfil" src={Perfil} />
            <div className="text">
              <p className="anos">5 + ANOS DE EXPERIÊNCIA</p>
              <h1>Referência em estética, atendimento e bem estar</h1>
              
              <h5>Time de Elite</h5>
              <p className=" satisfaction">
                Apostamos na escolha, a dedo, do melhor time de profissionais.
                Desde as funções básicas aos especialistas, nossa equipe
                trabalhará empenhada em tornar sua experiência um momento de
                intensa satisfação.
              </p>
              <Button text={"AGENDAR AVALIAÇÃO"} to={""} onClick={openWhatsApp}/>
            </div>
           
          </Experience>
          
        </StyleContainer>
      </Container>
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
