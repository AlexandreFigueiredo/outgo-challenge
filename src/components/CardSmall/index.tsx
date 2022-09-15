import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

interface CardSmallProps {
    id: number;
    imageUrl: string;
    title: string;
    rating: string;
    tags: string[];
    duration: string;
}

export function CardSmall(props: CardSmallProps) {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className={styles.cardSmall}>
                <div className={styles.cardImg}>
                    {props.imageUrl}
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                        {props.title}
                    </h3>
                    <div className={styles.cardRating}>
                        <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                        <span>{props.rating}/10 TMDB</span>
                    </div>
                    <div className={styles.cardTags}>
                        {props.tags.map((tag) => <span>{tag}</span>)}
                    </div>
                    <div className={styles.cardDuration}>
                        <img className={styles.cardDurationIcon} src="/images/icon-duration.png" alt="Duração" />
                        <span>{props.duration}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}