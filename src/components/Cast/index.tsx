import { useEffect, useState } from 'react';
import { getCastByMovieId } from '../../services/api';
import styles from './styles.module.scss'

interface ICastProps {
    movieId: string;
}

//@TODO - Ajustar tipagem do cast, adicionar botão de salvar, adicionar link para o trailer, adicionar loadings, verificar performaces

export function Cast({movieId}: ICastProps) {

    const [cast, setCast] = useState<any>([])

    useEffect(() => {
        getCastByMovieId(movieId)
        .then(({cast}) => {
            setCast(cast)
        })

        console.log(cast);
    }, [])

    return (
        <div className={styles.cast}>
            {cast &&
                cast.map((person: any) => {
                    return (
                        <div className={styles.castCard}>
                            <img className={styles.castImg} src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt={person.name} />
                            <h5 className={styles.castName}>{person.name}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}