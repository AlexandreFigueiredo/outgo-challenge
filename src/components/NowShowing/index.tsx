import { useEffect, useState } from "react";
import { CardLarge } from "../CardLarge";
import Slider from "react-slick";

import styles from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getNowPlayingMovies, IMovie } from "../../services/api";

export function NowShowing() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
  };

  useEffect(() => {
    getNowPlayingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
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
  );
}
