import { Link } from 'react-router-dom'
import { Rating } from '../Rating';
import styles from './styles.module.scss'

interface CardLargeProps {
    id: number;
    imageUrl: string;
    title: string;
    rating: string;
}

export function CardLarge(props: CardLargeProps) {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className={styles.cardLarge}>
                <img src={`https://image.tmdb.org/t/p/original${props.imageUrl}`} className={styles.cardImg} />
                <h3 className={styles.cardTitle}>
                    {props.title}
                </h3>
                <Rating score={props.rating} />
            </div>
        </Link>
    )
}