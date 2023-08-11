import styles from '../../styles/opcoesPergunta.module.css'
import { Link } from 'react-router-dom';
import { dados } from '../../types/dados';

type props = {
    confirmar: () => void;
    perguntaAtual: number;
    assunto: Array<dados>;
    finalizar: () => void;
    fim: boolean
}

const OpcoesPergunta = ({confirmar, perguntaAtual, assunto, finalizar, fim}: props) => {


    return ( 
        <div className={styles.container}>
            <div className={styles.conteudo}>
                {!fim ? 
                <>
                    <div>
                        <a href="#">PULAR</a>
                    </div>
                    <div>
                        {
                            perguntaAtual <  assunto.length-1 ? <a onClick={confirmar}>CONFIRMAR</a> :  <a onClick={finalizar}>FINALIZAR</a>
                        }
                    
                    </div>
                </>
            :
            <div className={styles.sair}>
                <Link to={'/'}>
                SAIR
                </Link>
            </div>   
            }
                
            </div>
        </div>
     );
}
 
export default OpcoesPergunta;