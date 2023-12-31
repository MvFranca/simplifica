import { useEffect, useState } from "react";
import Main from "./Main";
import Opcoes from "./Opcoes";
import styles from "../styles/TrilhaeInfo.module.css";
//import PopUp from "./popup/PopUp";

const TrilhaeInfo = () => {
  const [conteudos, setConteudos] = useState([]);

  async function api() {
    const conteudos = await fetch(
      "https://simplificaa.vercel.app/trilha/trilha.json"
    );
    const data = await conteudos.json();
    setConteudos(data);
  }


  useEffect(() => {
    api();
  }, []);

  return (
    <main className={styles.main}>
      {conteudos.map((assunto) => {
        const { conteudo, descricao, id, src } = assunto;
        return (
          <Main 
          conteudo={conteudo} 
          descricao={descricao}
          key={id}
          id={id} 
          src ={src}
          />
        );
      })}

      <Opcoes />
    </main>
  );
};

export default TrilhaeInfo;
