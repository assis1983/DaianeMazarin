import { StyledButtonMenu } from "./style";

const ButtonMenu = () => {

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };

  return (
      <StyledButtonMenu onClick={openWhatsApp}>Agendar Avalliação</StyledButtonMenu>
  );
};

export default ButtonMenu;
