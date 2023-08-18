import { BrowserRouter, Route, Routes } from "react-router-dom";

import Jogar from "../pages/jogar/Jogar";
import Home from "../pages/inicio/home";
import Aprender from "../pages/aprender/Aprender";

const RotasConteudos = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path={`/aprender/:id`} element={<Aprender/>}/>     
          <Route path={`/jogar/:id`} element={<Jogar />} />   
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RotasConteudos;
