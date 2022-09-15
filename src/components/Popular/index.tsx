import styles from './styles.module.scss'

export function Popular() {
    return (
        <div className={styles.popularContainer}>
            <h2 className={styles.popularTitle}>Popular</h2>

            <div className={styles.popularList}>
                <div className={styles.popularCard}>
                    <div className={styles.cardImg}></div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Venom Let There Be Carnage</h3>
                        <div className={styles.cardRating}>
                            <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                            <span>9.3/10</span>
                        </div>
                        <div className={styles.cardTags}>
                            <span className={styles.tags}>Horror</span>
                            <span className={styles.tags}>Mistey</span>
                            <span className={styles.tags}>Thriller</span>
                        </div>
                        <div className={styles.cardDuration}>
                            <img className={styles.cardDurationIcon} src="/images/icon-duration.png" alt="Duração" />
                            <span>1h 47m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}