
import styles from '../styles/Main.module.css'
import Botoes from './Botoes'

type props = {
    conteudo: string;
    descricao: string;
    id: string;
}

const Main = ({conteudo, descricao, id}: props) => {
    return(
        <main className={styles.container}>
            
            <div className={styles.titulo}>
                <h2>
                {conteudo}
                </h2>
                <p>
                {descricao}
                </p>
            </div>

            <div className={styles.containerBotoes}>

                <Botoes
                id ={id}
                />
                
                <img src={'/programador.png'} alt='programador' width={130} height={130}  className={styles.imagem}/>

            </div>
           
        </main>
    )
}

export default Main