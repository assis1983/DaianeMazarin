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
import Button from "../../components/Button";
import MyFooter from "../../components/Footer";
import { useState } from "react";

const About = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

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
        <StyleTextAbout>
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
          <Highlight src={Sala} alt="Sala" onClick={() => openModal(Sala)} />
          <Highlight
            src={Recep}
            alt="Recepção"
            onClick={() => openModal(Recep)}
          />
          <Highlight
            src={Equipamento}
            alt="Equipamento"
            onClick={() => openModal(Equipamento)}
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
        <div className="check"></div>
        <div className="check"></div>
        <div className="check"></div>
      </Information>
      <MyFooter />
    </>
  );
};

export default About;
