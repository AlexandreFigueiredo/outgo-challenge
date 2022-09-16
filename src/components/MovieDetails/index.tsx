import { ITag } from '../../services/api';
import { Cast } from '../Cast';
import { Rating } from '../Rating'
import styles from './styles.module.scss'

interface IMovieDetailsProps {
    id?: string;
    title: string;
    rating: number;
    tags: ITag[];
    duration: number;
    description: string;
    language: string;
}

export function MovieDetails({ 
    id,
    title,
    rating,
    tags,
    duration,
    description,
    language
}: IMovieDetailsProps) {

    return (
        <div className={styles.movieDetails}>
            <div className={styles.movieHeader}>
                <h3 className={styles.movieTitle}>
                    {title}
                </h3>
                <Rating score={rating} />
                <div className={styles.movieTags}>
                    {tags &&
                        tags.map((tag) => <span key={tag.id}>{tag.name}</span>)
                    }
                </div>
                <div className={styles.movieInformation}>
                    <div className={styles.informationWrapper}>
                        <h4 className={styles.informationTitle}>Length</h4>
                        <p className={styles.informationContent}>{`${Math.floor(duration / 60)}h ${duration % 60}min`}</p>
                    </div>
                    <div className={styles.informationWrapper}>
                        <h4 className={styles.informationTitle}>Language</h4>
                        {language &&
                            <p className={styles.informationContent}>{language.toUpperCase()}</p>
                        }
                    </div>
                    <div className={styles.informationWrapper}>
                        <h4 className={styles.informationTitle}>Rating</h4>
                        <p className={styles.informationContent}>{rating}</p>
                    </div>
                </div>
            </div>
            <div className={styles.movieDescription}>
                <h4 className={styles.descriptionTitle}>Description</h4>
                <p className={styles.descriptionContent}>{description}</p>
            </div>
            <div className={styles.movieCast}>
                <h4 className={styles.castTitle}>Cast</h4>
                <div className={styles.castList}>
                    <Cast movieId={id} />
                </div>
            </div>
        </div>
    )
}