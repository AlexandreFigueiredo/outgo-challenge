import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { MovieDetails } from "../../components/MovieDetails";
import { MovieHeader } from "../../components/MovieHeader";
import { PlayButton } from "../../components/PlayButton";

import { getDetailsByMovieId, IMG_URL, IMovieDetail } from "../../services/api";

import styles from "./styles.module.scss";

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
