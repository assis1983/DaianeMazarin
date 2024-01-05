import {
  Frase,
  StyleDivImages,
  StyleTreatments,
  ContainerImages,
  Images,
} from "./style";
import Body from "../../Image/service-01.jpg";
import Face from "../../Image/service-02.jpg";
import Nutrition from "../../Image/service-03.jpg";

const Treatments = () => {
  return (
    <>
      <StyleTreatments>
        Conheça <span>nossos Tratamentos</span>
      </StyleTreatments>
      <Frase>Tratramentos Corporais e Faciais</Frase>
      <ContainerImages>
        <StyleDivImages>
          <Images src={Body} />
          <div>
            <h4>Estética Corporal</h4>
          </div>
          <div className="text">
            <p>
              Na nossa clínica, dedicamo-nos a realçar a estética corporal de
              forma saudável e personalizada. Com abordagens inovadoras,
              promovemos a beleza interior e exterior, priorizando o bem-estar e
              a autoconfiança.
            </p>
          </div>
        </StyleDivImages>
        <StyleDivImages>
          <Images src={Face} />
          <div>
            <h4>Estética Facial</h4>
          </div>
          <div className="text">
            <p>
              Transforme sua beleza com a expertise da nossa clínica de estética
              facial. Oferecemos tratamentos personalizados que realçam sua
              luminosidade natural, promovendo uma pele saudável e radiante.
            </p>
          </div>
        </StyleDivImages>
        <StyleDivImages>
          <Images src={Nutrition} />
          <div>
            <h4>Emagrecimento</h4>
          </div>
          <div className="text">
            <p>
              Descubra o caminho para uma jornada de emagrecimento saudável em
              nossa clínica especializada. Com abordagem personalizada,
              oferecemos programas eficazes que visam não apenas a perda de
              peso, mas também o bem-estar geral. 
            </p>
          </div>
        </StyleDivImages>
      </ContainerImages>
    </>
  );
};

export default Treatments;
