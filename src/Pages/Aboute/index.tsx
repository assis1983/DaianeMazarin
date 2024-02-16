import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "../../components/Header";
import {
  StyledAre,
  TextAre,
  StyleTextAbout,
  StyleDesck,
  Container,
  Images,
  EnlargedImage,
  Highlight,
  Information,
  Experience,
  Title,
  Line,
  NameClient,
} from "./style";
import Desck from "../../Image/dm-27.jpg";
import Sala from "../../Image/sala.jpg";
import Recep from "../../Image/recep.jpg";
import Equipamento from "../../Image/aparelho.jpg";
import ImagePrime from "../../Image/img-01.jpg";
import Button from "../../components/Button";
import MyFooter from "../../components/Footer";
import IconCheck from "../../assets/check";
import IconSquare from "../../assets/square";
import IconPeople from "../../assets/people";

const About = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  const openModal = (image: string) => {
    setEnlargedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setEnlargedImage(null);
    document.body.style.overflow = "auto";
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };

  return (
    <>
      <Header />
      <StyledAre>
        <TextAre>Quem Somos</TextAre>
      </StyledAre>
      <Container>
        <StyleTextAbout ref={ref}>
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
        <div>
          <p className="color-agenda">AGENDE JÁ SUA AVALIAÇÃO!</p>
          <Button text={"AGENDE SUA CONSULTA"} to={""} onClick={openWhatsApp} />
        </div>

        <Images>
          <Highlight
            src={Sala}
            alt="Sala"
            onClick={() => openModal(Sala)}
            style={{ opacity: inView ? 1 : 0, transition: "opacity 3s" }}
          />
          <Highlight
            src={Recep}
            alt="Recepção"
            onClick={() => openModal(Recep)}
            style={{ opacity: inView ? 1 : 0, transition: "opacity 3s" }}
          />
          <Highlight
            src={Equipamento}
            alt="Equipamento"
            onClick={() => openModal(Equipamento)}
            style={{ opacity: inView ? 1 : 0, transition: "opacity 3s" }}
          />
        </Images>
      </Container>
      {enlargedImage && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <EnlargedImage src={enlargedImage} alt="Ampliada" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
        <Experience>
          <img src={ImagePrime} className="prime" />
          <div className="text">
            <p className="anos">5 + ANOS DE EXPERIÊNCIA</p>
            <h1>Referência em estética, atendimento e bem estar</h1>
            <p className="tecn">
              Temos o que há de mais tecnológico para tratamentos faciais e
              corporais
            </p>
            <h5>Time de Elite</h5>
            <p className=" satisfaction">
              Apostamos na escolha, a dedo, do melhor time de profissionais.
              Desde as funções básicas aos especialistas, nossa equipe
              trabalhará empenhada em tornar sua experiência um momento de
              intensa satisfação.
            </p>
          </div>
        </Experience>
      </Container>
      <Title>
        <h2>DEPOIMENTOS DE CLIENTES</h2>
        <p>
          Os seus pontos de vista e percepções são importantes para nós. Ficamos
          muito satisfeitos quando nos dizem que podemos compartilhar esses de
          forma mais ampla e estamos orgulhosos de ser capaz de dar-lhes acesso
          a esses depoimentos.
        </p>
        <Line />
        <p className="testimony">
          " Ter uma única pessoa como um contato permanente contribui para uma
          relação de trabalho muito eficaz. Essa pessoa conhece a nossa empresa
          muito bem. Ele está conectado com os profissionais locais da Atradius,
          que têm expertise local e conhecem os procedimentos e regulamentos nos
          países onde trabalham."
        </p>
        <NameClient>Eder Roberto de Assis, Cliente de Emagrecimento</NameClient>

        <Line />
        <p className="testimony">
          "Temos trabalhado com Atradius Collections durante muitos anos
          recebendo casos locais e também de dívidas no exterior. Eles são uma
          parte vital do nosso negócio à medida que muitas vezes precisamos de
          seus conhecimentos e línguas locais para perseguir uma dívida que já
          não estamos mais recebendo nenhum retorno. "
        </p>
        <NameClient>
          Rafael Mazarin Oliveira, Cliente de Emagrecimento
        </NameClient>
        <Line />
        <p className="testimony">
          " Ter uma única pessoa como um contato permanente contribui para uma
          relação de trabalho muito eficaz. Essa pessoa conhece a nossa empresa
          muito bem. Ele está conectado com os profissionais locais da Atradius,
          que têm expertise local e conhecem os procedimentos e regulamentos nos
          países onde trabalham."
        </p>
        <NameClient>
          José Henrique Mazarin, Cliente de Estética Facial
        </NameClient>
      </Title>

      <MyFooter />
    </>
  );
};

export default About;
