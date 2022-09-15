import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { getGenresAndRuntimeByMovieId, ITag } from '../../services/api';
import { Rating } from '../Rating';
import styles from './styles.module.scss'

interface CardSmallProps {
    id: number;
    imageUrl: string;
    title: string;
    rating: string;
}

export function CardSmall({id, imageUrl, rating, title}: CardSmallProps) {

    const [tags, setTags] = useState<ITag[]>([])
    const [runtime, setRuntime] = useState<number>(0)

    useEffect(() => {
        getGenresAndRuntimeByMovieId(id)
        .then(({genres, runtime}) => {
            setTags(genres);
            setRuntime(runtime);
        })
    }, [])

    return (
        <Link to={`/movie/${id}`}>
            <div className={styles.cardSmall}>
                <img src={`https://image.tmdb.org/t/p/original${imageUrl}`} className={styles.cardImg} />
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                        {title}
                    </h3>
                    <Rating score={rating} />
                    <div className={styles.cardTags}>
                        {tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
                    </div>
                    <div className={styles.cardDuration}>
                        <img className={styles.cardDurationIcon} src="/images/icon-duration.png" alt="Duração" />
                        <span>{`${Math.floor(runtime / 60)}h ${runtime % 60}min`}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}