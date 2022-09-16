import { useEffect, useState } from 'react';
import { getCastByMovieId, IMG_URL } from '../../services/api';
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
                cast.map((person: any, i: any) => {
                    return (
                        <div className={styles.castCard} key={i}>
                            {person.profile_path ?
                                <img className={styles.castImg} src={`${IMG_URL}${person.profile_path}`} alt={person.name} /> :
                                <div className={styles.castImg}></div>
                            }
                            <h5 className={styles.castName}>{person.name}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}