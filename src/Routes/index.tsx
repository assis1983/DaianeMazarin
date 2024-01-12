import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/Aboute/index"
import Tratamentos from "../Pages/Trataments";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import BodyEsthetic from "../Pages/BodyEsthetic";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
