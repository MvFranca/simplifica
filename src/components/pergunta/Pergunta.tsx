import IconClose from "../icons/IconClose";

import styles from "../../styles/Pergunta.module.css";
import { Link} from "react-router-dom";
import OpcoesPergunta from "./opcoesPergunta";
import { useEffect, useRef, useState } from "react";
import Acertos from "../acertos/Acertos";
import { dados } from "../../types/dados";


type props = {
  assunto: Array<dados>;
  totalQuestions: number;
};

const Pergunta = ({ assunto, totalQuestions }: props) => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [questoesRestantes] = useState(totalQuestions);
  const [Width, setWidth] = useState(10);
  const progresso = useRef<HTMLDivElement>(null);
  const alternativas = useRef<HTMLDivElement>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false)

  const resposta = {
    assinalada: "",
  };

  function progressBar() {
    const porcentagemPorQues = 100 / questoesRestantes;
    setWidth(Width + porcentagemPorQues);

    progresso.current!.style.width = `${Width}%`;
  }
  
  function Assinalada(veracidade: string) {
    resposta.assinalada = veracidade;

  }

  function confirmar() {
    if (resposta.assinalada == "t") {
        setAcertos(acertos + 1);
    }
    setPerguntaAtual(perguntaAtual + 1);
    progressBar();

  }

  function finalizar() {
    if (resposta.assinalada == "t") {
      setAcertos(acertos + 1);
    }
    progressBar();
    setTimeout(() => {
     setFim(true)
    }, 500);
  }

  useEffect(() => {
    progressBar();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  return (
    <section className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles.info}>
          <Link to={"/"}>
            <IconClose width={30} height={30} color="#000000" />
          </Link>
          <div className={styles.acertividade}>
            <div className={styles.acertos} ref={progresso}></div>
          </div>
        </div>

       { !fim ?   <div className={styles.perguntas}>
          <h2>{assunto[perguntaAtual].pergunta}</h2>
          <div className={styles.alternativas}>
      
            <p
              ref={alternativas}
              id="A"
              onClick={() =>
                Assinalada(assunto[perguntaAtual].questaoA.veracidade)
              }

            >
              A) {assunto[perguntaAtual].questaoA.texto}
            </p>

            <p
              id="B"
              ref={alternativas}
              onClick={() =>
                Assinalada(assunto[perguntaAtual].questaoB.veracidade)
              }
           
            >
              B) {assunto[perguntaAtual].questaoB.texto}
            </p>

            <p
              id="C"
              ref={alternativas}
              onClick={() =>
                Assinalada(assunto[perguntaAtual].questaoC.veracidade)
              }
            >
              C) {assunto[perguntaAtual].questaoC.texto}
            </p>

            <p
              id="D"
              ref={alternativas}
              onClick={() =>
                Assinalada(assunto[perguntaAtual].questaoD.veracidade)
              }
            >
              D) {assunto[perguntaAtual].questaoD.texto}
            </p>
          </div>
        </div>
      :
      
      <Acertos
      acertos = {acertos}
      quantidadeQuestoes = {totalQuestions}
      />
      } 
      
        <OpcoesPergunta
          confirmar={confirmar}
          perguntaAtual={perguntaAtual}
          assunto={assunto}
          finalizar={finalizar}
          fim = {fim}
        />
      </div>
    </section>
  );
};

export default Pergunta;
