import { useParams } from 'react-router-dom'
import { MovieDetails } from '../../components/MovieDetails';
import { MovieHeader } from "../../components/MovieHeader";
import { PlayButton } from '../../components/PlayButton';
import styles from './styles.module.scss'

export function Movie() {
    const { movieID } = useParams();

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