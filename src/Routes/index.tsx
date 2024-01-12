import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/Aboute/index";
import Tratamentos from "../Pages/Trataments";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import BodyEsthetic from "../Pages/BodyEsthetic";
import Facial from "../Pages/Facial Aesthetics";
import Weight from "../Pages/Weight";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tratamentos" element={<Tratamentos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/esthetic" element={<BodyEsthetic />} />
          <Route path="/facial" element={<Facial />} />
          <Route path="/emagrecimento" element={<Weight />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
