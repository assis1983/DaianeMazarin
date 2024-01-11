import MyFooter from "../../components/Footer";
import Header from "../../components/Header";

import { TextAre, StyledAre } from "../Aboute/style";
import { Form, StyleTitle } from "./style";
const Contact = () => {
  return (
    <>
      <Header />
      <StyledAre>
        <TextAre>Contato</TextAre>
      </StyledAre>
      <StyleTitle>
        <h1>Fale Conosco!</h1>
        <p>
          Estamos sempre prontos para atender às suas necessidades e esclarecer
          todas as suas dúvidas.
        </p>
      </StyleTitle>
      <Form>
        <input type="text" placeholder="Seu nome aqui" />
        <input type="email" placeholder="email@exemplo.com.br" />
        <input type="text" placeholder="Fone" />
        <input type="text" placeholder="Assunto" />
        <input
          className="message"
          type="text"
          placeholder="Escreva sua mensagem aqui"
        />
        <input className="button" type="submit" />
      </Form>

      <MyFooter />
    </>
  );
};

export default Contact;
