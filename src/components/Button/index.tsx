import { StyleButton } from "./style";

type Props = {
  text: string;
}

const Button = ({ text }: Props) => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };
  return (
    <>
      <StyleButton onClick={openWhatsApp}>{text}</StyleButton>
    </>
  );
};

export default Button;
