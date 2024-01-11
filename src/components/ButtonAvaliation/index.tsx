import { Link } from "react-router-dom";
import { StyleButtonAvaliation } from "./style";

type Props = {
  text: string;
  to: string;
};

const ButtonAvaliation = ({ text, to }: Props) => {
  return (
    <>
      <Link to={to}>
        <StyleButtonAvaliation type="button">{text}</StyleButtonAvaliation>
      </Link>
    </>
  );
};

export default ButtonAvaliation;
