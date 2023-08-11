import IconDiamond from "./icons/IconDiamond"
import IconFire from "./icons/IconFire"
import styles from '../styles/MenuTopo/MenuTopo.module.css'

const MenuTopo = ( ) => {
    return(
        <div className={styles.container}>
            <h1>
                SIMPLIFICA
            </h1>
           <div>
               <IconFire width={23} height={23} color="#00000045"/>
               <p>
                0
               </p>
           </div>
           <div>
               <IconDiamond width={23} height={23} color="rgb(255, 0, 0)"/>
               <p>
                2
               </p>
           </div>
        </div>
    )
}

export default MenuTopo