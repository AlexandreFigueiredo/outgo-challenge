import { useEffect, useState } from "react";
import { CardSmall } from "../CardSmall";
import { Loader } from "../Loader";

import { getPopularMovies, IMovie } from "../../services/api";

import styles from "./styles.module.scss";

export function Popular() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies().then(({ results }) => {
      setMovies(results);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
