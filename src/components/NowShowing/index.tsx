import styles from './styles.module.scss'

export function NowShowing() {
    return (
        <div className={styles.nowShowingContainer}>
            <h2 className={styles.nowShowingTitle}>Now Showing</h2>
        </div>
    )
}