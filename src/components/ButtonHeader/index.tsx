import { StyledButtonMenu, StyledDivButton } from "./style";

const ButtonMenu = () => {

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };

  return (
    <StyledDivButton>
      <StyledButtonMenu onClick={openWhatsApp}>Agendar Avalliação</StyledButtonMenu>
    </StyledDivButton>
  );
};

export default ButtonMenu;
