import styles from './styles.module.scss'

export function NowShowing() {
    return (
        <div className={styles.nowShowingContainer}>
            <h2 className={styles.nowShowingTitle}>Now Showing</h2>

            <div className={styles.nowShowingList}>
                <div className={styles.carouselCard}>
                    <div className={styles.cardImg}></div>
                    <h3 className={styles.cardTitle}>Spiderman: No way home</h3>
                    <div className={styles.cardRating}>
                        <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                        <span>9.3/10</span>
                    </div>
                </div>
                <div className={styles.carouselCard}>
                    <div className={styles.cardImg}></div>
                    <h3 className={styles.cardTitle}>Spiderman: No way home</h3>
                    <div className={styles.cardRating}>
                        <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                        <span>9.3/10</span>
                    </div>
                </div>
                <div className={styles.carouselCard}>
                    <div className={styles.cardImg}></div>
                    <h3 className={styles.cardTitle}>Spiderman: No way home</h3>
                    <div className={styles.cardRating}>
                        <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                        <span>9.3/10</span>
                    </div>
                </div>
                <div className={styles.carouselCard}>
                    <div className={styles.cardImg}></div>
                    <h3 className={styles.cardTitle}>Spiderman: No way home</h3>
                    <div className={styles.cardRating}>
                        <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                        <span>9.3/10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}