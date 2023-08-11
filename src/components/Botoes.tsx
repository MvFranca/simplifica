import styles from "../styles/Botoes.module.css";
import IconPlayFill from "./icons/IconPlay";
import { Link } from "react-router-dom";

type props = {
  id: string;
}

const Botoes = ({id}: props) => {
  return (
    <div className={styles.botoes}>

      <Link to={`/jogar/${id}`} className={styles.botao}>
        <IconPlayFill width={30} height={30} />
      </Link>

      <div className={styles.botao} id={styles.poucoCurvado}>
        <img src="./livro.png" alt="Livro" />
      </div>

      <div className={styles.botao} id={styles.muitoCurvado}>
        <img src="./cerebro.png" alt="Cérebro" />
      </div>

      <div className={styles.botao} id={styles.poucoCurvado}>
        <img src="./bau.png" alt="Baú" />
      </div>
      
      <div className={styles.botao}>
        <img src="./livro.png" alt="Livro" />
      </div>

      <div className={styles.botao}>
        <img src="./trofeu.png" alt="Troféu" />
      </div>
      
    </div>
  );
};

export default Botoes;
