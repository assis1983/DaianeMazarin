import { useState } from "react";
import "../../style.scss";
import { motion } from "framer-motion";
import { StyledDivCards } from "./style";

type CardsProps = {
  text: string;
  Image: React.ReactNode;
};

const Cards = ({ text, Image }: CardsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      className="card"
      onClick={() => setIsOpen(!isOpen)}
      style={{ borderRadius: "1rem" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="card-top" layout="position">
        <StyledDivCards>
        {Image && Image}
          <h3>{text}</h3>
        </StyledDivCards>
      </motion.div>

      {isOpen && (
        <motion.div
          className="card-content"
          initial={{ clipPath: "circle(0% at 0 0)" }}
          animate={{ clipPath: "circle(140.9% at 0 0)" }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
        >
          <p className="text-white">
            Acúmulo de gordura sob a pele, resultando em ondulações. Tratamentos
            incluem dieta saudável, exercícios, massagens, cremes tópicos e
            procedimentos estéticos como radiofrequência e terapia a vácuo.
            Resultados podem variar.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Cards;
