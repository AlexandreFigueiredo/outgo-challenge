import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { MovieHeader } from "../../components/MovieHeader/MovieHeader";
import { PlayButton } from "../../components/PlayButton/PlayButton";
import { getDetailsByMovieId } from "../../services/api";
import { IMovieDetail } from "../../services/interfaces";
import styles from "./styles.module.scss";

const IMG_URL = import.meta.env.VITE_IMG_URL;

export function Movie() {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<IMovieDetail>({} as IMovieDetail);

  useEffect(() => {
    if (movieId) {
      setIsLoading(true);
      getDetailsByMovieId(movieId).then((response) => {
        setMovie(response);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header
            className={styles.movieHeaderWrapper}
            style={
              movie.backdrop_path
                ? { backgroundImage: `url(${IMG_URL}${movie.backdrop_path})` }
                : {}
            }
          >
            <MovieHeader />
            <PlayButton />
          </header>
          <MovieDetails
            movieId={movieId}
            title={movie.original_title}
            rating={movie.vote_average}
            description={movie.overview}
            duration={movie.runtime}
            language={movie.original_language}
            tags={movie.genres}
          />
        </>
      )}
    </>
  );
}
