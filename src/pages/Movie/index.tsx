import { useParams } from 'react-router-dom'
import { MovieHeader } from "../../components/MovieHeader";
import styles from './styles.module.scss'

export function Movie() {
    const { movieID } = useParams();

    return (
        <>
            <header className={styles.movieHeaderWrapper}>
                <MovieHeader />
                <div className={styles.playButton}>
                    <img src="/images/play-button.png" alt="Play" />
                    <p>Play Trailer {movieID}</p>
                </div>
            </header>
            <div className={styles.cardDetails}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>
                        {'Spiderman: No Way Home'}
                    </h3>
                    <div className={styles.cardRating}>
                        <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                        <span>{'9.7'}/10 TMDB</span>
                    </div>
                    <div className={styles.cardTags}>
                        {['action', 'adventure'].map((tag) => <span>{tag}</span>)}
                    </div>
                    <div className={styles.cardInformation}>
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
                <div className={styles.cardDescription}>
                    <h4 className={styles.descriptionTitle}>Description</h4>
                    <p className={styles.descriptionContent}>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
                </div>
                <div className={styles.cardCast}>
                    <h4 className={styles.castTitle}>Cast</h4>
                </div>
            </div>
        </>
    )
}