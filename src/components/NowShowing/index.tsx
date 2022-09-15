import { useEffect, useState } from 'react';
import { CardLarge } from '../CardLarge'
import { IMovies } from '../../utils/IMovies';
import Slider from 'react-slick'

import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function NowShowing() {

    const [movies, setMovies] = useState<IMovies[]>([])

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=45d7491a8784c512d9adb5b759990897&language=en-US&page=1')
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
        })
    }, [])

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
                    )
                })}
            </Slider>
        </div>
    )
}