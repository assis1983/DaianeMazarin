import { useEffect, useState } from "react";
import { WhatsAppButtonWrapper } from "./style";
import Whats from "../../Image/whatsapp.png"


const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;

      setShowButton(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5518996832891", "_blank");
  };

  return (
    <>
      <WhatsAppButtonWrapper
        className={showButton ? "show" : "hide"}
        onClick={openWhatsApp}
      >
        <img src={Whats} alt="WhatsApp" />
      </WhatsAppButtonWrapper>
    </>
  );
};

export default WhatsAppButton;