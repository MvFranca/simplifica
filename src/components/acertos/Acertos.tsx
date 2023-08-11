import styles from '../../styles/Acertos.module.css'

type props = {
    acertos: number;
    quantidadeQuestoes: number
}

const Acertos = ({acertos, quantidadeQuestoes}: props) => {
    return ( 
        <div className={styles.container}>
            <h1>QUIZ FINALIZADO</h1>
          
            <div className={styles.dados}>
                <div className={styles.aproveitamento}>
                    <p>
                    Seu aproveitamento foi de: <strong>{acertos * 100/ quantidadeQuestoes}%</strong>
                    </p>
                </div>
                
                <div className={styles.numeros}>
                    <p className={styles.acertos}>
                        <strong> {acertos}</strong>
                    </p>
                    <div>
                        <p>
                            <span>ACERTOS DE </span><br />
                            <span><strong>{quantidadeQuestoes}</strong> POSSÍVEIS</span>
                        </p>
                    </div>
                </div>
            </div>
          
        </div>
     );
}
 
export default Acertos;