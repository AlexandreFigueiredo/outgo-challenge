import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MovieDetails } from '../../components/MovieDetails';
import { MovieHeader } from "../../components/MovieHeader";
import { PlayButton } from '../../components/PlayButton';
import { getGenresAndRuntimeByMovieId } from '../../services/api';
import styles from './styles.module.scss'

export function Movie() {
    const { movieID } = useParams();

    useEffect(() => {
        getGenresAndRuntimeByMovieId(movieID)
        .then(({genres, runtime}) => {

        })
    }, [])

    return (
        <>
            <header className={styles.movieHeaderWrapper}>
                <MovieHeader />
                <PlayButton trailerUrl={movieID} />
            </header>
            <MovieDetails />
        </>
    )
}