import { useEffect, useState } from 'react'
import { IMovies } from '../../utils/IMovies'
import { CardSmall } from '../CardSmall'
import styles from './styles.module.scss'

export function Popular() {

    const [movies, setMovies] = useState<IMovies[]>([])
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=45d7491a8784c512d9adb5b759990897&language=en-US&page=1')
        .then(response=>response.json())
        .then(data => {
            setMovies(data.results);
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