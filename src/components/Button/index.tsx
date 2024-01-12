import { Link } from "react-router-dom";
import { StyleButton } from "./style";

type Props = {
  text: string;
  to: string;
};

const Button = ({ text, to }: Props) => {
  return (
    <>
      <Link to={to}>
        <StyleButton>{text}</StyleButton>
      </Link>
    </>
  );
};

export default Button;
