import { useEffect, useState } from 'react';
import { getCastByMovieId, ICast, IMG_URL } from '../../services/api';
import styles from './styles.module.scss'

interface ICastProps {
    movieId?: string;
}

export function Cast({movieId}: ICastProps) {

    const [cast, setCast] = useState<any>([])

    useEffect(() => {
        getCastByMovieId(movieId)
        .then(({cast}) => {
            setCast(cast.slice(0, 8))
        })
    }, [])

    return (
        <div className={styles.cast}>
            {cast &&
                cast.map((cast: ICast) => {
                    return (
                        <div className={styles.castCard} key={cast.id}>
                            {cast.profile_path ?
                                <img className={styles.castImg} src={`${IMG_URL}${cast.profile_path}`} alt={cast.name} /> :
                                <div className={styles.castImg}></div>
                            }
                            <h5 className={styles.castName}>{cast.name}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}