import { useEffect, useState } from "react";
import Main from "./Main";
import Opcoes from "./Opcoes";
import styles from "../styles/TrilhaeInfo.module.css";

const TrilhaeInfo = () => {
  const [conteudos, setConteudos] = useState([]);

  async function api() {
    const conteudos = await fetch(
      "https://clone-duolingo.vercel.app/trilha/trilha.json"
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
        const { conteudo, descricao, id } = assunto;
        return (
          <Main 
          conteudo={conteudo} 
          descricao={descricao}
          key={id}
          id={id} />
        );
      })}

      <Opcoes />
    </main>
  );
};

export default TrilhaeInfo;
