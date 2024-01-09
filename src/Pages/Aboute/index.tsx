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
        <p>AGENDE JÁ SUA AVALIAÇÃO!</p>
        <Button text={"AGENDE SUA CONSULTA"} />
        <Images>
          <Highlight
            src={Sala}
            alt="Sala"
            onClick={() => openModal(Sala)}
            style={{ opacity: inView ? 1 : 0, transition: "opacity 6s" }}
          />
          <Highlight
            src={Recep}
            alt="Recepção"
            onClick={() => openModal(Recep)}
            style={{ opacity: inView ? 1 : 0, transition: "opacity 6s" }}
          />
          <Highlight
            src={Equipamento}
            alt="Equipamento"
            onClick={() => openModal(Equipamento)}
            style={{ opacity: inView ? 1 : 0, transition: "opacity 6s" }}
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
        <img src={ImagePrime} style={{ opacity: inView ? 1 : 0, transition: "opacity 6s" }}/>
      </Container>
      <MyFooter />
    </>
  );
};

export default About;
