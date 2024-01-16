import React, { useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { StyledCard } from "./style";

type CardProps = {
  title: string;
  text: string;
  Image: React.ReactNode;
  popoverText: string;
};

const Card = ({ Image, popoverText, title, text }: CardProps) => {
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setShowPopover(true);
    setTarget(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <StyledCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {Image}
      <p>{text}</p>

      <Overlay target={target} show={showPopover} placement="top">
        {(props) => (
          <Popover id="popover-basic" {...props}>
            <Popover.Header as="h3">{title}</Popover.Header>
            <Popover.Body>{popoverText}</Popover.Body>
          </Popover>
        )}
      </Overlay>
    </StyledCard>
  );
};

export default Card;
