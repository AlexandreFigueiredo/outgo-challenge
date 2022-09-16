import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { MovieDetails } from "../../components/MovieDetails";
import { MovieHeader } from "../../components/MovieHeader";
import { PlayButton } from "../../components/PlayButton";

import {
  getDetailsByMovieId,
  IMG_URL,
  IMovieDetail,
} from "../../services/api";

import styles from "./styles.module.scss";

export function Movie() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { movieID } = useParams();
  const [movie, setMovie] = useState<IMovieDetail>({} as IMovieDetail);

  const backgroundMovieHeaderPath = {
    backgroundImage: `url(${IMG_URL}${movie.backdrop_path})`,
  };

  useEffect(() => {
    setIsLoading(true);
    getDetailsByMovieId(movieID).then((response) => {
      setMovie(response);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header
            className={styles.movieHeaderWrapper}
            style={backgroundMovieHeaderPath}
          >
            <MovieHeader />
            <PlayButton />
          </header>
          <MovieDetails
            id={movieID}
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
