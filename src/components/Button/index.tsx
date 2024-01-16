import { Link } from "react-router-dom";
import { StyleButton } from "./style";

type Props = {
  text: string;
  to: string;
  onClick: () => void;
};

const Button = ({ text, to, onClick }: Props) => {
  return (
    <>
      <Link to={to}>
        <StyleButton type="button" onClick={onClick}>{text}</StyleButton>
      </Link>
    </>
  );
};

export default Button;
