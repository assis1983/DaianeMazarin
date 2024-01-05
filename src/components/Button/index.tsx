import { StyleButton } from "./style";

const Button = () => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };
  return (
    <>
      <StyleButton onClick={openWhatsApp}>SAIBA MAIS </StyleButton>
    </>
  );
};

export default Button;
