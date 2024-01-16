import { OverlayTrigger, Popover } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Square = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Título do Popover</Popover.Header>
      <Popover.Body>
        Texto que será exibido quando o mouse passar por cima da imagem.
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
        <div>
           
        </div>
      </OverlayTrigger>
    </>
  );
};

export default Square;
