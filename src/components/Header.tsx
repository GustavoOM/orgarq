import styles from './Header.module.css'

import headerLogo from '../assets/logo.svg'


export function Header(){
    return(
        <header className={styles.header}>
            <img src={headerLogo} alt="Logo" />
            <strong>Materiais Educacionais - Organização e Arquitetura de Computadores (SSC0902)</strong>
        </header>
    )
}