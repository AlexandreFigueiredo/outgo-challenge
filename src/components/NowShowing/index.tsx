import { useEffect, useState } from "react";
import Slider from "react-slick";
import { CardLarge } from "../CardLarge";
import { Loader } from "../Loader";

import { getNowPlayingMovies, IMovie } from "../../services/api";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";

export function NowShowing() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
  };

  useEffect(() => {
    setIsLoading(true);
    getNowPlayingMovies().then(({ results }) => {
      setMovies(results);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.nowShowingContainer}>
          <h2 className={styles.nowShowingTitle}>Now Showing</h2>

          <Slider {...settings}>
            {movies.map((movie) => {
              return (
                <CardLarge
                  id={movie.id}
                  key={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                />
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}
