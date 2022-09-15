import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Rating } from '../Rating';
import styles from './styles.module.scss'

interface CardSmallProps {
    id: number;
    imageUrl: string;
    title: string;
    rating: string;
}

interface ITag {
    id: number,
    name: string
}

export function CardSmall(props: CardSmallProps) {

    const [tags, setTags] = useState<ITag[]>([])
    const [runtime, setRuntime] = useState<number>(0)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=45d7491a8784c512d9adb5b759990897&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setTags(data.genres);
            setRuntime(data.runtime);
        })
    }, [])

    return (
        <Link to={`/movie/${props.id}`}>
            <div className={styles.cardSmall}>
                <img src={`https://image.tmdb.org/t/p/original${props.imageUrl}`} className={styles.cardImg} />
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                        {props.title}
                    </h3>
                    <Rating score={props.rating} />
                    <div className={styles.cardTags}>
                        {tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
                    </div>
                    <div className={styles.cardDuration}>
                        <img className={styles.cardDurationIcon} src="/images/icon-duration.png" alt="Duração" />
                        <span>{runtime}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}