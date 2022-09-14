import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContent}>
            <img src="/images/icon-menu.png" alt="Menu" />
            <h1>FilmKu</h1>
            <img src="/images/icon-notif.png" alt="Notificações" />
        </header>
    )
}