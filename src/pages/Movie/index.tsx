import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../../components/MovieDetails";
import { MovieHeader } from "../../components/MovieHeader";
import { PlayButton } from "../../components/PlayButton";
import {
  getDetailsByMovieId,
  getTrailerByMovieId,
  IMG_URL,
  IMovieDetail,
  ITrailer,
} from "../../services/api";
import styles from "./styles.module.scss";

export function Movie() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState<IMovieDetail>({} as IMovieDetail);
  const [trailer, setTrailer] = useState<ITrailer[]>([]);

  const backgroundMovieHeaderPath = {
    backgroundImage: `url(${IMG_URL}${movie.backdrop_path})`,
  };

  useEffect(() => {
    getDetailsByMovieId(movieID).then((response) => {
      setMovie(response);
    });

    // getTrailerByMovieId(movieID).then(({ results }) => {
    //   setTrailer(
    //     results.filter((result) => result.type === "Trailer").slice(0, 1)
    //   );
    // });
  }, []);

  return (
    <>
      <header
        className={styles.movieHeaderWrapper}
        style={backgroundMovieHeaderPath}
      >
        <MovieHeader />
        <PlayButton trailerUrl={""} />
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
  );
}
