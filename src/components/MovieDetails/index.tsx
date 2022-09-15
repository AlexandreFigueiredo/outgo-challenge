import { Rating } from '../Rating'
import styles from './styles.module.scss'

export function MovieDetails() {
    return (
        <div className={styles.movieDetails}>
            <div className={styles.movieHeader}>
                <h3 className={styles.movieTitle}>
                    {'Spiderman: No Way Home'}
                </h3>
                <Rating score={'9.3'} />
                <div className={styles.movieTags}>
                    {['action', 'adventure'].map((tag) => <span>{tag}</span>)}
                </div>
                <div className={styles.movieInformation}>
                    <div className={styles.informationWrapper}>
                        <h4 className={styles.informationTitle}>Length</h4>
                        <p className={styles.informationContent}>2h 28min</p>
                    </div>
                    <div className={styles.informationWrapper}>
                        <h4 className={styles.informationTitle}>Language</h4>
                        <p className={styles.informationContent}>English</p>
                    </div>
                    <div className={styles.informationWrapper}>
                        <h4 className={styles.informationTitle}>Rating</h4>
                        <p className={styles.informationContent}>PG-13</p>
                    </div>
                </div>
            </div>
            <div className={styles.movieDescription}>
                <h4 className={styles.descriptionTitle}>Description</h4>
                <p className={styles.descriptionContent}>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
            </div>
            <div className={styles.movieCast}>
                <h4 className={styles.castTitle}>Cast</h4>
            </div>
        </div>
    )
}