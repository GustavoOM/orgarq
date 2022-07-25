import {Envelope} from "phosphor-react"

import styles from './Sidebar.module.css'

import jardim from '../assets/jardim.jpg'
import sarita from '../assets/sarita.jpg'


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={jardim}/>
            <div className={styles.profile}>
                <img className={styles.avatar} src={sarita} alt="" />
                <strong className={styles.name}>Sarita Mazzini Bruschi</strong>
                <span>ICMC - USP São Carlos</span>
            </div>
            <div className={styles.email}>
                <Envelope size={20}/>
                sarita@icmc.usp.br

            </div> 
            <footer>
                <div className={styles.creator}>
                    <a href="https://github.com/GustavoOM"  target="_blank">desenvolvido por Gustavo Martins</a>
                </div>
            </footer>
        </aside>
    )
}