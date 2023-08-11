import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import Jogar from "../pages/jogar/Jogar";

const RotasConteudos = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/jogar" element={<Jogar />} />
          <Route path={`/jogar/:id`} element={<Jogar/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RotasConteudos;
