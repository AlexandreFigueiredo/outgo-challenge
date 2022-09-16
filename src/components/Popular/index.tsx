import { useEffect, useState } from 'react'
import { getPopularMovies, IMovie } from '../../services/api'
import { CardSmall } from '../CardSmall'
import styles from './styles.module.scss'

export function Popular() {

    const [movies, setMovies] = useState<IMovie[]>([])
    
    useEffect(()=>{
        getPopularMovies()
        .then(({results}) => {
            setMovies(results);
        })
    }, [])

    return (
        <div className={styles.popularContainer}>
            <h2 className={styles.popularTitle}>Popular</h2>

            <div className={styles.popularList}>
                {movies.map((movie) => {
                    return (
                        <CardSmall
                            id={movie.id}
                            key={movie.id}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            imageUrl={movie.poster_path}
                        />
                    )
                })}
            </div>
        </div>
    )
}