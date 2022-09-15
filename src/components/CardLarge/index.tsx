import styles from './styles.module.scss'

interface CardLargeProps {
    imageUrl: string;
    title: string;
    rating: string;
}

export function CardLarge(props: CardLargeProps) {
    return (
        <div className={styles.cardLarge}>
            <div className={styles.cardImg}>{props.imageUrl}</div>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <div className={styles.cardRating}>
                <img className={styles.cardRatingIcon} src="/images/icon-star.png" alt="Estrela" />
                <span>{props.rating}/10 TMDB</span>
            </div>
        </div>
    )
}