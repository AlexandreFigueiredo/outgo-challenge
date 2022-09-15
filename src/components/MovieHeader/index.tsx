import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function MovieHeader() {
    return (
        <header className={styles.movieHeaderContent}>
            <Link to='/'><img src="/images/icon-back.png" alt="Voltar" /></Link>
            <img src="/images/icon-menu-dots.png" alt="Menu" />
        </header>
    )
}