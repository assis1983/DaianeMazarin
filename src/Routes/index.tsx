import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/Aboute";

const Rotas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
    
  );
};

export default Rotas;
