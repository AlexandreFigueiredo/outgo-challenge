import Slider from 'react-slick'
import { CardLarge } from '../CardLarge'

import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function NowShowing() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2
    };

    return (
        <div className={styles.nowShowingContainer}>
            <h2 className={styles.nowShowingTitle}>Now Showing</h2>

            <Slider {...settings}>
                <CardLarge id={345} imageUrl='' title='Spiderman' rating='8.0' />
                <CardLarge id={342} imageUrl='' title='Spiderman' rating='8.0' />
                <CardLarge id={2} imageUrl='' title='Spiderman' rating='8.0' />
                <CardLarge id={678} imageUrl='' title='Spiderman' rating='8.0' />
            </Slider>
        </div>
    )
}