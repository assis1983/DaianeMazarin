import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/Aboute/index"
import Tratamentos from "../Pages/Trataments";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tratamentos" element={<Tratamentos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
